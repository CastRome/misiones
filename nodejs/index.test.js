const { sum, multy, subs, divide, person,map } = require(".");

describe("sum", () => {

    it("must add two number correctly", () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })

})


describe("mult", () => {

    it("must multiply two number correctly", () => {
        expect(multy(4, 5)).toBe(20)
    })
    it("must multiply 10 and 5 correctly", () => {
        expect(multy(10, 5)).toBe(50)
    })

})

describe("subs", () => {

    it("must substract two number correctly", () => {
        expect(subs(2, 1)).toBe(1)
    })

})

describe("divide", () => {

    it("must divide two number correctly", () => {
        expect(divide(3, 2)).toBe(1.5)
    })
    it("must divide 5 by 10  correctly", () => {
        expect(divide(5, 10)).toBe(0.5)
    })

})

describe("person", () => {

    it("must expect Jhon, 33", () => {
        const jhon = person("Jhon", 33);
        //expect(person("Jhon",33)).toEqual({_name:"Jhon",age:33})
        expect(person("Jhon", 33)).toMatchObject({ _name: "Jhon", age: 33 })
        expect(jhon._name).toBe("Jhon")
        expect(jhon.age).toBe(33)

    })
    it("must expect greet", () => {
        const jhon = person("Jhon", 33);
        expect(jhon.greet()).toMatch(/hola/i) //i case insensitive contiene hola

    })


    describe("map", () => {

        it("must call callback :v", () => {

            const handleSubmit = jest.fn();
            map(handleSubmit);
            expect(handleSubmit).toHaveBeenCalled();
        })    
        
    })    


})