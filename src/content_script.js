const desktopContent = document.getElementsByClassName('gL9Hy');       //desktop array of class name
const mobileContent = document.getElementsByClassName('MUxGbd v0nnCb lyLwlc');   //mobile array of class name 

if (desktopContent.length >= 2)   //desktop functionality
{
    window.location.replace(desktopContent[1].href);
    console.log(desktopContent[1].href);
}
else if (mobileContent.length == 1)    //mobile functionality
{
    const mobileLink =  mobileContent[0].getElementsByTagName('a');    //gets an array of 'a' tags
    window.location.replace(mobileLink[0].href);    
    console.log(mobileLink[0].href + " is the link redirected to.");
}


