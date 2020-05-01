const e = function(sel) {
    return document.querySelector(sel)
}
const log = console.log.bind(console)
const bindEvents = function(ele, eventName, callback, isCache = false) {
    ele.addEventListener(eventName, callback, isCache)
}
