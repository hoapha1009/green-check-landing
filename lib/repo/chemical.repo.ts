import { CrudRepository } from "./crud.repo";

export interface Chemical {
  id: string;
  ma_thuoc: string;
  ma_cas: string;
  ten_thuoc: string;
  ten_thuoc2: string;
  ghi_chu: string;
}
export class ChemicalRepository extends CrudRepository<Chemical> {
  apiName: string = "ChemicalFromTentamus";
  displayName: string = "Hóa chất";
  shortFragment: string = this.parseFragment(`
    ma_thuoc: String;
    ten_thuoc: String;
  `);
  fullFragment: string = this.parseFragment(`
    id: String;
    ma_thuoc: String;
    ma_cas: String;
    ten_thuoc: String;
    ten_thuoc2: String;
    ghi_chu: String;
  `);
}

export const ChemicalService = new ChemicalRepository();
