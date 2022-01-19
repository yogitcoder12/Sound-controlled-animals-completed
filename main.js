
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/q_UciXYnD/model.json' , modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results) {
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";

        img = document.getElementById('alien1');
        
        if(results[0].label == "meow")
        {
            img.src = 'https://media2.giphy.com/media/12F1G3ylb5mK7m/giphy.gif';
            
        }else if(results[0].label == "barking")
        {
            img.src = 'https://c.tenor.com/YwK6lFqdG_QAAAAM/dog-dance.gif';
        }
        else{
            img.src = 'https://i.gifer.com/origin/87/87632c3c8763b305f56f49ad45e9990e.gif';
        }
    }
}