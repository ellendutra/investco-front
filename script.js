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

async function cadastrarUsuario() {
  var tipoUsuario = document.getElementById("role").value;
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (tipoUsuario === "administrador") {  
    var nivelAcesso = document.getElementById("nivel").value;
    var codigoAcesso = document.getElementById("codigo").value;

    if (!nivelAcesso || !codigoAcesso) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }
    
    var dados = {
      nome: nome,
      email: email,
      senha: senha,
      role: tipoUsuario,
      nivelAcesso: nivelAcesso,
      codigoAcesso: codigoAcesso
    };
  } else if (tipoUsuario === "investidor") {
    var idade = document.getElementById("idade").value;
    var tolerancia = document.getElementById("tolerancia").value;
    var renda = document.getElementById("renda").value;
    var prazo = document.getElementById("prazo").value;
    var perfil = document.getElementById("perfil").value;

    if (!idade || !tolerancia || !renda || !prazo || !perfil) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    var dados = {
      nome: nome,
      email: email,
      senha: senha,
      role: tipoUsuario,
      idade: idade,
      tolerancia: tolerancia,
      renda: renda,
      prazo: prazo,
      perfil: perfil
    };
  }

  if (!dados.role) {
    alert("Por favor, escolha um tipo de usuário");
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/usuarios", dados);
    console.log(response.data);
    toastr.success("Usuário cadastrado com sucesso! Efetue o login.");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2500);
  } catch (error) {
    if (error.response && error.response.status === 409) {
      toastr.error("E-mail já cadastrado!");
    }
  }
}

document.getElementById("formulario").addEventListener("submit", async (event) => {
  event.preventDefault();
  await cadastrarUsuario();
});
