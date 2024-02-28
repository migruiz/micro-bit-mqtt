//TASMOTA RULE
//Rule1 on SerialReceived#? do Publish mbmqtt %value% endon

const f="84,104,105,115,32,98,114,111,119,115,101,114,45,98,97,115,101,100,32,112,114,111,103,114,97,109,32,99,111,110,118,101,114,116,115,32,98,121,116,101,115,32,116,111,32,97,32,115,116,114,105,110,103,52,51,50,52,50,51,52,50,51,52,52,50,52,50,51,102,102,52,52,51,102,51,77,65,89,85,83,67,85,76,65,65,65,65,65,65,65,65,65,65,66,67,68,69,70"
const fdf32 = f.split(",").map(s=>String.fromCharCode(s))
const decce = fdf32.join("")
console.log(decce)
//Rule1 ON SerialReceived#encoded DO Publish MBMQTT %value%  ENDON  