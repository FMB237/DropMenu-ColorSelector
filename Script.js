const BodyEl=document.querySelector('body');
const SelectEl=document.getElementById('Selection');
const NewText=document.getElementById("Text");
const OptionEl=document.getElementsByTagName("option");

//  console.log(BodyEl,SelectEl,NewText,OptionEl);
SelectEl.addEventListener("change",ChangeOption);
  function ChangeOption(){
    SelectEl_value=SelectEl.value;
    //console.log(SelectEl_value)
  if(SelectEl_value==="blue"){
    BodyEl.style.backgroundColor="blue";
    NewText.textContent="BLUE"
   }
  else if(SelectEl_value==="green"){
    BodyEl.style.backgroundColor="green";
    NewText.textContent="GREEN";
  }
  else if(SelectEl_value==="yellow"){
    BodyEl.style.backgroundColor="Yellow";
    NewText.textContent="YELLOW";
  }
  else if(SelectEl_value==="Pink"){
    BodyEl.style.backgroundColor="pink";
    NewText.textContent="PINK";
  }
  else if(SelectEl_value==="Red"){
    BodyEl.style.backgroundColor="red";
    NewText.textContent="RED";
  }
 


    
  }