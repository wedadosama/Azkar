document.getElementById("toggle-theme").onclick = () => {
  if(document.body.classList.contains("dark-theme")){
    document.body.classList.remove("dark-theme")
    document.getElementById("toggle-theme").src = "asstes/icons/dark.webp"
  }else{
    document.body.classList.add("dark-theme")
    document.getElementById("toggle-theme").src = "asstes/icons/light.webp"
  }
};

document.getElementById("toggle-nav-menu").onclick = () =>{
  document.getElementById("nav-menu").classList.toggle("open");
}