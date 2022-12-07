import { BaseModel, CrudRepository } from "./crud.repo";
import { Material } from "./material.repo";

export interface Zone extends BaseModel {
  id: string;
  name: string;
  locationLat: number;
  locationLng: number;
  polygon: Polygon;
  regionCount: number;
  createdAt: string;
  updatedAt: string;
  materialIds: string[];
  materials: Material[];
  regionThumbnails: string[];
}
interface Polygon {
  paths: {
    lat: number;
    lng: number;
  };
  strokeColor: string;
  strokeOpacity: number;
  strokeWeight: number;
  fillColor: string;
  fillOpacity: number;
}
export class ZoneRepository extends CrudRepository<Zone> {
  apiName: string = "Zone";
  displayName: string = "Vùng canh tác";
  shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        name:string
        regionCount:Int
        materials{
            id:string
            name:string
        }
        regionThumbnails:[string]

    `);
  fullFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        name:string
        regionCount:Int
        materials{
            id:string
            name:string
        }
        regionThumbnails:[string]

    `);
}
export const ZoneService = new ZoneRepository();
