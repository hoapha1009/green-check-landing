import { useRef, useState } from "react";
import { RiMoreFill, RiRefreshLine } from "react-icons/ri";
import { Button, ButtonProps } from "../form/button";
import { Dropdown } from "../popover/dropdown";
import { useDataTable } from "./data-table";

interface PropsType extends ReactProps { }

export function TableHeader({ ...props }: PropsType) {
  return <div className="flex items-center justify-between">{props.children}</div>;
}

const Title = ({ subtitle, children }: ReactProps & { subtitle?: string }) => {
  const { title } = useDataTable();
  return (
    <div>
      <h6 className="text-base font-semibold uppercase text-primary">{children || title}</h6>
      {subtitle && <p className="text-sm leading-tight text-gray-500">{subtitle}</p>}
    </div>
  );
};
TableHeader.Title = Title;

interface HeaderButtonProps extends ButtonProps {
  isCreateButton?: boolean;
  isDeleteButton?: boolean;
  isRefreshButton?: boolean;
  refreshAfterTask?: boolean;
  moreItems?: ((ButtonProps & { refreshAfterTask?: boolean }) | "divider")[];
  onFileClick?: (files: FileList) => any;
}
const HeaderButton = ({
  isCreateButton,
  isDeleteButton,
  isRefreshButton,
  refreshAfterTask,
  moreItems,
  className = "",
  iconClassName = "",
  ...props
}: HeaderButtonProps) => {
  const { refreshing, itemName, onRefresh, onCreateItem, createItemHref, loadAll } = useDataTable();
  const ref = useRef();
  const fileRef = useRef<HTMLInputElement>();
  const [uploading, setUploading] = useState(false);

  let icon = props.icon;
  if (!icon) {
    if (moreItems) {
      icon = <RiMoreFill />;
    } else if (isRefreshButton) {
      icon = <RiRefreshLine />;
    }
  }

  return (
    <>
      {props.onFileClick && (
        <input
          hidden
          type="file"
          ref={fileRef}
          onChange={async (e) => {
            try {
              setUploading(true);
              await props.onFileClick(e.target.files);
              loadAll();
            } catch (err) {
            } finally {
              setUploading(false);
              e.target.value = null;
            }
          }}
        />
      )}
      <Button
        {...props}
        className={`${props.text || isCreateButton ? "px-5" : "px-3"} ${className}`}
        innerRef={props.innerRef || ref}
        icon={icon}
        iconClassName={`text-xl ${isRefreshButton && refreshing ? "animate-spin" : ""}`}
        href={props.href || (isCreateButton && createItemHref ? createItemHref() : undefined)}
        disabled={props.disabled || (isRefreshButton && refreshing)}
        text={props.text == undefined ? (isCreateButton ? `Tạo ${itemName}` : "") : props.text}
        isLoading={uploading}
        onClick={async (e) => {
          try {
            if (props.onFileClick) {
              fileRef.current?.click();
              return;
            }
            if (props.onClick) await props.onClick(e);
            if (isRefreshButton) onRefresh();
            if (isCreateButton) onCreateItem();
            if (refreshAfterTask) await loadAll(true);
          } catch (err) { }
        }}
      />
      {moreItems && (
        <Dropdown reference={props.innerRef || ref}>
          {moreItems.map((item, index) =>
            item == "divider" ? (
              <Dropdown.Divider key={index} />
            ) : (
              <Dropdown.Item
                key={index}
                {...item}
                onClick={async (e) => {
                  try {
                    if (item.onClick) await item.onClick(e);
                    if (item.refreshAfterTask) await loadAll(true);
                  } catch (err) { }
                }}
              />
            )
          )}
        </Dropdown>
      )}
    </>
  );
};
TableHeader.Button = HeaderButton;

const HeaderButtons = ({ children }: ReactProps) => <div className="flex gap-x-2">{children}</div>;
TableHeader.Buttons = HeaderButtons;
