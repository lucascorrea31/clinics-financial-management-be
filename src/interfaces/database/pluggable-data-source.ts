import {DataSource} from 'typeorm';

export interface PluggableDataSource {
  setup(): Promise<void>;
  getDataSource(): DataSource;
  getName(): string;
}
