import { BaseModel, CrudRepository } from "./crud.repo";
import { FuelUnit } from "./fuel-unit.repo";

export interface Fuel extends BaseModel {
    name: string;
    unitId: string;
    description: string;
    unit: FuelUnit;
}
export class FuelRepository extends CrudRepository<Fuel> {
    apiName: string = "Fuel";
    displayName: string = "Nguyên liệu ";
    shortFragment: string = this.parseFragment(`

        id:String
        updatedAt:String
        createdAt:String
        name:String
        unitId:String
        description:String
        unit{
            name:String
            shortName:String
        }
       
    `);
    fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        unitId:String
        description:String
        unit{
            name:String
            shortName:String
        }
      
    `);
}
export const FuelService = new FuelRepository();
