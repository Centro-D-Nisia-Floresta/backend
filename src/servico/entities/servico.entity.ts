import { ApiProperty } from "@nestjs/swagger";
import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_servicos"})
export class Servico{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;
    
    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    duracao: string; 

    @IsNotEmpty()
    @Column("decimal", { precision: 6, scale: 2, nullable: false })
    @ApiProperty()
    preco: number;
    
    @IsNotEmpty()
    @Column({ nullable: false })
    @ApiProperty()
    vagas: number

    @Column({ nullable: false })
    @ApiProperty()
    gratuidade: boolean;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    @ApiProperty()
    foto: string;

    @ApiProperty({type: () => Categoria})
    @ManyToOne(() => Categoria, (categoria) => categoria.servico, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria;

    @ApiProperty({type: () => Usuario})
    @ManyToOne(() => Usuario, (usuario) => usuario.servico, {
    onDelete: 'CASCADE'
    })
    usuario: Usuario;
}