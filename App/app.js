const { Observable, } = require('rxjs');
const { map, filter} = require('rxjs/operators');
var mqtt = require('./mqttCluster.js');

global.mtqqLocalPath = process.env.MQTTLOCAL;
global.mtqqLocalPath = 'mqtt://192.168.0.11';

const remoteStream = new Observable(async subscriber => {  
    var mqttCluster=await mqtt.getClusterAsync()   
    mqttCluster.subscribeData('tele/tasmota_B6B10E/RESULT', function(content){   
            subscriber.next(content)
    });
  });




  const onStream = remoteStream.pipe(
    filter(m=>m.SerialReceived),
    map(m=>m.SerialReceived)
  )


  onStream.subscribe(async m => {
    //console.log(JSON.stringify(m));
    (await mqtt.getClusterAsync()).publishMessage('cmnd/tasmota_B6B10E/SerialSend',m.counter.toString());    
    
  })
//Rule1 ON System#Boot DO BackLog SerialSend1 CONNECTED;  ENDON  
//Rule1 1
//SerialSend 1