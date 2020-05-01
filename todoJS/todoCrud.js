const createTodo = function(target, selector) {
    // 记录 做的事情 createTodo
    var selfClass = target.classList
    if(selfClass.contains(selector)) {
        var input = e('.todo-value')
        var inputValue = input.value
        var t = todoTemp(inputValue)
        localCache(inputValue)
        renderTodos()
        clearInputValue(input)
    }
}
const updateTodo = function(target, selector) {
    var selfClass = target.classList
    if(selfClass.contains(selector)) {
        var _self = target;
        var parent = _self.parentElement
        var span = parent.firstElementChild;
        span.classList.add("todos-done")
        var _selfNum = _self.classList[1].split("-")[2]
        setLocalTodo(_selfNum)
    }
}
const cancelTodo = function(target, selector) {
    var selfClass = target.classList
    if(selfClass.contains('todo-cancel')) {
        var _self = target;
        var parent = _self.parentElement
        var span = parent.firstElementChild;
        span.classList.remove("todos-done")
        var _selfNum = _self.classList[1].split("-")[2]
        setLocalTodo(_selfNum, false)
    }
}
const delTodo = function(target, selector) {
    var selfClass = target.classList;
    if(selfClass.contains('todo-del')) {
        var _self = target;
        var parent = _self.parentElement
        var span = parent.firstElementChild;
        parent.remove()

        var _selfNum = _self.classList[1].split("-")[2]
        delTodoFromTodos(_selfNum)
    }
}
