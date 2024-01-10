function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    storeml5 = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3a3fLF9fI/model.json', modelReady);
}
function modelReady() {
    storeml5.classify(gotResults);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("sound").innerHTML = results[0].label;
        document.getElementById("confidence").innerHTML = results[0].confidence.toFixed(3);
        document.getElementById("sound").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("confidence").style.color = "rgb("+r+","+g+","+b+")";

        img1 = document.getElementById("red");
        img2 = document.getElementById("orange");
        img3 = document.getElementById("blue");
        img4 = document.getElementById("pink");

        if(results[0].label == "Clap") {
            img1.src = "red.gif";
            document.getElementById("red").style.width = "140px";
            document.getElementById("red").style.marginBottom = "42px";
            document.getElementById("red").style.marginRight = "30px";
            img2.src = "orangestatic.png";
            img3.src = "bluestatic.png";
            img4.src = "pinkstatic.png";
        }
        else if(results[0].label == "Knocking") {
            img1.src = "redstatic.png";
            img2.src = "orange.gif";
            document.getElementById("orange").style.width = "140px";
            document.getElementById("orange").style.marginBottom = "42px";
            document.getElementById("orange").style.marginRight = "21px";
            img3.src = "bluestatic.png";
            img4.src = "pinkstatic.png";
        }
        else if(results[0].label == "Bell") {
            img1.src = "redstatic.png";
            img2.src = "orangestatic.png";
            img3.src = "blue.gif";
            document.getElementById("blue").style.width = "170px";
            document.getElementById("blue").style.marginBottom = "42px";
            document.getElementById("blue").style.marginRight = "21px";
            img4.src = "pinkstatic.png";
        }
        else if(results[0].label == "Background Noise") {
            img1.src = "redstatic.png";
            img2.src = "orangestatic.png";
            img3.src = "bluestatic.png";
            img4.src = "pink.gif";
            document.getElementById("pink").style.width = "170px";
            document.getElementById("pink").style.marginBottom = "42px";
            document.getElementById("pink").style.marginRight = "21px";
        }

    }
}


