let input = document.querySelector('#input')
// EVENT LISTENER ON BUTTON


    
input.addEventListener('input',()=>{
    let inputPara = document.querySelector('#input').value

     const textWithoutSpaces = inputPara.replace(/\s/g, "");
    
   document.querySelector('#CCWS').innerText = "Characters with spaces  "  + inputPara.length
   document.querySelector('#CCWithoutSpaces').innerText = "Characters withOut spaces  "  + textWithoutSpaces.length
   

     // ✅ Word count (no if)
  let words = inputPara.split(/\s+/).filter(w => w.length > 0).length * (inputPara.length > 0);
  document.querySelector('#words').innerText = "WORDS " + words;

  // ✅ Sentence count (no if)
  let sentences = inputPara.split(/[.!?]+/).filter(s => s.trim().length > 0).length * (inputPara.length > 0);
  document.querySelector('#Sentences').innerText = "Sentences " + sentences;

   // ✅ Paragraph count 
  let paragraphs = inputPara.split(/\n+/).filter(p => p.trim().length > 0).length * (inputPara.length > 0);
  document.querySelector('#Paragraphs').innerText = "Paragraphs " + paragraphs;

  // ✅ Reading time calculation (average 200 words/min)
  let totalSeconds = ((words / 200) * 60) * (inputPara.length > 0);

  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.round(totalSeconds % 60);
  
  let formattedTime = `${minutes > 0 ? minutes + "m " : ""}${seconds}s`;
  
  document.querySelector('#ReadingTime').innerText = "Reading Time " + formattedTime;
});






































// ✅ Convert to min + sec format
// ✅ Format output (e.g. "1m 12s" or "15s")
// ✅ Update in HTML