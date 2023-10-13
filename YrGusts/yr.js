function myFunc() {
    xPathResult = document.evaluate('//*[@class="wind__gust"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for(var i=0 ; i < xPathResult.snapshotLength; i++ ){
        element = xPathResult.snapshotItem(i);
        if(element){
            msGust = element.innerHTML.replace("(", "").replace(")", "")
            if(isNaN(msGust)){
                continue
            }
            knotGust = msGust * 1.94384
            knotGust = Math.round(knotGust)
            element.innerHTML = element.innerHTML + " <b>" + knotGust + " knots</b>";
        }
    };
   
};

window.setTimeout(myFunc, 500);