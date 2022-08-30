
const { createRobot } = require("./robot.js");

describe("robot", () => {

    it("should expect robot variables", () => {
        const roboto = createRobot(0,1);
        expect(roboto.getX()).toBe(0)
        expect(roboto.getY()).toBe(1)
        expect(roboto.location()).toMatch(/N/) //i case insensitive 

     })

     it("should expect robot turn funcionalities", () => {
        const roboto = createRobot(0,0);
        expect(roboto.turnLeft()).toMatch(/W/) //i case insensitive 
        expect(roboto.turnRight()).toMatch(/N/) //i case insensitive 

    })
    it("should expect robot advance", () => {
        let roboto = createRobot(1,0);
        expect(roboto.advance()).toBe(1) 
        roboto.turnRight()
        expect(roboto.advance()).toBe(2) 

    })
 
    it("should expect robot follow instructions", () => {
        let roboto = createRobot(5,5);
        roboto.instructions("RAALAL")
        expect(roboto.location()).toMatch(/x = 7, y = 6, direction = W/) //i case insensitive 
      

    })

    it("should expect robot errors", () => {
        let roboto = createRobot(0,0);
        roboto.turnLeft()
        expect(roboto.advance()).toMatch(/error/i) //i case insensitive 
        roboto.turnLeft()
        expect(roboto.advance()).toMatch(/error/i) //i case insensitive 
        roboto = createRobot(10,10);    
        expect(roboto.advance()).toMatch(/error/i) //i case insensitive 
        roboto.turnRight()
        expect(roboto.advance()).toMatch(/error/i) //i case insensitive 
    })

    


})