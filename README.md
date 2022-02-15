# Mr. Roboger's Neighborhood

A web application that transforms user inputted numbers into special worded messages. This is an exercise using arrays and looping.

## By: Deya Card

### Technologies used:

* JavaScript
* HTML/CSS
* jQuery
* Bootstrap

### Setup/Installation Requirements:

* Clone or download this repository onto your desktop
https://github.com/DeyaCard/mr-robogers-neighborhood
* Navigate to top-level of directory
* Open index.html in the browser of your choice


### Tests:


#### Describe: mrRobogers()

Test: "It should return a string of user entered numbers beginning with 0."
Code: mrRobogers(6);
Expected Output: [0,1,2,3,4,5,6]

Test: "It should replace all numbers that contain a 3 with "Won't you be my neighbor?"."
Code: mrRobogers(324);
Expected Output: ["Won't you be my neighbor?"]

Test: "It should replace all numbers that contain a 2 with "Boop!"."
Code: mrRobogers(92)
Expected Output: ["Boop!"]

Test: "It should replace all numbers that contain a 1 with "Beep!"."
Code: mrRobogers(124);
Expected Output: ["Beep!"]

Test: "It whould follow the hierarchy of substitutions."
Code: mrRobogers(123)
Expected Output: ["Won't you be my neighbor?"]



### Known Bugs:
* No known issues at time of publishing.


### License: 
* MIT

Copyright: 2022 Deya Card


