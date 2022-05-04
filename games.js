var pagetest = document.referrer;
if ( pagetest ==  "https://powerschool-log.glitch.me/testing.html") 
    //checks if the last used website is the password website 
    {
      alert("yes");
    }
if ( pagetest !=  "https://powerschool-log.glitch.me/testing.html") 
    //checks if the last used website is the password website 
    {
      alert("no");
      window.location.href = "https://powerschool-log.glitch.me/testing.html";
    }