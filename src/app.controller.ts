import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(":cpf")
  async validacpf(@Param("cpf") cpf: string){
    return this.appService.validacpf(cpf)
  }

/*   @Get("/requests/count")
  async requests(){
    return this.appService.requests()
  } */
}
