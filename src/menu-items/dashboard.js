// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'docs',
            title: 'Docs',
            type: 'item',
            url: '/docs',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'doc-analysis',
            title: 'Doc Analysis',
            type: 'item',
            url: '/analysis',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/settings',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
    ]
};

export default dashboard;
