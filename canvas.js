let canvas = document.querySelector('canvas');
//解构赋值
let [w, h] = ([canvas.width, canvas.height] = [
    window.innerWidth,
    window.innerHeight
]);
window.addEventListener('resize', () => {
    [w, h] = [canvas.width, canvas.height] = [
        window.innerWidth,
        window.innerHeight
    ];
});

let ctx = canvas.getContext('2d');

class Parent {
    constructor() {
        //初始化对象的位置
        this.x = (Math.random() * 0.5 + 0.1) * w;
        this.y = (Math.random() * 0.5 + 0.1) * h;
        console.log(this.x, this.y);
        //大小
        this.r = Math.random() * 30 + 20;
        //运动方向矢量
        this.direction = Math.random() * 2 * Math.PI;
        //运动速度矢量
        this.v = Math.random() * 1 + 1;
    }
    update() {
        this.x += Math.cos(this.direction) * this.v;
        this.y += Math.sin(this.direction) * this.v;
        this._borderLine(this.x, this.y);
        //开始根据位置来画动画
        this.draw();
    }
    draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.rect(this.x, this.y, this.r, this.r);
        ctx.fill();
    }
    _borderLine(x, y, border_x = [20, w - 20], border_y = [20, h - 20]) {
        if (x < border_x[0] || x > border_x[1]) {
            x = Math.min(border_x[1], x);
            x = Math.max(border_x[0], x);
            //更换方向
            this.direction = Math.PI / 2 - this.direction;
        }
        if (y < border_y[0] || y > border_y[1]) {
            x = Math.min(border_x[1], y);
            y = Math.max(border_x[0], y);
            //更换方向
        }
        [this.x, this.y] = [x, y];
    }
}

const a = new Parent();
function run() {
    a.update();
    requestAnimationFrame(run);
}
run();
