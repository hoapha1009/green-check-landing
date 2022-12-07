import { BaseModel, CrudRepository } from "./crud.repo";
import { MaterialTask } from "./material-task.repo";
import { Material } from "./material.repo";
import { Supplies } from "./supplies.repo";

export interface MaterialPhase extends BaseModel {
  name: string;
  description: string;
  materialId: string;
  materialTaskIds: string[];
  material: Material;
  materialTasks: MaterialTask[];
}
export class MaterialPhaseRepository extends CrudRepository<MaterialPhase> {
  apiName: string = "MaterialPhase";
  displayName: string = "giai đoạn thành phẩm";
  shortFragment: string = this.parseFragment(`
        id: String
        createdAt: DateTime
        updatedAt: DateTime
        name: String
        description: String
        materialId: String
        materialTaskIds: [String]
    `);
  fullFragment: string = this.parseFragment(`
        id: String
        createdAt: DateTime
        updatedAt: DateTime
        name: String
        description: String
        materialId: String
        materialTaskIds: [String]
        material {
            id name
        }: Material
        materialTasks {
            id: String
            createdAt: DateTime
            updatedAt: DateTime
            name: String
            image: String
            attributes {
                key:string
                display:string
                type:string
                options:any
                min:Int
                max:Int
                required:Boolean
            }: [AttributeMaterialTask]
            phaseId: String
            materialId: String
        }: [MaterialTask]
    `);
}
export const MaterialPhaseService = new MaterialPhaseRepository();
