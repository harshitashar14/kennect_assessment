
//To implement getElementById we need to traverse in DOM using depth first search traversal and search for that id.

function getElementById(id) {
    let result = null;
    
    function depthFirstSearch(node) {
        if(node.id === id) {
            return node;
        }
        for(let i=0; i<node.childNodes.length; i++) {
             let res = depthFirstSearch(node.childNodes[i]);
             if(res)
                return res;
        }
        
        return null;
    }
    
    result  = depthFirstSearch(document.body);
    return result;
}

console.log(getElementById('some_id'));