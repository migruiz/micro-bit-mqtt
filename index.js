const { Observable, } = require('rxjs');
const { map} = require('rxjs/operators');
var mqtt = require('./mqttCluster.js');

global.mtqqLocalPath = process.env.MQTTLOCAL;
global.mtqqLocalPath = 'mqtt://192.168.0.11';

const remoteStream = new Observable(async subscriber => {  
    var mqttCluster=await mqtt.getClusterAsync()   
    mqttCluster.subscribeData('MBMQTT', function(content){   
            subscriber.next(content)
    });
  });




  const onStream = remoteStream.pipe(
    map( m => m.encoded.split(",").map(s=>String.fromCharCode(s)).join(""))
  )


  onStream.subscribe(async m => {
    (await mqtt.getClusterAsync()).publishMessage('cmnd/tasmota_B6B10E/SerialSend',m);    
    
  })
//Rule1 ON SerialReceived#encoded DO Publish MBMQTT {"encoded":"%value%"}  ENDON  