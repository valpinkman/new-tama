import * as ls from 'local-storage'

import { Lang, MaybeLang } from '../../types/lang'


ls.on('lang', val => console.log('Lang Changed to ', val))

export const saveLang = (lang: Lang): boolean => ls.set<Lang>('lang', lang)
export const getLang = (): MaybeLang => ls.get<Lang>('lang')
