import { get, put } from "../utils/server";

export default class DepartmentsRepository {

	add(entity){
		return post("/departments/addDepartment",entity);
	}

	update(id, entity) {
        return put('/departments/updateDepartment/' + id, entity);
    }

    delete(id){
    	return delete("/departments/deleteDepartment/"+id)
    }

	get(id) {
        return get("/departments/getDepartmentById/"+id);
    }

    getAll() {
        return get("/departments/getAllDepartmentsDTO");
    }

}