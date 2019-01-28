import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "Home" */'./Home'),
  loading: () => null,
});

// import { splitCode } from 'hocs';
// export default splitCode({ resolve: () => import(/* webpackChunkName: "Home" */'./Home') });
