import { BaseModel, CrudRepository } from "./crud.repo";

export interface NotificationTemplate extends BaseModel {
    title: String;
    body: string;
    picture: string;
    isBanner: boolean;
    publicFor: string[];
    validFrom: string;
    validTo: string;
}


export class NotifyRepository extends CrudRepository<NotificationTemplate> {
    apiName: string = "NotificationTemplate";
    displayName: string = "Thông báo";
    shortFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        title:String
        body:String
        picture:String
        isBanner:Boolean
        publicFor:String[]
        validFrom:String
        validTo:String
  `);
    fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        title:String
        body:String
        picture:String
        isBanner:Boolean
        publicFor:String[]
        validFrom:String
        validTo:String
  `);
    async sendNotificationTemplate(notificationTemplateId: string,) {
        return await this.apollo.mutate({
            mutation: this.gql`
        mutation {
            sendNotificationTemplate(notificationTemplateId: "${notificationTemplateId}") 
        }
      `,
        });
    }
}
export const BANNER_STATUS: Option[] = [
    { value: true, label: "Có Banner" },
    { value: false, label: "Không có Banner" },
]

export const NotifyService = new NotifyRepository();