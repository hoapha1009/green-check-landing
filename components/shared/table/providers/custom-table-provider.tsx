import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "../../../../lib/providers/toast-provider";
import { BaseModel, CrudRepository, Pagination } from "../../../../lib/repo/crud.repo";
import { useGetNationOptionList } from "../custom-hooks/useGetNationOptionList";
import { useGetProductOptionList } from "../custom-hooks/useGetProductOptionList";

export interface Filter {
  ma_qg: string;
  ma_vt: string;
  ma_thuoc: string;
}
interface CustomTableContextProps<T extends BaseModel> extends ReactProps {
  items: T[];
  pagination: Pagination;
  setPagination: (pagination: Pagination) => any;
  loading: boolean;
  setFilters: (filters: Filter) => any;
  filters: Filter;
  loadAll: (refresh: boolean) => void;
  searchButtonClickCount: number;
  setSearchButtonClickCount: Function;
  handleIncreaseSearchButtonClickCount: Function;
  chemicalFilters: Option[];
  setChemicalFilters: Function;
  nationOptionList: Option[];
  productOptionList: Option[];
}

export const CustomTableContext = createContext<Partial<CustomTableContextProps<BaseModel>>>({});

interface CustomTableProviderProps<T extends BaseModel> extends ReactProps {
  crudService: CrudRepository<Partial<T>>;
}

export function CustomTableProvider<T extends BaseModel>({
  crudService,
  ...props
}: CustomTableProviderProps<T>) {
  const toast = useToast();
  const [items, setItems] = useState<Partial<T>[]>();
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    page: 1,
    limit: 15,
  });
  const nationOptionList = useGetNationOptionList();
  const productOptionList = useGetProductOptionList();
  const [filters, setFilters] = useState<Filter>();
  const [loading, setLoading] = useState(false);
  const [searchButtonClickCount, setSearchButtonClickCount] = useState(0);
  const [chemicalFilters, setChemicalFilters] = useState();

  // lấy giá trị mặc định filter từ thị trường và sản phẩm
  useEffect(() => {
    if (!nationOptionList || !productOptionList) return;

    setFilters({
      ...filters,
      ma_qg: nationOptionList[0]?.value || "",
      ma_vt: productOptionList[0]?.value || "",
    });
  }, [nationOptionList, productOptionList]);

  useEffect(() => {
    loadAll();
  }, [pagination.page, pagination.limit, filters, searchButtonClickCount]);

  const handleIncreaseSearchButtonClickCount = () => {
    setSearchButtonClickCount((x: number) => x + 1);
  };

  const loadAll = async (refresh = false) => {
    try {
      setLoading(true);
      if (refresh) {
        await crudService.clearStore();
      }
      const { data, pagination: paginationDefault } = await crudService.getAll({
        query: {
          limit: pagination.limit,
          page: pagination.page,
          filter: !!filters ? filters : {},
        },
      });
      setItems(data);
      setPagination({ ...pagination, ...paginationDefault });
    } catch (error) {
      console.debug(error);
      toast.error("Lấy danh sách tra cứu MRL thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomTableContext.Provider
      value={{
        items,
        pagination,
        setPagination,
        loading,
        setFilters,
        filters,
        loadAll,
        searchButtonClickCount,
        setSearchButtonClickCount,
        handleIncreaseSearchButtonClickCount,
        chemicalFilters,
        setChemicalFilters,
        productOptionList,
        nationOptionList,
      }}
    >
      {props.children}
    </CustomTableContext.Provider>
  );
}

export const useCustomTableContext = () => useContext(CustomTableContext);
