import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "Olenka" */'./Olenka'),
  loading: () => null,
});

// import { splitCode } from 'hocs';
// export default splitCode({ resolve: () => import(/* webpackChunkName: "Olenka" */'./Olenka') });
