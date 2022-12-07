import { BaseModel, CrudRepository } from "./crud.repo";

export interface Topic extends BaseModel {
    name: string;
    thumbnail: string;
    groupKey: string;
    slug: string;
    icon: string;

}
export class TopicRepository extends CrudRepository<Topic>{
    apiName: string = "Topic";
    displayName: string = "Chủ đề";
    shortFragment: string = this.parseFragment(`

        id:String
        updatedAt:String
        createdAt:String
        name:String
        thumbnail:String
        groupKey:String
        slug:String
        icon:String
    `);
    fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        thumbnail:String
        groupKey:String
        slug:String
        icon:String
    `);


}
export const TopicService = new TopicRepository();