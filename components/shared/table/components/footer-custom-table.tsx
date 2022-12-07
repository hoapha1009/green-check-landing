import { RiArrowLeftSLine, RiArrowRightSLine, RiMoreFill } from "react-icons/ri";
import { parseNumber } from "../../../../lib/helpers/parser";
import { useScreen } from "../../../../lib/hooks/useScreen";
import { Select } from "../../utilities/form";
import { PaginationComponent } from "../../utilities/pagination/pagination-component";
import { useCustomTableContext } from "../providers/custom-table-provider";

interface FooterCustomTableProps extends ReactProps {
  itemName: string;
  visiblePageCount?: number;
}

export function FooterCustomTable({ itemName, ...props }: FooterCustomTableProps) {
  const limitOptions = [
    { value: 15, label: "15 dòng" },
    { value: 30, label: "30 dòng" },
    { value: 50, label: "50 dòng" },
    { value: 100, label: "100 dòng" },
  ];
  const defaultButtonClass =
    `border-gray-200 bg-white text-gray-700 disabled:opacity-40 disabled:pointer-events-none ` +
    `hover:text-primary hover:border-primary hover:bg-gray-200 font-semibold rounded ` +
    `px-0.5 mx-0.5 min-w-9 h-9`;
  const screenLg = useScreen("lg");
  const { searchButtonClickCount, pagination, setPagination } = useCustomTableContext();

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 lg:px-0">
      <div className="flex items-center">
        <Select
          className="text-sm border-gray-300 h-9 hover:border-gray-400"
          native
          value={pagination.limit}
          onChange={(limit) => {
            setPagination({ ...pagination, page: 1, limit: parseInt(limit) });
          }}
          options={limitOptions}
        />

        {screenLg && (
          <span className="pl-2 text-sm text-gray-600 whitespace-nowrap">
            {`/${parseNumber(pagination.total)} ${itemName}`}
          </span>
        )}
      </div>

      <PaginationComponent
        limit={pagination.limit}
        total={pagination.total}
        page={pagination.page}
        onPageChange={(page) => setPagination({ ...pagination, page })}
        hasFirstLast={false}
        hasDots={true}
        visiblePageCount={props.visiblePageCount || 8}
        prevButtonClass={`${defaultButtonClass}`}
        nextButtonClass={`${defaultButtonClass}`}
        firstButtonClass={`${defaultButtonClass}`}
        lastButtonClass={`${defaultButtonClass}`}
        pageButtonClass={`${defaultButtonClass}`}
        dotsButtonClass={`${defaultButtonClass}`}
        pageActiveButtonClass={`${defaultButtonClass
          .replace("text-gray-700", "text-white")
          .replace("hover:text-primary", "hover:text-white")
          .replace("hover:bg-gray-200", "")} bg-primary border-primary`}
        prevButtonContent={
          <i className="text-md sm:text-xl">
            <RiArrowLeftSLine />
          </i>
        }
        nextButtonContent={
          <i className="text-md sm:text-xl">
            <RiArrowRightSLine />
          </i>
        }
        dotsButtonContent={
          <i className="text-md sm:text-lg">
            <RiMoreFill />
          </i>
        }
      />
    </div>
  );
}
