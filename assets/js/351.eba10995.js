(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{340:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"date-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-对象"}},[t._v("#")]),t._v(" Date 对象")]),t._v(" "),s("p",[t._v("Date 对象是 Javascript 语言中内置的数据类型，用于提供日期和时间的操作接口。Date 对象基于 1970 年 1 月 1 日（世界标准时间）起的毫秒数。")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("用法一")]),t._v("：不带 "),s("code",[t._v("new")]),t._v(" 操作符时，像一个函数一样调用。它将忽略所有传入的参数，并返回当前日期和时间的一个字符串表示")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("用法二")]),t._v("：使用 "),s("code",[t._v("new")]),t._v(" 操作符，且不带参数时，将根据当前时间和日期创建一个 Date 对象。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("用法三")]),t._v("：可接受一个数字参数（ Number 数据类型），该参数表示设定时间与 1970 年 1 月 1 日 0 点之间的毫秒数。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[s("strong",[t._v("用法四")]),t._v("：可接受一个字符串参数（String 数据类型），参数形式类似于 "),s("code",[t._v("Date.parse()")]),t._v(" 方法。但 "),s("code",[t._v("parse()")]),t._v(" 方法返回的是一个数字，而 "),s("code",[t._v("Date()")]),t._v(" 函数返回的是一个对象。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dateString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("关于标准的日期时间字符串中前置 0 的处理，也类似于 Date.parse()方法，若有前置 0，则相当于 UTC 时间，若没有，则相当于本地时间。其余情况一般都为本地时间。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("用法五")]),t._v("：可接受参数形式类似于 "),s("code",[t._v("Date.UTC()")]),t._v(" 方法的参数，但 "),s("code",[t._v("Date.UTC()")]),t._v(" 方法返回是一个毫秒数，且是 UTC 时间，而 "),s("code",[t._v("Date()")]),t._v(" 函数返回是一个对象，且是本地时间。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" year"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" day"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hour "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minutes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" milliseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("⚠️ "),s("strong",[t._v("注意")]),t._v("：需要注意的是只能通过调用 Date 构造函数来实例化日期对象：以常规函数调用它（即不加 "),s("code",[t._v("new")]),t._v(" 操作符）将会返回一个字符串，而不是一个日期对象。另外，不像其他 JavaScript 类型，"),s("code",[t._v("Date")]),t._v(" 对象没有字面量格式。")]),t._v(" "),s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("p",[t._v("⚠️ "),s("strong",[t._v("注意")]),t._v("：当 Date 作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为 13 或者分钟数为 70），相邻的数值会被调整。比如 "),s("code",[t._v("new Date(2013, 13, 1)")]),t._v(" 等于 "),s("code",[t._v("new Date(2014, 1, 1)")]),t._v("，它们都表示日期 2014-02-01（注意月份是从 0 开始的）。其他数值也是类似，"),s("code",[t._v("new Date(2013, 2, 1, 0, 70)")]),t._v(" 等于 "),s("code",[t._v("new Date(2013, 2, 1, 1, 10)")]),t._v("，都表示时间 2013-03-01T01:10:00。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("类型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("代表自 1970 年 1 月 1 日 00:00:00（世界标准时间）起经过的毫秒数。")]),t._v(" "),s("td",[t._v("string")])]),t._v(" "),s("tr",[s("td",[t._v("dateString")]),t._v(" "),s("td",[t._v("表示日期的字符串值。该字符串应该能被 "),s("code",[t._v("Date.parse()")]),t._v(" 方法识别")]),t._v(" "),s("td",[t._v("string")])]),t._v(" "),s("tr",[s("td",[t._v("year")]),t._v(" "),s("td",[t._v("代表年份的整数值。为了避免 2000 年问题最好指定 4 位数的年份; 使用 "),s("code",[t._v("1998")]),t._v(", 而不要用 "),s("code",[t._v("98")]),t._v("。")]),t._v(" "),s("td",[t._v("number")])]),t._v(" "),s("tr",[s("td",[t._v("month")]),t._v(" "),s("td",[t._v("代表月份的整数值从 0（1 月）到 11（12 月）。")]),t._v(" "),s("td",[t._v("number")])]),t._v(" "),s("tr",[s("td",[t._v("day")]),t._v(" "),s("td",[t._v("代表一个月中的第几天的整数值，从 1 开始。")]),t._v(" "),s("td",[t._v("number")])]),t._v(" "),s("tr",[s("td",[t._v("hour")]),t._v(" "),s("td",[t._v("代表一天中的小时数的整数值（24 小时制）。")]),t._v(" "),s("td",[t._v("number")])]),t._v(" "),s("tr",[s("td",[t._v("minute")]),t._v(" "),s("td",[t._v("分钟数。")]),t._v(" "),s("td",[t._v("number")])]),t._v(" "),s("tr",[s("td",[t._v("second")]),t._v(" "),s("td",[t._v("秒数。")]),t._v(" "),s("td",[t._v("number")])]),t._v(" "),s("tr",[s("td",[t._v("millisecond")]),t._v(" "),s("td",[t._v("表示时间的毫秒部分的整数值。")]),t._v(" "),s("td",[t._v("number")])])])]),t._v(" "),s("ul",[s("li",[t._v("如果没有输入任何参数，则 Date 的构造器会依据系统设置的当前时间来创建一个 Date 对象。")]),t._v(" "),s("li",[t._v("如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有提供 day 参数）或者 0。")]),t._v(" "),s("li",[t._v("JavaScript 的时间是由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。Date 对象的范围是-100,000,000 天至 100,000,000 天（等效的毫秒值）。")]),t._v(" "),s("li",[t._v("JavaScript 的 Date 对象提供了数个 UTC 时间的方法，也相应提供了当地时间的方法。")])]),t._v(" "),s("blockquote",[s("p",[t._v("UTC，也就是我们所说的格林威治时间，指的是 time 中的世界时间标准。而当地时间则是指执行 JavaScript 的客户端电脑所设置的时间。")])]),t._v(" "),s("h2",{attrs:{id:"构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[t._v("#")]),t._v(" 构造函数")]),t._v(" "),s("h3",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Date.prototype")])]),t._v(" "),s("td",[t._v("表示 Date 构造函数的原型，允许为 Date 实例对象添加属性方法。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.length")])]),t._v(" "),s("td",[t._v("值是 7，为该构造函数可接受的参数个数。")])])])]),t._v(" "),s("h3",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Date.now()")])]),t._v(" "),s("td",[t._v("返回自 1970 年 1 月 1 日 00:00:00 UTC （世界标准时间）到当前时间的毫秒数。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.parse()")])]),t._v(" "),s("td",[t._v("解析一个表示某个日期的字符串，并返回从 1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的 UTC 时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为 "),s("code",[t._v("NaN")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.UTC()")])]),t._v(" "),s("td",[t._v("接受的参数同日期构造函数接受最多参数时一样，返回从 1970-1-1 00:00:00 UTC 到指定日期的毫秒数。")])])])]),t._v(" "),s("h2",{attrs:{id:"原型对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型对象"}},[t._v("#")]),t._v(" 原型对象")]),t._v(" "),s("p",[t._v("Date 对象没有可以直接读写的属性，所有对日期和时间的访问都需要通过方法。")]),t._v(" "),s("p",[t._v("Date 对象的大多数方法分为两种形式：")]),t._v(" "),s("ul",[s("li",[t._v("使用本地时间")]),t._v(" "),s("li",[t._v("使用 UTC 时间")])]),t._v(" "),s("h3",{attrs:{id:"conversion-getter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conversion-getter"}},[t._v("#")]),t._v(" Conversion getter")]),t._v(" "),s("p",[t._v("Conversion getter 类方法从 Date 对象返回一个字符串，表示指定的时间")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("释义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toString()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回本地时区的日期字符串。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toUTCString()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回 UTC 时间的日期字符串。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toISOString()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回 Date 对象的标准的日期时间字符串格式的字符串。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toDateString()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回 Date 对象的日期部分的字符串。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toTimeString()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回 Date 对象的时间部分的字符串。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toJSON()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回一个符合 JSON 格式的日期字符串，与 toISOString 方法的返回结果完全相同。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toLocaleString()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toString()")]),t._v(" 方法的本地化转换。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toLocaleTimeString()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toTimeString()")]),t._v(" 方法的本地化转换。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toLocaleDateString()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.toDateString()")]),t._v(" 方法的本地化转换。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.valueOf()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回距离 1970 年 1 月 1 日 0 点的毫秒数。")])])])]),t._v(" "),s("h3",{attrs:{id:"getter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getter"}},[t._v("#")]),t._v(" Getter")]),t._v(" "),s("p",[t._v("Date 对象提供了一系列 Getter 类方法，用来获取实例对象某个方面的值。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.getTime()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回距离 1970 年 1 月 1 日 0 点的毫秒数，同 "),s("code",[t._v("valueOf()")]),t._v("。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.getTimezoneOffset()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回当前时间与 UTC 的时区差异，以分钟表示（8*60=480 分钟），返回结果考虑到了夏令时因素。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("s",[t._v("Date.prototype.getYear()​")]),t._v(" 👎")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("s",[t._v("返回距离 1900 年的年数（已过时）。")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.get[UTC]FullYear()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回指定日期对象的年份（四位数年份时返回四位数字）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.get[UTC]Month()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回指定日期对象的月份（0-11）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.get[UTC]Date()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回指定日期对象的月份中的第几天（1-31）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.get[UTC]Day()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回指定日期对象的星期中的第几天（0-6）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.get[UTC]Hours()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回指定日期对象的小时（0-23）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.get[UTC]Minutes()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回指定日期对象的分钟（0-59）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.get[UTC]Seconds()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回指定日期对象的秒数（0-59）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("Date.prototype.get[UTC]Milliseconds()")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("返回指定日期对象的微秒数（0-999）。")])])])]),t._v(" "),s("p",[t._v("⚠️ "),s("strong",[t._v("注意")]),t._v("：以上方法中含 "),s("code",[t._v("UTC")]),t._v(" 则为以世界时间为标准。")]),t._v(" "),s("h3",{attrs:{id:"setter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setter"}},[t._v("#")]),t._v(" Setter")]),t._v(" "),s("p",[t._v("Date 对象提供了一系列 Setter 类方法，用来设置实例对象的各个方面。")]),t._v(" "),s("p",[t._v("Setter 方法基本与 Getter 方法相对应，Setter 方法传入类似于 "),s("code",[t._v("Date.UTC()")]),t._v(" 的参数，返回调整后的日期的内部毫秒数。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("Date.prototype.setTime()")])]),t._v(" "),s("td",[t._v("通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间，对于早于 1970-1-1 00:00:00 UTC 的时间可使用负值。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.prototype.setYear()")])]),t._v(" "),s("td",[t._v("用于设置年份。请使用 "),s("code",[t._v("Date.prototype.set[UTC]FullYear()")]),t._v(" 方法代替。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.prototype.set[UTC]FullYear()")])]),t._v(" "),s("td",[t._v("根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.prototype.set[UTC]Month()")])]),t._v(" "),s("td",[t._v("根据本地时间为指定日期对象设置月份。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.prototype.set[UTC]Date()")])]),t._v(" "),s("td",[t._v("根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.prototype.set[UTC]Hours()")])]),t._v(" "),s("td",[t._v("根据本地时间为指定日期对象设置小时数。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.prototype.set[UTC]Minutes()")])]),t._v(" "),s("td",[t._v("根据本地时间为指定日期对象设置分钟数。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.prototype.set[UTC]Seconds()")])]),t._v(" "),s("td",[t._v("根据本地时间为指定日期对象设置秒数。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Date.prototype.set[UTC]Milliseconds()")])]),t._v(" "),s("td",[t._v("根据本地时间为指定日期对象设置毫秒数。")])])])]),t._v(" "),s("p",[t._v("⚠️ "),s("strong",[t._v("注意")]),t._v("：星期只能获取，不能设置。")]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("h3",{attrs:{id:"普通函数调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通函数调用"}},[t._v("#")]),t._v(" 普通函数调用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Mon Apr 02 2018 15:00:00 GMT+0800 (中国标准时间)"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018/4/2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Mon Apr 02 2018 15:00:00 GMT+0800 (中国标准时间)"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'string'")]),t._v("\n")])])]),s("h3",{attrs:{id:"不带参数的构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不带参数的构造函数"}},[t._v("#")]),t._v(" 不带参数的构造函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mon Apr 02 2018 15:00:00 GMT+0800 (中国标准时间)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mon Apr 02 2018 15:00:00 GMT+0800 (中国标准时间)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'object'")]),t._v("\n")])])]),s("h3",{attrs:{id:"带数字参数的构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带数字参数的构造函数"}},[t._v("#")]),t._v(" 带数字参数的构造函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("86400000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "object"')]),t._v("\n")])])]),s("h3",{attrs:{id:"带字符串参数的构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带字符串参数的构造函数"}},[t._v("#")]),t._v(" 带字符串参数的构造函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4/2/2018'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mon Apr 02 2018 00:00:00 GMT+0800 (中国标准时间)")]),t._v("\nDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4/2/2018'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1522598400000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "object"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "number"')]),t._v("\n")])])]),s("p",[t._v("关于标准的日期时间字符串中前置 0 的处理，也类似于 "),s("code",[t._v("Date.parse()")]),t._v(" 方法，若有前置 0，则相当于 UTC 时间，若没有，则相当于本地时间。其余情况一般都为本地时间。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'04/02/2018'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mon Apr 02 2018 00:00:00 GMT+0800 (中国标准时间)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-4-2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mon Apr 02 2018 00:00:00 GMT+0800 (中国标准时间)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-04-02'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mon Apr 02 2018 00:00:00 GMT+0800 (中国标准时间)")]),t._v("\n")])])]),s("h3",{attrs:{id:"带-utc-参数的构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带-utc-参数的构造函数"}},[t._v("#")]),t._v(" 带 UTC 参数的构造函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fri Aug 12 2016 00:00:00 GMT+0800 (中国标准时间)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1470931200000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "object"')]),t._v("\n\nDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1470960000000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2016")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "number"')]),t._v("\n")])])]),s("ul",[s("li",[t._v("使用参数类似于 "),s("code",[t._v("Date.parse()")]),t._v(" 函数的方法时，如果日期对象超出范围，浏览器会自动将日期计算成范围内的值。")]),t._v(" "),s("li",[t._v("使用参数类似于 "),s("code",[t._v("Date.UTC()")]),t._v(" 函数的方法时，如果日期对象超出范围，浏览器会提示 "),s("code",[t._v("Invalid Date")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sat Sep 01 2018 00:00:00 GMT+0800 (中国标准时间)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sat Sep 01 2018 00:00:00 GMT+0800 (中国标准时间)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-8-32'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Invalid Date")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018-9-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sat Sep 01 2018 00:00:00 GMT+0800 (中国标准时间)")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);