## 背景

公司的项目没有统一的模板引擎，一些页面使用了[artTemplate][artTemplate]，自己要重构的页面引入感觉比较重，所以想实践一下。

update:
*artTemplate采用了`预编译`，瞬秒这个渣渣的模板引擎。`囧`*
*当我做完自己的模板引擎后，感觉其实artTemplate也不重，而且代码肯定会比自己写的好。*


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

* each 只支持以下语法
```
{{each list}}
    <li>{{$index}} - {{$value.user}}</li>
{{/each}}
```
其中`index`和`value`为固定的变量名，表示数组/对象的`key，value`

## 示例
```
// test syntax
$ node test/test_node.js
// test each syntax
$ node test/test_each.js
```

## 开发分析

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

高性能JavaScript模板引擎原理解析
>http://cdc.tencent.com/2012/06/15/%E9%AB%98%E6%80%A7%E8%83%BDjavascript%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90/
[高性能JavaScript模板引擎原理解析]:http://cdc.tencent.com/2012/06/15/%E9%AB%98%E6%80%A7%E8%83%BDjavascript%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90/

## 完