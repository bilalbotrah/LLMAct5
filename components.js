/* Funció per a la galeria interactiva d'equips */
function seleccionarEquip(nom, rutaImatge, descripcio) {
    const contenidorDetall = document.getElementById("detalle-equipo");
    const textSuperior = document.getElementById("nombre-top");
    const imatgeGran = document.getElementById("imagen-grande");
    const titolGran = document.getElementById("titulo-grande");
    const descripcioGran = document.getElementById("descripcion-grande");

    textSuperior.textContent = nom;
    imatgeGran.src = rutaImatge;
    imatgeGran.alt = "Escut gran de " + nom;
    titolGran.textContent = nom;
    descripcioGran.textContent = descripcio;

    contenidorDetall.style.display = "block";
    contenidorDetall.scrollIntoView({ behavior: "smooth" });
}