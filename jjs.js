
   function Jid(id){
        let variable = document.getElementById(id);
        return variable;
    }
    function Jc(clase){
        let variable = document.querySelector(`.${clase}`);
        return variable;
    }
    function Jn(name){
        let variable = document.getElementsByClassName(name)[0];
        return variable;
    }
    // function Header(titulo,color, imagen , textoBoton, padre){
    //         let header = document.createElement("header");
    //         header.className = "p-4 text-start";
    //         header.style.backgroundImage(imagen)
    //         header.innerHTML=`
    //             <h1 class='text-${color}'>${titulo}</h1>
    //             <button class = 'btn btn-primary'>${textoBoton}</button>
    //         `;
    //         padre.appendChild(header);
    // }