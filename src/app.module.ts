import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthorEntityTsModule } from './modules/authors/entities/author.entity.ts/author.entity.ts.module';
import { BookEntityTsModule } from './modules/books/entities/book.entity.ts/book.entity.ts.module';

@Module({
  imports: [AuthorEntityTsModule, BookEntityTsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
