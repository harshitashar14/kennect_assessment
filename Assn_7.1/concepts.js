
// for loop is used to iterate using some condition. It has three main parts
// 1) Intialization: From where the loop will start
// 2) Condition : When will loop end
// 3) reintialization: what will be the value before each iteration 
for(let i=0;i<10;i++)
{
    console.log(i);
}


// while loop is also used to iterate over some condition but it does not have intialization and re-intialization part. It will run as long as the given condition satisfies. Hence, while(1) will run infinite times.
let i=0;;

while(i<10)
{
    console.log(i);
    i++;
}

//continue is a statment which can be used inside a loop to move to next iteration directly without executing remaining statements
//the below loop will print all the number expect 5 because it will continue over to next iteration
for(let i=0;i<10;i++)
{
    if(i==5)
        continue;
    
    console.log(i);
}

//If else statements are conditional statements. If else are used to execute some statements conditionally. If a statemnt returns true the If part will be executed else the statements inside else will be executed.

let color = "Blue"

if(color === "Blue")
{
    console.log("Hiii");
}else
if(color === "Red")
{
    console.log("Bye");
}else
{
    console.log("Hello");
}


//Switch Case statements are control statements used to handle deiffrent cases of a condition individually. It consist of one Switch and some case operators.

// break statement breaks the switch case and takes the control out otherwise every case after the staisfied case will be executed
switch (new Date().getDay()) {
  case 0:
    day = "Sun";
    break;
  case 1:
    day = "Mon";
    break;
  case 2:
     day = "Tue";
    break;
  case 3:
    day = "Wed";
    break;
  case 4:
    day = "Thu";
    break;
  case 5:
    day = "Fri";
    break;
  case 6:
    day = "Sat";
}
console.log(day);

//Recursion
// Recursion is implented using function stack. In recursion a function calls itself again and again.
// Example nth Fibbonacci number


function fibbonacci(n){
    if(n==1 || n== 2)return n-1;
    
    return fibbonacci(n-1)+fibbonacci(n-2);
}

console.log(fibbonacci(10));


//In Binary Search Tree every node has at most two childeren. Left Child will be smaller than its parent and right child will be larger than its parent. Traversal and searching in binary search tree takes O(log(n)) Time.

//class representing a node of BST.
class Node{
    constructor(val){
        this.val = val;  //value of the node
        this.right = null;  //right child 
        this.left = null;  //left child
    }
}

// code to create BST
// Here first if the root is null set root to new node else find the position of new node and add new node at this position.
class BST{
    constructor(){
        this.root= null;
    }
    
    insertNode(val){
        var nd = new Node(val);
        
        if(!this.root){
            this.root= nd;
            return this;
        }
        
        var ptr= this.root;
        var prv = null;
        while(ptr)
        {
            prv= ptr;
            if(val< ptr.val)
                ptr = ptr.left;
            else
                ptr = ptr.right;
        }
        
        if(val<prv.val)
            prv.left = nd;
        else
            prv.right = nd;
    }
    
}


//closure- closures helps a finction to use its outer scope's variable.
// In below expample the inner scope is able to access the variable outside its scope using closure.
let name = 'Harshita';

function greeting() { 
    let message = 'Hi';
    console.log(message + ' '+ name);
}

