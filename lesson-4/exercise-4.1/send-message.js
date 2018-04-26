input.onButtonPressed(Button.A, () => {
    radio.sendString("hi!")
})
radio.onDataPacketReceived( ({ receivedString }) =>  {
    basic.showString(receivedString)
})
radio.setGroup(42)
radio.setTransmitPower(3)