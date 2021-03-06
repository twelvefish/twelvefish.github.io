type  Inter = {
    length: number;
}
// T extends Inter 表示泛型T必须时Inter实现类（子类）
function fn3<T extends Inter>(a: T): number{
    return a.length;
}

let e: unknown;
let s:string;
e = 10;
s = e;

e = "hello";
// 判斷e為string型別時，才將e賦值給s
if(typeof e === "string"){
    s = e;
}