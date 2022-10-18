import { IsNotEmpty, MaxLength } from "class-validator"
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_categorias"})
      export class Categoria {

        @PrimaryGeneratedColumn()
        id: number
        
        @IsNotEmpty()
        @MaxLength(100)
        @Column({length: 100, nullable: false})
        seção: string

        @ManyToOne(() => Produto, (produto) => produto.categoria, {
          onDelete: "CASCADE"

      })

      produto: Produto []
      

    }