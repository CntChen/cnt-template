## 背景

公司的项目没有统一的模板引擎，一些页面使用了[artTemplate][artTemplate]，自己要重构的页面引入感觉比较重，所以想实践一下。

update: *当我做完自己的模板引擎后，感觉其实artTemplate也不重，而且代码肯定会比自己写的好。*


## 支持语法
参考: [artTemplate 简洁语法版][artTemplate 简洁语法版]

* 数据
`{{variable}}` `{{variable.subVariable}}`
**默认对数据字符串做转义处理**

* if-else
`{{if expression}}` `{{else if}}` `{{else}}` `{{/if}}`

* #
`{{#variable}}` `{{#variable.subVariable}}`
`#` **语法表示不对替换的数据做转义处理**

* each `未开发`

## 分析

### 分词+文本替换

对于*数据*，可以使用捕获+文本替换的方式，主要是JS对象提供了使用属性名的属性访问方式：`Obj.a === Obj[a]`

对于*if-else*，还是可以通过分词，但是因为判断语句是一个表达式，而不是一个可获取的JS对象属性，所以还是需要直接执行字符串形式的语句。



### 分词+字符串语句执行

可以选择执行字符串代码的方法。 `eval` `setTimeout` `setInterval` `Function`

**artTemplate也用Function**

使用`Funciton`是最合适的，因为它允许接收参数。


## Character Entiry

好多要考虑。



## 参考资料
artTemplate
>https://github.com/aui/artTemplate
[artTemplate]:https://github.com/aui/artTemplate

artTemplate 简洁语法版
>https://github.com/aui/artTemplate/wiki/syntax:simple
[artTemplate 简洁语法版]:https://github.com/aui/artTemplate/wiki/syntax:simple

javaScript模板引擎原理，几行代码的事
>http://www.cnblogs.com/hustskyking/p/principle-of-javascript-template.html
[javaScript模板引擎原理，几行代码的事]:http://www.cnblogs.com/hustskyking/p/principle-of-javascript-template.html

## 完