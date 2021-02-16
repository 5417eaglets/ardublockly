'use strict'

goog.provide('Blockly.Arduino.ttmotor');

goog.require('Blockly.Arduino');

/**
*@param {!Blockly.Block} block 
*@return {string}
*/

/*Blockly.Arduino['motor_speed_percent2'] = function(block) {
    var dropdown_motorside = block.getFieldValue('motorSide');
    var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    if(value_speed < 0){
        code = '  digitalWrite(hbridge_1,HIGH);\n  digitalWrite(hbridge_2,LOW);\n  analogWrite(pwm,' + -value_speed + ')\n';
    } else if(value_speed > 0){
        code = '  digitalWrite(hbridge_1,LOW);\n  digitalWrite(hbridge_2,HIGH);\n  analogWrite(pwm,' + value_speed + ')\n';
    } else if(value_speed == 0){
        code = '  digitalWrite(hbridge_1,LOW);\n  digitalWrite(hbridge_2,LOW);\n  analogWrite(pwm,' + value_speed + ')\n';
    }
    return code;
  };*/