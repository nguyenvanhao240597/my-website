import { HeaderOnly } from '~/components/Layouts';
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import Login from '~/pages/Login';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
