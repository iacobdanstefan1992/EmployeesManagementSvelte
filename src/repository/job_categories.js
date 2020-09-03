import { get, put } from "../utils/server";

export default class JobCategoriesRepository {

    add(entity){
        return post("/job_categories/addJobCategory",entity);
    }

    update(id, entity) {
        return put('/job_categories/updateJobCategory/'+id, entity);
    }

    delete(id){
        return delete("/job_categories/deleteJobCategory/"+id)
    }

    get(id) {
        return get("/job_categories/getJobCategoryById/"+id);
    }

    getAll() {
        return get("/job_categories/getAllJobCategories");
    }

}