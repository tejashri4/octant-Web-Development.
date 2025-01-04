const uploadBtn = document.getElementById('upload-btn');
const resumeUpload = document.getElementById('resume-upload');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

uploadBtn.addEventListener('click', () => {
    if (resumeUpload.files.length === 0) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    // Simulate successful upload (replace with actual upload logic)
    setTimeout(() => {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    }, 1000); 
});