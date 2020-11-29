
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    var hour = document.querySelector('.hour').textContent = htime + ":";
    var minute = document.querySelector('.minute').textContent = mtime + ":";
    var second = document.querySelector('.second').textContent = stime;
}, 1000);