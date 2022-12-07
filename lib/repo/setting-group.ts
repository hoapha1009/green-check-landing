import { BaseModel, CrudRepository } from "./crud.repo";
import { Setting } from "./setting.repo";

export interface SettingGroup extends BaseModel {
    slug: String;
    name: String;
    desc: String;
    readOnly: Boolean;
    settings: [Setting];
}
export class SettingGroupRepository extends CrudRepository<SettingGroup> {
    apiName: string = "SettingGroup";
    displayName: string = "Thiết lập nhóm";
    shortFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        slug:String
        name:String
        desc:String
        readOnly:Boolean
        settings{
            id:String
            name:String
            key:String
            value:String
            isActive:Boolean
            groupId:String
            group{
                id:String
                name:String
                slug:String
                desc:String
                readOnly:Boolean

            }
        }
    `);
    fullFragment: string = this.parseFragment(`
            id:String
            updatedAt:String
            createdAt:String
            slug:String
            name:String
            desc:String
            readOnly:Boolean
            settings{
                id:String
                name:String
                key:String
                value:String
                isActive:Boolean
                groupId:String
                group{
                    id:String
                    name:String
                    slug:String
                    desc:String
                    readOnly:Boolean
                    
                }
            }
    `);
}

export const SettingGroupService = new SettingGroupRepository();