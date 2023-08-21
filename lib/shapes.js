class Shape{

    constructor(fill){
        this = {};
        this.fill = fill;
    }

}

class Circle extends Shape{

    constructor(){
        super(fill)
    }

    render(){
        return `<circle cx="150" cy="100" r="80" fill="green" />`
    }

}

class Square extends Shape{

    constructor(){
        super(fill)
    }

    render(){
        return `<rect width="100%" height="100%" fill="red" />`
    }

}

class Triangle extends Shape{

    constructor(){
        super(fill)
    }

    render(){
        return `<polygon points="150 0, 300 200, 0 200" fill="blue"/>`
    }

}