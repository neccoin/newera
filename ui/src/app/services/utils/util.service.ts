import { Injectable } from '@angular/core';

/**
 *
 * Util service is for common resusable methods.
 *
 */
@Injectable()
export class UtilService {

  constructor() {
  }

  /**
   * Method to generate random hex string.
   */
  generateRandomSerial () {
    const seed = '0123456789ABCDEF0123456789ABCDEF0123456789ABCDEF012345';
    let serialNumber = '0x';
    for (let index = 0; index < 54; index++) {
      serialNumber += seed.charAt(Math.floor(Math.random() * seed.length));
    }
    return serialNumber;
  }

  /**
   * Method to convert Hex to Number.
   *
   * @param hex Hex string
   */
  convertToNumber (hex: string) {
    return Number(hex);
  }

  sumCommitmentValues(commitment) {
    return commitment.reduce((a, b) => {
      return {
        value: (Number(a.value) + Number(b.value)),
      };
    });
  }

  validate(evt) {
    const theEvent = evt;
    let key;
    if (theEvent.type === 'paste') { // Handle paste
        key = evt.clipboardData.getData('text/plain');
    } else {// Handle key press
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) { theEvent.preventDefault(); }
    }
  }

  allowLowercase(evt) {
    const theEvent = evt;
    let key;
    if (theEvent.type === 'paste') { // Handle paste
        key = evt.clipboardData.getData('text/plain');
    } else {// Handle key press
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    const regex = /^[a-z]+$/;
    if ( !regex.test(key) ) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) { theEvent.preventDefault(); }
    }
  }

  replaceUnderscores(string) {
    return string.replace(/_/g, ' ').toUpperCase();
  }

  noNegtiveNumber(evt) {
    let value;
    if (evt.type !== 'paste') {
      value = evt.key;
    }
    if (isNaN(value)) {
      return evt.returnValue = false;
    }
    if (Number(value) < 0) {
      return evt.returnValue = false;
    }
  }

  validateTransactionHash(evt) {
    const theEvent = evt;
    let key;
    if (theEvent.type === 'paste') {
        key = evt.clipboardData.getData('text/plain');
    } else {
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    const regex = /^0x([A-Fa-f0-9]{64})$/;
    if ( !regex.test(key) ) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) { theEvent.preventDefault(); }
    }
  }
}
