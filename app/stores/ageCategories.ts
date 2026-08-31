interface TAgeCategories {
  id: string;
  minAge: number;
  label: string;
}

export const useAgeCategoriesStore = defineStore("age", () => {
  const ageCategories = ref<TAgeCategories[]>([
    { id: "all", minAge: 0, label: "Любой возраст" },
    { id: "kids", minAge: 6, label: "6+" },
    { id: "teen", minAge: 12, label: "12+" },
    { id: "young_adult", minAge: 16, label: "16+" },
    { id: "adult", minAge: 18, label: "18+" },
  ]);

  return { ageCategories };
});
