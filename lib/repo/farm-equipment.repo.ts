import { BaseModel, CrudRepository } from "./crud.repo";
import { Fuel } from "./fuel.repo";


export interface FarmEquipment extends BaseModel {
    name: string;
    description: string;
    brand: string;
    fuelId: string;
    fuel: Fuel;
    image: string;
}
export class FarmEquipmentRepository extends CrudRepository<FarmEquipment> {
    apiName: string = "FarmEquipment";
    displayName: string = "máy móc thiết bị ";
    shortFragment: string = this.parseFragment(`

        id:String
        updatedAt:String
        createdAt:String
        name:String
        description:String
        brand:String
        fuelId:String
        image:string
        fuel{
            name:String
            unit{
                name:String
                shortName:String
            }

        }
       
    `);
    fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        description:String
        brand:String
        fuelId:String
        image:string
        fuel{
            name:String
            unit{
                name:String
                shortName:String
            }
        }
      
    `);
}
export const FarmEquipmentService = new FarmEquipmentRepository();
