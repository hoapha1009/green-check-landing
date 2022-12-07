import { RiArrowLeftSLine, RiArrowRightSLine, RiMoreFill } from "react-icons/ri";
import { parseNumber } from "../../../../lib/helpers/parser";
import { Pagination } from "../../../../lib/repo/crud.repo";
import { Select } from "../form/select";
import { PaginationComponent } from "../pagination/pagination-component";
import { useDataTable } from "./data-table";

interface PropsType extends ReactProps {
  limitOptions?: number[];
  visiblePageCount?: number;
  pagination?: Pagination;
  setPagination?: (pagination: Pagination) => any;
  hideLimit?: boolean;
  hideTotal?: boolean;
  itemName?: string;
}
export function TablePagination({
  limitOptions = [10, 25, 50, 100],
  hideLimit = false,
  hideTotal = false,
  ...props
}: PropsType) {
  const { itemName, pagination, setPagination } = props.pagination ? props : useDataTable();
  const options = props.pagination
    ? []
    : (limitOptions.includes(pagination.limit)
        ? limitOptions
        : limitOptions.concat(pagination.limit).sort((a, b) => (a < b ? -1 : 1))
      ).map((limit) => ({ value: limit, label: `${limit} dòng` }));

  const defaultButtonClass =
    `border-gray-200 bg-white text-gray-700 disabled:opacity-40 disabled:pointer-events-none ` +
    `hover:text-primary hover:border-primary hover:bg-gray-200 font-semibold rounded ` +
    `px-0.5 mx-0.5 min-w-9 h-9`;

  return (
    <div className="flex justify-between pt-2">
      <div className="flex items-center">
        {props.pagination ? (
          <>
            {/* {!!pagination.total && (
              <span className="pl-2 text-sm text-gray-600 whitespace-nowrap">Hiển thị {pagination.limit}</span>
            )} */}
          </>
        ) : (
          <>
            {!hideLimit && (
              <Select
                className="text-sm border-gray-300 h-9 hover:border-gray-400"
                native
                value={pagination.limit}
                onChange={(limit) =>
                  setPagination({ ...pagination, page: 1, limit: parseInt(limit) })
                }
                options={options}
              />
            )}
          </>
        )}
        {!!pagination.total && (
          <span className="pl-2 text-sm text-gray-600 whitespace-nowrap">
            {props.pagination || hideLimit ? "" : "/ "}
            {!hideTotal && (
              <>
                {parseNumber(pagination.total)} {props.itemName || itemName}
              </>
            )}
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
