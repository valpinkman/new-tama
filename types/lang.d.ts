export type Lang = 'fr' | 'it' | 'en'
export type MaybeLang = Lang | null

export type Translations = {
  about: { [key: string]: any };
  blog: { [key: string]: any };
  cocktails: { [key: string]: any };
  date: { [key: string]: any };
  footer: { [key: string]: any };
  index: { [key: string]: any };
  login: { [key: string]: any };
  navigation: { [key: string]: any };
  pro: { [key: string]: any };
  products: { [key: string]: any };
}