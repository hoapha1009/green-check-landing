import { BaseModel, CrudRepository } from "./crud.repo";
import { QrCode } from "./qrcode.repo";
export interface ScanDevice extends BaseModel {
    cookie: string;
    qrCodeId: string;
    engine: string;
    device: string;
    browser: string;
    os: string;
    scanCount: number;
    date: string;
    qrCode: QrCode;
}

export class ScanDeviceRepository extends CrudRepository<ScanDevice> {
    apiName: string = "ScanDevice";
    displayName: string = "Thiết bị";
    shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        cookie:string
        qrCodeId:string
        engine:string
        device:string
        browser:string
        os:string
        scanCount:Int
        date:string
        qrCode{
            id:string
            updatedAt:string
            createdAt:string
            name:string
            code:string
            qrCodeTraceOriginStageValue{
                farmingDiaryId:string
                showFarmingDiary:boolean
            }
        }
    `);
    fullFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        cookie:string
        qrCodeId:string
        engine:string
        device:string
        browser:string
        os:string
        scanCount:Int
        date:string
        qrCode{
            id:string
            updatedAt:string
            createdAt:string
            name:string
            code:string
            qrCodeTraceOriginStageValue{
                farmingDiaryId:string
                showFarmingDiary:boolean
            }
        }
    `);
}

export const ScanDeviceService = new ScanDeviceRepository();
