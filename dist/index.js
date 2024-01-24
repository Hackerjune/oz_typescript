"use strict";
// let nums :number[] = [1, 2, 3, 4]
// //배열을 만들땐 변수 선언 후 배열 안 요소의 타입과 배열을 선언한다는 [] 기호까지 붙여준다
// let strs: string[] = ["1", "2"]
// nums.push(7)
// for (const str of strs) {
//         str.charAt 
// }
//  let moniter : {brand: string; price: number}
//  moniter = {
//     brand: "lg"
//     price: 3000
//  }
// 타입 추론은 타입을 지정하지 않아도 객체에 따라 타입을 추론해줌
// readonly 프로퍼티 (처음 할당 후 변경 불가능)
// let apiConfig: {
//     readonly clientKey: string;
//     readonly url: string;
// }
// apiConfig = {
//     clientKey: "asdsd",
//     url: "sadasdasdas"
// }
// 타입 별칭 (type alias)
// class와 유사
// type CHAMP = {
//     r: string;
//     name: string;
//     feat: string;
// }
// let Zak: CHAMP = {
//     r: "bounce",
//     name: "Zak",
//     feat: "zell"
// }
// let Zed: CHAMP = {
//     r: "shadow",
//     name: "Zed",
//     feat: "nin"
// }
// let champion: CHAMP[];
// champion.push(Zak)
// champion.push(Zed)
// 중첩객체
// 그냥 타입 별칭이용
//////////////////////////////////
// 함수 
//매개변수에 타입 지정
// function add(name: string){
//     return name;
// }
// add("jun")
// 유니언타입
//인터페이스 (객체의 구조를 정의 => 확장 및 조합이 용이)
// interface Person {
//     readonly name: string;
//     age: number;
//     void(): void;   // 메서드 호출 가능
// }
// interface Student extends Person {
//     studentNumber: number;
// }
// const student: Student = {
//     name: "jun",
//     age: 21,
//     studentNumber: 1,
//     void() {
//         console.log("hello");       
//     },
// }
//튜플
//고정된 크기의 배열 (정한 타입의 순서대로 요소를 작성해야함)
// let myTuple: [string, number, boolean]
// myTuple = ["jun", 21, true]; //ok
// myTuple = ["jun", "21", false] //error
// enum
//여러상수를 그룹화하는 것이 목적
// 타입 추론 -> 명시적인 타입 지정이 없어도 코드 문맥에 따라 타입 추론
// function add(x: number, y:number): number{
//     return x + y;
// }
// const n = add(10,5)
// 타입 단언 as (타입)
const someValue = "hi";
const len = someValue.length;
