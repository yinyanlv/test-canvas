function initApp(canvas, ctx) {
    ctx.moveTo(30, 120)
    ctx.quadraticCurveTo(100, 20, 160, 120)
    // ctx.arcTo(100, 20, 160, 120, 40)

    ctx.moveTo(75, 25)
    ctx.quadraticCurveTo(25, 25, 25, 62)
    ctx.quadraticCurveTo(25, 100, 50, 100)
    ctx.quadraticCurveTo(50, 120, 30, 125)
    ctx.quadraticCurveTo(60, 120, 65, 100)
    ctx.quadraticCurveTo(125, 100, 125, 62)
    ctx.quadraticCurveTo(125, 25, 75, 25)
    ctx.stroke()
}