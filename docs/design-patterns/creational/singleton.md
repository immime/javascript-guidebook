---
nav:
  title: 设计模式
  order: 10
group:
  title: 创建型
  order: 2
title: 单例模式
order: 1
---

# 单例模式

**单例模式（Singleton）**：保证一个类仅有一个实例，并提供一个访问它的全局访问点

## 功能

- 定义私有命名空间
- 管理代码库模块
- 管理静态变量
- 实现惰性单例

产生一个类的唯一实例

优点：

1. 提供了对唯一实例的受控访问
2. 避免对共享资源的多重占用
3. 节约系统资源

缺点：

1. 扩展性差
2. 指责过重

## 代码实现

```js
const SingleTon = function (name) {
  this.name = name;
  this.instance = null
}

SingleTon.prototype.getName = function () {
  console.log(this.name)
}

SingleTon.prototype.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new SingleTon(name)
  }

  return this.instance;
}

const foo = SingleTon.getInstance('foo')

const bar = SingleTon.getInstance('bar')
```

## 实践应用

- 命名空间
- 使用闭包封装私有变量