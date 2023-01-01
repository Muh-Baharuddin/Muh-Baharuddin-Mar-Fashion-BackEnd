import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'neoncat',
  password: 'Mypassis1',
  database: 'mar_fashion_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migration/*{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
