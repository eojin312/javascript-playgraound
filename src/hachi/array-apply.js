/**
 * apply 메소드를 이용한 명시적인 this 바인딩
 * @type {string[]}
 */

var arr = ['bar'];
var obj =  {name : 'foo', length : 1}


arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj, ['baz']);

console.log(abj);