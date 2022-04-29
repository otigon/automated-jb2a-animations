import { BasicBounds }     from './BasicBounds.js';
import { TransformBounds } from './TransformBounds.js';

const basicWindow = new BasicBounds({ lock: true });
const transformWindow = new TransformBounds({ lock: true });

export { basicWindow, BasicBounds, transformWindow, TransformBounds };
