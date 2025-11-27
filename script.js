// ### CONFIGURANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

// ### Configurando o ID do cliente MQTT 
const clienteId = 'web-casa-inteligente-ingrid';

// ### Criando o cliente MQTT do navegador, POREM ainda não estamos conectados ao BROKER
// const cliente = mqtt.connect(MQTT_URL, {
//     clienteId,
//     clean: true,
//     connectTimeout: 4000,
// });

// ################# Variaveis dos dispositivos
const lampSalaInput = document.getElementById("lamp-sala");
const lampSalaTexto = document.getElementById("lamp-sala-texto");


// ################# Alterando estado dos dispositivos

// pegando o evento de mudança do botão (ligado/desligado)
lampSalaInput.addEventListener("change", () => {
    // verifica de o botão esta como ligado
    const ligado = lampSalaInput.checked === true;

    if (ligado === true){
        console.log("Lampada ligada");
        lampSalaTexto.innerHTML = "Ligado";
    } else {
        console.log("Lampada desligada");
        lampSalaTexto.innerHTML = "Desligado";
    }
});


// ### chamando um evento do JS do tipo "DOMContentLoaded", que é o evento que acontece 
//      após toda a minha página de HTML ser carregada
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Página carregada com sucesso ✅... Conectando ao Mosquitto!");

//     // ### Estabelecendo a conexão com o broker mqtt
//     cliente.on("connect", () => {
//         console.log("Conexão estabelecida com Sucesso ✅!");
//         console.log("Cliente conectado: ", clienteId);

//         // ### criando um topico para acessar mensagens do MQTT
//         const topicoTeste = 'teste/ingrid';

//         // ### recebendo mensagens do topico criado
//         cliente.subscribe(topicoTeste);
//     });

//     // ### Preparando mensagem de erro caso algo aconteça
//     cliente.on("error", (erro) => {
//         console.error("Erro ao conectar ao Broker MQTT 🚫!");
//         console.error(erro);
//     });

//     // ### Recebendo as mensagem dos tópicos assinados no MQTT pelo cliente
//     cliente.on("message", (topico, mensagem) => {
//         console.log("Topico recebido: ", topico);
//         console.log("Mensagem recebida: ", mensagem);
//     });
// });


