var count = 0;

function clk() {
    var img;
    img = document.getElementById('hato');
    var prog = document.getElementById('prog');
    count += 10;
    prog.value = count;
    if (count > 100) {
        img.src = "img/Karaage_001.jpg"
    } else {
        img.src = "img/hato.jpg"
    }
}

function time() {
    if (count > 0) {
        count--;
    }
    console.log(count);
    var prog = document.getElementById('prog');
    prog.value = count;
}

onload = function () {
    setInterval("time()", 20)
};