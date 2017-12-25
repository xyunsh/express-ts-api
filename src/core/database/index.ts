import { employees, sakila}  from './sequelize';

import Employee from './employees/Employee';
import Department from './employees/Department';
import Salary from './employees/Salary';

import Actor from './sakila/Actor';
import Address from './sakila/Address';

export {
    employees,
    sakila,

    Department,
    Employee,
    Salary,

    Address,
    Actor,
}