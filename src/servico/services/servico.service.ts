import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Servico } from "../entities/servico.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { CategoriaService } from "src/categoria/services/categoria.service";

@Injectable()
export class ServicoService{
    constructor(
        @InjectRepository(Servico)
        private servicoRepository: Repository<Servico>,
        private categoriaService: CategoriaService
    ){}

    async findAll(): Promise<Servico[]>{
        return await this.servicoRepository.find({
            relations: {
                categoria: true,
                usuario: true
            }
        });
    }

    async findById(id: number): Promise<Servico>{
        let servico = await this.servicoRepository.findOne({
            where: {
                id
            },

            relations: {
                categoria: true,
                usuario: true
            }
        });

        if (!servico)
            throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);

        return servico;
    }

    async findByNome(nome: string): Promise<Servico[]> {
        return this.servicoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },

            relations: {
                categoria: true,
                usuario: true
            }
        });
    }

    async create(servico: Servico): Promise<Servico>{
        if(servico.categoria) {
            let categoria = await this.categoriaService.findById(servico.categoria.id)
            if(!categoria) {
                throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
            }
            return await this.servicoRepository.save(servico);
        }
        return await this.servicoRepository.save(servico);
    }

    async update(servico: Servico): Promise<Servico>{
        let buscaServico = await this.findById(servico.id);

        if(!servico.id || !buscaServico){
            throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);
        }
        
        return await this.servicoRepository.save(servico);
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscaServico = await this.findById(id);

        if(!buscaServico){
            throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);
        }

        return await this.servicoRepository.delete(id);
    }
}