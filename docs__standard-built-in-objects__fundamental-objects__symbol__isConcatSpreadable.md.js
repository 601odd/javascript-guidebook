(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[317],{"O/yv":function(e,a,n){"use strict";n.r(a);var l=n("q1tI"),t=n.n(l),c=(n("B2uJ"),n("+su7"),n("qOys")),o=n.n(c);n("5Yjd");a["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"symbolisconcatspreadable"},t.a.createElement("a",{"aria-hidden":"true",href:"#symbolisconcatspreadable"},t.a.createElement("span",{className:"icon icon-link"})),"Symbol.isConcatSpreadable"),t.a.createElement("p",null,t.a.createElement("code",null,"Symbol.isConcatSpreadable")," \u7528\u4e8e\u914d\u7f6e\u67d0\u5bf9\u8c61\u4f5c\u4e3a ",t.a.createElement("code",null,"Array.prototype.concat()")," \u65b9\u6cd5\u7684\u53c2\u6570\u65f6\u662f\u5426\u5c55\u5f00\u5176\u6570\u7ec4\u5143\u7d20\u3002"),t.a.createElement(o.a,{code:"let s1 = ['c', 'd'][('a', 'b')].concat(s1, 'e'); // ['a', 'b', 'c', 'd', 'e']\ns1[Symbol.isConcatSpreadable]; // undefined\n\nlet s2 = ['c', 'd'];\ns2[Symbol.isConcatSpreadable] = false[('a', 'b')].concat(s2, 'e'); // ['a', 'b', ['c', 'd'], 'e']\n",lang:"js"}),t.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u8bf4\u660e\uff0c\u6570\u7ec4\u7684\u9ed8\u8ba4\u884c\u4e3a\u65f6\u53ef\u4ee5\u5c55\u5f00\uff0c",t.a.createElement("code",null,"Symbol.isConcatSpreadable")," \u9ed8\u8ba4\u7b49\u4e8e ",t.a.createElement("code",null,"undefined"),"\u3002\u8be5\u5c5e\u6027\u7b49\u4e8e ",t.a.createElement("code",null,"ture")," \u65f6\uff0c\u4e5f\u6709\u5c55\u5f00\u7684\u6548\u679c\u3002"),t.a.createElement("p",null,"\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\u6b63\u597d\u76f8\u53cd\uff0c\u9ed8\u8ba4\u4e0d\u5c55\u5f00\u3002\u5b83\u7684 ",t.a.createElement("code",null,"Symbol.isConcatSpreadable")," \u5c5e\u6027\u8bbe\u4e3a ",t.a.createElement("code",null,"true"),"\uff0c\u624d\u53ef\u4ee5\u5c55\u5f00\u3002"),t.a.createElement(o.a,{code:"let obj = { length: 2, 0: 'c', 1: 'd' };\n['a', 'b'].concat(obj, 'e'); // ['a', 'b', obj, 'e']\n\nobj[Symbol.isConcatSpreadable] = true;\n['a', 'b'].concat(obj, 'e'); // ['a', 'b', 'c', 'd', 'e']\n",lang:"js"})))}}}]);