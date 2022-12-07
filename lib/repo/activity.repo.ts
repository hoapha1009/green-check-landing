import { BaseModel, CrudRepository } from "./crud.repo";
export interface Activity extends BaseModel {
  id: string;
  username: string;
  message: string;
}

export class ActivityRepository extends CrudRepository<Activity> {
  apiName: string = "Activity";
  displayName: string = "Lịch sử thao tác";
  shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        username:string
        message:string
       
        `);
  fullFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        username:string
        message:string
    `);
}
export const ActivityService = new ActivityRepository();
