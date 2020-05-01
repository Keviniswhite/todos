const clearInputValue = function(input) {
    input.value = ''
    input.focus();
    return input;
}
const validata = function(value) {
    var err = e('.error')
    var inputValue = value
    if(inputValue === "") {
        err.innerText = '不好意思，不为空啊~'
        setTimeout(function() {
            err.innerText = ''
        }, 2000)
        return false
    }
    return true
}
const todoTemp = function(value, index, done, date) {
    var date = new Date(date).toLocaleString().split("/").join("-")
    var inputValue = value
    if(validata(value)) {
        var t =
            `
                <div class="todo-cell-${index}">
                    <span class=${done ? "todos-done" : ""}>${inputValue}</span>
                    <button class="todo-cancel todo-cancel-${index}">取消</button>
                    <button class="todo-done todo-done-${index}">完成</button>
                    <button class="todo-del todo-del-${index}">删除</button>
                    <span>${date}记录滴</span>
                </div>
            `

        return t;
    }
    return " "
}
const localCache = function(value) {
    var rs = []
    if(localStorage.todos) {
        // 缓存 todo 有的情况
        if(value === "") {
            value = '主人脑子抽风了,竟然写了一个空巨鹿🐖'
        }
        rs = JSON.parse(localStorage.todos)
        var id = (rs.length - 1) < 0 ? 0 : rs.length - 1
        rs.push({
            id: id,
            todo: value,
            date: new Date(),
            done:false,
        })
        localStorage.todos = JSON.stringify(rs);
    }
}
const renderTodo = function(t) {
    var todoWrap = e('.todo-result')
    // todoWrap.innerHTML += t;
    todoWrap.insertAdjacentHTML("beforeend", t)

}
const setLocalTodo = function(index, bool = true) {
    var todo = JSON.parse(localStorage.todos)
    todo[index].done = bool
    localStorage.todos = JSON.stringify(todo)
}
const delTodoFromTodos = function(index) {
    var todo = JSON.parse(localStorage.todos)
    // 指定删除的元素
    var delTodo = todo[index]
    var newTodos = todo.filter(function(item) {
        return item != delTodo
    })
    localStorage.todos = JSON.stringify(newTodos)
}


const actionTodo = function(target) {
    // 创建todo
    createTodo(target, "todo-submit")
    // 更新todo
    updateTodo(target, 'todo-done')
    // cancelTodo
    cancelTodo(target, 'todo-cancel')
    //
    delTodo(target, 'todo-del')
    // // 删除要做的事情 delTodo
 }
const todoClick = function(event) {
    // 套路
    var target = event.target;
    actionTodo(target)
}
const bindTodoEvent = function() {
    var container = e('.todo-container')
    bindEvents(container, 'click', todoClick)
}

const initTodoLocalStorage = function() {
    if(!localStorage.todos) {
        localStorage.todos = '[]'
    }

    return localStorage.todos
}
const renderTodos = function() {
    var todoWrap = e('.todo-result')
    todoWrap.innerHTML = ""

    var todos = JSON.parse(localStorage.todos);
    var todosLength = todos.length

    for (var i = 0; i < todosLength; i++) {
        var todoValue = todos[i].todo

        var t = todoTemp(todoValue, i, todos[i].done, todos[i].date)
        renderTodo(t);
    }
}

const __main = function() {
    initTodoLocalStorage()
    bindTodoEvent()
    renderTodos()
}
__main()
