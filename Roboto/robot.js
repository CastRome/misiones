/*
Brief

Write a robot simulator.

A robot factory's test facility needs a program to verify robot movements.

The robots have three possible movements:

    turn right
    turn left
    advance

Robots are placed on a hypothetical infinite grid, facing a particular
direction (north, east, south, or west) at a set of {x,y} coordinates,
e.g., {3,8}, with coordinates increasing to the north and east.

The robot then receives a number of instructions, at which point the
testing facility verifies the robot's new position, and in which
direction it is pointing.

    The letter-string "RAALAL" means:
        Turn right
        Advance twice
        Turn left
        Advance once
        Turn left yet again
    Say a robot starts at {7, 3} facing north. Then running this stream of instructions should leave it at {9, 4} facing west.

Setup

Install assignment dependencies:
p
bash
$ npm install
Making the test suite pass

Execute the tests with:

$ npm test
*/
// const 
exports.createRobot = (a, b) => {
    let x = a
    let y  = b
    let direction = "N"
  
        
    function turnRight() {

            if (direction === "N") {
                direction = "E";
            } else if (direction === "E") {
                direction = "S";
            } else if (direction === "S") {
                direction = "W";
            } else if (direction === "W") {
                direction = "N";
            }
            return `new direction = ${direction}`
        };
        function   turnLeft() {
            if (direction === "N") {
                direction = "W";
            } else if (direction === "W") {
                direction = "S";
            } else if (direction === "S") {
                direction = "E";
            } else if (direction === "E") {
                direction = "N";
            }
            return `new direction = ${direction}`
        };
        function  advance() {

            if (direction === "N") {
                if(y+1>=10 ){ return "error y direccion > 10" }else{ y=y+1;  return y}
            } else if (direction === "E") {
                if(x+1>=10 ){ return "error x direccion > 10" }else{ x=x+1;  return x}
            } else if (direction === "S") {
                if(y-1<0 ){ return "error y direccion > 10" }else{ y=y-1;  return y}
            } else if (direction === "W") {
                if(x-1<10 ){ return "error x direccion > 10" }else{ x=x-1;  return x}
            }
        };
        function  location() {
           return `x = ${x}, y = ${y}, direction = ${direction}`
        };
        function   getX(){
           return x
        };
        function   getY(){
            return y
        };
        function instructions(instuc){
                
            instuc.split("").map((item)=>{
                if(item==="L"){
                    turnLeft();   
                }else if(item==="R"){
                    turnRight();   
                }else if(item==="A"){
                    advance();   
                }else{  throw new Error("Error de comando");}
                
            })
        }
        return {
            turnRight,turnLeft,advance,location,getX,getY,instructions
        }
};
/*
let roboto = createRobot(10, 10);
roboto.turnLeft();
roboto.advance();
roboto.location();
roboto.turnRight();
roboto.turnRight();
roboto.advance();
roboto.advance();
roboto.location();
roboto.turnRight();
roboto.advance();
roboto.location();
console.log(roboto.getX())
*/