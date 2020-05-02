//function to style inputs on focus
function whenFocused(elm) {
    elm.style.outline = "none";
    elm.style.border =  "none";
}

//functions to style input on focus is out
function whenFocusOut(elm){
    
    if (elm.value.length==0) {
        elm.style.borderBottom = "1px solid #999";
    }

}

//function to style email input when its value is not empty
function emailBottomBorder (emailElm){
    const border = document.getElementById("border2");
    const label = document.getElementById("emailLabel");
    if ( emailElm.value.length !== 0) {
        
        
        emailElm.style.border="none";
        border.style.width = "93%";
        border.style.height = "2.5px";
        border.style.background = "#79c000";
        label.style.top = "-10px";
        label.style.color = "#79c000";
        label.style.fontWeight = "bold";
        label.style.fontSize = "15px";
        label.style.letterSpacing = "1px";
    }
    else {
        emailElm.style.BottomBorder = "1px solid #999";
        border.style.width = "0";
    
    }
    emailElm.onfocus = function() {
        border.style.width = "93%";
    }
}
