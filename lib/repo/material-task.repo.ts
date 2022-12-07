import { BaseModel, CrudRepository } from "./crud.repo";
import { MaterialPhase } from "./material-phase.repo";
import { Material } from "./material.repo";
import { AttributeMaterialTask } from "./task.repo";

export interface MaterialTask extends BaseModel {
  name: string;
  image: string;
  attributes: AttributeMaterialTask[];
  phaseId: string;
  phase: MaterialPhase;
  materialId: string;
  material: Material;
}
export class MaterialTaskRepository extends CrudRepository<MaterialTask> {
  apiName: string = "MaterialTask";
  displayName: string = "công việc thành phẩm";
  shortFragment: string = this.parseFragment(`
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
    `);
  fullFragment: string = this.parseFragment(`
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
    `);
}
export const MaterialTaskService = new MaterialTaskRepository();
