import Repository from "./repository";

export default class DepartmentsRepository extends Repository {

    constructor() {
        super();

        this.add({
            name: "Human Resources"
        });

        this.add({
            name: "Upper Management"
        });
    }

}