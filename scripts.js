document.getElementById('start-camera').addEventListener('click', function() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            const video = document.getElementById('video');
            video.srcObject = stream;
            document.getElementById('capture').disabled = false;

            document.getElementById('capture').addEventListener('click', function() {
                const canvas = document.getElementById('canvas');
                const context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL();
                console.log(imageData); // يمكن تخزين الصورة أو إرسالها للخادم
            });
        })
        .catch(function(error) {
            console.log('Error accessing camera: ', error);
        });
});
