function initApp(canvas, ctx) {
    ctx.moveTo(20, 20)
    // ctx.lineTo(70, 20)
    ctx.arcTo(120, 20, 120, 70, 50)
    ctx.lineTo(120, 120)
    ctx.stroke()

    createRoundedRect(ctx, 400, 200, 20, 100, 100)
    ctx.fillStyle = 'HotPink'
    ctx.stroke()
    ctx.fill()
}

/**
 * 绘制圆角矩形
 * width, height 矩形宽高
 * r 矩形圆角半径
 * offsetX, offsetY 左上角定点坐标
 */
function createRoundedRect(ctx, width, height, r, offsetX, offsetY) {
    ctx.beginPath()
    // 上边
    ctx.moveTo(offsetX + r, offsetY)
    ctx.lineTo(offsetX + width - r, offsetY)
    // 右上角
    ctx.arcTo(offsetX + width, offsetY, offsetX + width, offsetY + r, r)
    // 右边
    ctx.lineTo(offsetX + width, offsetY + height - r)
    // 右下角
    ctx.arcTo(offsetX + width, offsetY + height, offsetX + width - r, offsetY + height, r)
    // 下边
    ctx.lineTo(offsetX + r, offsetY + height)
    // 左下角
    ctx.arcTo(offsetX, offsetY + height, offsetX, offsetY + height - r, r)
    // 左边
    ctx.lineTo(offsetX, offsetY + r)
    // 左上角
    ctx.arcTo(offsetX, offsetY, offsetX + r, offsetY, r)

    ctx.closePath()
}