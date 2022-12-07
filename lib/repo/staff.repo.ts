import { BaseModel, CrudRepository } from "./crud.repo";
export interface Staff extends BaseModel {
    phone: string;
    email: string;
    name: string;
    avatar: string;
    uid: string;
    isBlock: Boolean;
    address: string;
    province: string;
    district: string;
    ward: string;
    provinceId: string;
    districtId: string;
    wardId: string;
    unseenNotify: number;
    password: string;
}

export class StaffRepository extends CrudRepository<Staff> {
    apiName: string = "Staff";
    displayName: string = "Chuyên viên";
    shortFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        phone:String
        email:String
        avatar:String
        uid:String
        isBlock:Boolean
        address:String
        province:String
        district:String
        ward:String
        provinceId: string
        districtId: string
        wardId: string
    `);
    fullFragment: string = this.parseFragment(`
        id:String
        updatedAt:String
        createdAt:String
        name:String
        phone:String
        email:String
        avatar:String
        uid:String
        isBlock:Boolean
        address:String
        province:String
        district:String
        ward:String
        provinceId: string
        districtId: string
        wardId: string

    `);

    async loginStaff(
        token: string,
        deviceId?: string,
        deviceToken?: string
    ): Promise<{ staff: Staff; token: string }> {
        return await this.apollo
            .mutate({
                mutation: this.gql`mutation {  loginStaff(idToken: "${token}" ${deviceId ? `deviceId:"${deviceId}"` : ""
                    } ${deviceToken ? `deviceToken:"${deviceToken}"` : ""}) { staff { ${this.fullFragment
                    } } token }}`,
            })
            .then((res) => res.data["loginStaff"]);
    }
    async loginStaffWithPassword(
        phone: string,
        password: string,
        deviceId?: string,
        deviceToken?: string
    ): Promise<{ staff: Staff; token: string; isVerified: boolean }> {
        return await this.apollo
            .mutate({
                mutation: this.gql`mutation {  loginStaffWithPassword(phone: "${phone}" password: "${password}" ${deviceId ? `deviceId:"${deviceId}"` : ""
                    } ${deviceToken ? `deviceToken:"${deviceToken}"` : ""}) { staff { ${this.fullFragment
                    } } token isVerified }}`,
            })
            .then((res) => res.data["loginStaffWithPassword"]);
    }
    async verifyStaff(
        token: string,
    ): Promise<{ staff: Staff; token: string; isVerified: boolean }> {
        return await this.apollo
            .mutate({
                mutation: this.gql`mutation {  verifyStaff(idToken: "${token}" ) { staff { ${this.fullFragment
                    } } token isVerified }}`,
            })
            .then((res) => res.data["verifyStaff"]);
    }

    changeBlockStaff(staffId: string) {
        return this.mutate({
            mutation: `
          changeBlockStaff(staffId: "${staffId}") {
              id
              isBlock
            }
          `,
        });
    }
    async checkStaffAccount(phone: string) {
        return await this.apollo
            .mutate({
                mutation: this.gql`mutation {  checkStaffAccount(phone: "${phone}" ) }`,
            })
            .then((res) => res.data["checkStaffAccount"]);
    }
    async updateStaffPassword(idToken: string, newPassword: string) {
        return await this.apollo
            .mutate({
                mutation: this.gql`mutation {  updateStaffPassword(idToken: "${idToken}" , newPassword: "${newPassword}" ) }`,
            })
            .then((res) => res.data["updateStaffPassword"]);
    }


}

export const StaffService = new StaffRepository();