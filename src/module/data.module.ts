import { DataMemoryRepository } from 'src/repository/memory/data.memory.repository';

type DataModuleType = {
  dataRepo: DataMemoryRepository;
};

export class DataModule {
  dataRepo: DataMemoryRepository;

  constructor({ dataRepo }: DataModuleType) {
    this.dataRepo = dataRepo;
  }

  async getDatas() {
    const datas = await this.dataRepo.getDatas();
    return datas;
  }
}
