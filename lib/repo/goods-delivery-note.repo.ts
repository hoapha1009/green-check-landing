import { BaseModel, CrudRepository } from "./crud.repo";
import { Region } from "./region.repo";
import { SupplyDeliveryNote } from "./supply-delivery-note.repo";
import { SupplyReceivedNote } from "./supply-receied-note.repo";
import { Zone } from "./zone.repo";
export interface GoodsDeliveryNote extends BaseModel {
  code: string;
  accountingDate: string;
  documentDate: string;
  staffName: string;
  documentCode: string;
  regionId: string;
  region: Region;
  explain: string;
  // documentImage: string;
  totalQuantity: number;
  totalPrice: number;
  supplyDeliveryNotes: SupplyDeliveryNote[];
  mfgDate: string;
  expDate: string;
  zone: Zone;
  zoneId: string;
  type: string;
}

export class GoodsDeliveryNoteRepository extends CrudRepository<GoodsDeliveryNote> {
  apiName: string = "GoodsDeliveryNote";
  displayName: string = "Phiếu xuất kho";
  shortFragment: string = this.parseFragment(`
        code: string;
        id:string
        updatedAt:string
        createdAt:string
        accountingDate: string
        documentDate: string
        staffName: string
        documentCode: string
        regionId: string
        region{
            name:String
        }
        explain: string
        totalQuantity: Int
        totalPrice: Float
        supplyDeliveryNotes{
            id:string
        }
        mfgDate:String
        expDate:String
        zone{
          id:string
          name:string
        }
        zoneId:string
        type:string
        `);
  fullFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        code: string;
        accountingDate: string
        documentDate: string
        staffName: string
        documentCode: string
        regionId: string
        region{
            name:String
        }
        explain: string

        totalQuantity: Int
        totalPrice: Float
        supplyDeliveryNotes{
            id: String
            createdAt: DateTime
            updatedAt: DateTime
            supplyId: String
            supplyName: String
            supplyCode: String
            usedInUnit: Float
            quantity: Int
            amountInUnit: Float
            price: Float
            totalPrice: Float
            discount: Float
            type: String
        }
        mfgDate:String
        expDate:String
        zone{
          id:string
          name:string
        }
        zoneId:string
        type:string
    `);

  async createGoodsDeliveryNote(data: any) {
    return await this.mutate({
      mutation: `createGoodsDeliveryNote(data: $data) {
            ${GoodsDeliveryNoteService.shortFragment}
          }`,
      variablesParams: `
                ($data: CreateGoodsDeliveryNoteInput!)`,
      options: {
        variables: {
          data,
        },
      },
    }).then((res) => res.data["g0"]);
  }
}
export const GoodsDeliveryNoteService = new GoodsDeliveryNoteRepository();
