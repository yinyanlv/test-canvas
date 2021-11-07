window.onload = () => {
    let canvas = $$('canvas')
    let ctx = canvas.getContext('2d')
    if (window.initApp) {
        initApp && initApp(canvas, ctx)
    } 
}

