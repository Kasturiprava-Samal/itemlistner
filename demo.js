// var itemList = document.querySelector('#items');
// //parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// //child node
// console.log(itemList.childNodes);

// console.log(itemList.children);

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='yellow';

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Lat text one';
// // next sibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event

form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('item2').value;
    var sumitem=newItem+newItem2
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  //li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(sumitem));
    
// Create edit button element
var editBtn = document.createElement('button');
// Add classes to del button
editBtn.className = 'btn btn-blue btn-sm float-right edit';

// Append text node
editBtn.appendChild(document.createTextNode('Edit'));

// Append button to li
li.appendChild(editBtn);

// Append li to list
itemList.appendChild(li);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  console.log(text);
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  console.log("items =",items);
  Array.from(items).forEach(function(item){
    console.log("this is the item",item);
    //var itemName = item.firstChild.textContent;
    var itemName = item.firstChild.textContent;
    //var itemName2=item.childNodes.textContent;
    console.log("item name is = ",itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}