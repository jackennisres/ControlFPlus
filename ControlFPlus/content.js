console.log("Content Script Is Loaded...")

let myValues = [];
let myOrigonalBody = document.getElementsByTagName("body");

chrome.storage.onChanged.addListener(function(changes, namespace) {
        myValues = [];

        for(var key in changes){
          if(changes[key].newValue != ""){
            myValues.push(changes[key].newValue);
          }
        }
        console.log(myValues)

        let body = document.getElementsByTagName("body");

        for (var i = 0; i < body.length; i++){
          var txt = body[i].innerHTML;
          var tokens = txt.split(/(<.*?>)/);
          for (var j = 0; j < tokens.length; j++){
            if (tokens[j].charAt(0) !== '<'){
              tokens[j] = tokens[j].replace(myValues,'<span class="redact">'+myValues+'</span>');
            }
          }

          body[i].innerHTML = tokens.join('');
        }

});
