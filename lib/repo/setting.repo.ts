import { BaseModel, CrudRepository } from "./crud.repo";
import { SettingGroup } from "./setting-group";

export interface Setting extends BaseModel {
    type: string;
    name: string;
    key: string;
    value: any;
    isActive: boolean;
    isPrivate: boolean;
    readOnly: boolean;
    groupId: string;
    group: SettingGroup;
}

export class SettingRepository extends CrudRepository<Setting> {
    apiName: string = "Setting";
    displayName: string = "Thiết lập";
    shortFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        type:String
        name:String
        key:String
        value:String
        isActive:Boolean
        isPrivate:Boolean
        readOnly:Boolean
        groupId:String
        group{
            id:String
            name:String
            slug:String
            desc:String
            readOnly:Boolean
        }
   `);
    fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        type:String
        name:String
        key:String
        value:String
        isActive:Boolean
        isPrivate:Boolean
        readOnly:Boolean
        groupId:String
        group{
            id:String
            name:String
            slug:String
            desc:String
            readOnly:Boolean
        }
   `);
}

export const SettingService = new SettingRepository();


export type SettingType =
    | "string"
    | "number"
    | "boolean"
    | "image"
    | "array"
    | "richText"
    | "object";
export const SETTING_TYPES: Option<SettingType>[] = [
    { value: "string", label: "Chữ" },
    { value: "number", label: "Số" },
    { value: "boolean", label: "Bật tắt" },
    { value: "image", label: "Hình ảnh" },
    { value: "array", label: "Mảng chữ" },
    { value: "richText", label: "Đoạn văn" },
    { value: "object", label: "Tuỳ chỉnh" },
];
