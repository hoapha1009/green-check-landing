import { BaseModel, CrudRepository } from "./crud.repo";
import { Topic } from "./topic.repo";

export interface Post extends BaseModel {
    id: string;
    slug: string;
    thumbnail: string;
    title: string;
    description: string;
    topicName: string;
    topicId: string;
    createdByName: string;
    updatedByName: string;
    isApprove: Boolean;
    topic: Topic;
    shortDescription: string;
}
export class PostRepository extends CrudRepository<Post> {
    apiName: string = "Post";
    displayName: string = "Bài đăng";
    shortFragment: string = this.parseFragment(`

        id:string
        updatedAt:string
        createdAt:string
        slug:string
        thumbnail:string
        title:string
        description:string
        topicName:string
        topicId:string
        isApprove:Boolean
        topic{
            id:string
            name:string
        }
        shortDescription:string

    `);
    fullFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        slug:string
        thumbnail:string
        title:string
        description:string
        topicName:string
        topicId:string
        isApprove:Boolean
        topic{
            id:string
            name:string
        }
        shortDescription:string

    `);
    async sendPostNotification(postId: string, type: string) {
        return await this.apollo.mutate({
            mutation: this.gql`
            mutation {
                sendPostNotification(postId: "${postId}", type: "${type}") 
            }
          `,
        });
    }
}
export const PostService = new PostRepository();
