import { useScreen } from "../../../lib/hooks/useScreen";
import { CustomTable } from "../../shared/table/custom-table";

interface MRLPageProps extends ReactProps {}

export function MRLPage({ ...props }: MRLPageProps) {
  const COLUMNS = [
    { title: "Thuốc BVTV/Kh.sinh", value: "ten_thuoc2", width: 460, type: "string" },
    { title: "MRL hiện hành", value: "mrl", width: 180, type: "number" },
    { title: "Đơn vị tính", value: "dvt_mrl", width: 180, type: "string" },
    { title: "Tên VB quy định", value: "van_ban", width: 460, type: "string" },
    { title: "Mã CAS", value: "ma_cas", width: 180, type: "string" },
    { title: "Mã thuốc BVTV", value: "ma_thuoc", width: 180, type: "string" },
    { title: "Tên quốc gia", value: "ten_qg2", width: 180, type: "string" },
    { title: "Ngày hiệu lực từ", value: "ngay_hl", width: 180, type: "date" },
    { title: "Danh sách tên gọi khác", value: "ten_cas", width: 460, type: "string" },
    { title: "Danh sách lab", value: "ds_lab", width: 460, type: "string" },
    { title: "MRL dự kiến", value: "mrl_next", width: 460, type: "string" },
  ];
  const screenLg = useScreen("lg");

  return (
    <div className="">
      <CustomTable
        title="Tra cứu MRL"
        filters={["market", "products", "ingredient"]}
        columns={COLUMNS}
        visiblePageCount={screenLg ? 5 : 3}
      />
    </div>
  );
}
