import { BaseModel, CrudRepository } from "./crud.repo";
import { FarmingDiaryPhase } from "./farming-diary-phase";
import { TaskLogAttribute } from "./farming-diary-phase-log";
import { Material } from "./material.repo";
import { Region } from "./region.repo";
import { Staff } from "./staff.repo";
import { AttributeMaterialTaskType, Task } from "./task.repo";
import { User } from "./user.repo";
import { Zone } from "./zone.repo";

export interface ScheduleTask extends BaseModel {
  hour: number;
  minute: number;
  loop: boolean;
  datesInWeek: number[];
  startDate: string;
  endDate: string;
  status: ScheduleTaskStatus;
  phaseId: string;
  phase: FarmingDiaryPhase;
  regionId: string;
  region: Region;
  materialId: string;
  material: Material;
  zoneId: string;
  zone: Zone;
  createdBy: string;
  createrId: string;
  createrName: string;
  createrAvatar: string;
  staff: Staff;
  user: User;
  taskId: string;
  taskName: string;
  taskImage: string;
  task: Task;
  attributes: TaskLogAttribute[];
  color: string;
  imageList: string[];
  duration: number;
  inventoryType: string;
}
export class ScheduleTaskRepository extends CrudRepository<ScheduleTask> {
  apiName: string = "ScheduleTask";
  displayName: string = "nhật ký tự động";
  shortFragment: string = this.parseFragment(`
        id: String
        createdAt: DateTime
        updatedAt: DateTime
        hour: Int
        minute: Int
        loop: Boolean
        datesInWeek: [Int]
        startDate: DateTime
        endDate: DateTime
        status: String
        phaseId: String
        regionId: String
        materialId: String
        zoneId: String
        createdBy: String
        createrId: String
        createrName: String
        createrAvatar: String
        taskId: String
        taskName: String
        taskImage: String
        color: String
        imageList: [String]
        duration: Int        
        inventoryType: string
    `);
  fullFragment: string = this.parseFragment(`
        id: String
        createdAt: DateTime
        updatedAt: DateTime
        hour: Int
        minute: Int
        loop: Boolean
        datesInWeek: [Int]
        startDate: DateTime
        endDate: DateTime
        status: String
        phaseId: String
        phase {
            id:string
            name:string
            description:string
            status:string
        }: FarmingDiaryPhase
        regionId: String
        materialId: String
        zoneId: String
        createdBy: String
        createrId: String
        createrName: String
        createrAvatar: String
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
        taskName: String
        taskImage: String
        task {
            id: String
            name: String
            attributes{
                key:string
                display:string
                type:string
                options:any
                min:Int
                max:Int
                required:Boolean
            }
        }: [Task]
        attributes {
            display: String
            key: String
            value: Mixed
            type: String
            required: Boolean
        }: [TaskLogAttribute]
        color: String
        imageList: [String]
        duration: Int
        inventoryType: string
    `);
}
export const ScheduleTaskService = new ScheduleTaskRepository();

export type ScheduleTaskStatus = "ACTIVE" | "INACTIVE" | "CLOSED";
export const SCHEDULE_TASK_STATUS: Option<ScheduleTaskStatus>[] = [
  { value: "ACTIVE", label: "Hoạt động", color: "success" },
  { value: "INACTIVE", label: "Ngưng hoạt động", color: "warning" },
  { value: "CLOSED", label: "Đã kết thúc", color: "slate" },
];

export const WEEKDAYS = [
  {
    value: "1",
    label: "Thứ 2",
  },
  {
    value: "2",
    label: "Thứ 3",
  },
  {
    value: "3",
    label: "Thứ 4",
  },
  {
    value: "4",
    label: "Thứ 5",
  },
  {
    value: "5",
    label: "Thứ 6",
  },
  {
    value: "6",
    label: "Thứ 7",
  },
  {
    value: "0",
    label: "Chủ Nhật",
  },
];
