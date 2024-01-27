import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadImgModule } from './upload-img/upload-img.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UploadImgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
