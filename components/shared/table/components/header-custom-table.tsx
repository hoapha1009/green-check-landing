import { useMemo, useRef, useState } from "react";
import { RiInformationLine, RiRefreshLine } from "react-icons/ri";
import { useScreen } from "../../../../lib/hooks/useScreen";
import { ChemicalService } from "../../../../lib/repo/chemical.repo";
import { Button, Field, Form, Select } from "../../utilities/form";
import { Popover } from "../../utilities/popover/popover";
import { useCustomTableContext } from "../providers/custom-table-provider";
import { MobileSearchDialog } from "./mobile-search-dialog";
import { MobileSearchInfoDialog } from "./mobile-search-info-dialog";

interface HeaderCustomTableProps extends ReactProps {
  label?: string;
  filtersCustom?: string[];
}

export function HeaderCustomTable({ label, filtersCustom, ...props }: HeaderCustomTableProps) {
  const screenLg = useScreen("lg");
  const searchRef = useRef(null);
  const nationRef = useRef(null);
  const productRef = useRef(null);
  const chemicalRef = useRef(null);
  const {
    filters,
    setFilters,
    loading,
    loadAll,
    chemicalFilters,
    setChemicalFilters,
    nationOptionList,
    productOptionList,
  } = useCustomTableContext();
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const [showSearchInfoDialog, setShowSearchInfoDialog] = useState(false);
  const [selectedChemicalFilter, setSelectedChemicalFilter] = useState<Option[]>();

  // lấy giá trị hiển thị các bộ lọc trên header bảng
  const getDisplayFilterName = (key: string, optionList: Option[]) => {
    const option = optionList.find((opt) => opt.value === filters[key]);

    return option.label;
  };

  const getDisplayChemicalFilterName = (filter: Option[]) => {
    if (!filter?.length) return "Tất cả";

    const rs = filter.map((opt) => opt.label).join(", ");
    return rs;
  };

  const nationFilter = useMemo(() => {
    if (!filters?.ma_qg) return "Tất cả";

    return getDisplayFilterName("ma_qg", nationOptionList);
  }, [filters?.ma_qg, nationOptionList]);

  const productFilter = useMemo(() => {
    if (!filters?.ma_vt) return "Tất cả";

    return getDisplayFilterName("ma_vt", productOptionList);
  }, [filters?.ma_vt, productOptionList]);

  const chemicalFilter = useMemo(() => {
    return getDisplayChemicalFilterName(chemicalFilters);
  }, [filters?.ma_thuoc, chemicalFilters]);

  const handleSubmit = (data) => {
    const filter: any = {};
    for (const [key, value] of Object.entries(data)) {
      // kiểm tra có phải dữ liệu dạng mảng thì gộp vào, ko thì gán bình thường
      if (Array.isArray(value)) {
        filter[key] = data[key].join(",");
      } else {
        filter[key] = data[key];
      }
    }

    setFilters(filter);
    setChemicalFilters(selectedChemicalFilter);
  };

  return (
    <div className="flex items-center justify-between px-4 lg:px-0">
      <div className="w-1/3 text-lg font-bold lg:w-1/4 lg:text-xl grow-0 shrink-0">{label}</div>
      <div className="flex items-center justify-end flex-1 gap-2">
        {screenLg ? (
          <div className="flex overflow-hidden bg-gray-200 rounded">
            <div className="py-0.5 px-2.5 w-44 grow-0 shrink-0 overflow-hidden">
              <div className="font-semibold">Thị trường</div>
              <div className="text-sm cursor-pointer text-ellipsis-1" ref={nationRef}>
                {nationFilter || "Tất cả"}
              </div>
              <Popover
                reference={nationRef}
                arrow
                className="text-white"
                theme="material"
                placement="bottom"
                maxWidth={456}
              >
                <div className="">{nationFilter || "Tất cả"}</div>
              </Popover>
            </div>

            <div className="py-0.5 px-2.5 w-44 grow-0 shrink-0 border-x-2 border-gray-300 overflow-hidden">
              <div className="font-semibold">Sản phẩm</div>
              <div className="text-sm cursor-pointer text-ellipsis-1" ref={productRef}>
                {productFilter || "Tất cả"}
              </div>
              <Popover
                reference={productRef}
                arrow
                className="text-white"
                theme="material"
                placement="bottom"
                maxWidth={456}
              >
                <div className="">{productFilter || "Tất cả"}</div>
              </Popover>
            </div>

            <div className="py-0.5 px-2.5 w-44 grow-0 shrink-0 overflow-hidden">
              <div className="font-semibold">Hoạt chất</div>
              <div className="text-sm cursor-pointer text-ellipsis-1" ref={chemicalRef}>
                {chemicalFilter || "Tất cả"}
              </div>
              <Popover
                reference={chemicalRef}
                arrow
                className="text-white"
                theme="material"
                placement="bottom"
                maxWidth={456}
              >
                <div className="">{chemicalFilter || "Tất cả"}</div>
              </Popover>
            </div>
          </div>
        ) : (
          <Button
            icon={<RiInformationLine />}
            iconClassName={`text-2xl`}
            outline
            className="!px-2 lg:!px-3 h-10 lg:h-12"
            onClick={() => setShowSearchInfoDialog(true)}
          />
        )}
        <Button
          icon={<RiRefreshLine />}
          iconClassName={`text-2xl ${loading && "animate-spin"}`}
          outline
          className="!px-2 lg:!px-3 h-10 lg:h-12"
          onClick={() => {
            if (loading) return;

            loadAll(true);
          }}
        />

        {screenLg ? (
          <div className="" ref={searchRef}>
            <Button
              text="Tra cứu"
              primary
              onClick={() => setShowSearchDialog((x) => !x)}
              className={`h-12`}
            />
          </div>
        ) : (
          <Button
            text="Tra cứu"
            primary
            onClick={() => setShowSearchDialog(true)}
            className={"h-10"}
          />
        )}
      </div>

      {screenLg && (
        <Popover
          className="overflow-auto bg-transparent w-[550px]"
          reference={searchRef}
          placement="bottom"
          visible={showSearchDialog}
        >
          <Form
            className="flex flex-col justify-between p-5 min-h-xs"
            onSubmit={handleSubmit}
            defaultValues={
              filters?.ma_qg || filters?.ma_vt || filters?.ma_thuoc
                ? {
                    ma_qg: filters?.ma_qg?.split(","),
                    ma_vt: filters?.ma_vt?.split(","),
                    ma_thuoc: filters?.ma_thuoc?.split(","),
                  }
                : {}
            }
          >
            <Field name="ma_qg" label="Thị trường">
              <Select
                menuPosition="absolute"
                placeholder="Tất cả thị trường"
                maxMenuHeight={250}
                debounceTime={500}
                options={nationOptionList}
              />
            </Field>
            <Field name="ma_vt" label="Sản phẩm">
              <Select
                menuPosition="absolute"
                placeholder="Tất cả sản phẩm"
                maxMenuHeight={160}
                debounceTime={500}
                options={productOptionList}
              />
            </Field>
            <Field name="ma_thuoc" label="Hoạt chất">
              <Select
                multi
                clearable
                menuPosition="absolute"
                placeholder="Tất cả hoạt chất"
                menuPlacement="top"
                maxMenuHeight={220}
                debounceTime={500}
                autocompletePromise={({ id, search }) =>
                  ChemicalService.getAllAutocompletePromise(
                    { id, search },
                    {
                      fragment: "ma_thuoc, ten_thuoc",
                      parseOption: (data) => ({
                        value: data.ma_thuoc,
                        label: data.ten_thuoc.toString(),
                      }),
                      keyName: "ma_thuoc",
                      query: {
                        limit: 50,
                        filter: {
                          ma_qg: filters?.ma_qg || "",
                          ma_vt: filters?.ma_vt || "",
                        },
                      },
                    }
                  )
                }
                onChange={(val, data) => {
                  setSelectedChemicalFilter(data);
                }}
              />
            </Field>
            <div className="flex justify-end w-full gap-2">
              <Button
                hoverDanger
                text="Đóng"
                outline
                reset
                onClick={() => {
                  setShowSearchDialog(false);
                }}
              />
              <Button
                submit
                text="Tra cứu"
                primary
                onClick={() => {
                  setShowSearchDialog(false);
                }}
              />
            </div>
          </Form>
        </Popover>
      )}

      {!screenLg && (
        <MobileSearchDialog isOpen={showSearchDialog} onClose={() => setShowSearchDialog(false)} />
      )}

      <MobileSearchInfoDialog
        nationFilter={nationFilter}
        productFilter={productFilter}
        chemicalFilter={chemicalFilter}
        isOpen={showSearchInfoDialog}
        onClose={() => setShowSearchInfoDialog(false)}
      />
    </div>
  );
}
