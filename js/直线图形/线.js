
function initApp(canvas, ctx) {

    ctx.strokeStyle = 'green'
    ctx.moveTo(50, 100)
    ctx.lineTo(100, 100)
    ctx.lineTo(100, 50)
    ctx.lineTo(50, 50)
    ctx.lineTo(50, 100)
    ctx.stroke()

    ctx.strokeStyle = 'red'
    ctx.moveTo(50, 120)
    ctx.lineTo(150, 120)
    ctx.stroke()

    ctx.strokeStyle = 'blue'
    ctx.strokeRect(20, 20, 40, 20)

    ctx.fillStyle = 'HotPink'
    ctx.fillRect(20, 20, 40, 20)
    ctx.fillRect(80, 20, 40, 20)

    ctx.fillStyle = 'rgba(0, 0, 255, 0.3)'
    ctx.fillRect(70, 10, 40, 20)

    ctx.rect(140, 10, 40, 20)


    ctx.moveTo(20, 16)
    ctx.lineTo(100, 16)
    ctx.stroke()

    ctx.clearRect(85, 15, 10, 10)
}