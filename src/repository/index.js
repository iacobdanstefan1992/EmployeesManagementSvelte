import DepartmentsRepository from "./departments";
import JobCategoriesRepository from "./job_categories";
import EmployeesRepository from "./employees";

const departments = new DepartmentsRepository();
const jobCategories = new JobCategoriesRepository();
const employees = new EmployeesRepository();

export default {
    departments,
    jobCategories,
    employees
};