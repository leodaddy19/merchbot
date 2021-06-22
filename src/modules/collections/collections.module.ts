import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionsRepository } from './collections.repository';
import { CollectionsService } from './collections.service';

@Module({
  imports: [],
  providers: [CollectionsRepository, CollectionsService],
  exports: [CollectionsService],
})
export class CollectionsModule {}
