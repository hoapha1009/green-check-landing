import { useEffect, useState } from "react";
import { useToast } from "../../../../lib/providers/toast-provider";
import { ProductService } from "../../../../lib/repo/product.repo";

export function useGetProductOptionList() {
  const toast = useToast();
  const [productOptionList, setProductOptionList] = useState<Option[]>();

  useEffect(() => {
    getProductOptionList();
  }, []);

  const getProductOptionList = async () => {
    try {
      const { data } = await ProductService.getAll();
      const options = data.map((product) => ({
        value: product.ma_vt,
        label: product.ten_vt,
      }));
      setProductOptionList(options);
    } catch (error) {
      console.debug(error.message);
      toast.error("Lấy danh sách sản phẩm thất bại!");
    }
  };

  return productOptionList;
}
