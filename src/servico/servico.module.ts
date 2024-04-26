import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Servico } from "./entities/servico.entity";
import { ServicoService } from "./services/servico.service";
import { ServicoController } from "./controllers/servico.controller";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { CategoriaModule } from "src/categoria/categoria.module";

@Module({
    imports: [TypeOrmModule.forFeature([Servico]), CategoriaModule],
    providers: [ServicoService, CategoriaService],
    controllers: [ServicoController],
    exports: [TypeOrmModule],
})
export class ServicoModule{

}