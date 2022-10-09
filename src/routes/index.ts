import { Router} from 'express';

import CashFlowRouter  from './CashFlows';
import UsuarioRouter  from './Usuario';
const router  = Router();

// http://localhost:3001/cashflow/byindex/1
router.use('/cashflow', CashFlowRouter);
router.use('/usuario', UsuarioRouter);

export default router;
