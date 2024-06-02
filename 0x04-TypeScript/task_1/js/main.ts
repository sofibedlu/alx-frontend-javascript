interface Teacher {
    // firstName and lastName can only be assigned when the object is first initialized
    readonly firstName: string;
    readonly lastName: string;

    // fullTimeEmployee is always defined
    fullTimeEmployee: boolean;

    // yearsOfExperience is optional
    yearsOfExperience?: number;

    // location is always defined
    location: string;

    // This interface can have any other property with a string name
    [propName: string]: any;
}

interface Directors extends Teacher {
    // numberOfReports is a required attribute for Directors
    numberOfReports: number;
}

// Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define the printTeacher function using the PrintTeacherFunction interface
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}


// Define an interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInstance;
}

// Define an interface for the instance
interface StudentInstance {
    workOnHomework(): string;
    displayName(): string;
}

// Define the StudentClass
class StudentClass implements StudentInstance {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}