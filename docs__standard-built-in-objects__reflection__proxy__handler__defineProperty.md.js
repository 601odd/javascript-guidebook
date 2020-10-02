(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[370],{"+vci":function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");n["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"proxy---handlerdefineproperty"},a.a.createElement("a",{"aria-hidden":"true",href:"#proxy---handlerdefineproperty"},a.a.createElement("span",{className:"icon icon-link"})),"Proxy - handler.defineProperty"),a.a.createElement("p",null,a.a.createElement("code",null,"handler.defineProperty()")," \u65b9\u6cd5\u4e3b\u8981\u7528\u4e8e\u62e6\u622a ",a.a.createElement("code",null,"Object.defineProperty()")," \u64cd\u4f5c\u3002"),a.a.createElement("h2",{id:"\u8bed\u6cd5"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},a.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),a.a.createElement(c.a,{code:"const proxy = new Proxy(target, {\n  defineProperty: function(target, property, descriptor) {\n    // do something\n  },\n});\n",lang:"js"}),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u53c2\u6570"),a.a.createElement("th",null,"\u8bf4\u660e"),a.a.createElement("th",null,"\u7c7b\u578b"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"target")),a.a.createElement("td",null,"\u76ee\u6807\u5bf9\u8c61"),a.a.createElement("td",null,"object")),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"property")),a.a.createElement("td",null,"\u5f85\u68c0\u7d22\u5176\u63cf\u8ff0\u7684\u5c5e\u6027\u540d"),a.a.createElement("td",null,"string")),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("code",null,"descriptor")),a.a.createElement("td",null,"\u5f85\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26"),a.a.createElement("td",null,"string")))),a.a.createElement("h2",{id:"\u8bf4\u660e"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf4\u660e"},a.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),a.a.createElement("h3",{id:"\u62e6\u622a"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u62e6\u622a"},a.a.createElement("span",{className:"icon icon-link"})),"\u62e6\u622a"),a.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\u7684\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"Object.defineProperty()")),a.a.createElement("li",null,a.a.createElement("code",null,"Reflect.defineProperty()")),a.a.createElement("li",null,a.a.createElement("code",null,"proxy.property = 'value'"))),a.a.createElement("h3",{id:"\u7ea6\u675f"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u7ea6\u675f"},a.a.createElement("span",{className:"icon icon-link"})),"\u7ea6\u675f"),a.a.createElement("p",null,"\u5982\u679c\u8fdd\u80cc\u4e86\u4ee5\u4e0b\u7684\u7ea6\u675f\uff0c",a.a.createElement("code",null,"proxy")," \u4f1a\u629b\u51fa TypeError \u5f02\u5e38\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,"\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u7231\u4e0d\u53ef\u6269\u5c55\uff0c\u5c06\u4e0d\u80fd\u6dfb\u52a0\u5c5e\u6027"),a.a.createElement("li",null,"\u4e0d\u80fd\u6dfb\u52a0\u6216\u8005\u4fee\u6539\u4e00\u4e2a\u5c5e\u6027\u4e3a\u4e0d\u53ef\u914d\u7f6e\u7684\uff0c\u5982\u679c\u5b83\u4e0d\u4f5c\u4e3a\u4e00\u4e2a\u76ee\u6807\u5bf9\u8c61\u7684\u4e0d\u53ef\u914d\u7f6e\u7684\u5c5e\u6027\u5b58\u5728\u7684\u8bdd"),a.a.createElement("li",null,"\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u5b58\u5728\u4e00\u4e2a\u5bf9\u5e94\u7684\u53ef\u914d\u7f6e\u5c5e\u6027\uff0c\u8fd9\u4e2a\u5c5e\u6027\u53ef\u80fd\u4e0d\u4f1a\u662f\u4e0d\u53ef\u914d\u7f6e\u7684"),a.a.createElement("li",null,"\u5982\u679c\u4e00\u4e2a\u5c5e\u6027\u5728\u76ee\u6807\u5bf9\u8c61\u4e2d\u5b58\u5728\u5bf9\u5e94\u7684\u5c5e\u6027\uff0c\u90a3\u4e48 ",a.a.createElement("code",null,"Object.defineProperty(target, prop, descriptor)")," \u5c06\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38"),a.a.createElement("li",null,"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c",a.a.createElement("code",null,"false")," \u4f5c\u4e3a ",a.a.createElement("code",null,"handler.defineProperty")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u7684\u8bdd\u5c06\u4f1a\u629b\u51fa ",a.a.createElement("code",null,"TypeError")," \u5f02\u5e38")),a.a.createElement("h2",{id:"\u793a\u4f8b"},a.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},a.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),a.a.createElement("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u6f14\u793a\u5982\u4f55\u62e6\u622a\u5bf9\u76ee\u6807\u5bf9\u8c61\u7684 ",a.a.createElement("code",null,"Object.defineProperty()")," \u64cd\u4f5c\uff1a"),a.a.createElement(c.a,{code:"const proxy = new Proxy(\n  {},\n  {\n    defineProperty: function(target, prop, descriptor) {\n      console.log('Called: ' + prop);\n      return true;\n    },\n  }\n);\n\nconst desc = {\n  configurable: true,\n  enumerable: true,\n  value: 10,\n};\n\nObject.defineProperty(proxy, 'a', desc);\n// \"Called: a\"\n",lang:"js"}),a.a.createElement("p",null,"\u5f53\u8c03\u7528 ",a.a.createElement("code",null,"Object.defineProperty()")," \u6216\u8005 ",a.a.createElement("code",null,"Reflect.defineProperty()"),"\uff0c\u4f20\u9012\u7ed9 ",a.a.createElement("code",null,"defineProperty")," \u7684 ",a.a.createElement("code",null,"descriptor")," \u6709\u4e00\u4e2a\u9650\u5236\uff0c\u53ea\u6709\u4ee5\u4e0b\u5c5e\u6027\u624d\u6709\u7528\uff0c\u975e\u6807\u51c6\u7684\u5c5e\u6027\u5c06\u4f1a\u88ab\u65e0\u89c6\uff1a"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"enumerable")),a.a.createElement("li",null,a.a.createElement("code",null,"configurable")),a.a.createElement("li",null,a.a.createElement("code",null,"writable")),a.a.createElement("li",null,a.a.createElement("code",null,"value")),a.a.createElement("li",null,a.a.createElement("code",null,"get")),a.a.createElement("li",null,a.a.createElement("code",null,"set"))),a.a.createElement(c.a,{code:"const proxy = new Proxy(\n  {},\n  {\n    defineProperty(target, prop, descriptor) {\n      console.log(descriptor);\n      return Reflect.defineProperty(target, prop, descriptor);\n    },\n  }\n);\n\nObject.defineProperty(proxy, 'name', {\n  value: 'proxy',\n  type: 'custom',\n});\n// { value: 'proxy' }\n",lang:"js"})))}}}]);