## Event Finder - Sistema de Casa de Eventos

### Introdução

<p align="center">
  <img src="eventfinder.png" alt="Event Finder" />
</p>

O Event Finder é uma aplicação web simples, containerizada com Docker, que permite a busca e gerenciamento de eventos. A aplicação é executada em um servidor web nginx sobre uma imagem Alpine Linux.

[Imagem original no Docker Hub](https://hub.docker.com/r/igorrrr/eventfinder-nginx)

---

### Pré-requisitos

* **Docker:** certifique-se de ter o [Docker](https://docs.docker.com/get-started/get-docker/) instalado e em funcionamento em sua máquina. Siga as instruções oficiais para o seu sistema operacional.

---

### Construindo a Imagem

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/igor-u/ada-devops-eventfinder.git
   cd ada-devops-eventfinder
   ```
2. **Construa a imagem:**

   ```bash
   docker build -t eventfinder .
   ```
- ```-t eventfinder```: define o nome da imagem como "eventfinder".

---

### Executando a Imagem

3. **Execute o container:**

   ```bash
   docker run -d -p 80:80 eventfinder
   ```

- ```-d```: executa o container em modo detached (em segundo plano).
- ```-p 80:80```: mapeia a porta 80 do container para a porta 80 do host. Isso permite acessar a aplicação no seu navegador.

---

### Acessando a Aplicação

Após executar o container, você poderá acessar o Event Finder pelo endereço http://localhost:80 no seu navegador.

---

### Parando o Container

Para listar todos os containers em execução, use:

  ```bash
  docker ps
  ```

Para parar o container em execução e disponibilizar a porta 80, utilize o seguinte comando:

  ```bash
  docker stop nome-do-container
  ```

Substitua ```nome-do-container``` pelo nome ou ID do seu container.

