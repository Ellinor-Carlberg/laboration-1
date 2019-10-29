function startGame() {
    const firstQuestion = prompt("You are the cute dog Inka and you want to go out and play. You are in the bedroom, one human is sleeping and the other human is in the kitchen. Du you want to go try to wake up the human that is sleeping or do you want to go to the kitchen?");
    {
    if (firstQuestion === "wake")
      alert ("Human: zzZZZzzzzz zzzZZZzzzz. You try to wake up the human, it doesnt work. You go out in the kitchen...");
    
      else if  (firstQuestion === "Wake")
      alert ("Human: zzZZZzzzzz zzzZZZzzzz. You try to wake up the human, it doesnt work. You go out in the kitchen...");
    
      else if  (firstQuestion === "human")
      alert ("Human: zzZZZzzzzz zzzZZZzzzz. You try to wake up the human, it doesnt work. You go out in the kitchen...");
    
      else if  (firstQuestion === "kitchen")
      alert ("You go out in the kitchen...");

      else if  (firstQuestion === "go kitchen")
      alert ("You go out in the kitchen...");

      else if  (firstQuestion === "go to kitchen")
      alert ("You go out in the kitchen...");

      //else -få frågan igen
    }

    const secondQuestion = prompt("Now you are in the kitchen. There is a human eating food and a cat. Do you want to go to the human or do you want to go to the cat?")
    {
        if (secondQuestion === "human") 
        alert("Human: Du you want to do a trick?");
        
        else if  (secondQuestion === "cat")
          alert ("Cat: Hi Inka. You want to go outside? I will help you! Lets go to the sleeping human, I can wake the human for you.");
    }

}

