import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "NoMatch" */'./NoMatch'),
  loading: () => null,
});
