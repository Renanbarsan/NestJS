
import { IsNotEmpty } from "class-validator"
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "tb_produtos" })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    preço: string

    @OneToMany(() => Categoria, (Categoria) => Categoria.produto)
    postagem: Categoria[]
  categoria: any;
}
