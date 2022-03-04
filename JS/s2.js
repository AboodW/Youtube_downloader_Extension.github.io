s = document.createElement("script");
s.src = browser.extension.getURL("src/script.js");

s.onload = function(){
   this.remove;
}
document.head.appendChild(s);
// let btn= document.getElementById("btn1");
// btn.addEventListener("click", function(){
//   abc();
// });

// function abc()
// {
//     chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) 
//     {
//             var tab = tabs[0];
//             document.getElementById("txt1").value= tab.url;
            
//     });
// }