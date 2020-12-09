var btnTranslate = document.querySelector('#btn-translate');

var txtInput = document.querySelector('#txt-input');

var outputDiv = document.querySelector('#output');


// var serverurl = "https://api.funtranslations.com/translate/minion.json";
var serverurl = "https://api.funtranslations.com/translate/navi.json";


// 


function getTranslationUrl(input)  {

return serverurl + '?' + 'text=' + input


}


function errorHandler(error) {

    console.log('error', error);
    alert('something with server ! try after some time')
}

function clickHandler() {     



// console.log ('click')
// console.log ('txtinput',txtInput.value)
  
// outputDiv.innerText= "shshshshsh" + txtInput.value;


var inputText = txtInput.value      //taking input

                 //fetching czlling server for processing
fetch (getTranslationUrl(inputText)) 

  .then(response => response.json())
  .then(json => { 
      
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;      // output

  })
.catch(errorHandler)

};

btnTranslate.addEventListener('click',clickHandler)




