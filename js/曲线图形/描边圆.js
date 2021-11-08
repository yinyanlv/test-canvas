function initApp(canvas, ctx) {
    ctx.beginPath()
    ctx.arc(80, 80, 50, 0, Math.PI, true)
    ctx.closePath()
    ctx.strokeStyle = 'HotPink'
    ctx.stroke()    

    ctx.beginPath()
    ctx.arc(120, 120, 50, 0,  - 90 / 180 * Math.PI, false)
    ctx.closePath()
    ctx.fillStyle = 'HotPink'
    ctx.stroke()
    ctx.fill()


    ctx.beginPath()
    ctx.arc(70, 70, 50, 0, - 90 / 180 * Math.PI, true)
    ctx.strokeStyle = 'blue'
    ctx.stroke()    
}