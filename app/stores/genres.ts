interface TGenre {
  id: number;
  name: string;
  slug: string;
}

export const useGenresStore = defineStore("genres", () => {
  const genres = ref<TGenre[]>([
    { id: 0, name: "Фантастика", slug: "sci-fi" },
    { id: 1, name: "Детектив", slug: "detective" },
    { id: 2, name: "Киберпанк", slug: "cyberpunk" },
    { id: 3, name: "Экшен (Боевик)", slug: "action" },
    { id: 4, name: "Философский триллер", slug: "philosophical-thriller" },
    { id: 5, name: "Комедия", slug: "comedy" },
    { id: 6, name: "Драма", slug: "drama" },
    { id: 7, name: "Мелодрама", slug: "romance" },
    { id: 8, name: "Ужасы", slug: "horror" },
    { id: 9, name: "Фэнтези", slug: "fantasy" },
    { id: 10, name: "Приключения", slug: "adventure" },
    { id: 11, name: "Психология", slug: "psychological" },
    { id: 12, name: "Повседневность", slug: "slice-of-life" },
    { id: 13, name: "Исекай", slug: "isekai" },
    { id: 14, name: "Сёнэн", slug: "shounen" },
    { id: 15, name: "Сэйнэн", slug: "seinen" },
    { id: 16, name: "Сёдзё", slug: "shoujo" },
    { id: 17, name: "Меха", slug: "mecha" },
    { id: 18, name: "Спорт", slug: "sports" },
    { id: 19, name: "Исторический", slug: "historical" },
    { id: 20, name: "Политика", slug: "political" },
    { id: 21, name: "Военный", slug: "military" },
    { id: 22, name: "Сверхъестественное", slug: "supernatural" },
    { id: 23, name: "Постапокалипсис", slug: "post-apocalyptic" },
    { id: 24, name: "Пародия", slug: "parody" },
  ]);

  const getNameById = (id: number) =>
    genres.value.find((item) => item.id === id)?.name ?? "";
  const getNamesByIds = (ids: number[]) => ids.map(getNameById).filter(Boolean);

  return { genres, getNameById, getNamesByIds };
});
