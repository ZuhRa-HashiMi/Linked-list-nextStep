// Start with your code from last challenge.
class Node {
  constructor(value, next_node = null) {
	this.value = value;
	this.next_node = next_node;
   }
}
class LinkedList {    
// setup head and tail    
  constructor() {     
  this.head = null;
 }
add(number) {
var node = new Node(number);
var curentNode;
curentNode = this.head;
if(this.head == null){
this.head = node;
}else{
while(curentNode.next_node){
 curentNode = curentNode.next_node;
}
curentNode.next_node = node;
return this.head;
  }
}
// TO add by index
addAt(index, number){
    let node = new Node(number);
    let i = 0;
    let currentNode, prev;
currentNode = this.head;
prev = currentNode;
if(index == 0){            
node.next_node = this.head;
 this.head = node;
}else{
while(currentNode){
 if(index == i){
 node.next_node = prev.next_node;
prev.next_node = node;
return this.head;
 }
 prev = currentNode;
 currentNode = currentNode.next_node;
 i++;
    }
  }
 }
// TO Remove by index
remove(index){
 let i = 0;
 let currentNode, prev;
currentNode = this.head;
 prev = currentNode;
if(index == 0){
this.head = currentNode.next_node;
}else {
while(currentNode.next_node){
 if(index == i){
prev.next_node = currentNode.next_node;
return this.head;
}
   prev = currentNode;
currentNode = currentNode.next_node;
  i++;
 }
}
    }      
get(index) {      
// your code here      
let i=0 ;      
let currentNode = this.head;      
while (currentNode) {        
if(i === index){          
return currentNode.value;       
 }        
currentNode = currentNode.next_node;        
i++;     
 }      
return null   
   } 
 }

module.exports = LinkedList
