import { BaseModel, CrudRepository } from "./crud.repo";
import { Region } from "./region.repo";
export interface QrCode extends BaseModel {
  name: string;
  code: string;
  type: string;
  qrCode: string;
  qrCodeTraceOriginStageValue: QRCodeTraceOriginStage;
  scanCount: number;
  isActive: boolean;
  targetId: string;
  region: Region;
  regionId: string;
}

export interface QRCodeTraceOriginStage {
  farmingDiaryId: string;
  showFarmingDiary: boolean;
  showDiseaseSituations: boolean;
  visiblePhases: {
    phaseId: string;
    visibleAttributes: string[];
  }[];
}
export class QrCodeRepository extends CrudRepository<QrCode> {
  apiName: string = "QrCode";
  displayName: string = "Đợt truy xuất";
  shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        name:string
        code:string
        qrCode: String
        type:string
        targetId:string
        isActive:boolean
        qrCodeTraceOriginStageValue{
          farmingDiaryId: string
          showFarmingDiary: boolean
          showDiseaseSituations: boolean
          visiblePhases{
              phaseId:string
              visibleAttributes:string[]
          }
        }
        scanCount:Int
        region{
            id:string
            name:string
            province:string
            district:string
            ward:string
            provinceId:string
            districtId:string
            wardId:string
            zone{
              id:string
              name:string
            }

        }
        regionId:string

        `);
  fullFragment: string = this.parseFragment(`
      id:string
      updatedAt:string
      createdAt:string
      name:string
      code:string
      type:string
      qrCode: String
      targetId:string
      isActive:boolean
      qrCodeTraceOriginStageValue{
        farmingDiaryId: string
        showFarmingDiary: boolean
        showDiseaseSituations: boolean
        visiblePhases{
            phaseId:string
            visibleAttributes:string[]
        }
      }
      scanCount:Int
      region{
          id:string
          name:string
          province:string
          district:string
          ward:string
          provinceId:string
          districtId:string
          wardId:string
          zone{
            id:string
            name:string
          }
      }
      regionId:string
    `);
}
export const QRCodeService = new QrCodeRepository();
