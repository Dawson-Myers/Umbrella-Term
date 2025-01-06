import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
  const locales = import.meta.glob('./locales/*.js', { eager: true });
  const messages = {};
  for (const path in locales) {
    const name = path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    messages[name] = locales[path];
  }
  return messages;
}

export default createI18n({
  locale: 'en', // Default locale
  fallbackLocale: 'en', // Fallback locale
  messages: loadLocaleMessages(),
});