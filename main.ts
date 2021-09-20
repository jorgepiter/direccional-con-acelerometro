let a = 0
input.onGesture(Gesture.ScreenUp, function () {
    a = 4
})
input.onGesture(Gesture.TiltRight, function () {
    a = 2
})
input.onGesture(Gesture.Shake, function () {
    a = 3
})
input.onGesture(Gesture.TiltLeft, function () {
    a = 1
})
basic.forever(function () {
    if (a == 1) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . # # .
            . # # # #
            . . # # .
            . . . # .
            `)
        basic.showLeds(`
            . # . . .
            # # . . .
            # # # # .
            # # . . .
            . # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
    } else if (a == 2) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # # . .
            # # # # .
            . # # . .
            . # . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # #
            . # # # #
            . . . # #
            . . . # .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . # # #
            . . . . #
            . . . . #
            `)
    } else if (a == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (a == 4) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
