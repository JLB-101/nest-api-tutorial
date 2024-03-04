import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.modules';// importando o modulo de autenticacao

// aqui podemos importar todos modulos(modulo de autenticacao, etc)
@Module({
  imports: [AuthModule],
 
})
export class AppModule {}
