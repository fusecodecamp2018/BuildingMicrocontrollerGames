# Exercise 4.2
In this exercise we'll build a simple program that uses your micro:bit's Radio. We'll send a message from one micro:bit to another. *For this exercise, you'll need to use two micro:bits.* Note that the browser simulator does support showing two micro:bits at once.

There are two versions of the hide and seek program: **hide-and-seek-simple** (which we will build using blocks), and **hide-and-seek.js** (which cannot be built using blocks). The simple version is easier to program, but excludes some features that make for a better game experience. 

### step 1
Place a **radio set group** block within the **start** block and choose a unique group number (must match your partner's group number).

### step 2
Place a **radio send number** block within the **forever** block. Change the number within the **radio send number** block to 0.

### step 3
Place an **on radio received** block in your program. The variables passed into the block will be *receivedNumber* and *signal*. We'll use these variables in the code block below. From the **LED, more** menu, place the **stop animation** block within your **on radio received** block. This will clear out animation playing on the LED grid.

### step 4
From the **Logic** menu, place an **if then else** block inside your **on radio received** block. The **if** statement needs a block that indicates what to look at when making a decision about what to do. Place a **0 < 0** block in the **if** block. Change the first 0 to a *signal* variable, and change the second 0 to -45. Change the < to >. This checks to see if the signal stength is greater than -45.

### step 5
Drag a **show string** block into the **then** statement. Set a message to display when the micro:bits are close to one another. From the **LED** menu, find the **plot bar graph of** block and drag it into the **else** statement. From the **Math** menu, drag a **0 + 0** block and a **0 - 0** block into the first and second position of the **plot bar graph** block. Change the **0 + 0** block to **128 + signal** and change the **0 - 0** block to **128 - 42**. Make sure your program matches the picture below:

![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.2/hide-and-seek-simple-blockly.png "exercise 4.2 blockly")

### new blocks menu locations
Here is where you can find the blocks mentioned in step 1 in the editor menu. All of the new blocks you need are shown within the orange rectangle:
![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.2/new-blocks-menu-locations-1.png "exercise 4.2 blockly menu locations 1")
![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.2/new-blocks-menu-locations-2.png "exercise 4.2 blockly menu locations 2")
![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.2/new-blocks-menu-locations-3.png "exercise 4.2 blockly menu locations 3")
![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.2/new-blocks-menu-locations-4.png "exercise 4.2 blockly menu locations 4")
![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.2/new-blocks-menu-locations-5.png "exercise 4.2 blockly menu locations 5")



