var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* Type guards */
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("fly");
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("swim");
    };
    return Fish;
}());
function action(pet) {
    // Use type guard to choose the correct pet's method: pet.(swim | fly)
    if (pet instanceof Bird) {
        pet.fly();
    }
    else {
        pet.swim();
    }
}
action(new Fish());
// Create a CompanyEmployee class that implements ReadonlyEmployee interface
var CompanyEmployee = /** @class */ (function () {
    function CompanyEmployee(userName, userLevel, userAge, userSkills) {
        this.name = userName;
        this.level = userLevel;
        this.age = userAge;
        this.skills = userSkills;
    }
    return CompanyEmployee;
}());
// Say, we have an employee object of the `CompanyEmployee` class with a `level` of `Junior`:
var oldEmployee = new CompanyEmployee('Mark', 'Junior', 30, ['JavaScript', 'Typescript']);
//
// We want to update this employee and make his level "Senior". If we do this
// const newEmployee = new CompanyEmployee(...)
// newEmployee.level = 'Senior' // this doesn't work
//
// How do we get a `newEmployee` object with all fields from `oldEmployee`, but with `.level` set to 'Senior'?
// hint: check how spread operator applies to objects
var newEmployee = __assign(__assign({}, oldEmployee), { level: 'Senior' });
console.log(newEmployee);
