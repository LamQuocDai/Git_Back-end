const btn = document.getElementById('btn_todo');
const del_todo = document.querySelectorAll('.del_todo');
let todoArray = [
  {
    text_todo: 'make breadfast',
    date_todo: '2021-10-10'
  }
];
todoArray = JSON.parse(localStorage.getItem('todoArray'));

renderArray();
btn.addEventListener('click', () => {
    let text_todo = document.getElementById('text_todo').value;
    let date_todo = document.getElementById('date_todo').value;
    if (text_todo === '' || date_todo === '') {
        document.getElementById('error').innerHTML = '<p class="text_error">Please fill all fields</p>';
        return;
    }
    document.getElementById('error').innerHTML = '';
    todoArray.push({text_todo, date_todo});
    renderArray();
    clearInput();
});

function renderArray(){
  const list = document.getElementById('list');
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
  console.log(todoArray);
  list.innerHTML = '';
  for (let i = 0; i < todoArray.length; i++) {
      list.innerHTML += `<p>${todoArray[i].text_todo}</p><p>${todoArray[i].date_todo}</p><button class="del_todo" id="${todoArray[i].text_todo}">X</button>`;
  }
}

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('del_todo')){
    const id = e.target.id;
    const index = todoArray.findIndex(todo => todo.text_todo === id);
    todoArray.splice(index, 1);
    renderArray();
  }
});

function clearInput(){
  document.getElementById('text_todo').value = '';
  document.getElementById('date_todo').value = '';
}
