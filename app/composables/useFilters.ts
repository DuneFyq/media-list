import type { LocationQueryValue, LocationQuery } from "vue-router";

export interface FilterState {
  sort: string;
  genre: number[];
  format: number[];
  age: string;
}

// Значения фильтров, которые используются, когда соответствующего параметра нет в URL.
const DEFAULT_FILTERS: FilterState = {
  sort: "date",
  genre: [],
  format: [],
  age: "all",
};

// Преобразует query-параметр вида "1,2,3" в number[].
// undefined означает, что параметр отсутствует в URL.
const parseNumbers = (
  value: LocationQueryValue | LocationQueryValue[] | undefined,
): number[] => {
  if (!value) {
    return [];
  }

  return String(value).split(",").map(Number).filter(Number.isFinite);
};

// Возвращает значение query-параметра или значение по умолчанию, если параметр отсутствует.
const parseString = (
  value: LocationQueryValue | LocationQueryValue[] | undefined,
  defaultValue: string,
): string => {
  if (!value) {
    return defaultValue;
  }

  return String(value);
};

// Преобразует query из URL в состояние фильтров приложения.
const parseQuery = (query: LocationQuery): FilterState => ({
  sort: parseString(query.sort, DEFAULT_FILTERS.sort),
  genre: parseNumbers(query.genre),
  format: parseNumbers(query.format),
  age: parseString(query.age, DEFAULT_FILTERS.age),
});

// Преобразует состояние фильтров обратно в query для URL.
// Фильтры со значениями по умолчанию в URL не записываем.
const createQuery = (filters: FilterState): LocationQuery => {
  const query: LocationQuery = {};

  if (filters.sort !== DEFAULT_FILTERS.sort) {
    query.sort = filters.sort;
  }

  if (filters.genre.length > 0) {
    query.genre = filters.genre.join(",");
  }

  if (filters.format.length > 0) {
    query.format = filters.format.join(",");
  }

  if (filters.age !== DEFAULT_FILTERS.age) {
    query.age = filters.age;
  }

  return query;
};

export const useFilters = () => {
  const route = useRoute();
  const router = useRouter();

  // Начальное состояние берём из query текущего маршрута.
  const filter = ref<FilterState>(parseQuery(route.query));

  // Проверяем, установлены ли все фильтры в значения по умолчанию.
  const isDefault = computed(() => {
    return (
      filter.value.sort === DEFAULT_FILTERS.sort &&
      filter.value.genre.length === 0 &&
      filter.value.format.length === 0 &&
      filter.value.age === DEFAULT_FILTERS.age
    );
  });

  // Сбрасываем фильтры к значениям по умолчанию.
  const resetFilters = () => {
    filter.value = {
      sort: DEFAULT_FILTERS.sort,
      genre: [],
      format: [],
      age: DEFAULT_FILTERS.age,
    };
  };

  // Следим за изменением фильтров и синхронизируем их с URL.
  watch(
    filter,
    (filters) => {
      router.replace({
        query: createQuery(filters),
      });
    },
    { deep: true },
  );

  // Следим за изменением URL и обновляем фильтры.
  // Это важно, например, при переходе назад/вперёд в браузере.
  watch(
    () => route.query,
    (query) => {
      const newFilters = parseQuery(query);

      // Не обновляем filter, если значения уже совпадают.
      if (JSON.stringify(newFilters) !== JSON.stringify(filter.value)) {
        filter.value = newFilters;
      }
    },
  );

  return {
    filter,
    isDefault,
    resetFilters,
  };
};
