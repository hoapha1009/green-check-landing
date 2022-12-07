import { BaseModel, CrudRepository } from "./crud.repo";
import { FarmingDiaryPhaseLog } from "./farming-diary-phase-log";

import { Material } from "./material.repo";
import { Region } from "./region.repo";

export interface TriggerLog extends BaseModel {
    name: string;
    triggerId: string;
    phaseLogId: string;
    regionId: string;
    materialId: string;
    status: string;
    errorMsg: string;
    phaseLog: FarmingDiaryPhaseLog;
    region: Region;
    material: Material;
}
export class TriggerLogRepository extends CrudRepository<TriggerLog>{
    apiName: string = "TriggerLog";
    displayName: string = "Lịch sử  Trigger cảnh báo nhiệt độ";
    shortFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        triggerId:String
        phaseLogId:String
        regionId:String
        materialId:String
        status:String
        errorMsg:String
        phaseLog{
            id:String
            name:String
        }
        region{
            id:String
            name:String
        }
        material{
            id:String
            name:String
        }

    `);
    fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        triggerId:String
        phaseLogId:String
        regionId:String
        materialId:String
        status:String
        errorMsg:String
        phaseLog{
            id:String
            name:String
        }
        region{
            id:String
            name:String
        }
        material{
            id:String
            name:String
        }

        
    `);
}
export const TRIGGER_LOG_STATUS: Option[] = [
    { value: "ERROR", label: "Thất bại", color: "pink" },
    { value: "SUCCESS", label: "Thành công", color: "success" },
]
export const TriggerLogService = new TriggerLogRepository();