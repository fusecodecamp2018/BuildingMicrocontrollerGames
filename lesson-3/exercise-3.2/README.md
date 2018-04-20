# Exercise 3.2
In this exercise we'll display a picture on the LED grid when the program starts, and then display a list of other pictures.

### step 1
From the **Basic** menu, drag the **on start** block into the editor space. The **on start** block will execute commands only once: when the program starts.

From the **Basic** menu, drag the **show icon** block into the **on start** block. Click on the picture of an icon on the **show icon** block to choose an icon to display. In the example, the square icon has been chosen. You can choose to display whatever you like.

From the **Basic** menu, drag the **pause** block into the **on start** block, below the **show icon** block. This will cause the program to pause and do nothing for a certain amount of time. Click on the *100* text on the **pause** block to change the amount of time to make the program pause. This number is the number of milliseconds to pause. So, if you want to pause the program for 2 seconds, enter 2000 in the block.

Once you've done this, the micro:bit will show the icon you've chosen and then do nothing for 2 seconds.


### step 2
From the **Basic** menu, drag the **forever** block into the editor space. 

From the **Basic** menu, drag the **show leds** block into the **forever** block. you can click the small buttons inside the **show leds** block to choose which LEDs to light up in the LED grid. Click on several LEDs to draw a picture. In the example, a picture of an X is shown.

Drag another **show leds** block into the **forever** block below the first **show leds** block. Draw another picture in your new **show leds** block. Having two pictures will cause the program to alternate between the twho pictures on the LED grid.

Here is what your program should look like in the code editor:

![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-3/exercise-3.2/display-led-pictures-blockly.png "exercise 3.1 hello world program")

### new blocks menu locations
Here is where you can find the blocks mentioned in steps 1 and 2 in the editor menu. All of the new blocks you need are shown within the orange rectangles:
![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-3/exercise-3.2/new-blocks-menu-locations.png "exercise 3.2 blockly menu locations")

