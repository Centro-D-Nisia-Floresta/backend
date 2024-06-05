import { ApiProperty } from "@nestjs/swagger";
import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Servico } from "src/servico/entities/servico.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    tipoServico: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    @ApiProperty()
    descricao: string;

    @ApiProperty()
    @OneToMany(() => Servico, (servico) => servico.categoria)
    servico: Servico[];
}