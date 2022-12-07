import { BaseModel, CrudRepository } from "./crud.repo";

export interface SearchMRL extends BaseModel {
  mrl: number;
  dvt_mrl: string;
  van_ban: string;
  ma_vt: string;
  ma_qg: string;
  ngay_hl: string;
  id_cas: number;
  ten_qg2: string;
  ten_vt2: string;
  ma_thuoc: string;
  ma_cas: string;
  ten_thuoc2: string;
  ten_cas: string;
  ds_lab: string;
  mrl_next: string;
}
export class SearchMRLRepository extends CrudRepository<SearchMRL> {
  apiName: string = "SearchMRL";
  displayName: string = "Tra cứu MRL";
  shortFragment: string = this.parseFragment(`
    mrl: Float;
    dvt_mrl: String;
    van_ban: String;
    ma_vt: String;
    ma_qg: String;
    ngay_hl: String;
    id_cas: Int;
    ten_qg2: String;
    ten_vt2: String;
    ma_thuoc: String;
    ma_cas: String;
    ten_thuoc2: String;
    ten_cas: String;
    ds_lab: String;
    mrl_next: String;
  `);
  fullFragment: string = this.parseFragment(`
    mrl: Float;
    dvt_mrl: String;
    van_ban: String;
    ma_vt: String;
    ma_qg: String;
    ngay_hl: String;
    id_cas: Int;
    ten_qg2: String;
    ten_vt2: String;
    ma_thuoc: String;
    ma_cas: String;
    ten_thuoc2: String;
    ten_cas: String;
    ds_lab: String;
    mrl_next: String;
  `);
}

export const SearchMrlService = new SearchMRLRepository();
