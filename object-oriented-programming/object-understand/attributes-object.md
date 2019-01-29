## 对象属性描述符

ECMA-262 第五版在定义只有内部才用的特性（attribute）时，描述了属性（property）的各种特征。这些特性时为了实现 JavaScript 引擎用的，因此在 JavaScript 中不能直接访问它们。为了表示特征是内部值，该规范把它们放在了两对儿方括号中。

对象属性描述符的类型分为两种：[数据属性](#数据属性)和[访问器属性](#访问器属性)。

**快速目录：**

* [基本概念](#基本概念)
  * [数据属性](#数据属性)
  * [访问器属性](#访问器属性)
* [描述符详解](#描述符详解)
  * [可写性](#可写性writable)
  * [可配置型](#可配置性configurable)
  * [可枚举性](#可枚举性enumerable)
    * [`propertyIsEnummerable()`](#propertyisenumerable())
  * [Get 和 Set](#get和set)

### 数据属性

数据属性（data property）包含一个数据值的位置，在这个位置可以读取和写入值。数据属性有4个特性。

| 数据属性                       | 说明                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| `[[Configurable]]`（可配置性） | 可配置性决定是否可以使用 `delete` 删除属性，以及是否可以修改属性描述符的特性，默认值为 `true` |
| `[[Enumberable]]`(可枚举性)    | 可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过 `for-in` 循环返回该属性，默认值为 `true` |
| `[[Writable]]`(可写性)         | 可写性决定是否可以修改属性的值，默认值为 `true`              |
| `[[Value]]`(属性值)            | 属性值包含这个属性的数据值，读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。默认值为 `undefined` |

#### 可写性 Writable

可写性决定是否可以修改属性的值，默认值为 `true`。

```js
let foo = { a:1 }
foo.a = 2

console.log(foo.a) 	// 2
```

设置 `writable: false` 后，赋值语句会静默失效。

```js
let foo = { a: 1 }

Object.defineProperty(foo, 'a', {
    writable:false
})

foo.a = 2

console.log(foo.a)  // 1
```

设置 `writable:false` 后，通过 `Object.defineProperty()` 方法改变属性 `value` 的值不会受影响，因为这也意味着在重置 `writable` 的属性值为 `true`。

```js
let foo = { a: 1 }
Object.defineProperty(foo,'a',{
    writable:false
})

console.log(foo.a)  // 1

Object.defineProperty(foo,'a',{
    value:2
})

console.log(foo.a)  // 2
```

#### 可配置性 Configurable

可配置性决定是否可以使用 `delete` 删除属性，以及是否可以修改属性描述符的特性，默认值为 `true`。

设置 `configurable: false` 后，无法使用 `delete` 删除属性。

```js
let foo = { a: 1 };

Object.defineProperty(foo,'a',{
    configurable: false
});

delete foo.a           // false
console.log(foo.a)     // 1
```

一般地，设置 `configurable: false` 后，将无法再使用 `defineProperty()` 方法来修改属性描述符。

```js
let foo = { a: 1 }

Object.defineProperty(foo, 'a', {
    configurable:false
})

// Uncaught TypeError: Cannot redefine property: a
Object.defineProperty(foo,'a',{
    configurable:true
})
```

有一个例外，设置 `configurable: false` 后，只允许 `writable` 的状态从 `true` 变为 `false`。

```js
let foo = { a: 1 }

Object.defineProperty(foo, 'a', {
    configurable:false,
    writable:true
})

foo.a = 2

console.log(foo.a)    // 2

Object.defineProperty(foo,'a',{
    writable:false
})

// 由于writable:false生效，对象foo的bar属性无法修改值，所以foo.bar=3的赋值语句静默失败
foo.a = 3

console.log(foo.a)    // 2
```

#### 可枚举性 Enumerable

可枚举性决定属性是否出现在对象的属性枚举中，具体来说，`for-in` 循环、`Object.keys` 方法、`JSON.stringify` 方法是否会取到该属性。

用户定义的**普通属性默认是可枚举的**，而**原生继承的属性默认是不可枚举的**。

🌰 **示例：**

由于原生继承的属性默认不可枚举，所以只取得自定义的属性 `bar: 1`。

```js
let foo = { a: 1 }

for(let item in foo){
    console.log(foo[item])  // 1
}
```

由于 `enumerable` 被设置为 `false`，在 `for-in` 循环中 `a` 属性无法被枚举出来。

```js
let foo = { a: 1 }

Object.defineProperty( foo, 'a', {enumerable:false} )

for(let item in foo){
    console.log(foo[item])  // undefined
}
```

##### propertyIsEnumerable()

`propertyIsEnumerable()` 方法用于判断对象的属性是否可枚举。

```js
let foo = { a: 1 }

console.log(foo.propertyIsEnumerable('a'))  // true

Object.defineProperty(foo,'a',{enumerable:false})

console.log(foo.propertyIsEnumerable('a'))  // false
```



### 访问器属性

访问器属性不包含数据值，它们包含两个方法分别是 `getter` 和 `setter` 函数（非必需）。

* 在读取访问器属性时，会调用 `getter` 函数，这个函数负责返回有效的值；
* 在写入访问器属性时，会调用 `setter` 函数并传入新值，这个函数负责决定如何处理数据。

| 访问器属性         | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| `[[Configurable]]` | 可配置性决定是否可以使用 `delete` 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。对于直接在对象上定义的属性，这个特性的默认值为 `true` |
| `[[Enumberable]]`  | 可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过for-in循环返回该属性，默认值为 `true` |
| `[[Getter]]`       | 在**读取属性**时调用的函数。默认值为 `undefined`             |
| `[[Setter]]`       | 在**写入属性**时调用的函数。默认值为 `undefined`             |

和数据属性不同，访问器属性**不具有可写性（Writable）**。

* 如果属性同时具有 `getter` 和 `setter` 方法，那么它是一个读 / 写属性。
* 如果它只有 `getter` 方法，那么它是一个只读属性。
* 如果它只有 `setter` 方法，那么它是一个只写属性。读取只写属性总是返回 `undefined`。

#### Getter 访问器

``[[Getter]]`` 是一个隐藏函数，在获取属性值时调用。

给只设置 `get` 方法，没有设置 `set` 方法的对象赋值会静默失败，在严格模式下会报错。

```js
const foo = {
    get a(){
        return 2
    }
}

console.log(foo.a)  // 2

// Invalid
foo.a = 3

console.log(foo.a) 	// 2
```

#### Setter 访问器

``[[Setter]]` 也是一个隐藏函数，在设置属性值时调用，它们的默认值都是 `undefined`。

只设置 `set` 方法，而不设置 `get` 方法，则对象属性值为 `undefined`。

```js
let foo = {
    set a(val){
        return 2
    }
}

foo.a = 1

console.log(foo.a) 	// undefined
```



一般地，`set` 和 `get` 方法需要成对出现的。

```js
const foo ={
    get a(){
        return this._a;
    },
    set a(val){
        this._a = val*2;
    }
}

foo.a = 1

console.log(foo.a)  // 2
```
