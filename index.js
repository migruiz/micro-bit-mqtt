//TASMOTA RULE
//Rule1 on SerialReceived#? do Publish mbmqtt %value% endon


//Rule1 ON SerialReceived#counter DO Mem1 %value% ENDON  ON SerialReceived#name DO Publish mbmqtt {"From":"%Mem1%","To":"%value%"}  ENDON  