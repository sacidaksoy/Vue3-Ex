import { createRouter, createWebHistory } from "vue-router";
import Posts from "../pages/Posts.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/posts",
    },
    {
      path: "/posts",
      component: Posts,
      meta: {
        title: "Kondukto - Posts",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Geçerli sayfanın meta verilerinden başlık özelliğini al
  const pageTitle = to.meta.title;

  // Sayfa başlığını değiştir
  if (pageTitle) {
    document.title = pageTitle;
  }

  // İşlemi tamamla ve ilerle
  next();
});

export default router;
