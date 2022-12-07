import { BaseModel, CrudRepository } from "./crud.repo";
export interface FuelUnit extends BaseModel {
  name: string;
  shortName: string;
}
export class FuelUnitRepository extends CrudRepository<FuelUnit> {
  apiName: string = "FuelUnit";
  displayName: string = "Đơn vị nguyên/nhiên liệu ";
  shortFragment: string = this.parseFragment(`

        id:String
        updatedAt:String
        createdAt:String
        name:String
        shortName:String
       
    `);
  fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        shortName:String
      
    `);
}
export const FuelUnitService = new FuelUnitRepository();
