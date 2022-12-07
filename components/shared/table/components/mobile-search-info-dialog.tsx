import { RiCloseLine } from "react-icons/ri";
import { Dialog, DialogProps } from "../../utilities/dialog/dialog";
import { Button } from "../../utilities/form";

interface MobileSearchInfoDialogProps extends DialogProps {
  nationFilter: string;
  productFilter: string;
  chemicalFilter: string;
}

export function MobileSearchInfoDialog({
  nationFilter,
  productFilter,
  chemicalFilter,
  ...props
}: MobileSearchInfoDialogProps) {
  return (
    <Dialog width={500} slideFromBottom="none" extraBodyClass="text-sm !p-0" {...props}>
      <Dialog.Header>
        <div className="flex items-center justify-between w-full py-0.5">
          <div className="font-bold">Thông tin đang tra cứu</div>
          <Button
            hoverDanger
            icon={<RiCloseLine />}
            iconClassName="text-2xl text-gray-400"
            className="pr-0"
            onClick={props.onClose}
          />
        </div>
      </Dialog.Header>
      <Dialog.Body>
        <div className="px-5 py-2.5 border-t first:border-none">
          <p className="font-semibold">Thị trường</p>
          <p className="">{nationFilter || "Tất cả"}</p>
        </div>

        <div className="px-5 py-2.5 border-t first:border-none">
          <p className="font-semibold">Sản phẩm</p>
          <p className="">{productFilter || "Tất cả"}</p>
        </div>

        <div className="px-5 py-2.5 border-t first:border-none">
          <p className="font-semibold">Hoạt chất</p>
          <p className="">{chemicalFilter || "Tất cả"}</p>
        </div>
      </Dialog.Body>
    </Dialog>
  );
}
