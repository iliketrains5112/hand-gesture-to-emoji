//https://teachablemachine.withgoogle.com/models/Gfrzk8d6l/


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camer = document.getElementById("camera");
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