import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/PhoneDetails/:phone_name",
            name: "PhoneDetails",
            component: () =>
                import ("../views/PhoneDetailsView.vue"),
        },
    ],
});

export default router;