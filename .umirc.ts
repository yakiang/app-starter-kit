import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/app',
      routes: [{ path: '/user', component: '@/pages/user' }],
    },
  ],
  locale: {},
  sass: {},
  fastRefresh: {},
});
