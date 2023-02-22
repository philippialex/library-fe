import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:
    './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  decimal = 0;
  poleBoolean = [false, false, false, false, false, false, false, false];
  saveUsername = false;

  public Function(value:boolean, index:string){
    this.decimal = 0
    this.poleBoolean[parseInt(index)] = value;
    for(let i = 0; i < 8; i++){
      this.decimal += this.poleBoolean[i] === true ? Math.pow(2,8-i-1): 0
    }
    //console.log(this.poleBoolean)
  }



  changeToBinary(input: string): void{
    let number = parseInt(input)
    let binary = number.toString(2)
    let pole = binary.split('')
    let dlzka = pole.length
    //console.log(pole.length)
    for(let i = 0; i < 8-dlzka; i++){
      pole.unshift('0')
    }
    for(let i = 0; i < 8; i++){
      if(pole[i] === '1'){
        this.poleBoolean[i] = true
      }else{
        this.poleBoolean[i] = false
      }
    }
    // console.log(this.poleBoolean)
    // console.log(pole)
    // console.log(binary)
  }

  changeProjectDecimal(decimal: number): void {
    this.decimal = decimal;
  }
}
