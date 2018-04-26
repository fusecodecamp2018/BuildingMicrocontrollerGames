# Exercise 4.1
In this exercise we'll build a simple program that uses your micro:bit's Radio. We'll send a message from one micro:bit to another. *For this exercise, you'll need to use two micro:bits.* Note that the browser simulator does support showing two micro:bits at once.


### step 1
First, place an **on start** block in your program. From the **Radio** menu, add a **radio set group** block to the **on start** block. Set the value for **radio set group** to a number between 1 and 255. The course coach will assign unique numbers to people in the class to avoid too many people using the same group channel. Next, from the **Radio more** menu, drag the **radio set transmit power** block to the **on start** block. This sets the signal strength of your radio. This number must be between 0 and 7. 3 is a good place to start. Increase the number if you are having trouble transmitting due to distance.

### step 2
Drag a **on button pressed** block to your program and assign either button A, button B, or buttons A+B. From the **Radio** menu, drag a **radio send string** block to the **on button pressed** block. Choose some text you'd like to send by editing the **radio send string** block. When you press the assigned button, the micro:bit will send the string you enter to other micro:bits using the same group number channel.

### step 3
Finally, from the **Radio** menu, drag **on radio received** to your program. Inside this tag is a variable name which contains a reference to the message that was sent to the micro:bit. You can change this variable name if you like. Drag the **show string** block into the **on radio received** block. From the **Variables** menu, drag a variable to the **show string** block. The variable name needs to match the variable name mentioned in the **on radio received** block. In this example, *receivedString* is the variable name.

![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.1/send-message-blockly.png "exercise 4.1 blockly")

### new blocks menu locations
Here is where you can find the blocks mentioned in step 1 in the editor menu. All of the new blocks you need are shown within the orange rectangle:
![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.1/new-blocks-menu-locations-1.png "exercise 4.1 blockly menu locations 1")
![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.1/new-blocks-menu-locations-2.png "exercise 4.1 blockly menu locations 2")
![alt text](https://github.com/fusecodecamp2018/BuildingMicrocontrollerGames/blob/master/lesson-4/exercise-4.1/new-blocks-menu-locations-3.png "exercise 4.1 blockly menu locations 3")



