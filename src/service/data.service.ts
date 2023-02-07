import { DataRepositoryMemory } from 'src/repository/memory/data.repository.memory';

type DataServiceType = {
  dataRepo: DataRepositoryMemory;
};

export class DataService {
  dataRepo: DataRepositoryMemory;

  constructor({ dataRepo }: DataServiceType) {
    this.dataRepo = dataRepo;
    this.getDatas = this.getDatas.bind(this);
  }

  async getDatas() {
    const datas = await this.dataRepo.getDatas();
    return datas;
  }
}
