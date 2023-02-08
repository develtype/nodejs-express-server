import { Request, Response } from 'express';
import { RouteAdaptor } from 'src/decorator/route-adaptor.decorator';
import { DataService } from 'src/service/data.service';

type DataContollerType = {
  dataService: DataService;
};

export class DataController {
  private dataService: DataService;

  constructor({ dataService }: DataContollerType) {
    this.dataService = dataService;
    this.getDatas = this.getDatas.bind(this);
  }

  @RouteAdaptor
  async getDatas(req: Request, res: Response) {
    const dataRes = await this.dataService.getDatas();

    return res.json(dataRes);
  }
}
