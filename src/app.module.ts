import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.modules';// importando o modulo de autenticacao
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

// aqui podemos importar todos modulos(modulo de autenticacao, etc)
@Module({
  imports: [AuthModule, UserModule, BookmarkModule],
 
})
export class AppModule {}
