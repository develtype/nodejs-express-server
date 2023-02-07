import { Router } from 'express';
import { ServerError } from 'src/error/server.error';
import { DataRepositoryMemory } from 'src/repository/memory/data.repository.memory';
import { DataService } from 'src/service/data.service';
import { ErrorCodeEnum } from 'src/type/error.type';

export function dataRouter() {
  const router = Router();

  const dataRepo = new DataRepositoryMemory();
  const dataService = new DataService({ dataRepo });

  router.get('/', async (req, res) => {
    try {
      const dataRes = await dataService.getDatas();
      return res.json(dataRes);
    } catch (err) {
      if (err instanceof ServerError) {
        return res.status(err.httpStatus).json({ message: err.message });
      } else {
        const error = new ServerError(
          ErrorCodeEnum.INTERNAL_SERVER_ERROR,
          'Something unexpected happened in server.',
        );
        return res.status(error.httpStatus).json({ message: error.message });
      }
    }
  });

  return router;
}
