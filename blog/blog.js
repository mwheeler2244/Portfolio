// social share


// Facebook Share
document.querySelector(".facebook-share").href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;

// Instagram Share 
document.querySelector(".instagram-share").href = `https://www.instagram.com`; 
// Twitter Share
document.querySelector(".twitter-share").href = `https://twitter.com/share?url=${encodeURIComponent(window.location.href)}&text=Check%20out%20this%20Coding%20blog!`;

// LinkedIn Share
document.querySelector(".linkedin-share").href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;


