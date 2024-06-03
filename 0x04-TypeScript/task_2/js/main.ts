// Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

export class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workTeacherTasks() {
        return 'Getting to work';
    }
}


export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

/**
 * This function checks if a given employee is a Director.
 * 
 * @param employee - The employee object to check. It can be of type Director or Teacher.
 * @returns A boolean indicating whether the employee is a Director or not.
 * 
 * The function uses TypeScript's type guards. It tries to access a property that is unique to the Director type.
 * If the property exists, it means the employee is a Director, so the function returns true.
 * If the property does not exist, it means the employee is not a Director, so the function returns false.
 */
export function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}