# todos
## 运行结果图
  ![images](https://github.com/Keviniswhite/todos/blob/master/todo.png)
  ![images](https://github.com/Keviniswhite/todos/blob/master/todo2.jpg)
## 意义
- 练习JavaScript 中EcmaScript 语法， 与 Dom Web API 及 Window LocalStorage 存储 及 标签 data- 属性标准套路
  - 例如
    ```js
      // 事件委托 target 巧妙用法
      // localStorage 客户端存储
      // JSON  parse <== [{}] ==> stringify 互相转换
      // 获取标签 dataset 
    ```
- 练习 函数拆解问题， 只用一个启动函数，剩下套娃式编程
  - 例如
     ```js
          const callback = function() {
            ...
          }

          const bindEvents = function(ele, eventName, callback, iscatche = false) {
            return ele.addEventListener(eventName, callback, iscatche)
          }

          const __main = function() {
            bindEvents(xxx, 'click', callback)
          }
       ```
- 练习 字符串 dom 结构中 特定class 
  - 例如
    ```js
      const tempDom = `
          <div> 
              <span class=${true ? "trueClass" : "falseClass" }>
          </div>
       `
    ```

