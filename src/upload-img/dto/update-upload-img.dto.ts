import { PartialType } from '@nestjs/mapped-types';
import { CreateUploadImgDto } from './create-upload-img.dto';

export class UpdateUploadImgDto extends PartialType(CreateUploadImgDto) {}
