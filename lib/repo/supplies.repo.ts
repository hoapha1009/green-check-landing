import { BaseModel, CrudRepository } from "./crud.repo";
import { SuppliesType } from "./supplies-type.repo";
import { Unit } from "./unit.repo";

export interface Supplies extends BaseModel {
    code: string;
    name: string;
    image: string;
    origin: string;
    unitId: string;
    unitName: string;
    suppliesTypeId: string;
    unit: Unit;
    usedInUnit: number;
    suppliesType: SuppliesType;
    description: string;
    activeIngredients: string;
}
export class SuppliesRepository extends CrudRepository<Supplies> {
    apiName: string = "Supplies";
    displayName: string = "Danh mục vật tư";
    shortFragment: string = this.parseFragment(`

        id:string
        updatedAt:string
        createdAt:string
        code:string
        name:string
        image:string
        origin:string
        unitId:ID
        unitName:String
        suppliesTypeId:ID
        usedInUnit:Float
        unit{
            name:String
            shortName:String
        }
        suppliesType{
            id:string
            name:string
        }
        description:String
        activeIngredients:string
       
    `);
    fullFragment: string = this.parseFragment(`
       
      id:string
      updatedAt:string
      createdAt:string
      code:string
      name:string
      image:string
      origin:string
      unitId:ID
      unitName:String
      suppliesTypeId:ID
      usedInUnit:Float
      unit{
          name:String
          shortName:String
      }
      suppliesType{
          id:string
          name:string
      }
      description:String
      activeIngredients:string
    `);
}
export const SuppliesService = new SuppliesRepository();
