type  Inter = {
    length: number;
}
// T extends Inter 表示泛型T必须时Inter实现类（子类）
function fn3<T extends Inter>(a: T): number{
    return a.length;
}