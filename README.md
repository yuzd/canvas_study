# canvas的入门教程

这是一个教大家怎么入门canvas的教程，附带一些酷炫的动画

喜欢的请star一下，谢谢

首先我们创建`<canvas></canvas>`标签，需要注意的是，width和height都是canvas的dom属性，不要在css上写

然后就是js代码

获取他的dom属性，而且需要在window变化的时候变化，我们要监听事件

```javascript
let canvas=document.querySelector('canvas')
//解构赋值
let [w,h]=[canvas.width,canvas.height]=[window.innerWidth,window.innerHeight]
//窗口变化就动态变化
window.addEventListener('resize', () => {
    [w, h] = [canvas.width, canvas.height] = [
        window.innerWidth,
        window.innerHeight
    ];
});
```
接下来我们要获取canvas的api
```javascript
let ctx=canvas.getContext('2d')
```
ctx的api有哪些？
```javascript
ctx.save();
ctx.restore()

ctx.beginPath()
ctx.closePath()

ctx.fillStyle='red'
ctx.strokeStyle='blue'

ctx.fill()
ctx.stroke()

ctx.translate(x,y)
ctx.rotate(deg)

ctx.rect(x1,y1,x2,y2)
ctx.arc(rx,ry,r,start_deg,end_deg)
```

上面就是一些常用的api了，怎么使用它们去构建我们的动画呢？

我们需要面向对象，用es6语法来构建对象，然后生成对象的属性
我们来看具体代码

```javascript
class parent {
    constructor() {
        //初始化对象的位置
        this.x = (Math.random() * 0.5 + 0.1) * x;
        this.y = (Math.random() * 0.5 + 0.1) * y;
        //运动方向矢量
        this.direction = Math.random() * 2 * Math.PI;
        //运动速度矢量
        this.v = Math.random() * 1 + 1;
    }
    updated() {
        this.x += Math.cos(this.direction) * this.v;
        this.y += Math.sin(this.direction) * this.v;
        //开始根据位置来画动画
        this.draw();
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.Rect(this.x, this.y);
        ctx.fill()
    }
}
```
解释一下，根据上面的代码，constructor函数在每次生成对象的过程中都会自动生成对象的坐标（x，y），而对于update函数，每次都会更新对象的坐标，draw函数会根据更新的坐标绘制对象，我们先来看看效果是怎么样的。
全部代码在[canvas代码](./canvas/canvas1.js)

