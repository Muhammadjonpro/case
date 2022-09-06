//SwitchCase

let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  console.log("today" + " " + "is" +" "+ day);

let baho1 = "A";

console.log(baho1);
if (baho1 ==="A") {
    console.log("sizning bahoyingiz A");
}else if (baho1 === "B"){
    console.log("sizning bahoyingiz B");
}else if (baho1 === "C"){
    console.log("sizning bahoyingiz C");
}else if(baho1 === "D"){
    console.log("sizning bahoyingiz D");
}else{
    console.log("sizning bahoyingiz Null");
}


let baho = "A";
switch (baho) {
    case "A":
    console.log("sizning bahoyingiz A");
        break;
        case "B":
    console.log("sizning bahoyingiz B");
        break;
        case "C":
    console.log("sizning bahoyingiz C");
        break;
        case "D":
    console.log("sizning bahoyingiz D");
            break;
    default:
        console.log("sizning bahoyingiz Null");
        break;
}