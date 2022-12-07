import { useEffect, useState } from "react";
import { useToast } from "../../../../lib/providers/toast-provider";
import { NationService } from "../../../../lib/repo/nation.repo";

export function useGetNationOptionList() {
  const toast = useToast();
  const [nationOptionList, setNationOptionList] = useState<Option[]>();

  useEffect(() => {
    getNationOptionList();
  }, []);

  const getNationOptionList = async () => {
    try {
      const { data } = await NationService.getAll();
      const options = data.map((nation) => ({
        value: nation.ma_qg,
        label: nation.ten_qg2,
      }));
      setNationOptionList(options);
    } catch (error) {
      console.debug(error.message);
      toast.error("Lấy danh sách thị trường thất bại!");
    }
  };

  return nationOptionList;
}
