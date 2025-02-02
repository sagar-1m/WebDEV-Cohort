// algorithm to determine what to do based on traffic light color

function trafficLight(color) {
  if (color === "green") {
    return "Go";
  } else if (color === "yellow") {
    return "Slow down";
  } else {
    return "Stop";
  }
}

let work = trafficLight("green");
console.log(work);
// console.log(trafficLight("green"));
