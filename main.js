let game_canvas = document.getElementById('gameCanvas')
let ctx = game_canvas.getContext('2d')
console.log(ctx)
game_canvas.width = game_canvas.width * 3
game_canvas.height = game_canvas.height * 3
console.log(game_canvas.width)
console.log(game_canvas.height)

function drawDino() {
    ctx.fillStyle = '#4c4c4c';

    
    ctx.fillRect(50, 180, 40, 5)
    ctx.fillRect(50 - 5, 180 + 5, 50, 5)
    ctx.fillRect(50 - 5, 180 + 10, 50, 5)
    ctx.fillRect(50 - 5, 180 + 15, 50, 5)
    ctx.fillRect(50 - 5, 180 + 20, 50, 5)
    ctx.fillRect(50 - 5, 180 + 25, 50, 5)
    ctx.fillRect(50 - 5, 180 + 30, 35, 5)
    ctx.fillRect(50 - 5, 180 + 35, 45, 5)
    ctx.fillRect(50 - 5, 180 + 40, 20, 5)
    ctx.fillRect(50 - 10, 180 + 45, 25, 5)
    ctx.fillRect(50 - 15, 180 + 50, 40, 5) //maozinha
    ctx.fillRect(50+20, 180 + 55, 5, 5)//mono dedinho
    ctx.fillRect(50 - 20, 180 + 55, 35, 5)
    ctx.fillRect(50 - 25, 180 + 60, 40, 5)
    ctx.fillRect(50 - 40, 180 + 65, 50, 5)
    
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(55, 190, 5, 5)
}

drawDino()