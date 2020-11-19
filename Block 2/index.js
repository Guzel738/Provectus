var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var fetch = require("node-fetch");
console.clear();
var url = "https://jsonplaceholder.typicode.com/todos";
var loadData = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, fetch(url).then(function (response) { return response.json(); })];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var data = loadData();
// select all data
var selectAll = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, data];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
selectAll(1).then(function (res) {
    console.assert(res.length === 200);
});
// select todo by id;
var selectById = function (id) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.then(function (todos) { return todos.filter(function (todo) { return todo.id === id; }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
selectById(1).then(function (res) {
    console.assert(res.length === 1);
    console.assert(res[0].id === 1);
});
selectById("a").then(function (res) {
    console.assert(res.length === 0);
});
/*

  Exercise 2.
  1. Implement all functions below;
  2. Convert this file to TypeScript, create interfaces for input data;
  
  Optional: 3. Write a helper function which acts like a wrapper and memoizes the result of any selector function

*/
// 1. grouping todos by users:
// const groupTodos = async () => await data;
//
// groupTodos(1).then((res) => {
//   let groups = [];
//
//   for (let element of res) {
//     let existingGroups = groups.filter(group => group.userId === element.userId);
//     if (existingGroups.length > 0) {
//       existingGroups[0].toDo[0].push(element.id)
//     }
//     else {
//       let newGroup = {
//         userId: element.userId,
//         toDo: [{
//           id: element.id,
//           title: element.title,
//           completed: element.completed
//         }]
//       };
//       groups.push(newGroup);
//     }
//   }
//
//   console.log(groups);
// });
// 2. select all user's todos by userId:
var selectTodos = function (userId) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.then(function (arr) { return arr.filter(function (element) { return element.userId === userId; }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
selectTodos(2).then(function (r) {
    // console.log(r)
});
// 3. select todos by user name:
var ref = "https://jsonplaceholder.typicode.com/users";
var loadDataAuthors = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, fetch(ref).then(function (r) { return r.json(); })];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var dataAuthors = loadDataAuthors();
var selectTodoList = function (username) { return __awaiter(_this, void 0, void 0, function () {
    var authorId, selectTodos;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dataAuthors.then(function (authors) { return authors.find(function (author) { return author.username === username; }).id; })];
            case 1:
                authorId = _a.sent();
                selectTodos = function (authorId) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, data.then(function (array) { return array.filter(function (e) { return e.userId === authorId; }); })];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); };
                return [2 /*return*/, selectTodos(authorId)];
        }
    });
}); };
selectTodoList('Bret').then(function (result) {
    console.log(result);
});
// 4. Use https://jsonplaceholder.typicode.com/users to load data about selected todos' authors and print result to console:
var infoAboutUser = function (username) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, dataAuthors.then(function (authors) { return authors.filter(function (author) { return author.username === username; }); })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
infoAboutUser('Antonette').then(function (r) {
    console.log(r);
});
