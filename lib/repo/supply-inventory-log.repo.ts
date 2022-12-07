import { BaseModel, CrudRepository } from "./crud.repo";
import { GoodsReceivedNote } from "./good-received-note.repo";
import { GoodsDeliveryNote } from "./goods-delivery-note.repo";
import { Region } from "./region.repo";
import { Supplies } from "./supplies.repo";
import { SupplyReceivedNote } from "./supply-receied-note.repo";
export interface SupplyInventoryLog extends BaseModel {

  supplyId: string;
  supplyName: string;
  supplyCode: string;
  supplier: string;
  supplyTypeId: string;
  usedInUnit: number;
  quantity: number;
  amountInUnit: number;
  price: number;
  depreciation: number;
  totalPrice: number;
  goodsDeliveryNoteId: string;
  discount: number;
  goodsReceivedNoteId: string;
  type: string;
  regionId: string;
  supply: Supplies;
  region: Region;
  goodsDeliveryNote: GoodsDeliveryNote;
  goodsReceivedNote: GoodsReceivedNote;
  staffName: string;
}

export class SupplyInventoryLogRepository extends CrudRepository<SupplyInventoryLog> {
  apiName: string = "SupplyInventoryLog";
  displayName: string = "Lịch sử kho vật tư";
  shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        supplyId: string
        supplyName:string
        supplyCode:string
        supplier:string
        supplyTypeId: string
        usedInUnit: Float
        quantity: Int
        amountInUnit: Float
        price: Float
        depreciation: Float
        totalPrice: Float
        goodsDeliveryNoteId: string
        discount: Float
        goodsReceivedNoteId: string
        type: string
        regionId: string
        supply{
          id:string
          name:string
          unit{
            name:string
            shortName:string
          }
        }
        region{
          id:string
          name:string
        }
        goodsDeliveryNote{
          id:string
          accountingDate:string
          documentDate:string
          staffName:string
          totalQuantity:string
          totalPrice:string
          
          explain
        }
        goodsReceivedNote{
          id:string
          documentDate:string
          staffName:string
          accountingDate:string
          documentCode:string
          totalQuantity:string
          totalPrice:string
          
          explain
          
        }
        staffName:string;


        `);
  fullFragment: string = this.parseFragment(`
      id:string
      updatedAt:string
      createdAt:string
      supplyId: string
      supplyName:string
      supplyCode:string
      supplier:string
      supplyTypeId: string
      usedInUnit: Float
      quantity: Int
      amountInUnit: Float
      price: Float
      depreciation: Float
      totalPrice: Float
      goodsDeliveryNoteId: string
      discount: Float
      goodsReceivedNoteId: string
      type: string
      regionId: string
      supply{
        id:string
        name:string
        unit{
          name:string
          shortName:string
        }
      }
      region{
        id:string
        name:string
      }
      goodsDeliveryNote{
        id:string
        accountingDate:string
        documentDate:string
        staffName:string
        totalQuantity:string
        totalPrice:string
      }
      goodsReceivedNote{
        id:string
        documentDate:string
        staffName:string
        accountingDate:string
        documentCode:string
        totalQuantity:string
        totalPrice:string
        
      }
      staffName:string;

    
    `);
}
export const SupplyInventoryLogService = new SupplyInventoryLogRepository();
