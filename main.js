function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    storeml5 = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3a3fLF9fI/model.json', modelReady);
}
function modelReady() {
    storeml5.classify(gotResults);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("sound").innerHTML = results[0].label;
        document.getElementById("confidence").innerHTML = results[0].confidence.toFixed(3);
    }
}