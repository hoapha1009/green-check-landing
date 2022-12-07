import { BaseModel, CrudRepository } from "./crud.repo";
import { Region } from "./region.repo";
import { SuppliesType } from "./supplies-type.repo";
import { Supplies } from "./supplies.repo";
import { SupplyReceivedNote } from "./supply-receied-note.repo";
import { Zone } from "./zone.repo";
export interface SupplyInventory extends BaseModel {
    supplyId: string;
    supply: Supplies;
    usedInUnit: number;
    quantity: number;
    amountUnitRemain: number;
    regionId: String;
    region: Region;
    supplyName: string;
    zoneId: string;
    zone: Zone;
    inventoryType: string;
    supplyTypeId: string;
    supplyType: SuppliesType;
    receivedQuantity: number;
    deliveryQuantity: number;
}

export class SupplyInventoryRepository extends CrudRepository<SupplyInventory> {
    apiName: string = "SupplyInventory";
    displayName: string = "Kho vật tư";
    shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        supplyId: string
        supplyName:string
        supply{
            code:string
            name:string
            id:string
            unitId:string
            unitName:string
            image:string
            origin:string
        }
        usedInUnit: Float
        quantity: Int
        amountUnitRemain: Float
        regionId: String
        region{
            id:string
            name:string
        }
        zoneId: string
        zone{
            id:string
            name:string
        }
        inventoryType: string
        supplyTypeId: string
        supplyType{
            id:string
            name:string
        }
        receivedQuantity: Int
        deliveryQuantity: Int
       
        `);
    fullFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        supplyId: string
        supplyName:string
        supply{
            code:string
            name:string
            id:string
            unitId:string
            unitName:string
            image:string
            origin:string
        }
        usedInUnit: Float
        quantity: Int
        amountUnitRemain: Float
        regionId: String
        region{
            id:string
            name:string
        }
        zoneId: string
        zone{
            id:string
            name:string
        }
        inventoryType: string
        supplyTypeId: string
        supplyType{
            id:string
            name:string
        }
        receivedQuantity: Int
        deliveryQuantity: Int
    `);
}
export const SupplyInventoryService = new SupplyInventoryRepository();
