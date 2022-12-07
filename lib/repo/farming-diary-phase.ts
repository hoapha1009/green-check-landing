import { BaseModel, CrudRepository } from "./crud.repo";
import { FarmingDiaryPhaseLog } from "./farming-diary-phase-log";
import { FarmingDiary } from "./farming-diary.repo";
import { Task } from "./task.repo";
export interface FarmingDiaryPhase extends BaseModel {
  name: string;
  description: string;
  status: FarmingDiaryPhaseStatus;
  startAt: string;
  endAt: string;
  expectedStartAt: string;
  expectedEndAt: string;
  phaseLogIds: string[];
  farmingDiaryId: string;
  createdAt: string;
  updatedAt: string;
  materialId: string;
  regionId: string;
  taskIds: string[];
  farmingDiary: FarmingDiary;
  phaseLogs: [FarmingDiaryPhaseLog];
  tasks: Task[];
}

export class FarmingDiaryPhaseRepository extends CrudRepository<FarmingDiaryPhase> {
  apiName: string = "FarmingDiaryPhase";
  displayName: string = "giai đoạn canh tác";
  shortFragment: string = this.parseFragment(`
        id: String
        name: String
        description: String
        status: String
        startAt: DateTime
        endAt: DateTime
        expectedStartAt: DateTime
        expectedEndAt: DateTime
        phaseLogIds: [ID]
        farmingDiaryId: ID
        createdAt: DateTime
        updatedAt: DateTime
        materialId: ID
        regionId: ID
        taskIds: [ID]
        farmingDiary {
            id:string
            name:string
            regionId:string
        }: FarmingDiary
        tasks {
            id:String
            name:String
            phaseId:string
            image:string
            farmingDiaryId:string
            farmingDiary{
                name:string
                regionId:string
            }
            attributes{
              key: String
              display: String
              type: String
              options: [Mixed]
              min: Int
              max: Int
              required: Boolean
            }
        }
    `);
  fullFragment: string = this.parseFragment(`
        id: String
        name: String
        description: String
        status: String
        startAt: DateTime
        endAt: DateTime
        expectedStartAt: DateTime
        expectedEndAt: DateTime
        phaseLogIds: [ID]
        farmingDiaryId: ID
        createdAt: DateTime
        updatedAt: DateTime
        materialId: ID
        regionId: ID
        taskIds: [ID]
        farmingDiary {
            id:string
            name:string
            regionId:string
        }: FarmingDiary
        phaseLogs {
            id:string
            name:string
            staffId:string
            phaseId:string
            attributes{
              key: String
              display: String
              type: String
              required: Boolean
            }
            time:string
            createdBy:string
            createrId:string
            createrName:string
            createrAvatar:string
            color:String
            phase{
                id:string
                name:string
                description:string
                status:string
                startAt:string
            }
            staff{
                id:string
                name:string
                avatar:string

            }
            user{
                id:string
                name:string
                avatar:string
                phone:string
                address:string
                email:string
                province:string
            }
        }
        tasks {
            id:String
            name:String
            phaseId:string
            image:string
            farmingDiaryId:string
            farmingDiary{
                name:string
                regionId:string
            }
            attributes{
              key: String
              display: String
              type: String
              options: [Mixed]
              min: Int
              max: Int
              required: Boolean
            }
        }
        

    `);

  async openDiaryPhaseStatus(phaseId: string) {
    return await FarmingDiaryPhaseService.mutate({
      mutation: `
                openDiaryPhaseStatus(phaseId: "${phaseId}")
            `,
    });
  }

  async closeDiaryPhaseStatus(phaseId: string) {
    return await FarmingDiaryPhaseService.mutate({
      mutation: `
                closeDiaryPhaseStatus(phaseId: "${phaseId}")
            `,
    });
  }
}
export const FarmingDiaryPhaseService = new FarmingDiaryPhaseRepository();

export type FarmingDiaryPhaseStatus = "OPENING" | "RESOLVED" | "PENDING";
export const FARMING_DIARY_PHASE_STATUS: Option<FarmingDiaryPhaseStatus>[] = [
  { value: "OPENING", label: "Đang mở", color: "info" },
  { value: "RESOLVED", label: "Hoàn thành", color: "success" },
  { value: "PENDING", label: "Chưa mở", color: "slate" },
];
