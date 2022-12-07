import { CrudRepository } from "./crud.repo";

export interface Nation {
  ma_qg: string;
  ten_qg: string;
  ten_qg2: string;
}

export class NationRepository extends CrudRepository<Nation> {
  apiName: string = "NationFromTentamus";
  displayName: string = "Thị trường";
  shortFragment: string = this.parseFragment(`
    ma_qg: String
    ten_qg: String
    ten_qg2: String
  `);
  fullFragment: string = this.parseFragment(`
    ma_qg: String
    ten_qg: String
    ten_qg2: String
  `);
}

export const NationService = new NationRepository();
