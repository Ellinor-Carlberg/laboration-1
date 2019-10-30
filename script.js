
function startGame() {
    const allowedActionsWakeHuman = ["wake", "human", "wake human", "wake the human", "wake human up", "wake the human up"]
    const allowedActionsGoToKitchen = ["kitchen", "the kitchen", "to the kitchen" , "go to the kitchen"]
    const isQuestionAnsweredCorrectlyFirstQuestion = false
    
    while (!isQuestionAnsweredCorrectlyFirstQuestion) {
        
        const firstQuestion = prompt("You are the cute dog Inka and you want to go out and play. You are in the bedroom, one human is sleeping and the other human is in the kitchen. Du you want to go try to wake up the human that is sleeping or do you want to go to the kitchen?");
        for (const action of allowedActionsWakeHuman) {
            if (action === firstQuestion.toLowerCase()) {
                alert ("Human: zzZZZzzzzz zzzZZZzzzz. You try to wake up the human, it doesnt work. You go out in the kitchen...");
                isQuestionAnsweredCorrectly = true;
                break;
                // går att anropa en annan funktion/gå till en annan funktion här
            }
        }
        for (const action of allowedActionsGoToKitchen) {
            if (action === firstQuestion.toLowerCase()) {
                alert ("You go out in the kitchen...");
                isQuestionAnsweredCorrectly = true;
                break; 
            }
        }
secondQuestion()
}

function secondQuestion() {
    const allowedActionsTalkToEatingHuman = [ "human", "the human", "to the human", "go to the human"]
    const allowedActionsTalkToCat = ["cat", "the cat", "to the cat" , "go to the cat"]
    const isQuestionAnsweredCorrectlySecondQuestion = false
    
    while (!isQuestionAnsweredCorrectlySecondQuestion) {
        
        const secondQuestion = prompt("Now you are in the kitchen. There is a human eating food and a cat. Do you want to go to the human or do you want to go to the cat?");
        for (const action of allowedActionsTalkToEatingHuman) {
            if (action === secondQuestion.toLowerCase()) {
                alert ("Human: Du you want to do a trick?");
                isQuestionAnsweredCorrectlyTwo = true;
                break;
                // går att anropa en annan funktion/gå till en annan funktion här
            }
        }
        for (const action of allowedActionsTalkToCat) {
            if (action === secondQuestion.toLowerCase()) {
                alert ("Cat: Hi Inka. You want to go outside? I will help you! Lets go to the sleeping human, I can wake the human for you.");
                isQuestionAnsweredCorrectlyTwo = true;
                break;
                // går att anropa en annan funktion/gå till en annan funktion här
            }
        }
    }
}
}
