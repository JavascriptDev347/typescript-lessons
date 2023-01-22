// let item: any = {id: 1, name: "12"}
// let item1 = <any>{id: 1, name: "item 1"};
// let item2 = {id: 1, name: "123"} as any;
// item1 = {id: 2};
// item = {id: 4}
// item2 = {name: "R"}
//
// //enum
// enum DoorState {
//     open, closed
// }
//
// function checkDoorState(state: DoorState) {
//     console.log("state", state)
//     switch (state) {
//         case DoorState.open:
//             console.log("opened");
//             break;
//         case DoorState.closed:
//             console.log("close")
//             break;
//     }
// }
// checkDoorState(DoorState.closed)
// enum DoorStateString {
//     open = "Open",
//     close = "Close"
// }
// function alwaysThrows(): never {
//     throw new Error("this will always throw");
//     return -1;
// }
// type AllowedString = "one" | "two" | "three"
// interface IIDName {
//     id: number,
//     name?: string
// }
//
// let idObject: IIDName = {
//     id: 1,
// }
//interface and interface
// interface IWeek {
//     id?: number,
//     name?: string
// }
//
// interface IDescValue {
//     desc: string,
//     value?: string
// }
//
// let objWeek: IWeek | IDescValue = {
//     desc: "a desc"
// }
//
// interface IPerson {
//     id: number,
//     name: string
// }
//
// type PersonProperty = keyof IPerson
//
// function getProperty(key: PersonProperty, value: IPerson) {
//     console.log(`${key} = ${value[key]}`)
// }
// getProperty("id", {id: 1, name: "Rustambek"})
//classes
// class SimpleClass {
//     id: number | undefined
//
//     print(): void {
//         console.log("simple class")
//     }
// }
// implement oliw
// class ClassA {
//     print() {
//         console.log("class A")
//     }
// }
// class ClassB {
//     print() {
//         console.log("class B")
//     }
// }
// interface IPrint {
//     print(): void
// }
//
// class ClassA implements IPrint {
//     print() {
//         console.log("class A")
//     }
// }
//
// class ClassB implements IPrint {
//     print() {
//         console.log("class B")
//     }
// }
//
// function printClass(a: IPrint) {
//     a.print()
// }
//
// let classA = new ClassA()
// let classB = new ClassB()
//
// printClass(classA)
// printClass(classB)
//class constructor
// class ClassWithConstructor {
//     id: number;
//
//     constructor(_id: number) {
//         this.id = _id
//     }
//
// }
//
// let newClassWithConstructor = new ClassWithConstructor(10)
// console.log(newClassWithConstructor)
//class modifier
//public
// class ClassWithPublicProperty {
//     public id: number | undefined
// }
//
// let publicAccess = new ClassWithPublicProperty()
// publicAccess.id = 100
//
//
// //private
//
// class ClassWithPrivateProperty {
//     #id: number;
//
//     constructor(id: number) {
//         this.#id = id
//     }
// }
//
// let privateAccess = new ClassWithPrivateProperty(12)
// privateAccess.#id = 120
//
// class ClassWithCtorMods {
//     constructor(public id: number, private name: string) {
//     }
// }
//
// let myClassMod = new ClassWithCtorMods(1, "test");
// console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.name = ${myClassMod.name}`);
// class ClassWithReadonly {
//     readonly name: string;
//
//     constructor(_name: string) {
//         this.name = _name;
//     }
//
//     setNameValue(_name: string) {
//         this.name = _name;
//     }
// }
//get and set
var ClassWithAccessors = /** @class */ (function () {
    function ClassWithAccessors() {
        this._id = 0;
    }
    Object.defineProperty(ClassWithAccessors.prototype, "id", {
        get: function () {
            console.log("get id property");
            return this._id;
        },
        set: function (value) {
            console.log("set id property");
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return ClassWithAccessors;
}());
var classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log("classWithAccessors.id = ".concat(classWithAccessors.id));
