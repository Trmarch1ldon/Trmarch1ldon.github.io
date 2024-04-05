
//sets background theme to forest green and stores it to the session
function forestGreenBackground()
{
    document.documentElement.style.setProperty('--Primary-color','#9A9B73');
    document.documentElement.style.setProperty('--Secondary-color', '#8D5B4C');
    sessionStorage.setItem('originalColor', '1');
}

//sets background theme to antique white and stores it to the session
function antiqueWhiteBackground()
{
    document.documentElement.style.setProperty('--Primary-color','antiquewhite');
    document.documentElement.style.setProperty('--Secondary-color', 'aliceblue');
    sessionStorage.setItem('originalColor', '0');
}

//sets the background theme to marine blue and stores it to the session
function blueBackground()
{
    document.documentElement.style.setProperty('--Primary-color','#B0D7FF');
    document.documentElement.style.setProperty('--Secondary-color', '#4D7298');
    sessionStorage.setItem('originalColor', '2');
}

// every time a new page is loaded it sets the theme based on what was set on previous page
document.addEventListener('DOMContentLoaded', function () {
    const originalColor = sessionStorage.getItem('originalColor');
    if (originalColor === '1') 
    {
        forestGreenBackground();
    } 
    if (originalColor === '0')
    {
        antiqueWhiteBackground(); 
    }
    if (originalColor === '2')
    {
        blueBackground()
    }
})



