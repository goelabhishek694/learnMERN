let video = document.querySelector("video");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let captureBtn = document.querySelector(".capture-btn");
let transparentColor = "transparent";
let recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");

let recorder;
let chunks = [];
let constraints = {
    video: true,
    audio:true
}

let shouldRecord = false;

navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
    video.srcObject = stream;

    recorder = new MediaRecorder(stream);
    recorder.addEventListener("start", (e) => {
        //memory
        chunks = [];
    })

    recorder.addEventListener("dataavailable", (e) => {
        chunks.push(e.data);
    });

    recorder.addEventListener("stop", () => {
        //convert video 
        // let blob = new Blob(chunks, { type: 'video/mp4' });

        // download video on desktop
        //store in database
    })


});

//click photo
captureBtnCont.addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    let tool = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    tool.drawImage(video, 0, 0, canvas.width, canvas.height);

    //applying filters on photo
    tool.fillStyle = transparentColor;
    tool.fillRect(0, 0, canvas.width, canvas.height);

    let imageURL = canvas.toDataURL();
    // let img = document.createElement("img");
    // img.src = imageURL;
    // document.body.append(img);

});

recordBtnCont.addEventListener("click", () => {
    
    shouldRecord = !shouldRecord;
    if (shouldRecord) {
        //recording start
        recorder.start();
        //start timer
        startTimer();
    }

    else {
        //stop the recording
        recorder.stop();
        // stop the timer
        stopTimer();
    }

});





