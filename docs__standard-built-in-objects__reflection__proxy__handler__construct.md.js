(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[369],{tezY:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"proxy---handlerconstruct"},l.a.createElement("a",{"aria-hidden":"true",href:"#proxy---handlerconstruct"},l.a.createElement("span",{className:"icon icon-link"})),"Proxy - handler.construct"),l.a.createElement("p",null,l.a.createElement("code",null,"handler.construct()")," \u65b9\u6cd5\u4e3b\u8981\u7528\u4e8e\u62e6\u622a ",l.a.createElement("code",null,"new")," \u8fd0\u7b97\u547d\u4ee4\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"const proxy = new Proxy(target, {\n  construct: function(target, property) {\n    // do something\n  },\n});\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"target")),l.a.createElement("td",null,"\u76ee\u6807\u5bf9\u8c61"),l.a.createElement("td",null,"function")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"args")),l.a.createElement("td",null,"\u53c2\u6570\u5217\u8868"),l.a.createElement("td",null,"typed array")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"newTarget")),l.a.createElement("td",null,"\u6700\u521d\u88ab\u8c03\u7528\u7684\u6784\u9020\u51fd\u6570"),l.a.createElement("td",null,"function")))),l.a.createElement("h2",{id:"\u8bf4\u660e"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf4\u660e"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),l.a.createElement("h3",{id:"\u62e6\u622a"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u62e6\u622a"},l.a.createElement("span",{className:"icon icon-link"})),"\u62e6\u622a"),l.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\u7684\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"new proxy(...args)")),l.a.createElement("li",null,l.a.createElement("code",null,"Reflect.construct()"))),l.a.createElement("h3",{id:"\u7ea6\u675f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7ea6\u675f"},l.a.createElement("span",{className:"icon icon-link"})),"\u7ea6\u675f"),l.a.createElement("p",null,"\u5982\u679c\u8fdd\u80cc\u4e86\u4ee5\u4e0b\u7684\u7ea6\u675f\uff0c",l.a.createElement("code",null,"proxy")," \u4f1a\u629b\u51fa TypeError \u5f02\u5e38\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61")),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("p",null,"\u4e0b\u9762\u4ee3\u7801\u6f14\u793a\u5982\u4f55\u62e6\u622a ",l.a.createElement("code",null,"new")," \u64cd\u4f5c\u7b26"),l.a.createElement(c.a,{code:"const proxy = new Proxy(function() {}, {\n  construct: function(target, args, newTarget) {\n    console.log('Called:' + args.join(', '));\n    return { value: args[0] * 10 };\n  },\n});\n\nconsole.log(new proxy(1).value);\n// 'Called: 1'\n// 10\n",lang:"js"}),l.a.createElement("p",null,"\u4e0b\u9762\u4ee3\u7801\u8fdd\u53cd\u4e86\u7ea6\u5b9a\uff0c\u6ca1\u6709\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff1a"),l.a.createElement(c.a,{code:"const proxy = new Proxy(function() {}, {\n  construct: function(target, args, newTarget) {\n    return 1;\n  },\n});\n\nnew proxy();\n// Uncaught TypeError: 'construct' on proxy: trap returned non-object ('1')\n",lang:"js"})))}}}]);