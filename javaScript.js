document.body.style.display = "flex";
document.body.style.height = "100%";
document.body.style.flexWrap = "wrap";
document.body.style.backgroundColor = "gray";

const formContainer = document.createElement("div");
formContainer.setAttribute("id", "formContainer");
document.body.appendChild(formContainer);
formContainer.style.width = "100%";

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
document.body.appendChild(game)

function mkBlocks(num=65) {
    
    let x = 1;   

    while (x<=num) {

        const container = document.createElement('div');
        container.setAttribute("id", "container");
        container.style.height = `${100/num}%`;
        container.style.display = "flex";
        container.style.flexGrow = "1";
        container.style.margin = "0px";
        
        gameContainer.appendChild(container);

        let i=1;

        while (i<=num) {
            
            const div = document.createElement('div');
            div.setAttribute("id", "block");
            div.style.flexGrow = "1";
            div.style.backgroundColor = "black";
            div.style.display = "flex";
            div.style.margin = "1px";


            div.onmouseover = function() {
                div.style.backgroundColor = "white"
            };

            container.appendChild(div);
            
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