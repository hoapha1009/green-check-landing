import { BaseModel, CrudRepository } from "./crud.repo";

export interface SuppliesType extends BaseModel {
    name: string;
}
export class SuppliesTypeRepository extends CrudRepository<SuppliesType>{
    apiName: string = "SuppliesType";
    displayName: string = "Loại vật tư";
    shortFragment: string = this.parseFragment(`

        id:String
        updatedAt:String
        createdAt:String
        name:String
       
    `);
    fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
      
    `);
}
export const SuppliesTypeService = new SuppliesTypeRepository();