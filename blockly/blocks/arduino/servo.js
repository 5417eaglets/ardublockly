/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino blocks for the Servo library.
 *     The Arduino Servo functions can be found in
 *     http://arduino.cc/en/reference/servo
 *
 * TODO: Add angle selector instead of block input.
 */
'use strict';

goog.provide('Blockly.Blocks.servo');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.servo.HUE = 60;

/*Blockly.Blocks['servo_write'] = {
  /**
   * Block for writing an angle value into a servo pin.
   * @this Blockly.Block
   */
/*  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/ServoWrite');
    this.setColour(Blockly.Blocks.servo.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_SERVO_WRITE)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'SERVO_PIN');
    this.setInputsInline(false);
    this.appendValueInput('SERVO_ANGLE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.ARD_SERVO_WRITE_TO);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_SERVO_WRITE_DEG_180);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_SERVO_WRITE_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  /*updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'SERVO_PIN', 'digitalPins');
  }
};

Blockly.Blocks['servo_read'] = {
  /**
   * Block for reading an angle value of a servo pin.
   * @this Blockly.Block
   */
/*  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/ServoRead');
    this.setColour(Blockly.Blocks.servo.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_SERVO_READ)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'SERVO_PIN');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(Blockly.Msg.ARD_SERVO_READ_TIP);
  },
  
  /** @return {string} The type of return value for the block, an integer. */
/*  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  /*updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'SERVO_PIN', 'digitalPins');
  }
};*/

//TODO: move ttmotor code out of servo files and into a file that acutally makes since

Blockly.Blocks['motor_speed_percent2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor: ")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"], ["both","both"]]), "motorSide")
        /*.appendField("speed:")
        .appendField(new Blockly.FieldTextInput("0"), "speed");*/
    this.appendValueInput("speed")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("speed (-100 to 100):");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['motor_speed_timed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor side:")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"], ["both","both"]]), "motorSide");
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("seconds:");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*Blockly.Blocks['limit_switch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("touch sensor activated");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("check to see if robot has hit something");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_color_sensor_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set color sensor to sense")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["blue","blue"], ["green","green"], ["clear","clear"]]), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['read_color_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is seeing")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["green","green"], ["blue","blue"]]), "color");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*Blockly.Blocks['motor_but_only_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor: ")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["right","right"]]), "side");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/

/*Blockly.Blocks['pain'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("how do you feel")
        .appendField(new Blockly.FieldDropdown([["i don't","i_dont"], ["if i could i would feel nothing","bear"], ["bad","bad"]]), "what");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};*/
