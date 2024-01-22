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

let apiConfig: {
    readonly clientKey: string;
    readonly url: string;
}

apiConfig = {
    clientKey: "asdsd",
    url: "sadasdasdas"
}