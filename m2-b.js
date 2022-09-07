// Prediciting the MTN Business App of the Year winner 2022

function rollDice () {
    let roll = Math.floor(Math.random()*13) + 1; 
    // 13 Categories
    if (roll == 1) {                            //If it lands on number one, then the words Best Consumer Solution will be printed
        console.log("Best Consumer Solution"); 

    }else if (roll == 2) {
        console.log("Best Enterprise Solution ");

    }else if (roll == 3) {
        console.log("Most Innovative Solution");

    }else if (roll == 4) {
        console.log("Best Gaming Solution");

    }else if (roll == 5) {
        console.log("Best Health Solution");

    }else if (roll == 6) {
        console.log("Best Agricultural Solution");

    }else if (roll == 7) {
        console.log("Best Educational Solution");

    }else if (roll == 8) {
        console.log("Best Financial Solution");

    }else if (roll == 9) {
        console.log("Best Hackathon Solution");

    }else if (roll == 10) {
        console.log("Best South African Solution");

    }else if (roll == 11) {
        console.log("Best Campus Cup Solution");

    }else if (roll == 12) {
        console.log("Best African Solution");

    }else {
        console.log("Huawei AppGallery");
    }
}

rollDice();