import { BaseModel, CrudRepository } from "./crud.repo";
import { Material } from "./material.repo";
import { Region } from "./region.repo";
export interface Trigger extends BaseModel {
    name: string;
    description: string;
    condition: any;
    actions: TriggerAction[];
    applyAllRegion: boolean;
    applyRegionIds: string[];
    applyAllMaterial: boolean;
    applyMaterialIds: string[];
    status: string;
    applyRegions: Region[];
    applyMaterials: Material[];
}

interface TriggerAction {
    type: string;
    notifyMsg: string;
    phaseLogColor: string;
}

export class TriggerRepository extends CrudRepository<Trigger> {
    apiName: string = "Trigger";
    displayName: string = "Trigger";
    shortFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        status:String
        condition:Mixed
        description:String
        actions{
            type:String
            notifyMsg:String
            phaseLogColor:String
        }
        applyAllRegion:Boolean
        applyRegionIds:String[]
        applyAllMaterial:Boolean
        applyMaterialIds:String[]
        applyRegions{
            id:String
            name:String
        }
        applyMaterials{
            id:String
            name:String
        }

    `);
    fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        status:String
        description:String
        condition:Mixed
        actions{
            type:String
            notifyMsg:String
            phaseLogColor:String
        }
        applyAllRegion:Boolean
        applyRegionIds:String[]
        applyAllMaterial:Boolean
        applyMaterialIds:String[]
        applyRegions{
            id:String
            name:String
        }
        applyMaterials{
            id:String
            name:String
        }
    `);
}
export const ACTIVE_STATUS: Option[] = [
    { value: "ACTIVE", label: "Hoạt động", color: "primary" },
    { value: "DEACTIVE", label: "Ngừng hoạt động", color: 'accent' }
]
export const TRIGGER_CONDITION_OPERATORS = [
    { value: '==', label: '=' },
    { value: '!=', label: 'Khác' },
    { value: '!', label: 'Không có' },
    { value: '!!', label: 'Tồn tại' },
    { value: '>', label: '>' },
    { value: '>=', label: '>=' },
    { value: '<', label: '<' },
    { value: '<=', label: '<=' },
];
export const TriggerService = new TriggerRepository();