/**
 * apply 메소드를 이용한 명시적인 this 바인딩
 * @type {string[]}
 */

var arr = ['bar', 'eojin', 'hachi'];
var obj =  {name : 'foo', length : 1}


// splice() 는 원소 자체를 삭제 delete() 는 원소를 undefined 로만 설정한다.
arr.splice(0, 1); // 0 번째 원소를 기준으로 1개의 원소를 삭제한다.
arr.push('baz');
console.log(arr);
Array.prototype.push.apply(obj, ['baz']);
console.log(abj);