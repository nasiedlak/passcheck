export interface Password {
  pass: string;
  minOneNumber: boolean;
  minOneLetter: boolean;
  minOneSpecialCharacter: boolean;
  minLength: number;
  maxLength: number;
  acceptableCharacters: string;
}
