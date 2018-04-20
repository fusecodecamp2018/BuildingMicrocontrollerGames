// the following runs when the program starts, and then never again
basic.showIcon(IconNames.Square)
basic.pause(2000)

// this block will execute over and over forever
basic.forever(() => {
	
	// show an X on the LED grid
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
	
	// show a diamond on the LED grid
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
