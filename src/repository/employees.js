import Repository from "./repository";
import generateRandomPerson from "../utils/random-person";
import random from "../utils/random-utils";

export default class EmployeesRepository extends Repository {

    constructor() {
        super();

        const numEmployees = random.getRandomNumber(1, 10);
        for (let i=0; i < numEmployees; i++) {
            const aRandomPerson = generateRandomPerson();
            this.add(aRandomPerson);
        }
    }

}