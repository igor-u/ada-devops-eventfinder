enum TipoEvento {
    PRESENCIAL = "Presencial",
    REMOTO = "Remoto",
    HIBRIDO = "Híbrido"
}

type Evento = {
    id: string;
    titulo: string;
    data: Date;
    tipo: TipoEvento;
    ingressos: Ingresso[];
}

type Ingresso = {
    id: string;
    evento: Evento;
    valor: number;
    pago: boolean;
}

type Organizador = {
    id: string;
    nome: string;
    eventos: Evento[];
}

type Participante = {
    id: string;
    nome: string;
    ingressos: Ingresso[];
    reservas: Reserva[];
    eventos: Evento[];
}

type Reserva = {
    id: string;
    ingresso: Ingresso;
    participante: Participante;
    ativa: boolean
}