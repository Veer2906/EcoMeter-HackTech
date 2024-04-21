// assets
import { DashboardOutlined, ChromeOutlined, SearchOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  SearchOutlined,
  ChromeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    { 
      id: 'util-typography',
      title: 'Find Subsidies',
      type: 'item',
      url: '/subsidies',
      icon: icons.SearchOutlined
    },
    {
      id: 'calculator',
      title: 'Calculator',
      type: 'item',
      url: '/calculator',
      icon: icons.ChromeOutlined
    }
  ]
};

export default dashboard;
