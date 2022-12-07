import { BaseModel, CrudRepository } from "./crud.repo";

export interface FarmingType extends BaseModel {
    name: string;
    description: string;
    listImages: [string];
    regionCount: number;
}

export class FarmingTypeRepository extends CrudRepository<FarmingType> {
    apiName: string = "FarmingType";
    displayName: string = "Hình thức canh tác";
    shortFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        description:String
        listImages:String[]
        regionCount:Int
    `);
    fullFragment: string = this.parseFragment(`
    id:String
    updatedAt:String
    createdAt:String
    name:String
    description:String
    listImages:String[]
    regionCount:Int
    `);
}
export const FarmingTypeService = new FarmingTypeRepository();
