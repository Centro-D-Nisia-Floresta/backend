import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ServicoService } from "../services/servico.service";
import { Servico } from "../entities/servico.entity";

@Controller('/servicos')
export class ServicoController{
    constructor(private readonly servicoService: ServicoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Servico[]>{
        return this.servicoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Servico>{
        return this.servicoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Servico[]>{
        return this.servicoService.findByNome(nome);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() servico: Servico): Promise<Servico>{
        return this.servicoService.create(servico);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() servico: Servico): Promise<Servico>{
        return this.servicoService.update(servico);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.servicoService.delete(id);
    }
}