import { BaseModel, CrudRepository } from "./crud.repo";

export interface Unit extends BaseModel {
    name: string;
    shortName: string;
}
export class UnitRepository extends CrudRepository<Unit> {
    apiName: string = "Unit";
    displayName: string = "Đơn vị";
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
export const UnitService = new UnitRepository();
