import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Produto } from "src/produto/entities/produto.entity";
import { DeleteResult, ILike, Repository } from "typeorm"
@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private ProdutoRepository: Repository<Produto>
    ) {}

     async findAll(): Promise<Produto[]> {
       return await this.ProdutoRepository.find({
        relations: {
          
        }
       })
    }

    async findById(id: number): Promise<Produto> {

            let produto = await this.ProdutoRepository.findOne({
                where: {
                    id
                },
                relations: {
                    
                }
            })
            if (!Produto)
            throw new HttpException('Produto não existe', HttpStatus.NOT_FOUND)

            return produto
        }

         async findByNome(nome: string): Promise<Produto[]>{
              return await this.ProdutoRepository.find({
                where: {
                    nome: ILike(`%${nome}%`)

                },
                relations: {
                    
                }
              })
         }

             async create(produto: Produto):  Promise<Produto> {
                  return await this.ProdutoRepository.save(produto)
             }

             async update(produto: Produto): Promise<Produto> {
                     let buscarproduto = await (await this.findById(produto.id))

                     if(!buscarproduto || !produto.id)
                        throw new HttpException('Produto Não Existe', HttpStatus.NOT_FOUND)

                        return await this.ProdutoRepository.save(produto)
             }

             async delete(id: number): Promise<DeleteResult> {
                let buscarproduto = await this.findById(id)
                
                if(!buscarproduto)
                   throw new HttpException('Produto não encontrada', HttpStatus.NOT_FOUND)
                
                return await this.ProdutoRepository.delete(id)
             }
             
            }
