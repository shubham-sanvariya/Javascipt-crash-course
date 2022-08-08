const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },

]

console.table(todos);

// to convert javascript object into json format

// const todoJson = JSON.stringify(todos);
// console.log(todoJson);

// For loop
// for(let i = 0; i<= 10; i++)
// {
//     console.log(`For loop numbers: ${i}`);
// }

// While loop
// let i = 0;
// while(i < 10)
// {
//     console.log(`While loop number: ${i}`);
//     i++;
// }

// for(let i = 0; i < todos.length; i++) 
// {
//     console.log(todos[i].text);
// }

// better method
// in this for loop we don't have to give index value
// for(let todo of todos)
// {
//     console.log(todo.text);
// }

// higer oder arrays methods for iteration suggested

// for each
// todos.forEach(function(todo)
// {
//     console.log(todo.text);
// })

// Map note = map returns an array
// const todoid = todos.map(function(todo1)
// {
//     return todo1.id;
// })

// console.log(todoid);

// Filter
const todocompleted = todos.filter(function(todo)
{
    return todo.isCompleted === true;
}).map(function(todo)
{
    return todo.text;
})

console.log(todocompleted);




