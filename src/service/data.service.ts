import { DataRepositoryMemory } from 'src/repository/memory/data.repository.memory';
import {
  DataCreateParamsType,
  DataDeleteParamsType,
  DataUpdateParamsType,
} from 'src/type/data.type';

type DataServiceType = {
  dataRepo: DataRepositoryMemory;
};

export class DataService {
  private dataRepo: DataRepositoryMemory;

  constructor({ dataRepo }: DataServiceType) {
    this.dataRepo = dataRepo;
    this.getDatas = this.getDatas.bind(this);
    this.createData = this.createData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  async getDatas() {
    const datas = await this.dataRepo.getAll();
    return datas;
  }

  async createData(params: DataCreateParamsType) {
    const data = await this.dataRepo.create(params);
    return data;
  }

  async updateData(params: DataUpdateParamsType) {
    const data = await this.dataRepo.update(params);
    return data;
  }

  async deleteData(params: DataDeleteParamsType) {
    await this.dataRepo.delete(params);
  }
}
