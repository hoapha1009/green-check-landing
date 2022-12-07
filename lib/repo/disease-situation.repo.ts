import { BaseModel, CrudRepository } from "./crud.repo";
import { Disease } from "./diseases.repo";
import { Region } from "./region.repo";
import { Staff } from "./staff.repo";
import { User } from "./user.repo";

export interface DiseaseSituation extends BaseModel {
    title: string;
    description: string;
    listImages: [string];
    regionId: string;
    reporterId: string;
    reportedAt: string;
    reporterName: string;
    reporterAvatar: string;
    reportedBy: string;
    diseaseId: string;
    status: string;
    region: Region;
    disease: Disease;
    stats: any;
    staff: Staff;
    user: User;
    commentCount: number;
    controlMeasures: string;
}

export class DiseaseSituationRepository extends CrudRepository<DiseaseSituation> {
    apiName: string = "DiseaseSituation";
    displayName: string = "Tình hình dịch hại";
    shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        commentCount:number
        description:string
        controlMeasures: string
        disease{
            description:string
            htmlContent:string
            id:string
            listImages: [string]
            name:string
        }
        listImages: [string]
        reporterAvatar:string
        reporterName:string
        status:string
        title:string
        updatedAt:string
        diseaseId:string
        region{
            name:string
            id:string
            zone{
                id:string
                name:string
            }
        }
        `);
    fullFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        commentCount:number
        description:string
        diseaseId:string
        controlMeasures: string
        disease{
            description:string
            htmlContent:string
            id:string
            listImages: [string]
            name:string
        }
        listImages: [string]
        reporterAvatar:string
        reporterName:string
        status:string
        title:string
        updatedAt:string
        region{
            name:string
            id:string
            zone{
                id:string
                name:string
            }
        }
        controlMeasures:string
        
    `);
}
export const DISEASE_SITUATION_STATUS: Option[] = [
    { value: "OPENING", label: "Đang diễn ra", color: "yellow" },
    { value: "RESOLVED", label: "Đã kết thúc", color: "slate" },
];
export const DiseaseSituationService = new DiseaseSituationRepository();
