import { formatDate } from "../../../../lib/helpers/parser";
import { useScreen } from "../../../../lib/hooks/useScreen";
import { Img, Spinner } from "../../utilities/misc";
import { Column } from "../custom-table";
import { useCustomTableContext } from "../providers/custom-table-provider";

interface BodyCustomTableProps extends ReactProps {
  columns: Column[];
}

export function BodyCustomTable({ columns, ...props }: BodyCustomTableProps) {
  const thClassName = "p-3 whitespace-nowrap";
  const tdClassName = "p-3 border-y";
  const screenLg = useScreen("lg");
  const { items, loading, pagination } = useCustomTableContext();

  return (
    <div className="relative mt-2">
      {(!items || loading) && (
        <Spinner className="absolute h-full pointer-events-none flex-center" />
      )}
      {items?.length === 0 && (
        <div className="absolute w-full h-full transform translate-y-8 pointer-events-none flex-center">
          <Img
            src={"/assets/imgs/empty.png"}
            alt="empty-data"
            className="w-96 lg:min-w-lg"
            ratio169
            contain
          />
        </div>
      )}
      <div
        className="overflow-auto bg-white border-gray-300 lg:border no-scrollbar-mobile"
        style={{ height: screenLg ? "calc(100vh - 280px)" : "calc(100vh - 200px)" }}
      >
        <table className="w-full border-collapse table-fixed">
          <thead className="sticky left-0 font-semibold bg-white -top-0.5">
            <tr className="shadow">
              <th scope="col" className={`w-14 ${thClassName}`}>
                STT
              </th>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`${thClassName} ${
                    column.type === "number" ? "text-right" : "text-left"
                  }`}
                  style={{ width: column.width ? column.width + "px" : "auto" }}
                >
                  {column.title}
                </th>
              ))}
            </tr>
            {/* <tr className={`bg-gray-200 -mt-1 ${thClassName}`}>
              <th scope="col" className={thClassName}></th>
              {columns.map((column, index) => (
                <th
                  scope="col"
                  key={index}
                  className={thClassName}
                  style={{ width: column.width ? column.width + "px" : "auto" }}
                >
                  <Input
                    prefix={<RiFilter2Line />}
                    prefixClassName="text-xl"
                    className="font-normal"
                  />
                </th>
              ))}
            </tr> */}
          </thead>
          <tbody className="text-sm ">
            {loading || !items?.length ? (
              <tr
                className=""
                style={{ height: screenLg ? "calc(100vh - 412px)" : "calc(100vh - 342px)" }}
              >
                <td colSpan={100} className=""></td>
              </tr>
            ) : (
              <>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className={`text-center ${tdClassName}`}>
                      {(pagination.page - 1) * pagination.limit + index + 1}
                    </td>
                    {columns.map((column, index) => (
                      <td
                        key={index}
                        className={`${tdClassName} ${
                          typeof item[column.value] === "number" ? "text-right" : "text-left"
                        }`}
                        style={{ width: column.width ? column.width + "px" : "auto" }}
                      >
                        {column?.type === "date"
                          ? formatDate(item[column.value], "dd/MM/yyyy")
                          : item[column.value]}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
