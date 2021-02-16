/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Servo library blocks.
 *     The Arduino Servo library docs: http://arduino.cc/en/reference/servo
 *
 * TODO: If angle selector added to blocks edit code here.
 */
'use strict';

goog.provide('Blockly.Arduino.servo');

goog.require('Blockly.Arduino');


/**
 * Code generator to set an angle (Y) value to a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['servo_write'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoAngle = Blockly.Arduino.valueToCode(
      block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '90';
  var servoName = 'myServo' + pinKey;

  Blockly.Arduino.reservePin(
      block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Write');

  Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
  Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  var setupCode = servoName + '.attach(' + pinKey + ');';
  Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

  var code = servoName + '.write(' + servoAngle + ');\n';
  return code;
};

/**
 * Code generator to read an angle value from a servo pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.read();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['servo_read'] = function(block) {
  var pinKey = block.getFieldValue('SERVO_PIN');
  var servoName = 'myServo' + pinKey;

  Blockly.Arduino.reservePin(
      block, pinKey, Blockly.Arduino.PinTypes.SERVO, 'Servo Read');

  Blockly.Arduino.addInclude('servo', '#include <Servo.h>');
  Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');

  var setupCode = servoName + '.attach(' + pinKey + ');';
  Blockly.Arduino.addSetup('servo_' + pinKey, setupCode, true);

  var code = servoName + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//TODO: move ttmotor code out of servo files and into a file that acutally makes since

Blockly.Arduino['motor_speed_percent2'] = function(block) {
  var dropdown_motorside = block.getFieldValue('motorSide');
  //var text_speed = block.getFieldValue('speed');
  var value_speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  //var testing23 = document.getElementById("val23");
  
  if (value_speed > 100){
    value_speed = 100;
    alert('out of range; please follow instructions');
    //console.log(testing23);
  }

  if(value_speed < -100) {
    value_speed  = -100;
    alert('out of range; please stop trying to break the code');
  }

  var code;
  if(value_speed < 0){
    if(dropdown_motorside == 'right'){
      code = '  digitalWrite(Rhbridge_1,HIGH);\n  digitalWrite(Rhbridge_2,LOW);\n  analogWrite(Rpwm,' + -value_speed + ');\n';
    } else if(dropdown_motorside == 'left'){
      code = '  digitalWrite(Lhbridge_1,HIGH);\n  digitalWrite(Lhbridge_2,LOW);\n  analogWrite(Lpwm,' + -value_speed + ');\n';
    } else if(dropdown_motorside == 'both'){
      code = '  digitalWrite(Rhbridge_1,HIGH);\n  digitalWrite(Rhbridge_2,LOW);\n  analogWrite(Rpwm,' + -value_speed + ');\n' + '  digitalWrite(Lhbridge_1,HIGH);\n  digitalWrite(Lhbridge_2,LOW);\n  analogWrite(Lpwm,' + -value_speed + ')\n';
    }
  } else if(value_speed > 0){
    if(dropdown_motorside =='right'){
      code = '  digitalWrite(Rhbridge_1,LOW);\n  digitalWrite(Rhbridge_2,HIGH);\n  analogWrite(Rpwm,' + value_speed + ');\n';
    } else if(dropdown_motorside == 'left'){
      code = '  digitalWrite(Lhbridge_1,LOW);\n  digitalWrite(Lhbridge_2,HIGH);\n  analogWrite(Lpwm,' + value_speed + ');\n';
    } else if (dropdown_motorside == 'both'){
      code = '  digitalWrite(Rhbridge_1,LOW);\n  digitalWrite(Rhbridge_2,HIGH);\n  analogWrite(Rpwm,' + value_speed + ');\n' + '  digitalWrite(Lhbridge_1,LOW);\n  digitalWrite(Lhbridge_2,HIGH);\n  analogWrite(Lpwm,' + value_speed + ')\n';
    }
  } else if(value_speed == 0){
    if(dropdown_motorside =='right'){
      code = '  digitalWrite(Rhbridge_1,LOW);\n  digitalWrite(Rhbridge_2,LOW);\n  analogWrite(Rpwm,' + value_speed + ');\n';
    } else if(dropdown_motorside =='left'){
      code = '  digitalWrite(Lhbridge_1,LOW);\n  digitalWrite(Lhbridge_2,LOW);\n  analogWrite(Lpwm,' + value_speed + ');\n';
    } else if (dropdown_motorside == 'both'){
      code = '  digitalWrite(Rhbridge_1,LOW);\n  digitalWrite(Rhbridge_2,LOW);\n  analogWrite(Rpwm,' + value_speed + ');\n' + '  digitalWrite(Lhbridge_1,LOW);\n  digitalWrite(Lhbridge_2,LOW);\n  analogWrite(Lpwm,' + value_speed + ');\n';
    }
  } 
  return code + '\n';
};

Blockly.Arduino['motor_speed_timed'] = function(block) {
  var dropdown_motorside = block.getFieldValue('motorSide');
  var time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
  var speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if (speed > 100){
    speed = 100;
    alert('out of range; please follow instructions');
    //console.log(testing23);
  }

  if(speed < -100) {
    speed  = -100;
    alert('out of range; please stop trying to break the code');
  } 

  var code;

  if(dropdown_motorside == 'left'){
   code = 'timedMotorSingle(' + time + ', ' + speed + ', true);';
  } else if (dropdown_motorside == 'right'){
    code = 'timedMotorSingle(' + time + ', ' + speed + ', false);';
  } else if (dropdown_motorside == 'both'){
    code = 'timedMotorDouble(' + time + ', ' + speed + ');';
  }

  


  /*var code = 'static old_time = millis();\nunsigned long time_milisec = (unsigned long)(' + time + '*1000);\nwhile(millis() - old_time < time_milisec){\n';
  if(speed < 0){
    if(dropdown_motorside == 'right'){
      code += '  digitalWrite(Rhbridge_1,HIGH);\n  digitalWrite(Rhbridge_2,LOW);\n  analogWrite(Rpwm,' + -speed + ')\n  }\n';
    } else if(dropdown_motorside == 'left'){
      code += '  digitalWrite(Lhbridge_1,HIGH);\n  digitalWrite(Lhbridge_2,LOW);\n  analogWrite(Lpwm,' + -speed + ')\n}  \n';
    }
  } else if(speed > 0){
    if(dropdown_motorside =='right'){
      code += '  digitalWrite(Rhbridge_1,LOW);\n  digitalWrite(Rhbridge_2,HIGH);\n  analogWrite(Rpwm,' + speed + ')\n}  \n';
    } else if(dropdown_motorside == 'left'){
      code += '  digitalWrite(Lhbridge_1,LOW);\n  digitalWrite(Lhbridge_2,HIGH);\n  analogWrite(Lpwm,' + speed + ')\n}  \n';
    }
  } else if(speed == 0){
    if(dropdown_motorside =='right'){
      code += '  digitalWrite(Rhbridge_1,LOW);\n  digitalWrite(Rhbridge_2,LOW);\n  analogWrite(Rpwm,' + speed + ')\n}  \n';
    } else if(dropdown_motorside =='left'){
      code += '  digitalWrite(Lhbridge_1,LOW);\n  digitalWrite(Lhbridge_2,LOW);\n  analogWrite(Lpwm,' + speed + ')\n}  \n';
    }
  } */
  return code + '\n';
};

