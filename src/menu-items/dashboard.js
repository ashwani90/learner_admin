// assets
import { DashboardOutlined, BookOutlined, SettingOutlined, FileOutlined, FileWordOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    BookOutlined,
    SettingOutlined,
    FileOutlined,
    FileWordOutlined
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
            icon: icons.FileWordOutlined,
            breadcrumbs: false
        },
        {
            id: 'doc-analysis',
            title: 'Doc Analysis',
            type: 'item',
            url: '/analysis',
            icon: icons.FileOutlined,
            breadcrumbs: false
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/settings',
            icon: icons.SettingOutlined,
            breadcrumbs: false
        },
        {
            id: 'logs',
            title: 'Logs',
            type: 'item',
            url: '/logs',
            icon: icons.BookOutlined,
            breadcrumbs: false
        },
    ]
};

export default dashboard;
