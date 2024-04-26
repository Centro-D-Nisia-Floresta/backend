import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { Servico } from './servico/entities/servico.entity';
import { ServicoModule } from './servico/servico.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_projetointegrador',
    entities: [Categoria, Servico, Usuario],
    synchronize: true,
    logging: true
  }),
  CategoriaModule,
  ServicoModule,
  AuthModule,
  UsuarioModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
