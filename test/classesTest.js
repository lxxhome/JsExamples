class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }

    pop() {
        const value = this.queue[0];
        // splice() 向数组中添加/删除项目，返回被删除的项目。
        // arrayObjce.spice(index,howmany,item1,......,itemX)
        // index 必须。整数，规定添加/删除项目的位置，使用负数从可数组结尾处规定位置。
        // howmany 必须。要删除的项目数量。设置为0不删除。
        // item1,...,itemX 可选。向数组添加的新项目。
        return this.queue.splice(0, 1);
        // return value;
    }

    //静态方法
    static getAge() {
        return 12;
    }
}
//  let age=Queue.getAge();
//  console.log(age)

module.exports.Queue = Queue;

// let qe = new Queue([1, 2, 3]);
// console.log(qe.pop());
