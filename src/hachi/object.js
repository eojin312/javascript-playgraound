/**
 * 객체 생성 javascript
 */

//object() 를 이용해서 foo 빈 객체 생성

var foo = {
    name : 'foo'
    ,age : 30
    ,gender : 'male'
    ,major : 'computer sciences'
};

//foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

foo.major = 'electronics engineering';
foo['full-Name'] = 'foo bar';

/**
 * 생성자 함수
 * @type {Function}
 */
var add = new Function('x', 'y', 'return x + y');
console.log(add(3, 4));

/**
 * 함수 = 객체 라는 것을 증명하기위한 메소드
 * @param x
 * @param y
 * @returns {*}
 */
function sum(x, y) {
    return x + y;
}
sum.result = add(3, 2);
sum.status = 'OK';

console.log(sum.result);
console.log(sum.status);

/**
 * 함수를 다른 함수 인자로 넘겨버린 메소드
 * @param func
 */
var foo = function (func) {
    func();
}
foo(function () {
    console.log('Function can be used as the argument');
});