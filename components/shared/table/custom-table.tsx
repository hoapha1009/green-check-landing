import { SearchMrlService } from "../../../lib/repo/search-mrl.repo";
import { BodyCustomTable } from "./components/body-custom-table";
import { FooterCustomTable } from "./components/footer-custom-table";
import { HeaderCustomTable } from "./components/header-custom-table";
import { CustomTableProvider } from "./providers/custom-table-provider";

export interface Column {
  value: string;
  title: string;
  width?: string | number;
  className?: string;
  type?: string;
}

export interface CustomTableProps extends ReactProps {
  title?: string;
  filters?: string[];
  columns: Column[];
  visiblePageCount?: number;
}

export function CustomTable({
  title,
  filters,
  columns,
  visiblePageCount,
  ...props
}: CustomTableProps) {
  return (
    <CustomTableProvider crudService={SearchMrlService}>
      <HeaderCustomTable label={title} filtersCustom={filters} />
      <BodyCustomTable columns={columns} />
      <FooterCustomTable itemName="kết quả" visiblePageCount={visiblePageCount} />
    </CustomTableProvider>
  );
}
