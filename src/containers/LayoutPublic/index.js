// export { default } from './LayoutPublic';
import { splitCode } from 'hocs';

export default splitCode({ resolve: () => import(/* webpackChunkName: "LayoutPublic" */'./LayoutPublic') });
