// 知识点默写：
//原型链的理解: 
//实例对象和原型之间的一条链,目的是实现共享属性和继承的。
//继承方式：
//原型链继承,构造函数继承,组合继承,原型式继承,寄生式继承,寄生组合式继承。
//将一个构造函数的原型指向另一个构造函数的实例对象来实现继承
//子类的构造函数继承父类的构造函数,通过call、bind去改变父类构造函数作用域。
//使用原型链对原型属性和方法的继承,借助构造函数对实例的属性继承。
//vuex中mutation直接通过commit修改state---action通过异步dispatch一个mutation然后再commit修改状态。
//getter把state进行简单的过滤,相当于全局的一个计算属性。
//编写一个修改状态的reducer函数两个形参state和action,解构出来一个仓库store,subscribe订阅一个事件,
//然后dispatch分发一个事件,通过action的类型来进行状态修改。
// const store = createStore(
//     reducer, 
//     applyMiddleware(thunk)//redux-thunk
//);
//可以访问外部环境变量的函数
//闭包就是将函数内部和函数外部连接起来的一座桥梁
//全局导航钩子：beforeEach、beforeResolve、afterEach
//路由独享钩子：beforeEnter
//组件独享钩子：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
//beforeCreate()初始化事件、生命周期；created()数据、方法初始化完毕；beforeMount()如果有el挂载点、并且有template模板，通过render函数将template模板渲染为实例的挂载对象$el(渲染中)，mounted()渲染完成并且挂载对象替换挂载点、虚拟dom渲染为真实dom
// Object.defineProperty()劫持各个属性并注入getter和setter方法，当数据变动发布消息给订阅者,局部的更新视图。
// $nextTick()在下次dom更新循环结束之后执行延迟回调，获取更新后的dom
//面向对象：通过构造函数来模拟类，通过prototype来实现类方法的共享；es6通过class来实现类，通过extends来继承父类