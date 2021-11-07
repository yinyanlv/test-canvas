function initApp(canvas, ctx) {
    let r = 255, g = 0, b = 0
    // 255 / 5 = 51
    for (let i = 0; i < 150; i++) {
        if (i < 25) {
            g += 10
        } else if (i >= 25 && i < 50) {
            r -= 10
        } else if (i >= 50 && i < 75) {
            g -= 10
            b += 10
        } else if (i >= 75 && i < 100) {
            r += 10
        } else {
            b -= 10
        }

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.fillRect(3 * i, 0, 3, canvas.height)
    }
}
