export default defineEventHandler(async (event) => {
  const productions: Production[] = [
    {
      id: 0,
      name: "Призрак в доспехах",
      image: "/images/ghost.jpg",
      rating: 9.8,
      ageRating: 18,
      dateCreation: "",
      description: "Год 2029. Мир опутан информационными сетями.",
      formats: ["Аниме", "Фильм"],
      genres: [
        "Genre#1",
        "Genre#2",
        "Genre#5",
        "Genre#8",
        "Genre#1",
        "Genre#4",
        "Genre#3",
      ],
    },
    {
      id: 1,
      name: "Обсессия",
      image: "/images/obsession.jpg",
      rating: 9.8,
      ageRating: 18,
      dateCreation: "",
      description: "Беар — неисправимый романтик.",
      formats: ["Фильм"],
      genres: ["Genre#5", "Genre#8"],
    },
  ];

  return productions;
});
