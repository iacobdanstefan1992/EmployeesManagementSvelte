import Repository from "./repository";

export default class JobCategoriesRepository extends Repository {

    constructor() {
        super();

        this.add({
            name: "Software Engineer"
        });

        this.add({
            name: "Tester"
        });

        this.add({
            name: "HR Specialist"
        });
    }

}