class Todo {
    constructor(n) {
        this.todoContainer = '.todo-container'
    }
    static new() {
        return new this
    }
    todoStart() {
        this.bindTodoEvent()
    }
    e(selector) {
        return document.querySelector(selector)
    }
    bindEvents(ele, eventName, callback, isCache = false) {
        var ele = this.e(ele)
        ele.addEventListener(eventName, callback, isCache)
    }

    actionTodo(target) {
        // 创建todo
        createTodo(target, "todo-submit")
        // 更新todo
        updateTodo(target, 'todo-done')
        // cancelTodo
        cancelTodo(target, 'todo-cancel')
        //
        delTodo(target, 'todo-del')
    }
    todoClick(event) {
        var target = event.target;
        this.actionTodo(target)
    }
    bindTodoEvent() {
        this.bindEvents(this.todoContainer, "click", this.todoClick.bind(this))
    }

}

class initTodoLocal extends Todo {
    constructor() {
        super()
    }

    static new() {
        return new this;
    }
    initTodoLocalStorage() {
        if(!localStorage.todos) {
            localStorage.todos = '[]'
        }
        return localStorage.todos
    }
}
const dir = console.dir.bind(console)

var todo = Todo.new().todoStart();
// var initTodo = initTodoLocal.new().initTodoLocalStorage()
log( initTodoLocal.new())
