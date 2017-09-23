let ca = document.getElementById('canvas');
let ctx = ca.getContext('2d');
let w = (ca.width = window.innerWidth);
let h = (ca.height = window.innerHeight);
let colorRange = [20, 230];
ctx.fillStyle = 'rgb(255,255,255)';
ctx.fillRect(0, 0, w, h);
window.onresize = function() {
    w = ca.width = window.innerWidth;
    h = ca.height = window.innerHeight;
};

//设置方法
function random() {
    if (arguments.length === 1) {
        return (
            'rgba(' +
            Math.floor(random(colorRange[0], colorRange[1])) +
            ',' +
            Math.floor(random(50, 230)) +
            ',' +
            Math.floor(random(50, 230))
        );
    }
    return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
}
//创建远点对象
function Circle() {}

//对于原型进行封装;
Circle.prototype = {
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.vx =
            random(2, 5) *
            Math.sin(random(-Math.PI / 2 + 0.25, Math.PI / 2 - 0.25));
        this.vy = random(4, 6) * Math.cos(random(0.3, Math.PI - 0.2));
        this.vr = random(3, 4);
        this.rMin = random(4, 5);
        this.rMax = random(20, 30);
        this.opacity = 0.9;
        this.color = random('color') + ',' + this.opacity + ')';
    },
    draw: function() {
        //每次绘制提笔;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.rMax, 0, Math.PI * 2, true);
        ctx.fill();
        this.update();
    },
    update: function() {
        this.y += this.vy;
        this.x += this.vx;
        this.vr *= 0.8;
        if (this.rMax > this.rMin) this.rMax -= this.vr;
        else if (this.rMax < this.rMax) {
            circleArray.pop(this);
        }
        if (this.vy > 1) this.vy *= 0.96;
        if (this.vx >= 1) this.vx *= 0.85;
    }
};

let circleArray = [];

//绘制圆;
function arc(x, y) {
    let c = new Circle();
    c.init(x, y);
    circleArray.push(c);
    //防止内存溢出
    if (circleArray.length > 200) {
        circleArray.shift();
    }
}

//让圆动起来
function move() {
    ctx.clearRect(0, 0, w, h);
    circleArray.forEach(function(i) {
        i.draw();
    });
    requestAnimationFrame(move);
}
//开启渲染模式
move();
//监听鼠标的移动;
ca.onmousemove = function(e) {
    e = e || window.event;
    let x = e.pageX;
    let y = e.pageY;
    arc(x, y);
};
