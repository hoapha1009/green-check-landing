import { CrudRepository } from "./crud.repo";
import { GraphRepository } from "./graph.repo";

export interface ReportCode { }
export class ReportRepository extends GraphRepository {
    async reportCode() {
        return await this.apollo
            .query({
                query: this.gql`query {  getAllReportCode }`,
            })
            .then((res) => res.data["getAllReportCode"]);
    }
    async getReportData(code: string, option?: any) {
        return await this.apollo.query({
            query: this.gql`query { getReportData(code:"${code}",option:${option}) }`,
        }).then((res) => res.data["getReportData"]);
    }

}
export const ReportCodeService = new ReportRepository();