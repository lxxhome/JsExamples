// Set集合基础示例
function basicSet() {
    let mySet = new Set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);
    let name1 = new String("myText");

    let o = { a: 1, b: 2 };
    let name = "myText";
    let num = 1;
    mySet.add(o);
    mySet.add("myText");
    mySet.add(name);
    mySet.add(name1);
    mySet.add(1);
    console.log(mySet.has(1));
    console.log(mySet);

    mySet.forEach(item => console.log(item.key, item.value));
}

//Set与数组相互转换
function setConvertArray(){
    let set=new Set([1,2,3,4,5,6]),
    array=[...set];
    console.log(set);
    console.log(array);
};

// WeakSet 集合
function weakSet(){
    let set=new WeakSet(),

    key=[1,2,3];
    set.add(key);
    array=[...set]
    console.log(array); 

    //移除原始引用
    //  key=null;
     console.log(key)
    //  console.log(set);
}

weakSet();

