//https://teachablemachine.withgoogle.com/models/Gfrzk8d6l/


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id = 'captured_image' src = '" + data_uri +"'/>";
    })
}
console.log('ml5 version: ', ml5.version);
ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Gfrzk8d6l/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    speech_data_1 = "The first prediciton is: " + prediction_1;
    spech_data_2 = "The second prediction is: "+ prediciton_2;
    utterThis= new SpeechSynthesisUtterance(prediction_1 + prediction_2);
    synth.speak(utterThis);
}
//https://teachablemachine.withgoogle.com/models/Gfrzk8d6l/

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach('#camera')

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>"
    });
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Gfrzk8d6l/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!")
}

function gotResult(error, results){
    if (error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();

        if (prediction_1 == "Thumbs up"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        }
        if (prediction_1 == "Peace/Victory"){
            document.getElementById("update_emoji").innerHTML = "&#9996;"
        }
        if (prediction_1 == "Nice/Perfect"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        }

        if (prediction_2 == "Thumbs up"){
            document.getElementById("update_emoji2").innerHTML = "&#128076;"
        }
        if (prediction_2 == "Peace/Victory"){
            document.getElementById("update_emoji2").innerHTML = "&#9996;"
        }
        if (prediction_2 == "Nice/Perfect"){
            document.getElementById("update_emoji2").innerHTML = "&#128076;"
        }
    }
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult)
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1 = "The first prediction is: " + prediction_1
    speak_data_2 = "The second prediction is: " + prediction_2
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
    synth.speak(utterThis)
};