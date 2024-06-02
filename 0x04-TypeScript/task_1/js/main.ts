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