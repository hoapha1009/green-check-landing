import { BaseModel, CrudRepository } from "./crud.repo";
import { Region } from "./region.repo";
import { Supplies } from "./supplies.repo";
export interface SupplyReceivedNote extends BaseModel {

    supplyId: string;

    supplyCode: string;

    supplyName: string;

    usedInUnit: number;

    supplier: string;

    quantity: number;

    price: number;

    discount: number;

    totalPrice: number;

    supply: Supplies;
}

export class SupplyReceivedNoteRepository extends CrudRepository<SupplyReceivedNote> {
    apiName: string = "SupplyReceivedNote";
    displayName: string = "Vật tư cung cấp";
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
export const SupplyReceivedNoteService = new SupplyReceivedNoteRepository();
