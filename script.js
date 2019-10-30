
function startGame() {
    const allowedActionsTalkToSleepingHuman = ["wake", "human", "wake human", "wake the human", "wake human up", "wake the human up"]
    const allowedActionsGoToKitchen = ["kitchen", "the kitchen", "to the kitchen" , "go to the kitchen"]
    const isQuestionAnsweredCorrectlyFirstQuestion = false
    
    while (!isQuestionAnsweredCorrectlyFirstQuestion) {  
        const firstQuestion = prompt("You are the cute dog Inka and you want to go out and play. You are in the bedroom, one human is sleeping and the other human is in the kitchen. Du you want to go try to wake up the human that is sleeping or do you want to go to the kitchen?");
        for (const action of allowedActionsTalkToSleepingHuman) {
            if (action === firstQuestion.toLowerCase()) {
                alert ("Human: zzZZZzzzzz zzzZZZzzzz. You try to wake up the human, it doesnt work. You go out in the kitchen...");
                secondQuestion()
                isQuestionAnsweredCorrectlyFirstQuestion = true; 
                break;
            }
        }
        for (const action of allowedActionsGoToKitchen) {
            if (action === firstQuestion.toLowerCase()) {
                alert ("You go out in the kitchen...");
                secondQuestion()
                isQuestionAnsweredCorrectlyFirstQuestion = true; 
                break;
            }
        }
    }
}

function secondQuestion() {
    const allowedActionsTalkToEatingHuman = [ "human", "the human", "to the human", "go to the human"]
    const allowedActionsTalkToCat = ["cat", "the cat", "to the cat" , "go to the cat"]
    const isQuestionAnsweredCorrectlySecondQuestion = false
    
    while (!isQuestionAnsweredCorrectlySecondQuestion) {
        
        const secondQuestion = prompt("Now you are in the kitchen. There is a human eating food and a cat. Do you want to go to the human or do you want to go to the cat?");
        for (const action of allowedActionsTalkToEatingHuman) {
            if (action === secondQuestion.toLowerCase()) {
                thirdQuestion()
                isQuestionAnsweredCorrectlySecondQuestion = true;
                break;
            }
        }
        for (const action of allowedActionsTalkToCat) {
            if (action === secondQuestion.toLowerCase()) {
                alert ("Cat: Hi Inka. You want to go outside? I dont want to go outside right now, it is cold. But maybe I can help you... Let me think and come back to me later, I may have come up with a plan then.");
                afterCatQuestion()
                isQuestionAnsweredCorrectlySecondQuestion = true;
                break;
            }
        }
    }
}

function thirdQuestion() {
    const allowedActionsDoATrick = [ "yes", "yes i do", "i do", "trick"]
    const allowedActionsNotDoATrick = ["no", "no i dont", "no i dont want" , "no trick"]
    const isQuestionAnsweredCorrectlyThirdQuestion = false
    
    while (!isQuestionAnsweredCorrectlyThirdQuestion) {
        
        const thirdQuestion = prompt("Hi Inka. Do you want to do a trick?");
        for (const action of allowedActionsDoATrick) {
            if (action === thirdQuestion.toLowerCase()) {
                alert ("You did a trick and get a doggo candy!");
                fourthQuestion()
                isQuestionAnsweredCorrectlyThirdQuestion = true;
                //vill att man ska kunna svara ja/nej, göra ett trick max 3 ggr, sen slut. 
                break;
            }
        }
        for (const action of allowedActionsNotDoATrick) {
            if (action === thirdQuestion.toLowerCase()) {
                alert ("You didnt do a trick, but you still a cute doggo.");
                fourthQuestion()
                isQuestionAnsweredCorrectlyThirdQuestion = true;
                break;
            }
        }
    }
}

function fourthQuestion() {
    const allowedActionsDoAnotherTrick = [ "trick", "do trick", "do a trick"]
    const allowedActionsTalkToCat = ["cat", "the cat", "to the cat" , "go to the cat"]
    const isQuestionAnsweredCorrectlyFourthQuestion = false
    
    while (!isQuestionAnsweredCorrectlyFourthQuestion) {
        
        const fourthQuestion = prompt("Hmmmm.... What do you want to do now, do another trick or go to the cat?");
        for (const action of allowedActionsDoAnotherTrick) {
            if (action === fourthQuestion.toLowerCase()) {
                alert ("You did another trick and get one more doggo candy!");
                isQuestionAnsweredCorrectlyFourthQuestion = true;
                //vill att man ska kunna svara ja/nej, göra ett trick max 3 ggr, sen slut. 
                break;
            }
        }
        for (const action of allowedActionsTalkToCat) {
            if (action === fourthQuestion.toLowerCase()) {
                alert ("You go to the cat.");
                isQuestionAnsweredCorrectlyFourthQuestion = true;
                break;
            }
        }
    }
}

function afterCatQuestion() {
    const allowedActionsGoToHuman = [ "human", "to human", "go to human"]
    const allowedActionsPlayWithToy = ["toy", "play", "play with toy", "funny toy", "play with a funny toy"]
    const isQuestionAnsweredCorrectlyafterCatQuestion = false
    
    while (!isQuestionAnsweredCorrectlyafterCatQuestion) {
        
        const afterCatQuestion = prompt("Hmmmm.... What do you want to do now, go to the human in the kitchen or play with a funny toy?");
        for (const action of allowedActionsGoToHuman) {
            if (action === afterCatQuestion.toLowerCase()) {
                alert ("You go to the human!");
                isQuestionAnsweredCorrectlyafterCatQuestion = true;
                break;
            }
        }
        for (const action of allowedActionsPlayWithToy) {
            if (action === afterCatQuestion.toLowerCase()) {
                alert ("You play with the toy.");
                isQuestionAnsweredCorrectlyafterCatQuestion = true;
                break;
            }
        }
    }
}