import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserProviders } from './providers/user.providers';
import { UserService } from './services/user.service';

@Module({
  imports: [DatabaseModule],
  providers: [...UserProviders, UserService],
})
export class UserModule {}
