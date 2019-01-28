import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "Yevhen" */'./Yevhen'),
  loading: () => null,
});

// import { splitCode } from 'hocs';
// export default splitCode({ resolve: () => import(/* webpackChunkName: "Yevhen" */'./Yevhen') });
