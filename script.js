//პირობა-1
let x = 100;
if (x < 50) {
  console.log(x, "<50");
} else if (x > 20) {
  console.log(x, ">20");
} else {
  console.log("error");
}

//პირობა-2
let value = "mariam";
let result = value == "mariam" ? "true" : "false";
console.log(result);
//pპირობა-3
switch (value) {
  case "mariam":
    console.log("true");
    break;
  default:
    console.log("false");
}
