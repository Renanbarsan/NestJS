import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "src/Produto/service/produto.service";
import { Produto } from "../entities/Produto.entity";

@Controller("/Produto")
export class ProdutoController {
    
     constructor(private readonly produtoService: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
         return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.produtoService.findById(id)
    }

    @Get('/descricao/:descricao')
         @HttpCode(HttpStatus.OK)
         findByDescricao(@Param('titulo') descricao:string): Promise<Produto[]> {
              return this.produtoService.findByNome(descricao)
         }


         @Post()
         @HttpCode(HttpStatus.CREATED)
         create(@Body() Produto: Produto): Promise<Produto> {
            return this.produtoService.create(Produto)
         } 

         @Put()
         @HttpCode(HttpStatus.OK)
         update(@Body() Produto: Produto): Promise<Produto>{
              return this.produtoService.update(Produto)
         }

         @Delete('/:id')
         @HttpCode(HttpStatus.NO_CONTENT)
         delete(@Param('id', ParseIntPipe) id: number){
              return this.produtoService.delete(id)
         }
         

}
function descricao(descricao: any): Promise<Produto[]> {
    throw new Error("Function not implemented.");
}
