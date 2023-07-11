
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/oMne.vue') },
      { path: '/oMne', component: () => import('pages/oMne.vue') },
      { path: '/galerie', component: () => import('pages/galerie.vue') },
      { path: '/kontaktyrezervace', component: () => import('pages/kontaktyrezervace.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
