import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "LayoutPublic" */'./LayoutPublic'),
  loading: () => null,
});

// import { splitCode } from 'hocs';
// export default splitCode({ resolve: () => import(/* webpackChunkName: "LayoutPublic" */'./LayoutPublic') });
