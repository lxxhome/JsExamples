var event = new Date();
event.setHours(20);

console.log(event);
// expected output: Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)
// (note: your timezone may vary)

event.setHours(24,0,0);

console.log(event);