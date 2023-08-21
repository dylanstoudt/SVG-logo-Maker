class Shape {

    constructor(fill, type, text) {
        this = {};
        this.fill = fill;
        if (type === 'c')
            this.shape = new Circle();
        if (type === 's')
            this.shape = new Square();
        if (type === 't');
            this.shape = new Triangle();
        this.text = text;
    }

}

class Circle extends Shape {

    constructor() {
        super(fill)
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`
    }

}

class Square extends Shape {

    constructor() {
        super(fill)
    }

    render() {
        return `<rect width="100%" height="100%" fill="${this.fill}" />`
    }

}

class Triangle extends Shape {

    constructor() {
        super(fill)
    }

    render() {
        return `<polygon points="150 0, 300 200, 0 200" fill="${this.fill}"/>`
    }

}