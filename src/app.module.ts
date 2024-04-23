import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Servico } from './servico/entities/servico.entity';
import { ServicoModule } from './servico/servico.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_projetointegrador',
    entities: [Categoria, Servico],
    synchronize: true,
    logging: true
  }),
  CategoriaModule,
  ServicoModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
