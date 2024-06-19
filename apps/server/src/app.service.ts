import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';

@Injectable()
export class AppService {
  // 保存文件
  async saveFile(file: Express.Multer.File) {
    const uploadPath = `./.upload/${file.originalname}`;
    await fs.outputFile(uploadPath, file.buffer);
    return uploadPath;
  }
}
