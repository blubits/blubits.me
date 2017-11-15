function drawTiles(H, S, L) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var cw = 100;
    var ch = 100;
    var rows = Math.round(canvas.height / ch) + 1;
    var cols = Math.round(canvas.width / cw) + 1;
    console.log(rows, cols);

    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {
            ctx.fillStyle = getRandomColor(H, S, L);
            ctx.fillRect(x * cw, y * ch, cw, ch);
        }
    }

    var tiles = canvas.toDataURL();
    return tiles;
}

function rand(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor(H, S, L) {
    // var H = 235;
    // var S = 65.8;
    // var L = 29.8;
    return 'hsl(' + H + ", "+ rand(Math.round(S) - 1, Math.round(S) + 1) + "%, " + rand(Math.round(L) - 5, Math.round(L) + 5) + "%)";
}