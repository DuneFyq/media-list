interface TFormat {
  id: number;
  name: string;
  slug: string;
}

export const useFormatsStore = defineStore("formats", () => {
  const formats = ref<TFormat[]>([
    { id: 0, name: "Фильм", slug: "film" },
    { id: 1, name: "Сериал", slug: "tv-show" },
    { id: 2, name: "Аниме", slug: "anime" },
    { id: 3, name: "Манга", slug: "manga" },
  ]);

  const getNameById = (id: number) => formats.value.find((item) => item.id === id)?.name ?? "";
  const getNamesByIds = (ids: number[]) => ids.map(getNameById).filter(Boolean);

  return { formats, getNameById, getNamesByIds };
});
