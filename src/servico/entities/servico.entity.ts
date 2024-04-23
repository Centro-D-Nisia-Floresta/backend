import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_servicos"})
export class Servico{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    duracao: string; 

    // @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column("decimal", {precision: 6, scale: 2, nullable: false})
    preco: number;
    
    // @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({nullable: false})
    vagas: number

    @Column({nullable: false})
    gratuidade: boolean;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.servico, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria;
}