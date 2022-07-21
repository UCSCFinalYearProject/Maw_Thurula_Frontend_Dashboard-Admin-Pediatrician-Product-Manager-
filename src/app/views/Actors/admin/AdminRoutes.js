import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppTable = Loadable(lazy(() => import('../../material-kit/tables/AppTable')));

const AdminRoutes = [
    {
        path: '/admin/table',
        element: <AppTable />,
    }
];

export default AdminRoutes;
