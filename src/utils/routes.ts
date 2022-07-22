import { Lang } from "../../types/lang"

export interface Route {
  title: string
  src: string
  key: string
}

export type Routes = { [L in Lang]: Route[] }

const fr: Route[] = [
  {
    key: "concept",
    title: "Notre concept",
    src: "/notre-concept",
  },
  {
    key: "products",
    title: "Nos smoothies",
    src: "/nos-produits",
  },
  {
    key: "news",
    title: "fraiches news",
    src: "/fraiches-news",
  },
  {
    key: "fresh",
    title: "fraiche",
    src: "/fraiches-news/fraiche",
  },
  {
    key: "shop",
    title: "boutique",
    src: "/boutique",
  },
  {
    key: "pro",
    title: "espace pro",
    src: "/espace-pro",
  },
  {
    key: "signin",
    title: "connexion",
    src: "/connexion",
  },
  {
    key: "signup",
    title: "inscription",
    src: "/inscription",
  },
]

const en: Route[] = [
  {
    key: "concept",
    title: "Our concept",
    src: "/our-concept",
  },
  {
    key: "products",
    title: "Our products",
    src: "/our-products",
  },
  {
    key: "news",
    title: "fresh news",
    src: "/fresh-news",
  },
  {
    key: "fresh",
    title: "fresh",
    src: "/fresh-news/fresh",
  },
  {
    key: "shop",
    title: "shop",
    src: "/shop",
  },
  {
    key: "pro",
    title: "pro",
    src: "/pro",
  },
  {
    key: "signin",
    title: "sign in",
    src: "/signin",
  },
  {
    key: "signup",
    title: "signup",
    src: "/signup",
  },
]
const it: Route[] = [
  {
    key: "concept",
    title: "Concetto",
    src: "/concetto",
  },
  {
    key: "products",
    title: "Prodotti",
    src: "/prodotti",
  },
  {
    key: "product",
    title: "",
    src: "/prodotti",
  },
  {
    key: "news",
    title: "notizie fresche",
    src: "/notizie-fresche",
  },
  {
    key: "fresh",
    title: "fresca",
    src: "/notizie-fresche/fresca",
  },
  {
    key: "shop",
    title: "negozio",
    src: "/negozio",
  },
  {
    key: "pro",
    title: "sezione pro",
    src: "/sezione-pro",
  },
  {
    key: "signin",
    title: "connessione",
    src: "/connessione",
  },
  {
    key: "signup",
    title: "iscrizione",
    src: "/iscrizione",
  },
]

const routes: Routes = {
  fr,
  en,
  it,
}

export default routes
