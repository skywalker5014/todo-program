
let todo = []
while(true){
    let action = prompt('what would you like to do')
    
    if(action === 'new'){
        
        while(true){
            var item = prompt('add a todo')
            if(item !== 'done'){
                todo.push(item)
                continue
            }
            else{
                break
            }
            
        }
        continue
    }
    
    else if(action === 'list'){
        for(i in todo){
            console.log(todo[i])
        }
        continue
    }
    
    else if(action === 'delete'){
        let delItem = prompt('which item do you want to delete?')
        delindex = todo.indexOf(delItem)
        todo.splice(delindex, 1)
        continue
    }

    else if(action === 'quit'){
        break
    }
    
}