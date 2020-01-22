
document.body.style.height = "100%";
document.body.style.flexWrap = "wrap";
document.body.style.backgroundColor = "gray";
document.body.style.justifyContent = "center"

const formContainer = document.createElement("div");
formContainer.setAttribute("id", "formContainer");
formContainer.style.width = "750px";
formContainer.style.justifyContent = "center"
document.body.appendChild(formContainer);


const formTitle = document.createElement("h1");
formTitle.innerHTML = "Choose your area!";
formContainer.appendChild(formTitle);

const sizeForm = document.createElement("input");
formContainer.appendChild(sizeForm);

const sizeSubmit = document.createElement("button");
sizeSubmit.innerHTML = "Submit";
formContainer.appendChild(sizeSubmit);


sizeSubmit.onclick = function() {
    while (document.getElementById("container")) {
        let element = document.getElementById("container");
        element.parentNode.removeChild(element);
    };
    mkBlocks(sizeForm.value);
};

const gameContainer = document.createElement("div")
gameContainer.style.width = "750px"
gameContainer.style.height = "750px"
gameContainer.style.display = "flex"
gameContainer.style.flex = "1"
gameContainer.style.flexWrap = "wrap"
gameContainer.style.justifyContent = "center"
gameContainer.setAttribute("id", "gameContainer")
document.body.appendChild(gameContainer)

function mkBlocks(num) {
    
    let x = 1;

    while (x<=num) {

        const rowContainer = document.createElement('div');
        rowContainer.setAttribute("id", "rowContainer");
        rowContainer.style.height = `${750/num}px`;
        rowContainer.style.width = "750px";
        rowContainer.style.display = "flex";
        rowContainer.style.margin = "0px";
        
        gameContainer.appendChild(rowContainer);

        let i=1;

        while (i<=num) {
            
            const div = document.createElement('div');
            div.setAttribute("id", "block");
            div.style.width = `${750/num}px`
            div.style.backgroundColor = "black";
            div.style.display = "flex";
            div.style.margin = "1px";


            div.onmouseover = function() {
                div.style.backgroundColor = "white"
            };

            rowContainer.appendChild(div);
            
            i++;
            
            if (i>num) {
                const brk = document.createElement("div");
                brk.setAttribute("id", "break");
                brk.style.flexBasis = "100%";
                brk.style.height = "0";
                
                gameContainer.appendChild(brk);
            };
        };
    x++;
    };
};