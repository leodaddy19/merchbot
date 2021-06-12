import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import databaseConfig from './database.config';
@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) { }
  createMongooseOptions(): MongooseModuleOptions {
    console.log(this.dbConfig);
    return {
      uri: this.dbConfig.uri,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    };
  }
}
