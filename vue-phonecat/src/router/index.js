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
            name: "phone_details",
            component: () =>
                import ("../components/PhoneDetails.vue"),
            props: true,
        },
    ],
});

export default router;