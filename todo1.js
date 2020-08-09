var todos=["buy a new turtle"];
var input=prompt("what would you like to do?");
while(input!=="quit"){
    if(input==="list"){
        console.log("todos");
    }
    else if(input=="new"){
        var newTodo=prompt("enter the new");
        todos.push(newTodo);

    }
    input=prompt("what would you like todo?");

}
console.log("ok,Quit the app");