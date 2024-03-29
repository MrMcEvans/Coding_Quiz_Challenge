class Shapes {
    constructor () {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Square extends Shapes {
    render() {
        return `<square x="90 y="50 width ="110 height="110 fill="${this.color}" />`
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`
    }
}

class Triangle extends Shapes {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}
module.exports = {Square, Circle, Triangle};