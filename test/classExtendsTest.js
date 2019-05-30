// good
// class PeekableQueue extends Queue {
//     peek() {
//         return this.queue[0];
//     }
// }

//链式调用
class Jedi{
    
    jump(){
        this.jumping=true;
        return this;
    }

    setHeight(height){
        this.height=height;
        return this;
    }
    getName(){
        return 'lxx';
    }
}

const luke=new Jedi();
luke.jump()
.setHeight(20);
console.log(luke)

class Rey extends Jedi{
    constructor(...args){
        super(...args);
        this.name='Rey';
    }
}

