import { BaseModel, CrudRepository } from "./crud.repo";
import { FarmingDiary, FarmingDiaryPhase } from "./farming-diary.repo";
import { FarmingType } from "./farming-type.repo";
import { Material } from "./material.repo";
import { QrCode } from "./qrcode.repo";
import { Staff } from "./staff.repo";
import { User } from "./user.repo";

export interface Polygon extends BaseModel {
    paths: {
        lat: number;
        lng: number;
    }[];
    strokeColor: string;
    strokeOpacity: number;
    strokeWeight: number;
    fillColor: string;
    fillOpacity: number;
}
export interface Certificate extends BaseModel {
    title: string;
    description: string;
    listImages: string[];
    effectiveDate: string;
    expiredDate: string;
}
interface Zone {
    id: string;
    name: string;
    locationLat: number;
    locationLng: number;
    polygon: Polygon;
    createdAt: string;
    updatedAt: string;
    regionCount: number;
}
export interface Region extends BaseModel {
    id: string;
    name: string;
    province: string;
    district: string;
    ward: string;
    provinceId: string;
    districtId: string;
    wardId: string;
    locationLat: number;
    locationLng: number;
    polygon: Polygon;
    location: any;
    area: number;
    managerId: string;
    zoneId: string;
    managerName: string;
    ownerName: string;
    ownerPhone: string;
    ownerAddress: string;
    assigneeIds: string[];
    materialId: string;
    materialName: string;
    htmlContent: string;
    certificates: Certificate[];
    farmingTypeId: string;
    listImages: [string];
    note: string;
    suppliesCost: number;
    suppliesCostUpdatedAt: string;
    manager: User;
    zone: Zone;
    assignees: Staff[];
    material: Material;
    farmingType: FarmingType;
    openingDiary: OpeningDiary;
    regionQRCodeId: string;
    regionQRCode: QrCode;
}
interface OpeningDiary {
    farmingDiaryId: string;
    phaseId: string;
    farmingDiary: FarmingDiary;
    phase: FarmingDiaryPhase;
}

export class RegionRepository extends CrudRepository<Region> {
    apiName: string = "Region";
    displayName: string = "Địa điểm canh tác";
    shortFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        province:String
        district:String
        ward:String
        provinceId:String
        districtId:String
        wardId:String
        htmlContent:String
        note:String
        ownerName:String
        ownerPhone:String
        ownerAddress:String
        suppliesCost:Float
        area:Float
        assigneeIds:String[]
        htmlContent:String
        listImages:String[]
        note:String
        farmingTypeId:String
        materialId:String
        zoneId:String
        managerName: string;
        regionQRCodeId: String
        regionQRCode {
            id: String
            name: String
            code: String
            type: String
            qrCode: String
        }: QrCode
        certificates{
            title:String
            description:String
            expiredDate:String
            effectiveDate:String
            listImages:String[]

        }
        material{
            id:String
            name:String
                regionCount:number
                description:String
            htmlContent:String
            listImages:String[]
            regionCount:Int
            thumbnail:String
        }
        materialName:String
        farmingType{
            id:String
            name:String
            description:String
            listImages:String[]
        }
        zone{
            id:String
            name:String
            regionCount:number
        }
        manager{
            name:String
        }
        assignees{
            name:String
            id:String
            phone:String
        }
        openingDiary{
            farmingDiaryId:string
            phaseId:string
            farmingDiary{
                id:String
                name:String
                startAt:String
                endAt:String
                production:Float
                harvestedProduction:Float
                unit:string
            }
            phase{
                name:String
                description:String
                id:string
                tasks {
                    id
                    name
                    attributes {
                      key
                      display
                      type
                    }
                  }
            }
        }
    `);
    fullFragment: string = this.parseFragment(`
            id:String
            updatedAt:String
            createdAt:String
            name:String
            province:String
            district:String
            ward:String
            provinceId:String
            districtId:String
            wardId:String
            htmlContent:String
            locationLat:Float
            locationLng:Float
            note:String
            ownerName:String
            ownerPhone:String
            ownerAddress:String
            suppliesCost:Float
            area:Float
            assigneeIds:String[]
            htmlContent:String
            listImages:String[]
            note:String
            farmingTypeId:String
            materialId:String
            zoneId:String
            managerName: string;
            regionQRCodeId: String
            regionQRCode {
                id: String
                name: String
                code: String
                type: String
                qrCode: String
            }: QrCode
            material{
                id:String
                name:String
                description:String
                htmlContent:String
                listImages:String[]
                regionCount:Int
                thumbnail:String
            }
            materialName:String
            farmingType{
                id:String
                name:String
                description:String
                listImages:String[]
            }
            certificates{
                title:String
                description:String
                expiredDate:String
                effectiveDate:String
                listImages:String[]
                
            }
            zone{
                id:String
                name:String
                regionCount:number
            }
            manager{
                name:String
            }
            assignees{
                name:String
                id:String
                phone:String
            }
            openingDiary{
                farmingDiaryId:string
                phaseId:string
                farmingDiary{
                    id:String
                    name:String
                    startAt:String
                    endAt:String
                    production:Float
                    harvestedProduction:Float
                    unit:string
                }
                phase{
                    name:String
                    description:String
                    id:string
                    tasks {
                        id
                        name
                        attributes {
                          key
                          display
                          type
                        }
                      }
                }
            }
    `);
}
export const RegionService = new RegionRepository();
