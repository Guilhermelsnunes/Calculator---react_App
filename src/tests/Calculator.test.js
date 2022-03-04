// Unit tests

import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  let button0;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let operator_divide;
  let operator_multiply;
  let operator_subtract;
  let operator_add;
  let operator_equals;
  let decimal;

  beforeEach(() => {
    container = mount(<Calculator/>)
    button0 = container.find('#number0');
    button1 = container.find('#number1');
    button2 = container.find('#number2');
    button3 = container.find('#number3');
    button4 = container.find('#number4');
    button5 = container.find('#number5');
    button6 = container.find('#number6');
    button7 = container.find('#number7');
    button8 = container.find('#number8');
    button9 = container.find('#number9');
    operator_divide = container.find('#operator-divide');
    operator_multiply = container.find('#operator-multiply');
    operator_subtract = container.find('#operator-subtract');
    operator_add = container.find('#operator_add');
    operator_equals = container.find('#operator-equals');
    decimal = container.find('#decimal');
  });

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should add 1 to 4 and get 5', () => {
    button1.simulate('click');          // Press number1
    operator_add.simulate('click');     // Press plus
    button4.simulate('click');          // Press number4
    operator_equals.simulate('click');  // Press equal
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subtract 4 from 7 and get 3', () => {
    button7.simulate('click');
    operator_subtract.simulate('click');
    button4.simulate('click');
    operator_equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3')
  });

  it('should multiply 3 by 5 and get 15', () => {
    button3.simulate('click');
    operator_multiply.simulate('click');
    button5.simulate('click');
    operator_equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should divide 21 by 7 and get 3', () => {
    button2.simulate('click');
    button1.simulate('click');
    operator_divide.simulate('click');
    button7.simulate('click');
    operator_equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should concatenate multiple number button clicks', () => {
    button3.simulate('click');
    button7.simulate('click');
    button8.simulate('click');
    button5.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3785');
  });

  it('should chain multiple operations together (90+8.6) / 4', () => {
    button9.simulate('click');
    button0.simulate('click');
    operator_add.simulate('click');     // 90 + 8.6
    button8.simulate('click');
    decimal.simulate('click');
    button6.simulate('click');
    operator_divide.simulate('click');  // 98.6 / 4
    button4.simulate('click');
    operator_equals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('24.65');
  })
  
});

