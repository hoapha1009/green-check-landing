import { BaseModel, CrudRepository } from "./crud.repo";
import { FarmingDiaryPhaseLog } from "./farming-diary-phase-log";
import { Material } from "./material.repo";
import { QrCode } from "./qrcode.repo";
import { Region } from "./region.repo";
import { Staff } from "./staff.repo";
import { Supplies } from "./supplies.repo";
import { Task } from "./task.repo";
import { User } from "./user.repo";
export interface FarmingDiary extends BaseModel {
  id: string;
  name: string;
  phaseIds: [string];
  materialId: string;
  regionId: string;
  startAt: string;
  endAt: string;
  createdBy: string;
  createrName: string;
  createrAvatar: string;
  createdById: string;
  production: number;
  productionUnitId: string;
  expectedHarvestDate: string;
  unit: string;
  status: string;
  qrcodeIds: [string];
  material: Material;
  qrCodes: QrCode[];
  // phases: [FarmingDiaryPhase];
  taskQRCodeId: string;
  taskQRCode: QrCode;
  phases: [FarmingDiaryPhase];
  region: Region;
  user: User;
  staff: Staff;
  productionUnit: {
    id: string;
    name: string;
    shortName: String;
    createdAt: string;
    updatedAt: string;
  };
  harvestedProduction: number;
  totalOutputLoss: number;
}

export interface FarmingDiaryPhase {
  id: string;
  name: string;
  description: string;
  status: string;
  startAt: string;
  endAt: string;
  phaseLogIds: [string];
  farmingDiaryId: string;
  createdAt: string;
  updatedAt: string;
  materialId: string;
  regionId: string;
  farmingDiary: FarmingDiary;
  phaseLogs: FarmingDiaryPhaseLog[];
  tasks: Task[];
}
export class FarmingDiaryRepository extends CrudRepository<FarmingDiary> {
  apiName: string = "FarmingDiary";
  displayName: string = "vụ canh tác";
  shortFragment: string = this.parseFragment(`
    id:string
    updatedAt:string
    name:string
    startAt:string
    endAt:string
    createrAvatar:string
    createrName:string
    production:number
    unit:string
    status:string
    taskQRCodeId
    taskQRCode {
        id: String
        name: String
        code: String
        type: String
        qrCode: String
    }: QrCode
    material{
        id:string
        name:string
        description:string
        htmlContent:string
        listImages:[string]
    }
    phases{
        id:string
        name:string
        description:string
        status:string
        startAt:string
        endAt:string
        farmingDiaryId:string
    }

    `);
  fullFragment: string = this.parseFragment(`
    id:string
    updatedAt:string
    name:string
    startAt:string
    endAt:string
    createrAvatar:string
    createrName:string
    production:number
    unit:string
    status:string
    taskQRCodeId
    taskQRCode {
        id: String
        name: String
        code: String
        type: String
        qrCode: String
    }: QrCode
    material{
        id:string
        name:string
        description:string
        htmlContent:string
        listImages:[string]
    }
    phases{
        id:string
        name:string
        status:string
        startAt:string
        endAt:string
        farmingDiaryId:string
        updatedAt:string
    }

    `);
}
export const FARMING_STATUS: Option[] = [
  { value: "OPENING", label: "Mở", color: "success" },
  { value: "CLOSED", label: "Đóng", color: "slate" },
];
export const FarmingDiaryService = new FarmingDiaryRepository();
