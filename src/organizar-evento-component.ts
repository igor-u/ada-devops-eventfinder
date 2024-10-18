const formElement = document.querySelector(".organizar-evento form") as HTMLFormElement;
let id: number = 1;
formElement.addEventListener("submit", function(event) {

    event.preventDefault();

    if(!formElement.checkValidity()) {
        alert("Preencha todos os campos!");
        return;
    }

    const inputTitulo = formElement.querySelector("#titulo") as HTMLInputElement;
    const inputDescricao = formElement.querySelector("#descricao") as HTMLInputElement;
    const inputTipoEvento = formElement.querySelector("#tipoEvento") as HTMLSelectElement;
    const inputData = formElement.querySelector("#data") as HTMLInputElement;

    let titulo: string = inputTitulo.value;
    let descricao: string = inputDescricao.value;
    let tipoEvento: TipoEvento = inputTipoEvento.value as TipoEvento;
    let data: Date = inputData.valueAsDate;

    const novoEvento: Evento = {
        id: id++,
        titulo: titulo,
        descricao: descricao,
        tipo: tipoEvento,
        data: data,
        ingressos: []
    }

    console.log(novoEvento);
    formElement.reset();

}
)