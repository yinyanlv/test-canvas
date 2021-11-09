function initApp(canvas, ctx) {
    createSector(ctx, 100, 100, 100, 10, 130)
    ctx.fillStyle = 'HotPink'
    ctx.fill()
}

/**
 * 绘制扇形 
 * x, y 圆心坐标
 * r 半径
 * angle1 开始角度
 * angle2 结束角度
 */
function createSector(ctx, x, y, r, angle1, angle2) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.arc(x, y, r, angle1 / 180 * Math.PI, angle2 / 180 * Math.PI, false)
    ctx.closePath()
}