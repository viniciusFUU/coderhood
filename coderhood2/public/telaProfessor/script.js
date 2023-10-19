//Referências para os elemetnos do modal
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");
const fade = document.getElementById("fade");

//Função para alterar a visibilidade do modal
const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalBtn, closeModalBtn, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

//Recebendo os dados inseridos no cadastrar turmas
function enviarDados() {
  //Referências dos elementos inseridos
  const nomeTurmaInput = document.getElementById("nomeTurma");
  const professorInput = document.getElementById("professor");
  const turnoInput = document.getElementById("turno");

  //Pegando os valores inseridos nos inputs
  const nomeTurma = nomeTurmaInput.value;
  const professor = professorInput.value;
  const turno = turnoInput.value;

  //Criando uma lista de objeto com os dados das turmas
  const dados = {
      "Nome da Turma": nomeTurma,
      Professor: professor,
      Turno: turno,
      Alunos: []
    };

  //exibindo o teste no navegador
  console.log(dados);

  //configurando a requisição POST
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados), //convertendo em JSON os objetos
  }

  console.log(window.location)

  //Enviando a requisição POST para o servidor
  fetch(window.location.origin + '/turma', option).then(teste => {
    teste.text().then(id =>{
    //Exibindo a resposta do servidor na página
    document.getElementById("inserirTurma").innerHTML+=`<a class=turma href="/turmas/${id}">` + " " +id+'</a>'
      console.log(id + "este é o text")
  })
  }).catch(e => {
      console.log(e);
      });

  toggleModal();

  // Limpar os campos de entrada
  nomeTurmaInput.value = "";
  professorInput.value = "";
  turnoInput.value = "";
}

//Adicionando evento para fechar o modal ao click no button ou apertar tecla enter
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      enviarDados();
    }
  });
});
