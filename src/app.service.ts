import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async validacpf(cpf: string){
    
    let cpf2 = cpf
    
    cpf2 = cpf2.replace(" ", "")
    
    cpf2 = cpf2.replace(/[^0-9]/g,"")
    
    if(cpf2.length > 11) {return false}
    
    let f1 = parseInt(cpf2[0])*1 + parseInt(cpf2[1])*2 + parseInt(cpf2[2])*3 + parseInt(cpf2[3])*4 + parseInt(cpf2[4])*5 + parseInt(cpf2[5])*6 + parseInt(cpf2[6])*7 + parseInt(cpf2[7])*8 + parseInt(cpf2[8])*9
    
    f1 = f1%11
    
    if(f1 == 10){ 
    globalThis.f3 = 0
    }
    else{
      globalThis.f3 = f1
    }
    
    let f2 = parseInt(cpf2[0])*0 + parseInt(cpf2[1])*1 + parseInt(cpf2[2])*2 + parseInt(cpf2[3])*3 + parseInt(cpf2[4])*4 + parseInt(cpf2[5])*5 + parseInt(cpf2[6])*6 + parseInt(cpf2[7])*7 + parseInt(cpf2[8])*8 + f1*9
    
    f2 = f2%11
    
    if(f2 == 10){
      globalThis.f4 = 0
    }
    else{
      globalThis.f4 = f2
    }
    
    if(globalThis.f3 == parseInt(cpf2[9]) && globalThis.f4 == parseInt(cpf2[10])){
      return true
    }
    else{
      return false
    }
    
  }
}