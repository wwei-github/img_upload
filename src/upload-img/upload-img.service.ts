import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadImgService {
  private readonly s3 = new S3({
    accessKeyId: process.env.AWS_ACCESSKEYID,
    secretAccessKey: process.env.AWS_SECRETACCESSKEY,
  });

  async uploadFile(files: Array<Express.Multer.File>): Promise<any[]> {
    const uploadFiles = files.map(async (file) => {
      const type = file.originalname.split('.').pop();
      const name = `${uuidv4()}.${type}`;
      const params = {
        Bucket: 'wweitest',
        Key: name,
        Body: file.buffer,
        ContentType: `image/${type}`,
      };

      const result = await this.s3.upload(params).promise();
      const url = result.Location.replace(
        'https://wweitest.s3.amazonaws.com',
        'https://d1rd33wg296s0k.cloudfront.net',
      );
      return { name: file.originalname, url };
    });

    return Promise.all(uploadFiles);
  }
}
