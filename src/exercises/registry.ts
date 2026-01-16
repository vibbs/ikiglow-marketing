export const exerciseCategories = [
  {
    slug: "breathing",
    i18nKey: "exercises.categories.breathing",
    washClassName: "wash-teal",
  },
  {
    slug: "grounding",
    i18nKey: "exercises.categories.grounding",
    washClassName: "wash-sage",
  },
  {
    slug: "focus",
    i18nKey: "exercises.categories.focus",
    washClassName: "wash-indigo",
  },
  {
    slug: "sleep",
    i18nKey: "exercises.categories.sleep",
    washClassName: "wash-indigo",
  },
  {
    slug: "mindset",
    i18nKey: "exercises.categories.mindset",
    washClassName: "wash-rose",
  },
  {
    slug: "energy",
    i18nKey: "exercises.categories.energy",
    washClassName: "wash-orange",
  },
] as const;

export type ExerciseCategorySlug = (typeof exerciseCategories)[number]["slug"];

export type ExerciseFormat = "visual" | "text" | "audio";

export type ExerciseDurationRange =
  | "oneToTwo"
  | "twoToThree"
  | "threeToFive"
  | "tenPlus";

export type ExerciseItem = {
  slug: string;
  categories: ExerciseCategorySlug[];
  durationRange: ExerciseDurationRange;
  formats: ExerciseFormat[];
  tags: string[];
  i18nKey: string;
  quickPickOrder?: number;
  headerClassName: string;
  panelClassName: string;
  nextSlug?: string;
};

export const exerciseRegistry: ExerciseItem[] = [
  {
    slug: "box-breathing",
    categories: ["breathing"],
    durationRange: "twoToThree",
    formats: ["visual"],
    tags: ["anxious", "scattered"],
    i18nKey: "exercises.items.box-breathing",
    quickPickOrder: 1,
    headerClassName: "wash-teal",
    panelClassName: "panel-teal",
    nextSlug: "five-four-three-two-one",
  },
  {
    slug: "four-seven-eight",
    categories: ["breathing", "sleep"],
    durationRange: "twoToThree",
    formats: ["visual"],
    tags: ["sleep", "anxious"],
    i18nKey: "exercises.items.four-seven-eight",
    quickPickOrder: 2,
    headerClassName: "wash-indigo",
    panelClassName: "panel-indigo",
    nextSlug: "coherent-breathing",
  },
  {
    slug: "coherent-breathing",
    categories: ["breathing", "focus"],
    durationRange: "threeToFive",
    formats: ["visual"],
    tags: ["focus", "steady"],
    i18nKey: "exercises.items.coherent-breathing",
    quickPickOrder: 4,
    headerClassName: "wash-teal",
    panelClassName: "panel-teal",
    nextSlug: "box-breathing",
  },
  {
    slug: "five-four-three-two-one",
    categories: ["grounding"],
    durationRange: "threeToFive",
    formats: ["text"],
    tags: ["scattered", "anxious"],
    i18nKey: "exercises.items.five-four-three-two-one",
    quickPickOrder: 3,
    headerClassName: "wash-sage",
    panelClassName: "panel-sage",
    nextSlug: "box-breathing",
  },
  {
    slug: "one-minute-mindful-break",
    categories: ["focus"],
    durationRange: "oneToTwo",
    formats: ["visual", "text"],
    tags: ["focus", "reset"],
    i18nKey: "exercises.items.one-minute-mindful-break",
    headerClassName: "wash-sage",
    panelClassName: "panel-sage",
  },
  {
    slug: "positive-affirmations",
    categories: ["mindset"],
    durationRange: "oneToTwo",
    formats: ["text"],
    tags: ["confidence", "mindset"],
    i18nKey: "exercises.items.positive-affirmations",
    quickPickOrder: 5,
    headerClassName: "wash-rose",
    panelClassName: "panel-rose",
  },
  {
    slug: "thought-reframing",
    categories: ["mindset"],
    durationRange: "threeToFive",
    formats: ["text"],
    tags: ["mindset", "perspective"],
    i18nKey: "exercises.items.thought-reframing",
    headerClassName: "wash-gold",
    panelClassName: "panel-gold",
  },
  {
    slug: "self-compassion-break",
    categories: ["mindset"],
    durationRange: "twoToThree",
    formats: ["text"],
    tags: ["mindset", "self-care"],
    i18nKey: "exercises.items.self-compassion-break",
    headerClassName: "wash-rose",
    panelClassName: "panel-rose",
  },
  {
    slug: "daily-check-in",
    categories: ["focus"],
    durationRange: "twoToThree",
    formats: ["text"],
    tags: ["awareness", "intention"],
    i18nKey: "exercises.items.daily-check-in",
    headerClassName: "wash-teal",
    panelClassName: "panel-teal",
  },
  {
    slug: "body-shake-release",
    categories: ["energy"],
    durationRange: "oneToTwo",
    formats: ["visual"],
    tags: ["energy", "reset"],
    i18nKey: "exercises.items.body-shake-release",
    headerClassName: "wash-orange",
    panelClassName: "panel-orange",
  },
  {
    slug: "progressive-muscle-relaxation",
    categories: ["sleep"],
    durationRange: "tenPlus",
    formats: ["visual", "text"],
    tags: ["sleep", "relaxation"],
    i18nKey: "exercises.items.progressive-muscle-relaxation",
    headerClassName: "wash-indigo",
    panelClassName: "panel-indigo",
  },
  {
    slug: "guided-visualization",
    categories: ["sleep"],
    durationRange: "threeToFive",
    formats: ["text"],
    tags: ["sleep", "calm"],
    i18nKey: "exercises.items.guided-visualization",
    headerClassName: "wash-sky",
    panelClassName: "panel-sky",
  },
];

export const quickPicks = exerciseRegistry
  .filter((exercise) => typeof exercise.quickPickOrder === "number")
  .sort((a, b) => (a.quickPickOrder ?? 0) - (b.quickPickOrder ?? 0));

export function getExerciseBySlug(slug: string) {
  return exerciseRegistry.find((exercise) => exercise.slug === slug);
}

export function getExercisesByCategory(category: ExerciseCategorySlug) {
  return exerciseRegistry.filter((exercise) =>
    exercise.categories.includes(category)
  );
}

export function isExerciseCategory(
  slug: string
): slug is ExerciseCategorySlug {
  return exerciseCategories.some((category) => category.slug === slug);
}
