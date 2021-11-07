function initApp(canvas, ctx) {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            // 255 / 6 = 42.5
            ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`
            // 竖放
            // ctx.fillRect(i * 25, j * 25, 25, 25)
            // 横放 
            ctx.fillRect(j * 25, i * 25, 25, 25)
        }
    }
}
