enum CategoriaEvento {
    MUSICAL = "Musical",
    PALESTRA = "Palestra",
    TEATRO = "Teatro",
    WORKSHOP = "Workshop"
}

enum TipoEvento {
    PRESENCIAL = "Presencial",
    REMOTO = "Remoto",
    HIBRIDO = "Híbrido"
}

type Evento = {
    id: number;
    titulo: string;
    descricao: string;
    data: Date;
    tipo: TipoEvento;
    ingressos: Ingresso[];
}

type Ingresso = {
    id: number;
    evento: Evento;
    valor: number;
    pago: boolean;
}

type Organizador = {
    id: number;
    nome: string;
    eventos: Evento[];
}

type Participante = {
    id: number;
    nome: string;
    ingressos: Ingresso[];
    reservas: Reserva[];
    eventos: Evento[];
}

type Reserva = {
    id: number;
    ingresso: Ingresso;
    participante: Participante;
    ativa: boolean
}