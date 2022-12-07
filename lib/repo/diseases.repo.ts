import { BaseModel, CrudRepository } from "./crud.repo";

export interface Disease extends BaseModel {
  name: string;
  description: string;
  htmlContent: string;
  listImages: [string];
  situationStats: DiseaseSituationStats;
}
interface DiseaseSituationStats {
  total: number;
  resolved: number;
  opening: number;
  regionCount: number;
}
export class DiseaseRepository extends CrudRepository<Disease> {
  apiName: string = "Disease";
  displayName: string = "Dịch hại";
  shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        name:string
        situationStats{
            total:Int
            resolved:Int
            opening:Int
            regionCount:Int
        }
        listImages: [string]
        htmlContent:string
        description:string

    `);
  fullFragment: string = this.parseFragment(`
    id:string
    updatedAt:string
    createdAt:string
    name:string
    situationStats{
        total:Int
        resolved:Int
        opening:Int
        regionCount:Int
    }
    listImages: [string]
    htmlContent:string
    description:string
    
    `);
}
export const DiseaseService = new DiseaseRepository();
