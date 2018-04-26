radio.onDataPacketReceived(({ receivedNumber, signal }) => {
    led.stopAnimation()
    if (signal > -45) {
        basic.showString("Found!")
    } else {
        led.plotBarGraph(
            128 + signal,
            128 - 42
        )
    }
})
radio.setGroup(1)
basic.forever(() => {
    radio.sendNumber(0)
})