import { BaseModel, CrudRepository } from "./crud.repo";
import { DiseaseSituation } from "./disease-situation.repo";
import { Staff } from "./staff.repo";
import { User } from "./user.repo";

export interface DiseaseComment extends BaseModel {
  message: string;
  listImages: [string];
  commentBy: string;
  commenterId: string;
  commenterName: string;
  commenterAvatar: string;
  situationId: string;
  diseaseId: string;
  situation: DiseaseSituation;
  disease: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    description: string;
    htmlContent: string;
    listImages: [string];
    situationStats: DiseaseSituationStats;
  };
  staff: Staff;
  user: User;
}
interface DiseaseSituationStats {
  total: number;
  resolved: number;
  opening: number;
  regionCount: number;
}

export class DiseaseCommentRepository extends CrudRepository<DiseaseComment> {
  apiName: string = "DiseaseComment";
  displayName: string = "Bình luận dịch hại";
  shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        commenterName:string
        commenterAvatar:string
        commenterId:string
        message:string
        listImages:[string]
        situation{
            id:string
            updatedAt:string
            createdAt:string
            commentCount:number
            description:string
            controlMeasures:string
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
        }

        `);
  fullFragment: string = this.parseFragment(`
    id:string
    updatedAt:string
    createdAt:string
    commenterName:string
    commenterAvatar:string
    commenterId:string
    message:string
    listImages:[string]
    situation{
        id:string
        updatedAt:string
        createdAt:string
        commentCount:number
        description:string
        controlMeasures:string
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
    }
        
    `);
}
export const DiseaseCommentService = new DiseaseCommentRepository();
