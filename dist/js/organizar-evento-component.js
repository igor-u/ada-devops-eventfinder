const formElement = document.querySelector(".organizar-evento form");
let id = 1;
formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!formElement.checkValidity()) {
        alert("Preencha todos os campos!");
        return;
    }
    const inputTitulo = formElement.querySelector("#titulo");
    const inputDescricao = formElement.querySelector("#descricao");
    const inputTipoEvento = formElement.querySelector("#tipoEvento");
    const inputData = formElement.querySelector("#data");
    let titulo = inputTitulo.value;
    let descricao = inputDescricao.value;
    let tipoEvento = inputTipoEvento.value;
    let data = inputData.valueAsDate;
    const novoEvento = {
        id: id++,
        titulo: titulo,
        descricao: descricao,
        tipo: tipoEvento,
        data: data,
        ingressos: []
    };
    console.log(novoEvento);
    formElement.reset();
});
