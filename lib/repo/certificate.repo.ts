import { BaseModel, CrudRepository } from "./crud.repo";
export interface Certificate extends BaseModel {
  title: string;
  description: string;
  listImages: string[];
  effectiveDate: string;
  expiredDate: string;
}
export class CertificateRepository extends CrudRepository<Certificate> {
  apiName: string = "Certificate";
  displayName: string = "Chứng nhận";
  shortFragment: string = this.parseFragment(`
        title: String!
        description: String
        listImages: [String]
        effectiveDate: DateTime
        expiredDate: DateTime
    `);
  fullFragment: string = this.parseFragment(`
        title: String!
        description: String
        listImages: [String]
        effectiveDate: DateTime
        expiredDate: DateTime
    `);
}

export const CertificateService = new CertificateRepository();
