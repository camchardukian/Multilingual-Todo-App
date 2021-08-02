import i18n from "i18n-js";
import en from "./en";
import es from "./es";

i18n.defaultLocale = "en";
i18n.locale = "en";
i18n.fallbacks = true;

i18n.translations = { es, en };
i18n.missingTranslation = value => value;

export { es, en };

export default i18n;
