import { get, put } from "../utils/server";

export default class EmployeesRepository {

	add(entity){
		return post("/employees/addEmployee",entity);
	}

    update(id, entity) {
        return put(`/employees/updateEmployee/`+id, entity);
    }

    delete(id){
    	return delete("/employees/deleteEmployee/"+id)
    }

    get(id) {
        return get("/employees/getEmployeeDtoById/"+id);
    }

    getAll() {
        return get("/employees/getAllEmployeesDTO");
    }

}