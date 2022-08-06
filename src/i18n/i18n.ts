import i18n from 'i18n-js';
import es from './es.json';

i18n.fallbacks = true;
i18n.translations = {es};
i18n.locale = 'es';

type DefaultLocale = typeof es;
type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];

export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;
