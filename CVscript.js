let menuVisible = false;
//Oculta muestra menú de forma responsive
function mostrarOnoMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//Oculta el menú después de seleccionar una opción
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;    
}