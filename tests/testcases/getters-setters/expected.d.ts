interface A {
}
interface B {
}
interface C {
}
declare class D {
    get a(): A;
    get b(): B;
    set b(_: B);
    readonly c: C;
}
export { D };
