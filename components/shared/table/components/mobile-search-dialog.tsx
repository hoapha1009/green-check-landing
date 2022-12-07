import { useState } from "react";
import { ChemicalService } from "../../../../lib/repo/chemical.repo";
import { Button, Field, Form, FormProps, Select } from "../../utilities/form";
import { useCustomTableContext } from "../providers/custom-table-provider";

interface MobileSearchDialogProps extends FormProps {}

export function MobileSearchDialog({ ...props }: MobileSearchDialogProps) {
  const { filters, setFilters, nationOptionList, productOptionList, setChemicalFilters } =
    useCustomTableContext();
  const [selectedChemicalFilter, setSelectedChemicalFilter] = useState<Option[]>();

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
    <Form
      dialog
      width={500}
      onSubmit={handleSubmit}
      defaultValues={
        filters?.ma_qg || filters?.ma_vt || filters?.ma_thuoc
          ? {
              ma_qg: filters?.ma_qg,
              ma_vt: filters?.ma_vt,
              ma_thuoc: filters?.ma_thuoc?.split(","),
            }
          : {}
      }
      {...props}
    >
      <Field name="ma_qg" label="Thị trường">
        <Select
          placeholder="Tất cả thị trường"
          searchable={false}
          debounceTime={500}
          options={nationOptionList}
        />
      </Field>
      <Field name="ma_vt" label="Sản phẩm">
        <Select
          placeholder="Tất cả sản phẩm"
          searchable={false}
          debounceTime={500}
          options={productOptionList}
        />
      </Field>
      <Field name="ma_thuoc" label="Hoạt chất">
        <Select
          multi
          clearable
          placeholder="Tất cả hoạt chất"
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
            props.onClose();
          }}
        />
        <Button
          submit
          text="Tra cứu"
          primary
          onClick={() => {
            props.onClose();
          }}
        />
      </div>
    </Form>
  );
}
