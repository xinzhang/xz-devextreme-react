import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage, HousesPage, FormPage, UploadPage } from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/houses',
    component: HousesPage
  },
  {
    path: '/form',
    component: FormPage
  },
  {
    path: '/upload',
    component: UploadPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
