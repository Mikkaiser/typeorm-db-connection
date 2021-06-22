import { Connection } from 'typeorm';
import { UserEntity } from '../models/user.entity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(UserEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
