import { BaseModel, CrudRepository } from "./crud.repo";
import { FarmingDiary } from "./farming-diary.repo";

export interface FarmingDiaryProductionLog extends BaseModel {
    farmingDiaryId: string;
    farmingDiary: FarmingDiary;
    createdBy: string;
    createrId: string;
    createrName: string;
    createrAvatar: string;
    oldProduction: number;
    newProduction: number;
    harvestProduction: number;
    reason: String;
    note: string;
    imageList: [string];
}

export class FarmingDiaryProductionLogRepository extends CrudRepository<FarmingDiaryProductionLog> {
    apiName: string = "FarmingDiaryProductionLog";
    displayName: string = "Sản lượng dự kiến";
    shortFragment: string = this.parseFragment(`
        id:string
        createdAt:string
        updatedAt:string
        farmingDiaryId: string
        farmingDiary{
            id:string
            name:string
            unit:string
        }
        createdBy: string
        createrId: string
        createrName: string
        createrAvatar: string
        oldProduction: number
        newProduction: number
        reason: String
        note:string
        harvestProduction:Float
        imageList:[string]

    `);
    fullFragment: string = this.parseFragment(`
        id:string
        createdAt:string
        updatedAt:string
        farmingDiaryId: string
        farmingDiary{
            id:string
            name:string
            unit:string
        }
        createdBy: string
        createrId: string
        createrName: string
        createrAvatar: string
        oldProduction: number
        newProduction: number
        reason: String
        note:string
        harvestProduction:Float
        imageList:[string]
    `);



}
export const FarmingDiaryProductionLogService = new FarmingDiaryProductionLogRepository();
