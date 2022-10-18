import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";
@Injectable ()
export class CategoriaService {

    constructor(
        @InjectRepository(Categoria)
        private CategoriaRepository: Repository<Categoria>
    )   {}

    async findAll(): Promise<Categoria[]> {
       return await this.CategoriaRepository.find({
        relations: {
            produto: true
        }
       });
    }

    async findById(id: number): Promise<Categoria> {

            let Categoria = await this.CategoriaRepository.findOne({
                where: {
                    id
                },
                relations: {
                    produto: true
                }
            })
            if (!Categoria)
            throw new HttpException('Categoria não existe', HttpStatus.NOT_FOUND)

            return Categoria
        }

         async findByTitulo(seção: string): Promise<Categoria[]>{
              return await this.CategoriaRepository.find({
                where: {
                    seção: ILike(`%${seção}%`)

                },
                relations: {
                    produto: true
                }
              })
         }

             async create(Categoria: Categoria):  Promise<Categoria> {
                  return await this.CategoriaRepository.save(Categoria)
             }

             async update(Categoria: Categoria): Promise<Categoria> {
                     let buscarCategoria = await (await this.findById(Categoria.id))

                     if(!buscarCategoria || !Categoria.id)
                        throw new HttpException('Categoria Não Existe', HttpStatus.NOT_FOUND)

                        return await this.CategoriaRepository.save(Categoria)
             }

             async delete(id: number): Promise<DeleteResult> {
                let buscarCategoria = await this.findById(id)
                
                if(!buscarCategoria)
           
                throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND)
                
                return await this.CategoriaRepository.delete(id)
             }
             
            }