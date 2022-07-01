// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { 
        path: '/', 
        component: () => import( /* webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage.vue") 
    },
    { 
        path: '/about',
        component: () => import( /* webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage.vue")
    },
    { 
        path: '/:pokemonid', 
        component: () => import( /* webpackChunkName: "PokemonPage" */"../modules/pokemon/pages/PokemonPage.vue")
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import( /* webpackChunkName: "NoPageFound" */"../modules/shared/pages/NoPageFound.vue")
    },
    
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router