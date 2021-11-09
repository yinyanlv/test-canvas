function initApp(canvas, ctx) {
    createLeaf(ctx, 4, canvas.width / 2, canvas.height / 2, 20, 80)

    ctx.stroke()
}


/**
 * 绘制n叶草
 * n n片
 * dx, dy 花朵中心位置
 * size 花朵大小
 * length 花瓣长度
 */
function createLeaf(ctx, n, dx, dy, size, length) {
    ctx.beginPath()
    ctx.moveTo(dx, dy + size)

    const degree = 2 * Math.PI / n

    for (let i = 1; i < n + 1; i++) {
        let cx1 = Math.sin((i - 1) * degree) * length + dx
        let cy1 = Math.cos((i - 1) * degree) * length + dy
        let cx2 = Math.sin(i * degree) * length + dx
        let cy2 = Math.cos(i * degree) * length + dy
        let x = Math.sin(i * degree) * size + dx
        let y = Math.cos(i * degree) * size + dy

        ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x, y)
    }

    
    ctx.closePath()
}