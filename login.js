let inputFname = document.querySelector("[type='text']");
const regex = /[A-Za-z\s]{6,}$/;
const regexEmty = /^$/ig;
const regPhone_email = /^(011|012|010)\d{8}|^\w+@gmail\.com$/ig;
const reg_password = /^\w{6,}$/ig;
let EE = document.getElementsByClassName("EE")[0];


let newP = document.createElement("p");

newP.style.cssText = "font-size:13px;color:#cc0c39;margin-bottom: 5px; margin-left:5px";
newP.append("! Invalid name");
newP.style.cssText = "font-size:13px;color:#cc0c39;margin-bottom: 5px; margin-left:5px;position: absolute;margin-top: 19px;";
let div = document.createElement("div");
div.style.cssText = "display:flex; margin-left:15px;align-items: center;margin-top:-4px";

let input_F_email = document.querySelector("[type='text2']");
let newP2 = document.createElement("p");
newP2.append("! Invalid email or phone number");
newP2.style.cssText = "font-size:13px;color:#cc0c39;margin-bottom: 5px; margin-left:5px;position: absolute;margin-top: 19px;";

let div2 = document.createElement("div");
div2.style.cssText = "display:flex; margin-left:15px;align-items: center;margin-top:-4px";
div2.prepend(newP2);

// password

let passField = document.querySelector("[type = 'password']");
let newP3 = document.createElement("p");
newP3.append("! Invalid password");
newP3.style.cssText = "font-size:13px;color:#cc0c39;margin-bottom: 5px; margin-left:5px;position: absolute;margin-top: 16px;";
let div3 = document.createElement("div");
div3.style.cssText = "display:flex; margin-left:15px;align-items: center;margin-top:6px";
div3.prepend(newP3);

// rePassword

let repassField = document.querySelector(".rePassword");
let newP4 = document.createElement("p");
newP4.append("! Passwords must match");
newP4.style.cssText = "font-size:13px;color:#cc0c39;margin-bottom: 5px; margin-left:5px;margin-top: 1px;";
let div4 = document.createElement("div");
div4.style.cssText = "display:flex; margin-left:15px;align-items: center;margin-top:4px";
div4.prepend(newP4);


let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;

let test1 = true;
let test2 = true;
let test3 = true;
let test4 = true;

document.forms[0].onsubmit = (e) => {
    console.log(document.styleSheets[0].cssRules[0].selectorText);
    console.log(document.styleSheets[0].cssRules[1].selectorText);
    console.log(document.styleSheets[0].cssRules[2].selectorText);
    console.log(document.styleSheets[0].cssRules[3].selectorText);
    console.log(document.styleSheets[0].cssRules[4].selectorText);
    console.log(document.styleSheets[0].cssRules.length);
    let inputTname = inputFname.value;
    let input_val_email = input_F_email.value;
    let passValue = passField.value;
    let repassField_value = repassField.value;

    if (!regex.test(inputTname)) {
        if (num1 > 0) {
            for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
                if (document.styleSheets[0].cssRules[i].selectorText == `[type="text"]:focus`) {
                    document.styleSheets[0].deleteRule(i);
                }
            }
        }
        test1 = true;
        num1++;
        e.preventDefault();
        inputFname.style.cssText = "border: 3px solid #cc0c39;";
        document.styleSheets[0].insertRule("[type='text']:focus { outline: solid 3px rgba(204, 12, 57, 0.2); z-index: 1; background-color: transparent; }", 0);
        div.prepend(newP);
        inputFname.after(div);
        regex.lastIndex = 0;
    } else {
        if (num1 > 0 && test1) {
            for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
                if (document.styleSheets[0].cssRules[i].selectorText == `[type="text"]:focus`) {
                    document.styleSheets[0].deleteRule(i);
                }
            }
        }
        inputFname.style.cssText = "border: 1px solid;";
        div.remove();
        test1 = false;
    }

    if (!regPhone_email.test(input_val_email)) {
        if (num2 > 0) {
            for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
                if (document.styleSheets[0].cssRules[i].selectorText == `[type="text2"]:focus`) {
                    document.styleSheets[0].deleteRule(i);
                }
            }
        }
        test2 = true;
        num2++;
        e.preventDefault();
        regPhone_email.lastIndex = 0;
        input_F_email.style.cssText = "border: 3px solid #cc0c39;";
        document.styleSheets[0].insertRule("[type='text2']:focus { outline: solid 3px rgba(204, 12, 57, 0.2); background-color: transparent; }", 1);
        input_F_email.after(div2);
    } else {
        if (num2 > 0 && test2) {
            for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
                if (document.styleSheets[0].cssRules[i].selectorText == `[type="text2"]:focus`) {
                    document.styleSheets[0].deleteRule(i);
                }
            }
        }
        regPhone_email.lastIndex = 0;
        input_F_email.style.cssText = "border: 1px solid;";
        div2.remove();
        test2 = false;
    }

    if (!reg_password.test(passValue)) {
        test3 = true;
        EE.style.cssText = "display:none;";
        if (num3 > 0) {
            for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
                if (document.styleSheets[0].cssRules[i].selectorText == `[type="password"]:focus`) {
                    document.styleSheets[0].deleteRule(i);
                }
            }
        }
        num3++;
        e.preventDefault();
        reg_password.lastIndex = 0;
        passField.style.cssText = "border: 3px solid #cc0c39;";
        document.styleSheets[0].insertRule("[type='password']:focus { outline: solid 3px rgba(204, 12, 57, 0.2); background-color: transparent; }", 2);
        passField.after(div3);
    }
    else {
        if (num3 > 0 && test3) {
            for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
                if (document.styleSheets[0].cssRules[i].selectorText == `[type="password"]:focus`) {
                    document.styleSheets[0].deleteRule(i);
                }
            }

        }
        reg_password.lastIndex = 0;
        passField.style.cssText = "border: 1px solid;";
        div3.remove();
        test3 = false;
    }

    if (passValue !== repassField_value || repassField_value == "") {
        if (num4 > 0) {
            for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
                if (document.styleSheets[0].cssRules[i].selectorText == `.rePassword:focus`) {
                    document.styleSheets[0].deleteRule(i);
                }
            }
        }
        num4++;
        e.preventDefault();
        repassField.style.cssText = "border: 3px solid #cc0c39;";
        document.styleSheets[0].insertRule(".rePassword:focus { outline: solid 3px rgba(204, 12, 57, 0.2); z-index: 1; background-color: transparent; }", 3);
        repassField.after(div4);
        test4 = true;
    } else {
        if (test4) {
            for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
                if (document.styleSheets[0].cssRules[i].selectorText == `.rePassword:focus`) {
                    document.styleSheets[0].deleteRule(i);
                }
            }
        }
        console.log("++++++++++++++++");
        repassField.style.cssText = "border: 1px solid;";
        div4.remove();
        test4 = false;
    }
};


let Fele = document.getElementsByClassName("fristI")[0];
Fele.onfocus = () => {
    document.querySelector(".noteName p").style.display = "flex";
};
Fele.onblur = () => {
    document.querySelector(".noteName p").style.display = "none";
};

let Fele2 = document.getElementsByClassName("secoundI")[0];
Fele2.onfocus = () => {
    document.querySelector(".noteEmail p").style.display = "flex";
};
Fele2.onblur = () => {
    document.querySelector(".noteEmail p").style.display = "none";
};

let Fele3 = document.getElementsByClassName("thirdI")[0];
Fele3.onfocus = () => {
    document.querySelector(".notepass p").style.display = "flex";
};
Fele3.onblur = () => {
    document.querySelector(".notepass p").style.display = "none";
};


