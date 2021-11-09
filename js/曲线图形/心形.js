function initApp(canvas, ctx) {
    ctx.moveTo(75, 40)

    // 左上
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25)

    // 左中
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)

    // 左下
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120)

    // 右下
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)

    // 右中
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)

    // 右上
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40)

    ctx.stroke()
}