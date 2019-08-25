# 文档方法

| 方法                                    | 说明                                                                   |
| --------------------------------------- | ---------------------------------------------------------------------- |
| document.open()                         | 打开一个要写入的文档                                                   |
| document.close()                        | 关闭一个要写入的文档                                                   |
| document.write()                        | 向当前文档写入内容                                                     |
| document.writeIn()                      | 向当前文档写入内容，尾部添加换行符                                     |
| document.elementFromPoint(x,y)          | 获取文档中位于页面指定位置最上层的子元素节点                           |
| document.hasFocus()                     | 表示当前文档之中是否有元素被激活或获得焦点                             |
| document.adoptNode(externalNode)        | 将某个节点，从其原来所在的文档移除，插入当前文档，并返回插入后的新节点 |
| document.importNode(externalNode, deep) | 从外部文档拷贝指定节点，插入当前文档                                   |

## document.open

打开一个要写入的文档。

这将会有一些连带的影响。例如：

- 此时已注册到文档、文档中的节点或文档的 Window 的所有事件监听器会被清除
- 文档中的所有节点会被清除

📖 **语法：**

```js
document.open();
```

- 当 `document.write()` 在页面加载后调用，会发生自动的 `document.open()` 调用。
- 不要和 `window.open()` 方法混淆。`document.open` 可用于重写当前的文档内容或者追加内容，而 `window.open` 是提供了打开一个新的窗口的方法，当前的网页文档内容给你会被保留。由于 Window 是一个全局对象，直接调用 `open(...)` 和 `window.open(...)` 的效果是一样的。

## document.close

用于结束对文档的写入操作，这种写入操作一般由 `document.open()` 打开。

```js
// 打开一个文档，以便写入数据
document.open();

// 写入文档内容
document.write();

// 关闭文档
document.close();
```

## document.write

将一个文本字符串写入一个由 `document.open()` 打开的文档流。

📖 **语法:**

```js
document.write(maskup);
```

参数 `maskup` 为一个包含要写入文档的文本的字符串。

对文档的写入操作主要通过 `document.write()` 方法。该方法主要用在两方面：

- 页面载入过程中用实时脚本创建页面内容
- 用延时脚本创建本窗口或新窗口的内容

> 只有当页面被加载的时候 `document.write()` 函数才会被执行

⚠️ **注意：**

- 因为 `document.write()` 需要向文档流中写入内容，所以，若在一个已关闭（例如，已完成加载）的文档上调用 `document.write()`，就会自动调用 `document.open()`，浙江清空该文档的内容。
- 在由 `deferred` 或 `asynchronous` 属性的 `<script>` 中，`document.write()` 会被忽略，控制台会显示 “A call to `document.write()` from an asynchronously-loaded external script was ignored” 的报错信息

## document.hasFocus

表明当前文档或者当前文档内的节点是否获得了焦点，该方法可用来判断当前文档中的活动元素是否获得了焦点。

📖 **语法:**

```js
const focused = document.hasFocus();
```

🌰 **示例：**

```js
function checkPageFocus() {
  const info = document.getElementById('message');
  if (document.hasFocus()) {
    info.innerHTML = '该页面获得了焦点';
  } else {
    info.innerHTML = '该页面没有获得焦点';
  }
}
```
