input.onButtonPressed(Button.A, function () {
    led.unplot(pos_x, posy)
    pos_x += 1
    if (pos_x > 4) {
        pos_x = 4
    }
    led.plot(pos_x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(pos_x, posy)
    pos_x += -1
    if (pos_x < 0) {
        pos_x = 0
    }
    led.plot(pos_x, 0)
})
let pos_x = 0
let posy = 0
let direction = 1
posy = 0
led.plot(pos_x, 0)
basic.forever(function () {
    basic.pause(500)
    led.unplot(pos_x, posy)
    pos_x += direction
    if (pos_x >= 4) {
        direction = -1
    } else if (pos_x <= 0) {
        direction = 1
    }
    led.plot(pos_x, posy)
})
