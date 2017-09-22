# 一个canvas的入门教程

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