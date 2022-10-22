import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API online!';
  }
  
  async validacpf(cpff: string){
    
    let cpf = cpff
    
    cpf = cpf.replace(" ", "")
    
    cpf = cpf.replace(/[^0-9]/g,"")

    if (cpf.length > 11){
      return false
    }

    let f1 = parseInt(cpf[0])*1 + parseInt(cpf[1])*2 + parseInt(cpf[2])*3 + parseInt(cpf[3])*4 + parseInt(cpf[4])*5 + parseInt(cpf[5])*6 + parseInt(cpf[6])*7 + parseInt(cpf[7])*8 + parseInt(cpf[8])*9
    
    f1 = f1%11
    
    if(f1 == 10){ 
    globalThis.f3 = 0
    }
    else{
      globalThis.f3 = f1
    }
    
    let f2 = parseInt(cpf[0])*0 + parseInt(cpf[1])*1 + parseInt(cpf[2])*2 + parseInt(cpf[3])*3 + parseInt(cpf[4])*4 + parseInt(cpf[5])*5 + parseInt(cpf[6])*6 + parseInt(cpf[7])*7 + parseInt(cpf[8])*8 + globalThis.f3*9
    
    f2 = f2%11
    
    if(f2 == 10){
      globalThis.f4 = 0
    }
    else{
      globalThis.f4 = f2
    }
    
    if(globalThis.f3 == parseInt(cpf[9]) && globalThis.f4 == parseInt(cpf[10])){
      return true
    }
    else {
      return false
    }
  }

}
