
function startGame() {
    const allowedActionsTalkToSleepingHuman = ["wake", "human", "wake human", "wake the human", "wake human up", "wake the human up"]
    const allowedActionsGoToKitchen = ["kitchen", "the kitchen", "to the kitchen" , "go to the kitchen"]
    const isQuestionAnsweredCorrectlyFirstQuestion = false
    
    while (!isQuestionAnsweredCorrectlyFirstQuestion) {  
        const firstQuestion = prompt("You are the cute dog Inka and you want to go out and play. You are now in the bedroom, one human is sleeping and the other human is in the kitchen. Do you try to wake up the human that is sleeping, or do you go to the kitchen?");
        for (const action of allowedActionsTalkToSleepingHuman) {
            if (action === firstQuestion.toLowerCase()) {
                alert ("Human: zzZZZzzzzz zzzZZZzzzz. You try to wake up the human with a boop, it doesnt work. You go out in the kitchen...");
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
        
        const secondQuestion = prompt("Now you are in the kitchen, there is a human eating food and a cat. Do you want to go to the human, or do you want to go to the cat?");
        for (const action of allowedActionsTalkToEatingHuman) {
            if (action === secondQuestion.toLowerCase()) {
                thirdQuestion()
                isQuestionAnsweredCorrectlySecondQuestion = true;
                break;
            }
        }
        for (const action of allowedActionsTalkToCat) {
            if (action === secondQuestion.toLowerCase()) {
                alert ("Cat: Hi Inka<3. You want to go outside? I dont, it is cold. But maybe I can come up with a plan, let me think.");
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
        // vill att denna ska kunna göras flera gånger, efter 2 ggr, ska katten avbryta. 
        for (const action of allowedActionsDoAnotherTrick) {
            if (action === fourthQuestion.toLowerCase()) {
                alert ("You did another trick and get one more doggo candy!");
                isQuestionAnsweredCorrectlyFourthQuestion = true;
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
    const allowedActionsPlayWithToy = ["wait", "wait and se", "cat"]
    const isQuestionAnsweredCorrectlyafterCatQuestion = false
    
    while (!isQuestionAnsweredCorrectlyafterCatQuestion) {
        
        const afterCatQuestion = prompt("The cat lies down and closes its eyes. What do you want to do now, go to the human in the kitchen or wait and se if the cat comes up with a plan?");
        for (const action of allowedActionsGoToHuman) {
            if (action === afterCatQuestion.toLowerCase()) {
                alert ("You go to the human!");
                isQuestionAnsweredCorrectlyafterCatQuestion = true;
                break;
            }
        }
        for (const action of allowedActionsPlayWithToy) {
            if (action === afterCatQuestion.toLowerCase()) {
                loveCatQuestion()
                isQuestionAnsweredCorrectlyafterCatQuestion = true;
                break;
            }
        }
    }
}

function loveCatQuestion() {
    const scaleOne = [ "1", "one"]
    const scaleTwo = ["2", "two"]
    const scaleThree = [ "3", "three"]
    const scaleFour = ["4", "four"]
    const scaleFive = [ "5", "five"]
    const isQuestionAnsweredCorrectlyLoveCatQuestion = false
    
    while (!isQuestionAnsweredCorrectlyLoveCatQuestion) {
        
        const loveCatQuestion = prompt("You sit and stare at the cat, you love the cat, it's your best friend. you think: on a scale of 1-5, how much do I love the cat?");
        for (const action of scaleOne) {
            if (action === loveCatQuestion.toLowerCase()) {
                alert ("1!");
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }
        for (const action of scaleTwo) {
            if (action === loveCatQuestion.toLowerCase()) {
                alert("2!")
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }

        for (const action of scaleThree) {
            if (action === loveCatQuestion.toLowerCase()) {
                alert("3!")
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }

        for (const action of scaleFour) {
            if (action === loveCatQuestion.toLowerCase()) {
                alert("4!")
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }

        for (const action of scaleFive) {
            if (action === loveCatQuestion.toLowerCase()) {
                alert("5!")
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }

    }
}
