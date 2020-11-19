/* Type guards */
class Bird {
  fly() {
    console.log("fly");
  }
}

class Fish {
  swim() {
    console.log("swim");
  }
}

type Pet = Bird | Fish;

function action(pet: Pet): void {
  // Use type guard to choose the correct pet's method: pet.(swim | fly)
  if (pet instanceof Bird) {
    pet.fly()
  } else {
    pet.swim()
  }
}
action(new Fish())

/* Interface */
// Fill in the types for Employee interface
// * `level` field must have one the following values: 'Junior' || 'Middle' || 'Senior';

type level = 'Junior' | 'Middle' | 'Senior';

interface Employee {
  name: string;
  level: level;
  age: number;
  skills: string[];
}

// Create a type with fields from above being all read-only
type ReadonlyEmployee =  Readonly<Employee>;

// Create a CompanyEmployee class that implements ReadonlyEmployee interface
class CompanyEmployee implements ReadonlyEmployee {
  readonly name: string;
  readonly level: level;
  readonly age: number;
  readonly skills: string[];
  constructor(userName: string, userLevel: level, userAge: number, userSkills: string[]) {
    this.name = userName;
    this.level = userLevel;
    this.age = userAge;
    this.skills = userSkills;
  }
}

// Say, we have an employee object of the `CompanyEmployee` class with a `level` of `Junior`:
const oldEmployee = new CompanyEmployee('Mark', 'Junior', 30, ['JavaScript', 'Typescript']);
//
// We want to update this employee and make his level "Senior". If we do this
// const newEmployee = new CompanyEmployee(...)
// newEmployee.level = 'Senior' // this doesn't work
//
// How do we get a `newEmployee` object with all fields from `oldEmployee`, but with `.level` set to 'Senior'?
// hint: check how spread operator applies to objects
const newEmployee = {
  ...oldEmployee,
  level: 'Senior'
};
console.log(newEmployee)
