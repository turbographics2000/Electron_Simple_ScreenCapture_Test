navigator.mediaDevices.getUserMedia({
    video: {
        mandatory: {
            chromeMediaSource: 'desktop'
        }
    }
}).then(stream => {
    vid.srcObject = stream;
}).catch(err => {
    console.error(err);
});