function alteraCamposFormulario() {
  const tipoUsuario = this.value;
  const administradorDiv = document.getElementById("administrador");
  const investidorDiv = document.getElementById("investidor");

   if (tipoUsuario === "administrador") {
    administradorDiv.classList.remove("esconde");
    investidorDiv.classList.add("esconde");
  } else {
    administradorDiv.classList.add("esconde");
    investidorDiv.classList.remove("esconde");
  } 
}

document.getElementById("role").addEventListener("change", alteraCamposFormulario);
