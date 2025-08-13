function timer(){
    const targ = new Date("2028-07-14T00:00:00");
    const curr = new Date();
    const diff = targ - curr;

    const days = Math.floor(diff/(1000*60*60*24)); 
    const hour = Math.floor((diff/(1000*60*60))%24);
    const min = Math.floor((diff/(1000*60))%60);
    const sec = Math.floor((diff/(1000))%60);

    const d = document.getElementById("d");
    d.innerHTML = days;

    const h = document.getElementById("hours");
    h.innerHTML = hour;

    const m = document.getElementById("minutes");
    m.innerHTML = min;

    const s = document.getElementById("second");
    s.innerHTML = sec;
}

setInterval(timer,1000);

// setInterval(timer) yeah bhi kaam kr jayga lekin kaise.
// Agar tum setInterval(t) likhte ho, browser us function ko jitni jaldi possible ho chalata rahega (basically event loop free hote hi).
// But tumhare case mein tum toLocaleTimeString() use kar rahe ho, jo seconds ke level tak hi time dikhata hai.
// Isliye tumko lagta hai ki function har 1 second chal raha hai, lekin asal mein wo per millisecond se bhi fast chal raha hai — bas output har second badalta hai.
// Agar tum delay specify nahi karoge toh unnecessary CPU usage hoga.