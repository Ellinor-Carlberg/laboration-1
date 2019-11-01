
function startGame() {
    const allowedActionsTalkToSleepingHuman = ["wake", "human", "wake human", "wake the human", "wake human up", "wake the human up", "i want to wake the human up"]
    const allowedActionsGoToKitchen = ["kitchen", "the kitchen", "to the kitchen" , "go to the kitchen", "I want to go to the kitchen"]
    const isQuestionAnsweredCorrectlyFirstQuestion = false
    
    while (!isQuestionAnsweredCorrectlyFirstQuestion) {  
        const firstQuestion = prompt("You are the cute doggo Inka and you want to go out and play. You are now in the bedroom, one human is sleeping and the other human is in the kitchen. Do you try to wake up the human that is sleeping, or do you go to the kitchen?");
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
    const allowedActionsTalkToEatingHuman = [ "human", "the human", "to the human", "go to the human", "i want to go to the human"]
    const allowedActionsTalkToCat = ["cat", "the cat", "to the cat" , "go to the cat", "i want to go to the cat"]
    const isQuestionAnsweredCorrectlySecondQuestion = false
    
    while (!isQuestionAnsweredCorrectlySecondQuestion) {
        
        const secondQuestion = prompt("Now you are in the kitchen, there is a human eating food and there is a cat. Do you want to go to the human, or do you want to go to the cat?");
        for (const action of allowedActionsTalkToEatingHuman) {
            if (action === secondQuestion.toLowerCase()) {
                thirdQuestion()
                isQuestionAnsweredCorrectlySecondQuestion = true;
                break;
            }
        }
        for (const action of allowedActionsTalkToCat) {
            if (action === secondQuestion.toLowerCase()) {
                alert ("Cat: Hi doggo Inka<3. You want to go outside? I dont, it is cold. But maybe I can come up with a plan, let me think.");
                afterCatQuestion()
                isQuestionAnsweredCorrectlySecondQuestion = true;
                break;
            }
        }
    }
}
function thirdQuestion() {
    const allowedActionsDoATrick = [ "yes", "yes i do", "i do", "trick", "i want to do a trick"]
    const allowedActionsNotDoATrick = ["no", "no i dont", "no i dont want" , "no trick", "i do not want to do a trick", "i dont want to do a trick"]
    const isQuestionAnsweredCorrectlyThirdQuestion = false
    
    while (!isQuestionAnsweredCorrectlyThirdQuestion) {
        
        const thirdQuestion = prompt("Human: Hi doggo Inka. Do you want to do a trick?");
        for (const action of allowedActionsDoATrick) {
            if (action === thirdQuestion.toLowerCase()) {
                alert ("You did a trick and get a doggo candy!");
                fourthQuestion()
                isQuestionAnsweredCorrectlyThirdQuestion = true;
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
    const allowedActionsDoAnotherTrick = [ "trick", "do trick", "do a trick", "i want to do a trick"]
    const allowedActionsTalkToCat = ["cat", "the cat", "to the cat" , "go to the cat", "i want to go to the cat"]
    const isQuestionAnsweredCorrectlyFourthQuestion = false
    
    while (!isQuestionAnsweredCorrectlyFourthQuestion) {
        
        const fourthQuestion = prompt("The human will give you a doggo candy if you do a trick, but really you want to go outside. Hmmmm.... do you want to do a trick or go to the cat?");
        for (const action of allowedActionsDoAnotherTrick) {
            if (action === fourthQuestion.toLowerCase()) {
                alert ("You did a trick and get a doggo candy!");
                endTheGameIfTrick()
                isQuestionAnsweredCorrectlyFourthQuestion = true;
                break;
            }
        }
        for (const action of allowedActionsTalkToCat) {
            if (action === fourthQuestion.toLowerCase()) {
                alert ("Cat: Hi Inka<3. You want to go outside? I dont, it is cold. But maybe I can come up with a plan, let me think.");
                afterCatQuestion()
                isQuestionAnsweredCorrectlyFourthQuestion = true;
                break;
            }
        }
    }
}
function afterCatQuestion() {
    const allowedActionsGoToHuman = [ "human", "to human", "go to human", "human that is eating","go to the human", "i want to go to the human"]
    const allowedActionsPlayWithToy = ["wait", "wait and se", "cat", "i want to wait", "i wait", "wait and see if the cat comes up with a plan"]
    const isQuestionAnsweredCorrectlyafterCatQuestion = false
    
    while (!isQuestionAnsweredCorrectlyafterCatQuestion) {
        
        const afterCatQuestion = prompt("The cat lies down and closes its eyes. What do you want to do now, go to the human that is eating or wait and see if the cat comes up with a plan?");
        for (const action of allowedActionsGoToHuman) {
            if (action === afterCatQuestion.toLowerCase()) {
                thirdQuestion()
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
                alert ("Yeah, the cat is nr1 on your heart! You cant love the cat more!");
                endTheGameIfCat()
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }
        for (const action of scaleTwo) {
            if (action === loveCatQuestion.toLowerCase()) {
                alert("Omg! You think of number 2 but you mean number 5!")
                endTheGameIfCat()
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }
        for (const action of scaleThree) {
            if (action === loveCatQuestion.toLowerCase()) {
                alert("You can only count to 3, you love the cat more than anything else in the world!")
                endTheGameIfCat()
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }
        for (const action of scaleFour) {
            if (action === loveCatQuestion.toLowerCase()) {
                alert("You think 4 because you want to be as cool as the cat. (But really it's a 5 <3!!!)")
                endTheGameIfCat()
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }
        for (const action of scaleFive) {
            if (action === loveCatQuestion.toLowerCase()) {
                alert("Dumb question, the answer is always 5! <3")
                endTheGameIfCat()
                isQuestionAnsweredCorrectlyLoveCatQuestion = true;
                break;
            }
        }
    }
}
function endTheGameIfTrick() {
    alert ("Oh no, you got stuck in the doggo candy loop :(. You didnt go out and play becuse you only thinking about candy now, but on the other hand you got a lot of doggy candies! :D")
    alert ("Thank you hooman for playing my game! - *mlem* Inka <3")

}
function endTheGameIfCat() {
    alert ("Suddenly the cat opens its eyes and say: Inka! Follow me, lets go and wake the sleeping human up...")
    alert("You follow the cat to the human who sleeps, the cat attacks the human's feet and the human wakes up. Now you and the human go out and play! It´s a win-win situation for you and the cat! :3")
    alert ("Thank you hooman for playing my game! - *mlem* Inka <3")
}



