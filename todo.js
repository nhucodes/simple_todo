function addItem() {
  const input = document.getElementById('add-item-input');
  const itemValue = input.value;

  if (itemValue.length > 0) {
    const list = document.getElementById('todo-items');
    list.appendChild(createListItem(itemValue));
  } else {
    alert('Please enter a value to add.')
  }

  input.value = '';
}

function createListItem(value) {
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(value));
  return item;
}