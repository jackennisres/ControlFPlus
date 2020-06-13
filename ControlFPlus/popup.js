let addButton = document.getElementById("addButton");
let minusButton = document.getElementById("minusButton")


addButton.addEventListener("click", function(){
  let inputBar = document.createElement("INPUT")
  if (document.getElementsByClassName("inputClass").length <= 5){
    inputBar.setAttribute("placeholder", "YOUR WORD HERE")
    inputBar.setAttribute("CLASS", "inputClass")
    document.getElementById("searchDiv").appendChild(inputBar);
  }
});

minusButton.addEventListener("click", function(){
  let inputs = document.getElementsByClassName("inputClass")
  if (inputs.length != 0){
    inputs[inputs.length-1].remove()
  }
})

let findResultsButton = document.getElementById("findResultsButton");
findResultsButton.addEventListener('click', function(){

    let inputs = document.getElementsByClassName("inputClass");
    for(let i = 0; i < inputs.length; i++){
      chrome.storage.sync.set({i: inputs[i].value}, function() {
        console.log('Value is set to ' + inputs[i].value);
      });
    }

});
