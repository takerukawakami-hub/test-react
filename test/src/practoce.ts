//オプション引数'？'をつけると引数があってもなくてもどっちでもよくなる
//その場合は引数に必ず？を付ける。

// const User={
//     userId:1,
//     name:'Mika',
//     age:24,
//     email:'take.kijtee@gmail.com'
//     isAvtive: true,

// }
// // //オブジェクトの型を定義することができる。
// // interface Userprops{
// //     userId: number;
// //     name: string;
// //     age: number;
// //     email: string;
// //     isAvtive: boolean;
// // }

// // interface AdminUser extends Userprops{
// //     role?: string; //admin,leaderとか渡したい。。
    
// // // }//classに近い型

// // type UserProps={

// //     userId: number;
// //     name: string;
// //     age: number;
// //     email: string;
// //     isAvtive: boolean;

// // }

// // type AdminProps=UserProps  &{
// //     role?: string;
// // }

// // const createAccount=(accountInfo:AdminProps)=>{
// //     //
// // }

// // createAccount({
// //     userId:1,
// //     name:'Mika',
// //     age:24,
// //     email:'email',
// //     isAvtive: true,
    
// // })

// // //↑vreatAcountの引数を呼び出している。


// //ここからクラスなるものをやるらしい

// class User{
//     userId: number;
//     name: string;
//     age: number;
//     email: string;
//     isActive: boolean;

//     constructor(userId: number, name:string, age: number, email:string, isActive:boolean){
//         //ここでプロパティ（name:value）の初期化を行ってる
//         this.userId = userId;
//         this.name=name;
//         this.age=age;
//         this.email=email;
//         this.isActive=isActive;
//     }

//     public getProfile():string{
//         return `Name:${this.name},Age: ${this.age}`;
//     }
//     //getProfileはデフォルトのメソッドらしい
    
//     static sayHelloWorld(): void{
//         console.log('Hello World');
//     }
//     //戻り値(return)がない場合は'void'で型指定。

//     //static=静的
//     //動かす前に型指定を通してエラーを見つけるのがgoodらしい。

    
// }

// const user1 = new User(1,"Mike",34,'mile@gmail.com',true);

// User.sayHelloWorld();

// user1.getProfile{}
//new user(ここにclassに適応した引数をぶち込んでる)
//public, private, protected←新しい概念
//privateだとconstrctor内でしか実行することができない

// //ここまで41.07、一旦ソースコードを引っ張ってきます…。


// const fooo =(arg:string):string=>{
//     return arg;
// };
// //引数を入れたらそのまま帰ってくる値

// const foo= <T>(arg: T):T =>{
//     return arg;
// }

// foo<string>('Hello World');

//今から

