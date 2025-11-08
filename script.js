const NavBar = document.getElementById("showNav");

let active = false;

function ShowNav(){
    if (active === false){
        NavBar.style.display = 'block';
        active = true; //! attiva dopo che ha premuto
    } else {
        NavBar.style.display = 'none';
        active = false;
    }
}