import config  from '~/config';

// Layouts
import { HeaderOnly } from '~/components/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes: no need sign in to access
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
]

// @: permanent symbol | nickname: pattern

// Private routes: need sign in to access
const privateRoutes = [];

export { publicRoutes, privateRoutes };