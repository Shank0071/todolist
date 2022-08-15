const addForm = document.querySelector(".add");
const li = document.querySelector(".list");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
    const html =  `
    <li>
        <span>${todo}</span>
        <i class="uil uil-trash-alt delete"></i>
    </li>
    `
    li.innerHTML += html
}

addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo) {
        generateTemplate(todo)
        addForm.reset()
    }
})

li.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove()
    }
})

const filterTodos = (term) => {
    const listItems = Array.from(li.children);
    console.log(listItems)
    listItems.filter(i => !i.textContent.includes(term))
             .forEach(item => item.classList.add("filtered"))
    listItems.filter(i => i.textContent.includes(term))
             .forEach(item => item.classList.remove("filtered"))
    
}

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodos(term)
})