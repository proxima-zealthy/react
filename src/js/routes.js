import Home from 'views/Home';
import Dummy_Member from 'views/Examples/Members';
import Dummy_Counter from 'views/Examples/Counter';

export const publicPath = '/';

export default {
  HOME: {
    path: publicPath,
    component: Home
  },
  COUNTER: {
    path: `${ publicPath }counter`,
    component: Dummy_Counter
  },
  MEMBERS: {
    path: `${ publicPath }members`,
    component: Dummy_Member
  },
};
