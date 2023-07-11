import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useProgressStore = defineStore('progress', () => {
  const progressData = ref([
    {
      id: 1,
      name: 'Этап первый',
      thresholdPoints: 25,
      games: [
        {
          name: 'Игра 1.1',
          bestResult: 0,
          isPlayed: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Этап второй',
      thresholdPoints: 50,
      games: [
        {
          name: 'Игра 2.1',
          bestResult: 0,
          isPlayed: false,
        },
      ],
    },
    {
      id: 3,
      name: 'Этап третий',
      thresholdPoints: 100,
      games: [
        {
          name: 'Игра 3.1',
          bestResult: 0,
          isPlayed: false,
        },
      ],
    },
    {
      id: 4,
      name: 'Этап четвертый',
      thresholdPoints: 200,
      games: [
        {
          name: 'Игра 4.1',
          bestResult: 0,
          isPlayed: false,
        },
      ],
    },
    {
      id: 5,
      name: 'Этап пятый',
      thresholdPoints: 500,
      games: [
        {
          name: 'Игра 5.1',
          bestResult: 0,
          isPlayed: false,
        },
      ],
    },
    {
      id: 6,
      name: 'Этап шестой',
      thresholdPoints: 1000,
      games: [
        {
          name: 'Игра 6.1',
          bestResult: 0,
          isPlayed: false,
        },
        /* {
          name: 'Игра 6.2',
          bestResult: 0,
          isPlayed: false,
        }, */
      ],
    },
  ]);

  return { progressData };
});
