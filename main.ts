radio.setGroup(77)
radio.setTransmitPower(7)
basic.showLeds(`
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    # # # # #
    `)
loops.everyInterval(1000, function () {
    if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("0")
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        radio.sendString("E")
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        radio.sendString("F")
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        radio.sendString("G")
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        radio.sendString("H")
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("A")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("B")
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendString("I")
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("C")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("D")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        basic.clearScreen()
    }
})
