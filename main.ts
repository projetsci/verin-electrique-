let definir_distance = 0
basic.forever(function () {
    definir_distance = grove.measureInCentimeters(DigitalPin.P2)
    basic.showNumber(grove.measureInCentimeters(DigitalPin.P2))
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (input.buttonIsPressed(Button.AB)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
