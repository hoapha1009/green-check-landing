import { CrudRepository } from "./crud.repo";

export interface Product {
  ma_vt: string;
  ten_vt: string;
  ten_vt2: string;
  id_dvt: number;
  dvt: string;
  dvt2: string;
}
export class ProductRepository extends CrudRepository<Product> {
  apiName: string = "ProductFromTentamus";
  displayName: string = "Sản phẩm";
  shortFragment: string = this.parseFragment(`
    ma_vt: String;
    ten_vt: String;
  `);
  fullFragment: string = this.parseFragment(`
    ma_vt: String;
    ten_vt: String;
    ten_vt2: String;
    id_dvt: Int;
    dvt: String;
    dvt2: String;
  `);
}

export const ProductService = new ProductRepository();
