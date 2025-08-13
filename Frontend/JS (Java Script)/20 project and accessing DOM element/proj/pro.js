function timer(){
    const timer = document.getElementById("root");
    const now = new Date();
    timer.innerHTML = now.toLocaleTimeString();
};

setInterval(timer,1000);

// setInterval(timer) yeah bhi kaam kr jayga lekin kaise.
// Agar tum setInterval(t) likhte ho, browser us function ko jitni jaldi possible ho chalata rahega (basically event loop free hote hi).
// But tumhare case mein tum toLocaleTimeString() use kar rahe ho, jo seconds ke level tak hi time dikhata hai.
// Isliye tumko lagta hai ki function har 1 second chal raha hai, lekin asal mein wo per millisecond se bhi fast chal raha hai — bas output har second badalta hai.
// Agar tum delay specify nahi karoge toh unnecessary CPU usage hoga.