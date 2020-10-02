(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[283],{UC2o:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),c=(t("B2uJ"),t("+su7"),t("qOys")),r=t.n(c);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"promiseprototypecatch"},l.a.createElement("a",{"aria-hidden":"true",href:"#promiseprototypecatch"},l.a.createElement("span",{className:"icon icon-link"})),"Promise.prototype.catch"),l.a.createElement("p",null,l.a.createElement("code",null,"Promise.prototype.catch")," \u7528\u4e8e\u6307\u5b9a\u53d1\u751f\u9519\u8bef\u65f6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u76f8\u5f53\u4e8e ",l.a.createElement("code",null,".then(null, rejection)"),"\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(r.a,{code:"promiseInstance.catch(onRejected)\n",lang:"js"}),l.a.createElement("h2",{id:"\u63cf\u8ff0"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u63cf\u8ff0"},l.a.createElement("span",{className:"icon icon-link"})),"\u63cf\u8ff0"),l.a.createElement("p",null,"\u5982\u679c Promise \u72b6\u6001\u5df2\u7ecf\u53d8\u6210 Rejected\uff0c\u518d\u629b\u51fa\u9519\u8bef\u662f\u65e0\u6548\u7684\u3002"),l.a.createElement(r.a,{code:"const promise = new Promise((resolve, reject) => {\n    resolve('ok')\n    throw new Erro('test')\n})\n\npromise\n    .then(value => console.log(value))  // Output: ok\n    .catch(err => console.log(err))\n",lang:"js"}),l.a.createElement("p",null,"Promise \u5bf9\u8c61\u7684\u9519\u8bef\u5177\u6709",l.a.createElement("strong",null,"\u5192\u6ce1\u6027\u8d28"),"\uff0c\u4f1a\u4e00\u76f4\u5411\u540e\u4f20\u9012\uff0c\u76f4\u5230\u88ab\u6355\u83b7\u4e3a\u6b62\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u9519\u8bef\u603b\u662f\u4f1a\u88ab\u4e0b\u4e00\u4e2a ",l.a.createElement("code",null,"catch")," \u8bed\u53e5\u6355\u83b7\u3002"),l.a.createElement(r.a,{code:"getJSON('/post/data.json')\n    .then(post => getJSON(post.commentURL))\n    .then(comments => {\n        // do something\n    })\n    .catch(err => {\n        // \u5904\u7406\u524d\u9762\u4e09\u4e2aPromise\u4ea7\u751f\u7684\u9519\u8bef\n    })\n",lang:"js"}),l.a.createElement("p",null,"\u8ddf\u4f20\u7edf\u7684 ",l.a.createElement("code",null,"try/catch")," \u4ee3\u7801\u5757\u4e0d\u540c\u7684\u662f\uff0c\u5982\u679c\u6ca1\u6709\u4f7f\u7528 ",l.a.createElement("code",null,"catch")," \u65b9\u6cd5\u6307\u5b9a\u9519\u8bef\u5904\u7406\u7684\u56de\u8c03\u51fd\u6570\uff0cPromise \u5bf9\u8c61\u629b\u51fa\u7684\u9519\u8bef\u4e0d\u4f1a\u4f20\u9012\u5230\u5916\u5c42\u4ee3\u7801\uff0c\u5373\u4e0d\u4f1a\u6709\u4efb\u4f55\u53cd\u5e94\u3002"),l.a.createElement(r.a,{code:"const foo = () => new Promise((resolve, reject) => resolve(x + 2))  // x \u672a\u58f0\u660e\n\nfoo().then(() => console.log('BINGO!'))\n\nsetTime(() => console.log(123), 200)\n\n// Uncaght (in promise) ReferenceError: x is not defined\n// 123\n",lang:"js"}),l.a.createElement("p",null,"\u5c3d\u7ba1\u6d4f\u89c8\u5668\u4f1a\u6253\u5370\u51fa Promise \u5185\u90e8\u7684\u9519\u8bef\uff0c\u4f46\u662f\u4e0d\u4f1a\u9000\u51fa\u8fdb\u7a0b\u6216\u7ec8\u6b62\u811a\u672c\u6267\u884c\u3002\u8fd9\u5c31\u662f\u8bf4\uff0c",l.a.createElement("strong",null,"Promise \u5185\u90e8\u7684\u9519\u8bef\u4e0d\u4f1a\u5f71\u54cd\u5230 Promise \u5916\u90e8\u7684\u4ee3\u7801"),"\uff0c\u901a\u4fd7\u7684\u8bf4\u6cd5\u5c31\u662f \u300cPromise \u4f1a\u5403\u6389\u9519\u8bef\u300d\u3002"),l.a.createElement(r.a,{code:"Promise.resolve()\n    .catch(err => console.log(err))\n    .then(res => console.log('BINGO!'))\n",lang:"js"}),l.a.createElement("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u56e0\u4e3a\u6ca1\u6709\u62a5\u9519\uff0c\u8df3\u8fc7\u4e86 ",l.a.createElement("code",null,"catch")," \u65b9\u6cd5\uff0c\u76f4\u63a5\u6267\u884c\u540e\u9762\u7684 ",l.a.createElement("code",null,".then()")," \u65b9\u6cd5\u3002\u6b64\u65f6\uff0c\u8981\u662f ",l.a.createElement("code",null,".then()")," \u65b9\u6cd5\u91cc\u9762\u62a5\u9519\uff0c\u5c31\u4e0e\u524d\u9762\u7684 ",l.a.createElement("code",null,".catch()")," \u65e0\u5173\u4e86\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u7528\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5"),l.a.createElement(r.a,{code:"p.then(val => console.log('fulfilled:', val))\n .catch(err => console.log('rejected:', err))\n\n// \u7b49\u540c\u4e8e\np.then(val => console.log('fulfilled:', val))\n .tehn(null, err => console.log('rejected:', err))\n",lang:"js"})))}}}]);