(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[351],{"65R7":function(e,n,l){"use strict";l.r(n);var a=l("q1tI"),t=l.n(a),r=(l("B2uJ"),l("+su7"),l("qOys")),c=l.n(r);l("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"arrayprototypefill"},t.a.createElement("a",{"aria-hidden":"true",href:"#arrayprototypefill"},t.a.createElement("span",{className:"icon icon-link"})),"Array.prototype.fill()"),t.a.createElement("p",null,t.a.createElement("code",null,"Array.prototype.fill()")," \u65b9\u6cd5\u7528\u4e8e\u5c06\u4e00\u4e2a\u56fa\u5b9a\u503c\u586b\u5145\u5230\u6570\u7ec4\u4e2d\u4ece\u8d77\u59cb\u7d22\u5f15\u5230\u7ec8\u6b62\u7d22\u5f15\u5185\u7684\u5168\u90e8\u5143\u7d20\u3002"),t.a.createElement("h2",{id:"\u8bed\u6cd5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},t.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),t.a.createElement(c.a,{code:"arr.fill( value [, startIndex [, endIndex] ] )\n",lang:"js"}),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53c2\u6570"),t.a.createElement("th",null,"\u8bf4\u660e"),t.a.createElement("th",null,"\u7c7b\u578b"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("code",null,"value")),t.a.createElement("td",null,"\u586b\u5145\u6570\u7ec4\u5143\u7d20\u7684\u503c"),t.a.createElement("td",null,"any")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("code",null,"startIndex")),t.a.createElement("td",null,"\u8d77\u59cb\u7d22\u5f15\uff0c\u9ed8\u8ba4\u4e3a 0\u3002"),t.a.createElement("td",null,"number")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("code",null,"endIndex")),t.a.createElement("td",null,"\u7ed3\u675f\u7d22\u5f15\uff0c\u9ed8\u8ba4\u4e3a ",t.a.createElement("code",null,"arr.length")," \u3002"),t.a.createElement("td",null,"number")))),t.a.createElement("h2",{id:"\u63cf\u8ff0"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u63cf\u8ff0"},t.a.createElement("span",{className:"icon icon-link"})),"\u63cf\u8ff0"),t.a.createElement("p",null,"\u5177\u4f53\u586b\u5145\u533a\u95f4\u59cb\u4e8e ",t.a.createElement("code",null,"startIndex"),"\uff0c\u7ed3\u675f\u4f46\u4e0d\u5305\u62ec\u4e8e ",t.a.createElement("code",null,"emdIndex"),"\uff08\u534a\u5f00\u534a\u95ed\u533a\u95f4\uff09"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5f53 ",t.a.createElement("code",null,"startIndex")," \u4e3a\u8d1f\u6570\uff0c\u5219\u5f00\u59cb\u7d22\u5f15\u4e3a ",t.a.createElement("code",null,"arr.length + startIndex")),t.a.createElement("li",null,"\u5f53 ",t.a.createElement("code",null,"endIndex")," \u4e3a\u8d1f\u6570\uff0c\u5219\u7ed3\u675f\u7d22\u5f15\u4e3a ",t.a.createElement("code",null,"arr.length + endIndex"))),t.a.createElement("h2",{id:"\u793a\u4f8b"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},t.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),t.a.createElement(c.a,{code:"[1, 2, 3].fill(4)\n// [4, 4, 4]\n\n[1, 2, 3].fill(4, 1)\n// [1, 4, 4]\n\n[1, 2, 3].fill(4, 1, 2)\n// [1, 4, 3]\n\n[1, 2, 3].fill(4, 1, 1)\n// [1, 2, 3]\n\n[1, 2, 3].fill(4, 3, 3)\n// [1, 2, 3]\n\n[1, 2, 3].fill(4, -3, -2)\n// [4, 2, 3]\n\n[1, 2, 3].fill(4, NaN, NaN)\n// [1, 2, 3]\n\n[1, 2, 3].fill(4, 3, 5);\n// [1, 2, 3]\n\nArray(3).fill(4)\n// [4, 4, 4]\n\n[].fill.call({length: 3}, 4)\n// {0: 4, 1: 4, 2: 4, length: 3}\n\n// Object by reference\nvar arr = Array(3).fill({})\n// [{}, {}, {}];\n\narr[0].hi = 'hi';\n// [{hi: 'hi'}, {hi: 'hi'}, {hi: \"hi\"}]\n",lang:"js"})))}}}]);