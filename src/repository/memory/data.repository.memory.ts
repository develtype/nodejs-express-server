import {
  DataCreateParamsType,
  DataDeleteParamsType,
  DatasType,
  DataType,
  DataUpdateParamsType,
} from 'src/type/data.type';
import { memotyDataUtil } from 'src/util/memory-data.util';

export class DataRepositoryMemory {
  private datas: DatasType = Array.from(Array(10).keys()).reduce<{
    [id: string]: DataType;
  }>((res) => {
    const data = memotyDataUtil.generateRandomString();
    const dataItem = {
      id: data,
      data,
    };
    res[data] = dataItem;
    return res;
  }, {});

  async getAll() {
    await new Promise((r) => setTimeout(r, Math.random() * 400 + 50));

    return Object.values(this.datas);
  }

  async create({ data }: DataCreateParamsType) {
    await new Promise((r) => setTimeout(r, Math.random() * 200 + 50));

    const newId = memotyDataUtil.generateRandomString();

    this.datas[newId] = {
      id: newId,
      data,
    };

    return this.datas[newId];
  }

  async update({ id, data }: DataUpdateParamsType) {
    await new Promise((r) => setTimeout(r, Math.random() * 300 + 50));

    this.datas[id] = {
      id,
      data,
    };

    return this.datas[id];
  }

  async delete({ id }: DataDeleteParamsType) {
    await new Promise((r) => setTimeout(r, Math.random() * 200 + 50));

    delete this.datas[id];

    return true;
  }
}
