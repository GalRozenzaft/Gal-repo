function buttonOnClick() {
  //
  //   alert("foo");
  console.log("time", Date.now());
}

let i = 0;

function button2Click() {
  while (i < 40000) {
    console.log("something");
    i++;
  }
  i = 0;
}
