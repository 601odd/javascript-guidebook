(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[257],{LtJJ:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=(t("B2uJ"),t("+su7"),t("qOys")),i=t.n(l);t("5Yjd");n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u539f\u578b\u5f0f\u7ee7\u627f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u539f\u578b\u5f0f\u7ee7\u627f"},r.a.createElement("span",{className:"icon icon-link"})),"\u539f\u578b\u5f0f\u7ee7\u627f"),r.a.createElement("p",null,"\u539f\u578b\u5f0f\u7ee7\u627f\u662f\u501f\u52a9\u539f\u578b\u57fa\u4e8e\u5df2\u6709\u7684\u5bf9\u8c61\u521b\u5efa\u65b0\u5bf9\u8c61\uff0c\u540c\u65f6\u8fd8\u4e0d\u5fc5\u56e0\u6b64\u521b\u5efa\u81ea\u5b9a\u4e49\u7c7b\u578b\u3002"),r.a.createElement("p",null,"\ud83c\udf30 ",r.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),r.a.createElement(i.a,{code:"function Person(friendship) {\n  function Creator() {}\n  Creator.prototype = friendship;\n  return new Creator();\n}\n",lang:"js"}),r.a.createElement("p",null,"\u5728\u51fd\u6570\u5185\u90e8\uff0c\u5148\u521b\u5efa ",r.a.createElement("strong",null,"\u4e34\u65f6\u6027\u7684\u6784\u9020\u51fd\u6570"),"\uff0c\u7136\u540e\u5c06\u4f20\u5165\u7684\u5bf9\u8c61\u4f5c\u4e3a\u8fd9\u4e2a ",r.a.createElement("strong",null,"\u6784\u9020\u51fd\u6570\u7684\u539f\u578b"),"\uff0c\u6700\u540e\u8fd4\u56de\u8fd9\u4e2a\u4e34\u65f6\u6784\u9020\u51fd\u6570\u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002\u4ece\u672c\u8d28\u4e0a\uff0c\u8be5\u51fd\u6570\u5bf9\u4f20\u5165\u7684\u5bf9\u8c61\u6267\u884c\u4e86\u4e00\u6b21 ",r.a.createElement("strong",null,"\u6d45\u62f7\u8d1d"),"\u3002"),r.a.createElement(i.a,{code:"// \u4f5c\u4e3a\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u57fa\u7840\nconst friendship = {\n  name: 'unamed',\n  friends: ['Amy', 'Ben', 'Tom'],\n};\n\n// \u8fd4\u56de\u65b0\u5b9e\u4f8b\u5bf9\u8c61\uff0c\u8be5\u5b9e\u4f8b\u5bf9\u8c61\u539f\u578b\u4e3a Person\nlet uzi = Person(friendship);\nuzi.name = 'Uzi';\nuzi.friends.push('Peter');\n\nlet kat = Person(friendship);\nkat.name = 'Kat';\nkat.friends.push('Sid');\n\n// \u539f\u578b\u4e2d\u7684\u57fa\u672c\u7c7b\u578b\u5c5e\u6027\u548c\u5f15\u7528\u7c7b\u578b\u5c5e\u6027\u88ab\u4e24\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u5171\u4eab\nconsole.log(uzi.friends);\n// [\"Amy\", \"Ben\", \"Tom\", \"Peter\", \"Sid\"]\n",lang:"js"}),r.a.createElement("p",null,"\u539f\u578b\u5f0f\u7ee7\u627f\u9700\u8981\u6709\u4e00\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u4f5c\u4e3a\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u57fa\u7840\u3002\u5982\u679c\u6709\u8fd9\u4e48\u4e00\u4e2a\u5bf9\u8c61\u7684\u8bdd\uff0c\u53ef\u4ee5\u628a\u5b83\u4f20\u9012\u7ed9\u5b9e\u4f8b\u751f\u6210\u51fd\u6570\uff0c\u7136\u540e\u518d\u6839\u636e\u5177\u4f53\u9700\u6c42\u5bf9\u5f97\u5230\u7684\u5bf9\u8c61\u52a0\u4ee5\u4fee\u6539\u5373\u53ef\u3002"),r.a.createElement("p",null,"ECMAScript 5 \u901a\u8fc7\u65b0\u589e \xa0",r.a.createElement("code",null,"Object.create()")," \u65b9\u6cd5\u89c4\u8303\u5316\u4e86\u539f\u578b\u5f0f\u7ee7\u627f\u3002\u8fd9\u4e2a\u65b9\u6cd5\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a\u4e00\u4e2a\u7528\u4f5c\u65b0\u5bf9\u8c61\u539f\u578b\u7684\u5bf9\u8c61\u548c\u4e00\u4e2a\u4e3a\u65b0\u5bf9\u8c61\u5b9a\u4e49\u989d\u5916\u5c5e\u6027\u7684\u5bf9\u8c61\uff08\u53ef\u9009\uff09\u3002"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u5b9e\u9645\u4e0a\u5c31\u662f\u5c06 Person \u6784\u9020\u51fd\u6570\u66ff\u6362\u6210",r.a.createElement("code",null,"Object.create"))),r.a.createElement(i.a,{code:'const friendship = {\n  name: \'unamed\',\n  friends: [\'Amy\', \'Ben\', \'Tom\'],\n};\n\nlet uzi = Object.create(friendship);\nuzi.name = \'Uzi\';\nuzi.friends.push(\'Peter\');\n\nlet kat = Object.create(friendship);\nkat.name = \'Kat\';\nkat.friends.push(\'Sid\');\n\nconsole.log(uzi.__proto__.friends);\n// ["Amy", "Ben", "Tom", "Peter", "Sid"]\n\nconsole.log(kat.__proto__.friends);\n// ["Amy", "Ben", "Tom", "Peter", "Sid"]\n',lang:"js"}),r.a.createElement("h2",{id:"\u6a21\u5f0f\u7f3a\u9677"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u6a21\u5f0f\u7f3a\u9677"},r.a.createElement("span",{className:"icon icon-link"})),"\u6a21\u5f0f\u7f3a\u9677"),r.a.createElement("p",null,"\u5f15\u7528\u7c7b\u578b\u503c\u7684\u5c5e\u6027\u59cb\u7ec8\u90fd\u4f1a\u5171\u4eab\u76f8\u5e94\u7684\u503c\uff0c\u591a\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u5bf9\u5f15\u7528\u7c7b\u578b\u7684\u64cd\u4f5c\u4f1a\u88ab\u7be1\u6539\u3002")))}}}]);