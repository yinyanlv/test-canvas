function initApp(canvas, ctx) {

    createPolygon(ctx, 5, 100, 100, 50)
    ctx.stroke()
    createPolygon(ctx, 3, 50, 50, 50)
    ctx.fillStyle = 'HotPink'
    ctx.fill()
}

/**
 * 绘制正多边形工具函数
 * ctx 上下文
 * n n边形
 * dx, dy n边形中心坐标
 * size n边形大小 
 */
function createPolygon(ctx, n, dx, dy, size) {
    ctx.beginPath()
    const degree = 2 * Math.PI / n
    for (let i = 0; i < n; i++) {
        let x = Math.cos(degree * i) * size + dx
        let y = -Math.sin(degree * i) * size + dy
        ctx.lineTo(x, y)
    }
    ctx.closePath()
}