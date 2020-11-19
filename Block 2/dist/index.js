const fetch = require("node-fetch");

console.clear();
const url = "https://jsonplaceholder.typicode.com/todos";
const loadData = async () => await fetch(url).then(response => response.json());
const data = loadData();
// select all data
const selectAll = async (id) => await data;
selectAll(1).then(res => {
    console.assert(res.length === 200);
});
// select todo by id;
const selectById = async (id) => {
    return await data.then(todos => todos.filter(todo => todo.id === id));
};
selectById(1).then(res => {
    console.assert(res.length === 1);
    console.assert(res[0].id === 1);
});
// @ts-ignore
selectById("a").then(res => {
    console.assert(res.length === 0);
});
/*

  Exercise 2.
  1. Implement all functions below;
  2. Convert this file to TypeScript, create interfaces for input data;
  
  Optional: 3. Write a helper function which acts like a wrapper and memoizes the result of any selector function

*/
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let item = args[0];
        if (item in cache) {
            console.log('Fetching from cache', item);
            return cache[item];
        }
        else {
            console.log('Select', item);
            let result = fn(item);
            cache[item] = result;
            return result;
        }
    };
};
// 1. grouping todos by users:
const groupTodos = async () => {
    const data = await selectAll(1);
    return data.reduce((acc, item) => {
        const existing = acc.find(i => i.userId === item.userId);
        if (existing) {
            existing.todos.push(item);
        }
        else {
            acc.push({ userId: item.userId, todos: [item] });
        }
        return acc;
    }, []);
};
groupTodos().then(r => {
    console.log(JSON.stringify(r));
});
// 2. select all user's todos by userId:
const selectTodos = async (userId) => {
    return await data.then(arr => arr.filter(element => element.userId === userId));
};
memoize(selectTodos(2).then(r => {
    console.log(r);
}));
// 3. select todos by user name:
const ref = "https://jsonplaceholder.typicode.com/users";
const loadDataAuthors = async () => await fetch(ref).then(r => r.json());
const dataAuthors = loadDataAuthors();
const selectTodoList = async (username) => {
    const authorId = await dataAuthors.then(authors => authors.find(author => author.username === username).id);
    const selectTodos = async (authorId) => {
        return await data.then(array => array.filter(e => e.userId === authorId));
    };
    return selectTodos(authorId);
};
memoize(selectTodoList('Bret').then(result => {
    console.log(result);
}));
// 4. Use https://jsonplaceholder.typicode.com/users to load data about selected todos' authors and print result to console:
const infoAboutUser = async (username) => {
    return await dataAuthors.then(authors => authors.filter(author => author.username === username));
};
infoAboutUser('Antonette').then(r => {
    console.log(r);
});
