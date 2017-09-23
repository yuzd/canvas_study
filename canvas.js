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
        this.v_x = (Math.random() * 0.2 + 2.3) * Math.cos(this.direction);
        this.v_y = (Math.random() * 0.2 + 2.3) * Math.sin(this.direction);
    }
    update() {
        this._borderLine(this.x, this.y);
        this.x += this.v_x;
        this.y += this.v_y;
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
    _borderLine(x, y, border_x = [40, w - 40], border_y = [40, h - 40]) {
        if (x < border_x[0] || x > border_x[1]) {
            x = Math.min(border_x[1], x);
            x = Math.max(border_x[0], x);
            //更换方向
            this.v_x = -this.v_x;
        }
        if (y < border_y[0] || y > border_y[1]) {
            y = Math.min(border_y[1], y);
            y = Math.max(border_y[0], y);
            //更换方向
            this.v_y = -this.v_y;
        }
        [this.x, this.y] = [x, y];
    }
}

requestAnimationFrame();
const a = new Parent();
function run() {
    a.update();
    requestAnimationFrame(run);
}
run();
