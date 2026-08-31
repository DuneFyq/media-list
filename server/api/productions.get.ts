export default defineEventHandler(async (event) => {
  const productions: TProduction[] = [
    {
      id: 0,
      name: "Призрак в доспехах",
      image: "/images/ghost.jpg",
      rating: 9.8,
      ageRating: 18,
      dateCreation: "1995",
      description: "Год 2029. Мир опутан информационными сетями.",
      formats: [0, 2],
      genres: [0, 1, 2, 3, 4],
    },
    {
      id: 1,
      name: "Призрак в доспехах 2",
      image: "/images/ghost.jpg",
      rating: 9.8,
      ageRating: 18,
      dateCreation: "2004",
      description:
        "Киборг-детектив и его напарник расследуют убийства, совершённые роботами.",
      formats: [0, 2],
      genres: [0, 1, 2, 3, 4, 6, 20, 21],
    },
    {
      id: 2,
      name: "Обсессия",
      image: "/images/obsession.jpg",
      rating: 9.8,
      ageRating: 18,
      dateCreation: "2026",
      description:
        "Беар — неисправимый романтик. Чтобы выбраться из френдзоны, он использует мистический артефакт, но любовь его мечты быстро превращается в жуткую одержимость.",
      formats: [0],
      genres: [5, 8, 11, 22],
    },
  ];

  return productions;
});
