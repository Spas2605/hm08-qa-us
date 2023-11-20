Project 8
In this project I  tested the functionality of the Urban Routs App by means of several automated tests, where we are declearing variables and give them an expected outcome.
GitHub, Visual Studio Code, Dev Tools and CSS Selectors were used in order to compleate the project.
Steps to reproduce:
Step 1: Once you’ve linked your TripleTen account with GitHub, a repository will be created automatically. The repository name will be hm08-qa-us
Go to GitHub and clone the new repo to your local computer, using the following steps:
Open your preferred terminal. If you’re on Windows, you’ll need to use Git Bash.
If you haven’t done so already, create a directory to store all of your projects. For example:
 cd ~               # make sure you're in your home directory
 mkdir projects     # create a folder called projects
 cd projects        # change directory into the new projects folder
  
Clone the repo. Make sure that you clone the correct repo. The username should be your own github username, not username. 
 git clone git@github.com:username/hm08-qa-us.git
 Step 2. Work with the project locally
Now you have a local copy of the project and can open the project folder on your computer. 
Before starting to work on the project, run npm install from the console in your project folder. You may remember from previous lessons that this creates the project files in the current folder. 
💡 Use VS Code to work on the project. Simply open VS Code and select File → Open Folder and then select the hm08-qa-us folder that you cloned to your computer.
You’ll need a server URL so that your code can access the server. 
In wdio.conf.js, replace the base URL with the  Urban Routes URL generated above. ALLWAYS SAFE THE FILE, after every change you have made!
The several automated tests covering the full process of ordering a taxi I used are:
Setting the address
Selecting Supportive plan
Filling in the phone number
Adding a credit card
Writing a message for the driver
Ordering a Blanket and handkerchiefs
Ordering 2 Ice creams
The car search modal appears

TEST 1 Setting the address: First start the server, copy the link and replece the existing link in wido.cof.js.Safe the file!
For this task we have already been given a function fillAddresses as well as selectors for the From and To fields. Using that, go to createAnOrder2e.js file and created a code which sets the addres.Write an expected result for this code!(see code in the createAnOrder2e.js);
Save the file!
Open the terminal in VS code.
USE COMMAND: npm run wdio, if the code is correct, the addres should appear on your browser.

TEST 2 Selecting Supportive plan: For this task we need to select the Supportive plan of the taxi options in order to write the correct code right click on the Supportive icon in Urban Routes app and select inspect from the drop down menu. That wiil brings us to Dev Tools where we can locate the correct CSS selectors for the Supportive class. Once located, copy the first selector and go to page.js file. There, create a name for the first selector and paste it. Follow the same steps for the second selector for the Supportive class.SAVE the file! Then go to createAnOrder2e.js and create a code by using again the given fillAddresses function as well as the two Supportive selectors.Write an expected result for this code! (see code in the createAnOrder2e.js );
Save the file!
USE COMMAND: npm run wdio, if the code is correct, the Supportive plan is selected.

Test 3 Filling in the phone number: For this task we again have a provided function fillPhoneNumber. Go to page.js file and copy the function, the back to createAnOrder2e.js to create a code which fills in the phone nunmber, by using fillPhoneNumber function as well as the correct selectors which we can locate the same way, by right clicking on the phone number field, select Inspect, then locate the selectors in Dev Tool, go to page.js, create a name for the selector and paste it. Save the file! Write an expect result! (see code in createAnOrder2e.js);
Save the file!
USE COMMAND: npm run wdio, if the code is correct, the phone number should be filled in on your browser.

TEST 4 Adding a credit card: For this test we will need a multiple selectors in order to accomplish the task. We can locate them using the same methodology as in the previous test, right click on the field in question, locate the selector in Dev Tools, copy the selector, go to page.js, create a name for the selector and paste it.Save the file! the selectors for this tasks are:
paymentMethodButton
addCardButton
cardNumber
cardCode
cardSignatureStrip
linkCardButton
closePaymentMethodModal
As we can see thre are many variables taking place, so in order to make our code more readable I created a function called: addPaymentMethodCard in the page.js file and placed all the variables under  it.
After creating this function go to createAnOrder2e.js and write the code by using the new funtion. Write an expected result!
(see code in createAnOrder2e.js);
Save the file!
USE COMMAND: npm run wdio, if the code is correct, the card number and the security code will be filled in on your browser.

TEST 5 Writing a message for the driver: Following the same patern, right click on the Message the driver field, locate the selector in Dev Tools, copy the selector, go to page.js file, create a name for the selector and paste it. Safe the file! Go to createAnOrder2e.js and write the code. Write an expected result! (see code in the createAnOrder2e.js); Safe the file!
USE COMMAND: npm run wdio, if the code is correct, a message will appear in the field Message the driver in your browser.

TEST 6 Ordering a Blanket and handkerchiefs: Similar to the previous test, we follow the same steps, here though we have two selectors we should be aware of :
orderRequirmentsButton:
blanketAndHandkerchiefsButton:
Once located, copy and paste them in the page.js file under their respective names. Save the file! Go to createAnOrder2e.js and write the code.
Write an expected result! (see code in the createAnOrder2e.js); Save the file!
USE COMMAND: npm run wdio, if the code is correct, the Blanket and handkerchiefs button will be checked on your browser.

TEST 7 Ordering 2 Ice creams: Here again we have two selectors to be aware of:
iceCreamValueButton: 
iceCreamPlusButton:
In similar fasion, we locate the selectors in Dev Tools, we copy them, go to page.js file, create a name for each one and paste the selectors corrspondingly.Save the file! Then go to createAnOrder2e.js, write the code. Write an expected result! (see code in the createAnOrder2e.js);Save the file!
USE COMMAND: npm run wdio, if the code is correct, two ice cream should be selected in you browser.

TEST 8 The car search modal appears: Another two selectors needed for this test:
orderButton:
carSearchModal:
Following the patern, go to Urban Routes, right click on the Order button, select Inspect, locate the selectors in Dev Tools, copy and paste each one of them in page.js under their names. Save the file! Go to createAnOrder2e.js, write the code. Write an expected result! (see code in the createAnOrder2e.js); Save the file!
USE COMMAND: npm run wdio, if the code is correct, the car search modal should appear in your browser.







 
  