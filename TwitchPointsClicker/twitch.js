function myFunc() {
    xPathResult = document.evaluate('//*[@aria-label="Claim Bonus"]', document);
    element = xPathResult.iterateNext();
    if(element){
        element.click();
        console.log("Got you some points there m8");
    }
};

setInterval(myFunc, 20000);