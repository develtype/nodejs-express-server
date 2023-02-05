import { DatasType, DataType } from 'src/type/data.type';
import { memotyDataUtil } from 'src/util/memory-data.util';

export class DataMemoryRepository {
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

  async getDatas() {
    await new Promise((r) => setTimeout(r, Math.random() * 50 + 140));
    return Object.values(this.datas);
  }
}
