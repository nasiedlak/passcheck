import { Component, OnInit } from '@angular/core';
import { Password } from '../password';

@Component({
  selector: 'app-mainbox',
  templateUrl: './mainbox.component.html',
  styleUrls: ['./mainbox.component.css']
})
export class MainboxComponent implements OnInit {

  password: Password = {
    pass: "",
    minOneNumber: false,
    minOneLetter: false,
    minOneSpecialCharacter: false,
    minLength: 0,
    maxLength: 100,
    acceptableCharacters: ""
  }

  submitClick() {

    let invalidPassword = false;
    let userPassword = this.password.pass;
    let oneNumber = false;
    let oneLetter = false;
    let oneSpecialCharacter = false;
    let chars: number[] = [];
    let acceptableChars: number[] = [];

    for(let i = 0; i < this.password.acceptableCharacters.length; i++) {
      acceptableChars.push(this.password.acceptableCharacters.charCodeAt(i));
    }

    if(userPassword.length < this.password.minLength || userPassword.length > this.password.maxLength) {
      invalidPassword = true;
    }

    for(let i = 0; i < userPassword.length; i++) {

      let currentChar = userPassword.charCodeAt(i);
      chars.push(currentChar);

      if(currentChar >= 68 && currentChar <= 90) {
        oneLetter = true;
      }
      else if(currentChar >= 97 && currentChar <= 122) {
        oneLetter = true;
      }
      else if(currentChar >= 48 && currentChar <= 57) {
        oneNumber = true;
      }
      else if(currentChar >= 33 && currentChar <= 41) {
        oneSpecialCharacter = true;
      }

    }

    if(this.password.minOneNumber && !oneNumber) {
      invalidPassword = true;
    }
    else if(this.password.minOneLetter && !oneLetter) {
      invalidPassword = true;
    }
    else if(this.password.minOneSpecialCharacter && !oneSpecialCharacter) {
      invalidPassword = true;
    }

    for(let i = 0; i < chars.length; i++) {
      if(!(acceptableChars.includes(chars[i]))) {
        invalidPassword = true;
        break;
      }
    }

    if(invalidPassword) {
      document.documentElement.style.setProperty('--input-custom-color', "#DD2828");
    }
    else {
      document.documentElement.style.setProperty('--input-custom-color', "#17A700");
    }
  }

  constructor() { }

  ngOnInit() {
    console.log(this.password.pass);
  }

}
