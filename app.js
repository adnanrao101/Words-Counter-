let input = document.querySelector('#input')
// EVENT LISTENER ON BUTTON


    
input.addEventListener('input',()=>{
    let inputPara = document.querySelector('#input').value

     const textWithoutSpaces = inputPara.replace(/\s/g, "");
    
   document.querySelector('#CCWS').innerText = "Characters with spaces  "  + inputPara.length
   document.querySelector('#CCWithoutSpaces').innerText = "Characters withOut spaces  "  + textWithoutSpaces.length
   

     // ✅ Word count (no if)
  let words = inputPara.split(/\s+/).filter(w => w.length > 0).length * (inputPara.length > 0);

  // ✅ Sentence count (no if)
  let sentences = inputPara.split(/[.!?]+/).filter(s => s.trim().length > 0).length * (inputPara.length > 0);

  // ✅ Update DOM
  document.querySelector('#words').innerText = "WORDS " + words;
  document.querySelector('#Sentences').innerText = "Sentences " + sentences;

})