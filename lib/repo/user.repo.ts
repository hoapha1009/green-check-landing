import { BaseModel, CrudRepository } from "./crud.repo";
export interface User extends BaseModel {
    id: string;

    uid: string;

    email: string;

    name: string;

    phone: string;

    address: string;

    avatar: string;

    province: string;

    district: string;

    ward: string;

    provinceId: string;

    districtId: string;

    wardId: string;

    role: string;

    unseenNotify: number;

    createdAt: string;

    updatedAt: string;
}

export class UserRepository extends CrudRepository<User> {
    apiName: string = "User";
    displayName: string = "Tài khoản";
    shortFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        email:string
        name:string
        phone:string
        address:string
        avatar:string
        province:string
        district:string
        ward:string
        provinceId:string
        role:string
        districtId: string
        wardId: string
        `);
    fullFragment: string = this.parseFragment(`
        id:string
        updatedAt:string
        createdAt:string
        email:string
        name:string
        phone:string
        address:string
        avatar:string
        province:string
        district:string 
        ward:string
        provinceId:string
        role:string
        districtId: string
        wardId: string

    `);
    // for firebase
    async login(token): Promise<{ user: User, token: string }> {
        return await this.apollo.mutate({
            mutation: this.gql`mutation {  login(idToken: "${token}") { user { ${this.fullFragment} } token }}`
        }).then((res) => res.data["login"])
    }
    async updateUserPassword(id: string, password: string) {
        return await this.apollo.mutate({
            mutation: this.gql`
            mutation {
              updateUserPassword(id: "${id}", password: "${password}") {
                id
              }
            }
          `,
        });
    }

}

export const USER_ROLES: Option[] = [
    { value: "ADMIN", label: "Quản trị", color: "primary" },
    { value: "EDITOR", label: "Biên tập viên", color: "blue" },
];

export const USER_TYPE: Option[] = [
    { value: "USER", label: "Quản trị viên", },
    { value: "STAFF", label: "Chuyên viên", },
];

export const UserService = new UserRepository(); 