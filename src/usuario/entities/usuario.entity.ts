import { ApiProperty } from "@nestjs/swagger";
import { Transform, TransformFnParams } from "class-transformer";
import { IsDateString, IsEmail, IsNotEmpty } from "class-validator";
import { Servico } from "src/servico/entities/servico.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_usuarios"})
export class Usuario{
    
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
    @IsEmail()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    usuario: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    senha: string;

    @IsNotEmpty()
    @IsDateString()
    @Column({ nullable: false })
    @ApiProperty()
    dataNascimento: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    @ApiProperty()
    foto: string;
    
    @ApiProperty()
    @OneToMany(() => Servico, (servico) => servico.usuario)
    servico: Servico[]
    
}