import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TemaService } from "src/tema/service/tema.service";
import { Tema } from "../entities/tema.entity";

@Controller("/tema")
export class TemaController {
    
     constructor(private readonly TemaService: TemaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tema[]> {
         return this.TemaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
        return this.TemaService.findById(id)
    }

    @Get('/descricao/:descricao')
         @HttpCode(HttpStatus.OK)
         findByDescricao(@Param('titulo') descricao:string): Promise<Tema[]> {
              return this.TemaService.findByDescricao(descricao)
         }


         @Post()
         @HttpCode(HttpStatus.CREATED)
         create(@Body() postagem: Tema): Promise<Tema> {
            return this.TemaService.create(postagem)
         } 

         @Put()
         @HttpCode(HttpStatus.OK)
         update(@Body() postagem: Tema): Promise<Tema>{
              return this.TemaService.update(postagem)
         }

         @Delete('/:id')
         @HttpCode(HttpStatus.NO_CONTENT)
         delete(@Param('id', ParseIntPipe) id: number){
              return this.TemaService.delete(id)
         }
         

}
function descricao(descricao: any): Promise<Tema[]> {
    throw new Error("Function not implemented.");
}