(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[129],{"4Mny":function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u5269\u4f59\u53c2\u6570"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5269\u4f59\u53c2\u6570"},t.a.createElement("span",{className:"icon icon-link"})),"\u5269\u4f59\u53c2\u6570"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u5269\u4f59\u53c2\u6570\uff08\u4ea6\u79f0 rest \u53c2\u6570\uff09")," \u7528\u4e8e\u83b7\u53d6\u51fd\u6570\u7684\u591a\u4f59\u53c2\u6570\uff0c\u8fd9\u6837\u5c31\u4e0d\u8981\u4f7f\u7528 ",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u4e86\u3002\u5269\u4f59\u53c2\u6570\u642d\u914d\u7684\u53d8\u91cf\u662f\u4e00\u4e2a ",t.a.createElement("strong",null,"\u6570\u7ec4"),"\uff0c\u8be5\u53d8\u91cf\u5c06\u591a\u4f59\u7684\u53c2\u6570\u653e\u5165\u6570\u7ec4\u4e2d\u3002"),t.a.createElement(c.a,{code:"function add(...values) {\n  let sum = 0;\n\n  for (var val of values) {\n    sum += val;\n  }\n\n  return sum;\n}\n\nadd(2, 5, 3) // 10\n",lang:"js"}),t.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u7684 ",t.a.createElement("code",null,"add")," \u51fd\u6570\u662f\u4e00\u4e2a\u6c42\u548c\u51fd\u6570\uff0c\u5229\u7528\u51fd\u6570\u5269\u4f59\u53c2\u6570\uff0c\u53ef\u4ee5\u5411\u8be5\u51fd\u6570\u4f20\u5165\u4efb\u610f\u6570\u76ee\u7684\u53c2\u6570\u3002"),t.a.createElement("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u51fd\u6570\u5269\u4f59\u53c2\u6570\u4ee3\u66ff ",t.a.createElement("code",null,"arguments")," \u53d8\u91cf\u7684\u4f8b\u5b50\u3002"),t.a.createElement(c.a,{code:"// arguments\u53d8\u91cf\u7684\u5199\u6cd5\nfunction sortNumbers() {\n  return Array.prototype.slice.call(arguments).sort();\n}\n\n// rest\u53c2\u6570\u7684\u5199\u6cd5\nconst sortNumbers = (...numbers) => numbers.sort();\n",lang:"js"}),t.a.createElement("p",null,t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u4e0d\u662f\u6570\u7ec4\uff0c\u800c\u662f\u4e00\u4e2a\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\u3002\u6240\u4ee5\u4e3a\u4e86\u4f7f\u7528\u6570\u7ec4\u7684\u65b9\u6cd5\uff0c\u5fc5\u987b\u4f7f\u7528 ",t.a.createElement("code",null,"Array.prototype.slice.call")," \u5148\u5c06\u5176\u8f6c\u4e3a\u6570\u7ec4\u3002\u51fd\u6570\u5269\u4f59\u53c2\u6570\u5c31\u4e0d\u5b58\u5728\u8fd9\u4e2a\u95ee\u9898\uff0c\u5b83\u5c31\u662f\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u7ec4\uff0c\u6570\u7ec4\u7279\u6709\u7684\u65b9\u6cd5\u90fd\u53ef\u4ee5\u4f7f\u7528\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u5229\u7528\u51fd\u6570\u5269\u4f59\u53c2\u6570\u6539\u5199\u6570\u7ec4 ",t.a.createElement("code",null,"push")," \u65b9\u6cd5\u7684\u4f8b\u5b50\u3002"),t.a.createElement(c.a,{code:"function push(array, ...items) {\n  items.forEach(function(item) {\n    array.push(item);\n    console.log(item);\n  });\n}\n\nconst collection = [];\n\npush(collection 1, 2, 3)\n",lang:"js"}),t.a.createElement("h2",{id:"\u533a\u522b\u5bf9\u6bd4"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u533a\u522b\u5bf9\u6bd4"},t.a.createElement("span",{className:"icon icon-link"})),"\u533a\u522b\u5bf9\u6bd4"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u51fd\u6570\u5269\u4f59\u53c2\u6570\u53ea\u5305\u542b\u90a3\u4e9b\u6ca1\u6709\u5bf9\u5e94\u5f62\u53c2\u7684\u5b9e\u53c2\uff1b\u800c ",t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u5305\u542b\u4e86\u4f20\u7ed9\u51fd\u6570\u7684\u6240\u6709\u5b9e\u53c2\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u4e0d\u662f\u4e00\u4e2a\u771f\u5b9e\u7684\u6570\u7ec4\uff1b\u800c\u51fd\u6570\u5269\u4f59\u53c2\u6570\u662f\u771f\u5b9e\u7684 Array \u5b9e\u4f8b\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f60\u80fd\u591f\u5728\u5b83\u4e0a\u9762\u76f4\u63a5\u4f7f\u7528\u6240\u6709\u7684\u6570\u7ec4\u65b9\u6cd5\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"arguments")," \u5bf9\u8c61\u5bf9\u8c61\u8fd8\u6709\u4e00\u4e9b\u9644\u52a0\u7684\u5c5e\u6027 \uff08\u6bd4\u5982 ",t.a.createElement("code",null,"callee")," \u5c5e\u6027\uff09\u3002")),t.a.createElement("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u6ce8\u610f\u4e8b\u9879"},t.a.createElement("span",{className:"icon icon-link"})),"\u6ce8\u610f\u4e8b\u9879"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u51fd\u6570\u5269\u4f59\u53c2\u6570\u4e4b\u540e\u4e0d\u80fd\u518d\u6709\u5176\u4ed6\u53c2\u6570\uff08\u5373",t.a.createElement("strong",null,"\u53ea\u80fd\u662f\u6700\u540e\u4e00\u4e2a\u53c2\u6570"),"\uff09\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002")),t.a.createElement(c.a,{code:"function f(a, ...b, c) { ... } // \u62a5\u9519\n",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u51fd\u6570\u7684 ",t.a.createElement("code",null,"length")," \u5c5e\u6027\uff0c\u4e0d\u5305\u62ec\u51fd\u6570\u5269\u4f59\u53c2\u6570\u3002")),t.a.createElement(c.a,{code:"(function(a) {}).length\n// 1\n\n(function(...a) {}).length\n// 0\n\n(function(a, ...b) {}).length\n// 1\n",lang:"js"})))}}}]);