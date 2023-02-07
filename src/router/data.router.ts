import { Router } from 'express';
import { DataController } from 'src/controller/data.controller';
import { DataRepositoryMemory } from 'src/repository/memory/data.repository.memory';
import { DataService } from 'src/service/data.service';

export function dataRouter() {
  const router = Router();

  const dataRepo = new DataRepositoryMemory();
  const dataService = new DataService({ dataRepo });
  const dataController = new DataController({ dataService });

  router.get('/', dataController.getDatas);

  return router;
}
