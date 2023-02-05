import { Router } from 'express';
import { DataModule } from 'src/module/data.module';
import { DataMemoryRepository } from 'src/repository/memory/data.memory.repository';

export function dataRouter() {
  const router = Router();

  const dataRepo = new DataMemoryRepository();
  const dataService = new DataModule({ dataRepo });

  router.get('/', async (req, res) => {
    const dataRes = await dataService.getDatas();
    return res.status(200).json(dataRes);
  });

  return router;
}
