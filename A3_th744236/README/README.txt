MY CODE:
|--A2_th744236/
|   |--Images/
|   |   |--bbq.JPEG
|   |   |--binary-code.png
|   |   |--eating.jpg
|   |   |--favicon.png
|   |   |--github.png
|   |   |--home.png
|   |   |--phone-call.png
|   |   |--suitcase.png
|   |   |--WorkPlaceHolder.png
|   |--pages/
|   |   |--Contact.html
|   |   |--index.html
|   |   |--myWork.html
|   |--PDF/
|   |   |--Accessibility_A3.PDF
|   |   |--Reflection_A3.PDF
|   |--README/
|   |   |--README.txt
|   |--Scripts/
|   |   |--contact.js
|   |   |--index.js
|   |   |--main.js
|   |--style/
|   |   |--Contact_style.css
|   |   |--index_style.css
|   |   |--menu.css
|   |   |--myWoek_style.css
|   |--work/
|   |   |--exampleWork.class
|   |   |--exampleWork.java

**Used work from A1 and A2**

Part 1:
    figured out the design I wanted for the different screen sizes and fixed my css
    so it can adapt to all the different screen sizes

Part 2:
    Notifications: my notifications are used in my forms document
    Event Handler: my event handleer is used in the form section when u click the verification button
    Conditional: my conditionals are used in my forms to check if the input follows instructions
    Color changer: my color changer is in my menu
    Form: my form is in my contacts page where people can fill out a form for project inquiries

Part 3:
    My website has no accessibilty issues (screen shots in pdf)

part 4:
    Reflectoin can be found in pdf


Explaining all new functions or changes to previous functions:
    All html files:
        1. changed the menu at the top to display: flex and to change sizes depending on viewport
        2. added 3 different buttons in the menu to switch the color of the website
        3. changed the menu so that its position is fixed throughout the website
        4. added to footer to all html elements

    menu.css:
        menu.css is a completelyn new css file that I created to control all the styling of the menu
        and for the footer
        1. :root: this function has all the color variables
        2. body: this function sets the background color and the default margins
        3. .menu-container: edits the flex container of the menu 
        4. .menu: this is the links that are contained in the navigation bar
        5. .menu-button: this is a button for the color changers
        6. .menu-button>img: edits the image for the color changer
        7. .menu-button> span: edits the text for the color changer
        8. @media: edits the menu depending on the size of screen
        9. .menu:hover, .menu-button:hover: this makes the menu buttons grow when hoverd over
        10. .footer: controld the grid template for the footer
        11. #footer1: edits text for footer 1
        12. #footer2: edits text for footer 2
        13. #footer1, #footer2: edits stuff for footer1 and footer2

    main.js:
        1. forestGreenBackground(): sets background theme to forest green and stores it to the session
        2. antiqueWhiteBackground(): sets background theme to antique white and stores it to the session
        3. blueBackground(): sets the background theme to marine blue and stores it to the session
        4. function(): every time a new page is loaded it sets the theme based on what was set on previous page


    Contact.html:
        Added a form with a 6 inputs
        first name, last name, age, email, phone number, and a text area

    Contact_style.css:
        changed the contacts page to be flex box to make it easier to switch to mobile
        1. .Div1: changed div1 to be flex box style
        2. .contact-Info: changed to flex
        3. .image: changed to flex
        4. #formBlock: stylised the form div and changed it to be flex
        5. #formBlock>span: edited the title of the form
        6. #pInquiries: edited the form also made this display flex
        7. lebel: stylised the labels for the form
        8. input, text area: edited the text for and borders for the input types and text area
        9. @media edited how the different divs interact depending on view prot 
        10. #test: edited my button that is used to verigy if form filled out properly
        11. #test, input: edited both the verification and submit button to look the same
        12. :hover: made both these buttons scale(1,2) on hover

    Index_style.css:
        1. @media: fixed the css to adapt to different view port sizes

    myWork_style.css:
        1. @medi: fixed the css to adapt to different view port sizes

    Contact.js:
        1. function(): waits until dom content is loaded before checking if button is pushed or
        else it bugs
        2. checkForm(): checks all the different patterns or conditions match before 
        validating the submition





REFERENCES:


        Parmar Fenil. 2022. Dalhousie University Mini Vlog [Killam Memorial Library ].Video. 
    (22 January 2022). Retrieved Febuary 4, 2024 from https://www.youtube.com/watch?v=1yHDOssKHI0.

        Pinterest. Download and share clipart about Black Phone Clipart - Font Awesome Phone 
    Icon Png, Find more high quality free transparent png clipart images on ClipartMax.Image. 
    Retreived Febuary 8, 2024 from https://www.pinterest.ca/pin/368943394479078008/  

        Survov Egor. 2021. Matrix background. Binary code texture. Falling green numbers.
    Data visualization concept. Futuristic digital backdrop. One and zero digits. Computer
    screen template. Vector illustration. Image. (April 16, 2021). Retrieved Febury 3, 2024 from 
    https://www.istockphoto.com/vector/matrix-background-binary-code-texture-falling-green-numbers-data-visualization-gm1312850689-401531597

        Flaticon. 2023. all symbols used in my work is from flaticon, Flaticon. Image
    https://www.flaticon.com/


