import { BaseModel, CrudRepository } from "./crud.repo";
import { Region } from "./region.repo";
import { Supplies } from "./supplies.repo";
export interface SupplyDeliveryNote extends BaseModel {
    supplyId: string;
    supplyCode: string;
    supplyName: string;
    usedInUnit: number;
    supplier: string;
    quantity: number;
    price: number;
    depreciation: number;
    totalPrice: number;
    amountInUnit: number;
    supply: Supplies;
}

export class SupplyDeliveryNoteRepository extends CrudRepository<SupplyDeliveryNote> {
    apiName: string = "SupplyDeliveryNote";
    displayName: string = "Vật tư xuất kho";
    shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        supplyId: string
        supplyCode: string
        supplyName: string
        usedInUnit: Int
        supplier: string
        quantity: Int
        price: Float
        discount: Float
        totalPrice: Float
        supply{
            name:String
        }
        `);
    fullFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        supplyId: string
        supplyCode: string
        supplyName: string
        usedInUnit: Int
        supplier: string
        quantity: Int
        price: Float
        discount: Float
        totalPrice: Float
        supply{
            name:String
        }
    `);
}
export const SupplyDeliveryNoteService = new SupplyDeliveryNoteRepository();
