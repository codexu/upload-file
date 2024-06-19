import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as fs from 'fs-extra';

@Injectable()
export class AppService {
  // 保存文件
  async saveSingleFile(file: Express.Multer.File) {
    const uploadPath = `./.upload/${uuid()}.${file.originalname.split('.').pop()}`;
    await fs.outputFile(uploadPath, file.buffer);
    return uploadPath;
  }

  // 保存多个文件
  async saveMultipleFile(files: Express.Multer.File[]) {
    const uploadPath = `./.upload`;
    await fs.ensureDir(uploadPath);
    const paths = [];
    for (const file of files) {
      const path = `${uploadPath}/${uuid()}.${file.originalname.split('.').pop()}`;
      paths.push(path);
      await fs.outputFile(path, file.buffer);
    }
    return paths;
  }
}
