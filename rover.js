// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{x:0, y:0}]
};
// ======================
// Turn Left
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
    default:
      console.log("ERROR: invalid direction");
  } 
}
// Turn Right
function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
      console.log("ERROR: invalid direction");
  } 
}
// Move Forward
function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
    case "N":
      if (rover.y === 0) {
        console.log("Error: off the grid");
      }
      else {
        rover.y -= 1;
      }
      break;
    case "E":
      if (rover.x === 9){
        console.log("Error: off the grid");
      }
      else {
        rover.x += 1;
      }
      break;
    case "S":
      if(rover.y === 9){
        console.log("Error: off the grid");
      }
      else{
        rover.y += 1;
      }
      break;
    case "W":
      if(rover.x === 0){
        console.log("Error: off the grid");
      }
      else{
        rover.x -= 1;
      }
      break;
    default:
  }
  console.log(`[${rover.x}, ${rover.y}]`);
  let newPos = {x: rover.x, y: rover.y};
  rover.travelLog.push(newPos);
}
// Move Backwards
function moveBackwards(rover) {
  console.log("moveBackwards was called");
  switch (rover.direction){
    case "N":
      if (rover.y === 9) {
        console.log("Error: off the grid");
      }
      else {
        rover.y += 1;
      }
      break;
    case "E":
      if (rover.x === 0){
        console.log("Error: off the grid");
      }
      else {
        rover.x -= 1;
      }
      break;
    case "S":
      if(rover.y === 0){
        console.log("Error: off the grid");
      }
      else{
        rover.y -= 1;
      }
      break;
    case "W":
      if(rover.x === 9){
        console.log("Error: off the grid");
      }
      else{
        rover.x += 1;
      }
      break;
    default:
  }
  console.log(`[${rover.x}, ${rover.y}]`);
  let newPos = {x: rover.x, y: rover.y};
  rover.travelLog.push(newPos);
}
// Movement -- with all the previous posible commands
function movement(rover, command){
  for (let i = 0; i < command.length; ++i){
    switch (command[i]){
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      default:
        console.log(`Error: "${command[i]}" is an invalid command`);
    }
  }
}
// =================================================================
// Here I call the main function, with the commands as argument and I print the Travel Log

movement(rover, "fsbrflf");
console.log(rover.travelLog);
