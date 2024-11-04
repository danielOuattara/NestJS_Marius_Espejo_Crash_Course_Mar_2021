import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { UserEntity } from 'typeorm/entities/user.entity';

const ormConfig: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: [UserEntity],
  synchronize: true, // caution for production
};

export default ormConfig;
