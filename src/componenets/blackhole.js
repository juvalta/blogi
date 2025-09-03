class blackhole {
    constructor(x, y) {
        this.pos = createVector(x,y, m);
        this.mass = m;
        this.rs = (2 * g * this.mass) / (c * c);
    }

    show() {
        fill(0);
        circle(this.pos.x, this.pos.y, rs*2);
    }

}
