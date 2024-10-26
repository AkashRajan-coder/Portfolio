function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
}

// Show the YouTube video modal
document.getElementById("showForm").onclick = function() {
    var videoUrl = "https://www.youtube.com/embed/N3Kg8vEUf30?si=Zss6DXZTew6MCBCY";
    const formContainer = document.getElementById("formContainer");
    document.getElementById("youtubeVideo").src = videoUrl;
    formContainer.style.display = "block"; // Show the container
    formContainer.classList.remove("fade-out"); // Remove fade-out class if present
    formContainer.classList.add("fade-in"); // Add fade-in class
}

// Hide the modal and stop the video
document.getElementById("close").onclick = function() {
    const formContainer = document.getElementById("formContainer");
    formContainer.classList.remove("fade-in"); // Remove fade-in class
    formContainer.classList.add("fade-out"); // Add fade-out class

    // Wait for the fade-out animation to finish, then hide and reset the video
    setTimeout(() => {
        formContainer.style.display = "none"; // Hide the container
        document.getElementById("youtubeVideo").src = ""; // Clear the video URL to stop playback
    }, 300); // Matches CSS transition duration
}
