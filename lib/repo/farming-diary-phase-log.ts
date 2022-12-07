import { BaseModel, CrudRepository } from "./crud.repo";
import { FarmingDiaryPhase } from "./farming-diary-phase";
import { Staff } from "./staff.repo";
import { AttributeMaterialTaskType, Task } from "./task.repo";
import { User } from "./user.repo";

export interface FarmingDiaryPhaseLog extends BaseModel {
  name: string;
  staffId: string;
  phaseId: string;
  attributes: TaskLogAttribute[];
  time: string;
  createdBy: string;
  createrId: string;
  createrName: string;
  createrAvatar: string;
  createdAt: string;
  updatedAt: string;
  color: string;
  phase: FarmingDiaryPhase;
  staff: Staff;
  user: User;
  taskId: string;
  task: Task[];
  taskName: string;
  taskImage: string;
  imageList: string[];
  duration: number;
  inventoryType: string;
}
export interface TaskLogAttribute {
  display: string;
  key: string;
  value: any;
  type: TaskLogAttributeType;
  required: boolean;
}

export class FarmingDiaryPhaseLogRepository extends CrudRepository<FarmingDiaryPhaseLog> {
  apiName: string = "FarmingDiaryPhaseLog";
  displayName: string = "nhật ký giai đoạn";
  shortFragment: string = this.parseFragment(`
        id: String
        name: String
        staffId: ID
        phaseId: ID
        attributes {
            display: String
            key: String
            value: Mixed
            type: String
            required: Boolean
        }: [TaskLogAttribute]
        time: DateTime
        createdBy: String
        createrId: String
        createrName: String
        createrAvatar: String
        createdAt: DateTime
        updatedAt: DateTime
        color: String
        phase {
            id:string
            name:string
            description:string
            status:string
        }: FarmingDiaryPhase
        staff {
            id:string
            name:string
            avatar:string
        }: Staff
        user {
            id:string
            name:string
            avatar:string
        }: User
        taskId: String
        task {
            id: String
            name: String
        }: [Task]
        taskName: String
        taskImage: String
        imageList: [String]
        duration: Int
        inventoryType:string
    `);
  fullFragment: string = this.parseFragment(`
        id: String
        name: String
        staffId: ID
        phaseId: ID
        attributes {
            display: String
            key: String
            value: Mixed
            type: String
            required: Boolean
        }: [TaskLogAttribute]
        time: DateTime
        createdBy: String
        createrId: String
        createrName: String
        createrAvatar: String
        createdAt: DateTime
        updatedAt: DateTime
        color: String
        phase {
            id:string
            name:string
            description:string
            status:string
        }: FarmingDiaryPhase
        staff {
            id:string
            name:string
            avatar:string
        }: Staff
        user {
            id:string
            name:string
            avatar:string
        }: User
        taskId: String
        task {
            id: String
            name: String
        }: [Task]
        taskName: String
        taskImage: String
        imageList: [String]
        duration: Int
        inventoryType:string

    `);
}
export const FarmingDiaryPhaseLogService = new FarmingDiaryPhaseLogRepository();

export type TaskLogAttributeType =
  | "TEXT"
  | "NUMBER"
  | "CHECKBOX"
  | "SELECTBOX"
  | "IMAGES"
  | "SUPPLIES"
  | "FARM_EQUIPMENT";
