const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://54.88.77.233');

client.on('connect', () =>{
    console.log('Conectado a broker MQTT EC2')
    client.subscribe('test/topic', (err) =>{
        if(!err){
            console.log("Inscrito no topico test/topic")
        }
    })
})

client.on('message', (topic,message) =>{
    console.log(`mensagem recebida no topico ${topic}: ${message.toString()}`);
});