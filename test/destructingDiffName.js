let node = {
    type: 'Identifier',
    // name: 'foo'
};

let { type: localType, name: localName="bar" } = node;
console.log(localType);
console.log(localName);
console.log(node.name);