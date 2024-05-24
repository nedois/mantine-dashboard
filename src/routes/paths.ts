export const routes = {
  auth: {
    root: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    otp: '/auth/otp',
    terms: '/auth/terms',
    privacy: '/auth/privacy',
  },

  dashboard: {
    root: '/dashboard',
    home: '/dashboard/home',
    widgets: {
      root: '/dashboard/widgets',
      metrics: '/dashboard/widgets/metrics',
      charts: '/dashboard/widgets/charts',
      tables: '/dashboard/widgets/tables',
    },
  },
};
