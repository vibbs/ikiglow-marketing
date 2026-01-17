export type ReflectionItem = {
  slug: string;
  i18nKey: string;
  headerClassName: string;
  panelClassName: string;
};

export const reflectionRegistry: ReflectionItem[] = [
  {
    slug: "daily-check-in",
    i18nKey: "reflections.items.daily-check-in",
    headerClassName: "wash-teal",
    panelClassName: "panel-teal",
  },
  {
    slug: "thought-reframing",
    i18nKey: "reflections.items.thought-reframing",
    headerClassName: "wash-gold",
    panelClassName: "panel-gold",
  },
];

export function getReflectionBySlug(slug: string) {
  return reflectionRegistry.find((reflection) => reflection.slug === slug);
}
