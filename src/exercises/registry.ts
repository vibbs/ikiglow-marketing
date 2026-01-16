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
