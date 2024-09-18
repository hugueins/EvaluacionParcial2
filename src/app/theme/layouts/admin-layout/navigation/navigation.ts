export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Default',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        classes: 'nav-item',
        url: '/login',
        icon: 'login',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'register',
        title: 'Register',
        type: 'item',
        classes: 'nav-item',
        url: '/register',
        icon: 'profile',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'rol',
        title: 'Roles',
        type: 'item',
        classes: 'nav-item',
        url: '/rol',
        icon: 'ant-design'
      },
    ]
  },
  {
    id: 'utilities',
    title: 'Módulos',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      
      {
        id: 'usuarios',
        title: 'Usuarios',
        type: 'item',
        classes: 'nav-item',
        url: '/usuarios',
        icon: 'ant-design',
        target: true,
        external: true
      },
      {
        id: 'actores',
        title: 'Actores',
        type: 'item',
        classes: 'nav-item',
        url: '/actores',
        icon: 'ant-design'
      },
      {
        id: 'pelicula',
        title: 'Peliculas',
        type: 'item',
        classes: 'nav-item',
        url: '/peliculas',
        icon: 'ant-design',
        target: true,
        external: true
      },
      {
        id: 'valoracion',
        title: 'Valoracion',
        type: 'item',
        classes: 'nav-item',
        url: '/valoracion',
        icon: 'ant-design',
        target: true,
        external: true
      }
    ]
  },

 
    ]
  

