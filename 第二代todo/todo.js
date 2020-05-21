const log = console.log.bind(console)
const e = function(sel) {
    return document.querySelector(sel)
}
const bindEvent = function(ele, eventName, callback, iscache = false) {
    ele.addEventListener(eventName, callback, iscache)
}

const todoTemplate = function(todo, index, todoDone, date) {
    var t = `
        <div class="todo-cell todo-${index} clearfix margin-t-b ">
            <todo-date class= "panel-title">发布时间：${date}</todo-date>
            <span  class='todoItem-${index} ${ todoDone ? 'done' : ''} btn-block margin-t-b'>发布内容：${todo}</span>
            <div class="todo-control float-right margin-t-b ">
                <button class="todo-cancel todo_cancel-${index}  btn btn-warning" >取消</button>
                <button class="todo-done todo_done-${index} btn btn-primary">完成</button>
                <button class="todo-del todo_del-${index} btn btn-danger">删除</button>
            </div>
        </div>
    `
    return t;
}
const submitTodo = function() {
    var resultTodo = e('.todo-result')
    resultTodo.innerHTML = ''
    var todos = JSON.parse(localStorage.todos)
        // 循环 数组里面的内容]
    for (var i = 0; i < todos.length; i++) {
        var todo = todoTemplate(todos[i].todo, i, todos[i].done, todos[i].time)
        renderTodo(todo)
    }
}
const Todo = function() {

}
Todo.prototype.点击发布按钮 = function(target, className) {
    if (target.classList.contains(className)) {
        var todo = e('.todo-input').value
        this.获取TODO并且发布(todo)
    }
};
Todo.prototype.获取TODO并且发布 = function(todo) {
    var todos = JSON.parse(localStorage.todos)
    todos.push({ todo: todo, done: false, time: new Date().toLocaleString() })
    localStorage.todos = JSON.stringify(todos)
    submitTodo()
};



const addTodo = function(event) {
    var target = event.target;
    var todo = new Todo()
        // 点击 todo 提交按钮要做的事情
    todo.点击发布按钮(target, 'todo-submit')
        // if(target.classList.contains('todo-submit')) {
        //     var inputVal = e('.todo-input').value
        //
        //     var todos = JSON.parse(localStorage.todos)
        //     todos.push({todo: inputVal, done: false, time: new Date().toLocaleString()})
        //     localStorage.todos = JSON.stringify(todos)
        //     submitTodo()
        //
        // }
        // 点击取消按钮 ....
    if (target.classList.contains('todo-cancel')) {
        var todoDoneClass = 'done'
        var todoCancelNum = target.classList[1].split("-")[1]
        var todoSpan = e(`.todoItem-${todoCancelNum}`)
        todoSpan.classList.remove(todoDoneClass)

        var todos = JSON.parse(localStorage.todos)
        todos[todoCancelNum].done = false
        localStorage.todos = JSON.stringify(todos)
    }
    // 点击完成按钮 ....
    if (target.classList.contains('todo-done')) {
        var todoDoneClass = 'done'
        var todoDoneNum = target.classList[1].split("-")[1]
        var todoSpan = e(`.todoItem-${todoDoneNum}`)
        todoSpan.classList.add(todoDoneClass)

        var todos = JSON.parse(localStorage.todos)
        todos[todoDoneNum].done = true
        localStorage.todos = JSON.stringify(todos)

    }
    // todo-del
    if (target.classList.contains('todo-del')) {
        var delIndex = parseInt(target.classList[1].split("-")[1])
            // 1 静态删除
        var delTodoParent = e(`.todo-${delIndex}`).remove()

        // 2 缓存删除

        var todos = JSON.parse(localStorage.todos);
        var newTodos = []
        for (var i = 0; i < todos.length; i++) {
            var todo = todos[i]
            if (i !== delIndex) {
                newTodos.push(todo)
            }
        }
        // 覆盖原始数据
        localStorage.todos = JSON.stringify(newTodos)
        submitTodo()
    }
}
const bindEvents = function() {
    var todoContainer = e('.todo-container')
    bindEvent(todoContainer, 'click', addTodo)
}
const renderTodo = function(todo_div) {
    var todoResult = e('.todo-result')
    todoResult.insertAdjacentHTML('beforeend', todo_div)
}

const initTodoLocalStorage = function() {
    if (localStorage.todos === undefined) {
        localStorage.todos = '[]'
    } else {
        submitTodo()
    }

}


const particleLoad = function() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
}
const __main = function() {
    initTodoLocalStorage()
    bindEvents()
    particleLoad()
}
__main()