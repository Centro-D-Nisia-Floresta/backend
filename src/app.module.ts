import { Module } from '@nestjs/common';
import { CategoriaModule } from './categoria/categoria.module';
import { ServicoModule } from './servico/servico.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevService } from './data/services/dev.service';
import { AppController } from './app.controller';
import { ProdService } from './data/services/prod.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
  CategoriaModule,
  ServicoModule,
  AuthModule,
  UsuarioModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
