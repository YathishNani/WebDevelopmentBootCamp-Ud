let input = prompt("What would you like to do?");
const todo = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input == 'list') {
        console.log('***************');
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("***************");
    }
    else if (input === 'new') {
        const ntodo = prompt('Ok, what is the new todo?');
        todo.push(ntodo);
        console.log(`${ntodo} added to the list!`);
            
    }
    else if (input === 'delete') {
        const index = prompt('Ok, Enter an index to delete:')  
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt("What would you like to do?");
}
console.log("Ok Quit The App!");