Blockly.Arduino['limit_switch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '(digitalRead(limitSwitchPin) == HIGH)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*Blockly.Arduino['set_color_sensor_color'] = function(block) {
  var color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch(color){
    case 'red':
      code = '  digitalWrite(S2, LOW);\n  digitalWrite(S3, LOW);\n';
      break;
    case 'blue':
      code = '  digitalWrite(S2, LOW);\n  digitalWrite(S3, HIGH);\n';
      break;
    case 'clear':
      code = '  digitalWrite(S2, HIGH;\n  digitalWrite(S3, LOW);\n';
      break;
    case 'green':
      code = '  digitalWrite(S2, HIGH);\n  digitalWrite(S3, HIGH);\n';
    break;
  }
  return code;
};*/

Blockly.Arduino['read_color_sensor'] = function(block) {
  var color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code;
  //smaller pulses correspond to stronger color readings
  switch(color) {
    case 'red':
      code = 'redPulseWidth < bluePulseWidth && redPulseWidth < greenPulseWidth';
      break;
    case 'blue':
      code = 'bluePulseWidth < redPulseWidth && bluePulseWidth < greenPulseWidth';
      break;
    case 'green':
      code = 'greenPulseWidth < bluePulseWidth && greenPulseWidth < redPulseWidth';
      break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};