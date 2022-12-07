import { BaseModel, CrudRepository } from "./crud.repo";
import { MaterialPhase, MaterialPhaseService } from "./material-phase.repo";

export interface Material extends BaseModel {
  name: string;
  description: string;
  htmlContent: string;
  listImages: string[];
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  materialPhaseIds: string[];
  materialPhases: MaterialPhase[];
  regionCount: number;
}
export class MaterialRepository extends CrudRepository<Material> {
  apiName: string = "Material";
  displayName: string = "quy trình canh tác";
  shortFragment: string = this.parseFragment(`
        id: String
        name: String
        description: String
        listImages: [String]
        thumbnail: String
        createdAt: DateTime
        updatedAt: DateTime
        materialPhaseIds: [String]
        regionCount: Int
    `);
  fullFragment: string = this.parseFragment(`
        id: String
        name: String
        description: String
        htmlContent: String
        listImages: [String]
        thumbnail: String
        createdAt: DateTime
        updatedAt: DateTime
        materialPhaseIds: [String]
        materialPhases {
            ${MaterialPhaseService.shortFragment}
        }: [MaterialPhase]
        regionCount: Int
    `);
}
export const OPTIONS_ATTRIBUTE_TYPE: Option[] = [
  { value: "TEXT", label: "Chuỗi " },
  { value: "NUMBER", label: "Số" },
  { value: "CHECKBOX", label: "Nhiều lựa chọn" },
  { value: "SELECTBOX", label: "Một lựa chọn" },
  { value: "IMAGES", label: "Hình ảnh" },
];
export const MaterialService = new MaterialRepository();
