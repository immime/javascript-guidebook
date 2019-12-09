(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{382:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nan"}},[t._v("#")]),t._v(" NaN")]),t._v(" "),s("p",[t._v("全局属性 "),s("strong",[s("code",[t._v("NaN")])]),t._v(" 的值表示不是一个数字（Not-A-Number）。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性特性")]),t._v(" "),s("th",[t._v("布尔值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("writable")])]),t._v(" "),s("td",[s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("enumerable")])]),t._v(" "),s("td",[s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("configurable")])]),t._v(" "),s("td",[s("code",[t._v("false")])])])])]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("NaN")]),t._v(" 是一个全局对象的属性。")]),t._v(" "),s("li",[s("code",[t._v("NaN")]),t._v(" 属性的初始值就是 "),s("code",[t._v("NaN")]),t._v("，和 "),s("code",[t._v("Number.NaN")]),t._v(" 的值一样。")]),t._v(" "),s("li",[t._v("编码中很少直接使用到 "),s("code",[t._v("NaN")]),t._v("。通常都是在计算失败时，作为 "),s("code",[t._v("Math")]),t._v(" 的某个方法的返回值出现的（例如："),s("code",[t._v("Math.sqrt(-1)")]),t._v("）或者尝试将一个字符串解析成数字但失败了的时候（例如："),s("code",[t._v("parseInt('blabla')")]),t._v("）。")])]),t._v(" "),s("p",[t._v("返回 "),s("code",[t._v("NaN")]),t._v(" 的情况总结：")]),t._v(" "),s("ul",[s("li",[t._v("无穷大除以无穷大")]),t._v(" "),s("li",[t._v("给任意负数做开放运算")]),t._v(" "),s("li",[t._v("算术运算符与不是数字或无法转换为数字的操作数一起使用")]),t._v(" "),s("li",[t._v("字符串解析为数字")])]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("h3",{attrs:{id:"值校验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#值校验"}},[t._v("#")]),t._v(" 值校验")]),t._v(" "),s("p",[t._v("不可使用等号运算符来判断一个值是否为 "),s("code",[t._v("NaN")]),t._v("。必须采用 "),s("code",[t._v("Number.isNaN()")]),t._v(" 或 "),s("code",[t._v("isNaN()")]),t._v("函数进行判断。")]),t._v(" "),s("p",[t._v("在执行自比较中，"),s("code",[t._v("NaN")]),t._v(" 是唯一与自身不全等的值。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\tfalse")]),t._v("\n\nNumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true;")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true;")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueIsNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueIsNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueIsNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueIsNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("isNaN()")]),t._v(" 前先检查一下这个值是否是数字类型，即可避免隐式类型转换的问题。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("detectIsNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);