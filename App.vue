<script setup lang="ts">
import { ref } from 'vue';
import Progress from './components/Progress.vue';

const data = {
  steps: ['Шаг 1', 'Шаг 2', 'Шаг 3'],
  currentStep: 1,
  activeColor: '#65a30d',
  passiveColor: '#84cc16',
};

//
const progressRef = ref<InstanceType<typeof Progress> | null>(null);
</script>

<template>
  <div>
    <Progress :data="data" ref="progressRef" />

    <div class="buttons">
      <button type="button" @click="progressRef?.prevStep">Назад</button>
      <button type="button" @click="progressRef?.nextStep">Вперёд</button>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
