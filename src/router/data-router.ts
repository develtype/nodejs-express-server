import { Router } from 'express';
import { ServerError } from 'src/error/server-error';
import { DataModule } from 'src/module/data.module';
import { DataMemoryRepository } from 'src/repository/memory/data.memory.repository';
import { ErrorCodeEnum } from 'src/type/error.type';

export function dataRouter() {
  const router = Router();

  const dataRepo = new DataMemoryRepository();
  const dataService = new DataModule({ dataRepo });

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
