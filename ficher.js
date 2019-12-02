const theForm = document.querySelectorAll("input, textarea");
const resetBtn = document.getElementById("Reset");
const inputs = document.querySelectorAll("input");
const sendBtn = document.getElementById("validation");
const textArea = document.querySelector("textarea");


sendBtn.addEventListener("click", e => {
  e.preventDefault()
  
     inputs.forEach(input => {
      if (input.value === ""){
       return alert(`Please verify your ${input.name}`);
       
      } else {
        input.value = "";
        textArea.value = "";
         
      }
    });
 
  });
   
  
document.getElementById("PS").addEventListener("change",function(){
  
    var regexTel =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}$/;
    let y=document.getElementById("PS").value;
    
    if( regexTel.test(y)==false)
          alert("mot de pass incorrect");
    
})
document.getElementById("add").addEventListener("change",function(){
    var regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
    let y=document.getElementById("add").value;
    if( regex.test(y)==false)
    alert("adresse mail incorrecte");
})
for (let i = 0; i < theForm.length; i++) {
    resetBtn.addEventListener("click", e => {
      e.preventDefault();
      theForm[i].value = "";
    });
  }