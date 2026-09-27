import {
  contacts,
  demos,
  industries,
  modules,
  nav,
  process,
  type DemoPreset,
  type Industry,
  type Module,
} from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import type { MessageKey } from "@/lib/messages";

function key(value: string): MessageKey {
  return value as MessageKey;
}

export function useCopy() {
  const { t, locale, setLocale } = useI18n();

  const localizedNav = nav.map((item) => ({
    ...item,
    label: t(
      key(
        item.to === "/"
          ? "nav.home"
          : `nav.${item.to.slice(1)}`,
      ),
    ),
  }));

  const localizedIndustries: Industry[] = industries.map((ind) => ({
    ...ind,
    name: t(key(`ind.${ind.id}.name`)),
    short: t(key(`ind.${ind.id}.short`)),
    kicker: t(key(`ind.${ind.id}.kicker`)),
    description: t(key(`ind.${ind.id}.description`)),
    suite: t(key(`ind.${ind.id}.suite`)),
  }));

  const localizedModules: Module[] = modules.map((mod) => ({
    ...mod,
    name: t(key(`mod.${mod.id}.name`)),
    summary: t(key(`mod.${mod.id}.summary`)),
    detail: t(key(`mod.${mod.id}.detail`)),
  }));

  const localizedProcess = process.map((step) => ({
    ...step,
    title: t(key(`process.${Number(step.number)}.title`)),
    body: t(key(`process.${Number(step.number)}.body`)),
  }));

  const localizedDemos: DemoPreset[] = demos.map((demo) => ({
    ...demo,
    tagline: t(key(`demo.${demo.id}.tagline`)),
    guest: t(key(`demo.${demo.id}.guest`)),
    actions: demo.actions.map((action) => ({
      ...action,
      title: t(key(`demo.${demo.id}.${action.id}.title`)),
      body: t(key(`demo.${demo.id}.${action.id}.body`)),
      button: t(key(`demo.${demo.id}.${action.id}.button`)),
      success: t(key(`demo.${demo.id}.${action.id}.success`)),
    })),
  }));

  const localizedContacts = contacts.map((c) => ({
    ...c,
    role: t(key(`contact.${c.id}.role`)),
    bio: t(key(`contact.${c.id}.bio`)),
  }));

  const inquiryChips = [0, 1, 2, 3].map((i) => t(key(`chip.${i}`)));

  return {
    t,
    locale,
    setLocale,
    nav: localizedNav,
    industries: localizedIndustries,
    modules: localizedModules,
    process: localizedProcess,
    demos: localizedDemos,
    contacts: localizedContacts,
    inquiryChips,
    company: {
      eyebrow: t("company.eyebrow"),
      tagline: t("company.tagline"),
      lede: t("company.lede"),
      mission: t("company.mission"),
      engineering: t("company.engineering"),
      slogan: t("company.slogan"),
      footer: t("company.footer"),
    },
  };
}
