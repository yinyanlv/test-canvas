function initApp(canvas, ctx) {
    ctx.beginPath()

    const dx = 100 // 圆心坐标
    const dy = 100
    const size1 = 50 // 外圆半径
    const size2 = 25 // 内圆半径

    for (let i = 0; i < 5; i++) {
        // 360 / 5 = 72
        const x1 = Math.cos((18 + i * 72) * Math.PI / 180) * size1 + dx
        const y1 = -Math.sin((18 + i * 72) * Math.PI / 180) * size1 + dy
        ctx.lineTo(x1, y1)

        const x2 = Math.cos((54 + i * 72) * Math.PI / 180) * size2 + dx
        const y2 = -Math.sin((54 + i * 72) * Math.PI / 180) * size2 + dy
        ctx.lineTo(x2, y2)
    }

    ctx.closePath()
    ctx.stroke()
}
