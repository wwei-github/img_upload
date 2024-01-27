import { Module } from '@nestjs/common';
import { UploadImgService } from './upload-img.service';
import { UploadImgController } from './upload-img.controller';

@Module({
  controllers: [UploadImgController],
  providers: [UploadImgService]
})
export class UploadImgModule {}
