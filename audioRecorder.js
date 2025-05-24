navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        let audioChunks = [];

        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            await analyzeAudio(audioBlob);
        };

        document.getElementById('startRecord').addEventListener('click', () => mediaRecorder.start());
        document.getElementById('stopRecord').addEventListener('click', () => mediaRecorder.stop());
    })
    .catch(err => console.error('Accès au micro refusé', err));
