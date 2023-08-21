class Shape {

    constructor(type, fill, text) {
        this = {};
        this.fill = fill;

        type = '';
        this.type = type

        this.text = text;
    }

}

class Circle extends Shape {

    constructor(type, fill, text) {
        super(fill)
    }

    render() {
        return `<${this.type} cx="150" cy="100" r="80" fill="${this.fill}" />`
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