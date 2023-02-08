import { Request, Response } from 'express';
import { RouteAdaptor } from 'src/decorator/route-adaptor.decorator';
import { DataService } from 'src/service/data.service';
import { HttpStatusCodeEnum } from 'src/type/response-status.type';

type DataContollerType = {
  dataService: DataService;
};

export class DataController {
  private dataService: DataService;

  constructor({ dataService }: DataContollerType) {
    this.dataService = dataService;
    this.getDatas = this.getDatas.bind(this);
    this.createData = this.createData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  @RouteAdaptor
  async getDatas(req: Request, res: Response) {
    const dataRes = await this.dataService.getDatas();

    return res.json(dataRes);
  }

  @RouteAdaptor
  async createData(
    req: Request<unknown, unknown, { data: string }>,
    res: Response,
  ) {
    const { data } = req.body;
    const dataRes = await this.dataService.createData({ data });

    return res.status(HttpStatusCodeEnum.CREATED).json(dataRes);
  }

  @RouteAdaptor
  async updateData(
    req: Request<{ id: string }, unknown, { data: string }>,
    res: Response,
  ) {
    const { id } = req.params;
    const { data } = req.body;

    const dataRes = await this.dataService.updateData({ id, data });

    return res.json(dataRes);
  }

  @RouteAdaptor
  async deleteData(
    req: Request<{ id: string }, unknown, unknown>,
    res: Response,
  ) {
    const { id } = req.params;

    await this.dataService.deleteData({ id });

    return res.status(HttpStatusCodeEnum.NO_CONTENT).json();
  }
}
