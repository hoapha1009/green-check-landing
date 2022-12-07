import { FarmingDiary, FarmingDiaryPhase } from "./farming-diary.repo";
import { BaseModel, CrudRepository } from "./crud.repo";
import { Supplies } from "./supplies.repo";

export interface Task extends BaseModel {
  name: string;
  image: string;
  attributes: AttributeMaterialTask[];
  phaseId: string;
  phase: FarmingDiaryPhase;
  farmingDiaryId: string;
  farmingDiary: FarmingDiary;
}
export interface AttributeMaterialTask {
  key: string;
  display: string;
  type: AttributeMaterialTaskType;
  options: any[];
  min: number;
  max: number;
  required: boolean;
}
export class TaskRepository extends CrudRepository<Task> {
  apiName: string = "Task";
  displayName: string = "Task";
  shortFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        attributes{
            key:string
            display:string
            type:string
            options:any
            min:Int
            max:Int
            required:Boolean
        }
        phase{
            id:string
        }
        farmingDiaryId:string
    `);
  fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        attributes{
            key:string
            display:string
            type:string
            options:any
            min:Int
            max:Int
            required:Boolean
        }
        phase{
            id:string
        }
        farmingDiaryId:string
    `);
}
export const TaskService = new TaskRepository();

export type AttributeMaterialTaskType = "TEXT" | "NUMBER" | "CHECKBOX" | "SELECTBOX" | "IMAGES";
// | "SUPPLIES"
// | "FARM_EQUIPMENT";

export const ATTRIBUTE_MATERIAL_TASK_TYPES: Option<AttributeMaterialTaskType>[] = [
  { value: "TEXT", label: "Chữ" },
  { value: "NUMBER", label: "Số" },
  { value: "SELECTBOX", label: "Chọn một" },
  { value: "CHECKBOX", label: "Chọn nhiều" },
  { value: "IMAGES", label: "Hình ảnh" },
  // { value: "SUPPLIES", label: "Vật tư" },
  // { value: "FARM_EQUIPMENT", label: "Thiết bị máy móc" },
];
