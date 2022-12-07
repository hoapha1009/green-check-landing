import { BaseModel, CrudRepository } from "./crud.repo";
import { Region } from "./region.repo";
import { SupplyReceivedNote } from "./supply-receied-note.repo";
import { Zone } from "./zone.repo";
export interface GoodsReceivedNote extends BaseModel {
  mfgDate: String;
  expDate: String;
  code: string;
  accountingDate: string;
  documentDate: string;
  staffName: string;
  documentCode: string;
  regionId: string;
  region: Region;
  zoneId: string;
  zone: Zone;
  type: "REGION" | "ZONE" | string;
  explain: string;
  documentImage: string;
  totalQuantity: number;
  totalPrice: number;
  supplyReceivedNotes: SupplyReceivedNote[];
}

export class GoodsReceivedNoteRepository extends CrudRepository<GoodsReceivedNote> {
  apiName: string = "GoodsReceivedNote";
  displayName: string = "Phiếu nhập kho";
  shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        code: string;
        accountingDate: string
        documentDate: string
        staffName: string
        documentCode: string
        regionId: string
        mfgDate:String
        expDate:String
        region{
            name:String
        }
        explain: string
        documentImage: string
        totalQuantity: Int
        totalPrice: Float
        supplyReceivedNotes{
            id:string
        }
       zoneId:string
       zone{
        id:string
        name:string
       }
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
        mfgDate:String
        expDate:String
        region{
            name:String
        }
        explain: string
        documentImage: string
        totalQuantity: Int
        totalPrice: Float
        supplyReceivedNotes{
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
        zoneId:string
        zone{
         id:string
         name:string
        }
        type:string
    `);

  async createGoodsReceivedNote(data: any) {
    return await this.mutate({
      mutation: `createGoodsReceivedNote(data: $data) {
            ${GoodsReceivedNoteService.shortFragment}
          }`,
      variablesParams: `
                ($data: CreateGoodsReceivedNoteInput!)`,
      options: {
        variables: {
          data,
        },
      },
    }).then((res) => res.data["g0"]);
  }
}
export const GoodsReceivedNoteService = new GoodsReceivedNoteRepository();
