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
        //开始根据位置来画动画
        this.draw();
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.rect(this.x, this.y, this.r, this.r);
        ctx.fill();
    }
}

const a = new Parent();
function run() {
    a.update();
    requestAnimationFrame(run);
}
run();
