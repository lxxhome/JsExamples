/**js为解释型语言，前面的先执行，后面的后执行。与编译型语言不同，并不是统一编译后再执行，统一编译后再执行的话则会出现body与order的值一直相同 */
let body={data:{name:'test'}};
console.log(body); // { data: { name: 'test' } }
let order=body;
 order.orderToken='1232324';
 console.log(body); // { data: { name: 'test' }, orderToken: '1232324' }
 console.log(order); // { data: { name: 'test' }, orderToken: '1232324' }
 delete body.orderToken;
 console.log(body); // { data: { name: 'test' } }
 console.log(order); // { data: { name: 'test' } }

