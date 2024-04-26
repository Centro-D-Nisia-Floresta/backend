import { Transform, TransformFnParams } from "class-transformer";
import { IsDate, IsDateString, IsEmail, IsNotEmpty } from "class-validator";
import { Servico } from "src/servico/entities/servico.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_usuarios"})
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @IsEmail()
    @Column({length: 255, nullable: false})
    usuario: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    senha: string;

    @IsNotEmpty()
    @IsDateString()
    @Column({nullable: false})
    dataNascimento: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    foto: string;
    
    @OneToMany(() => Servico, (servico) => servico.usuario)
    servico: Servico[]
    
}