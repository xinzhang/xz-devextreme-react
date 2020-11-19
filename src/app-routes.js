import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage, HousesPage, FormPage } from './pages';

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
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
