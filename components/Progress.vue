<script setup lang="ts">
import { ref } from 'vue';
import { IProgressData } from '../types/progress.types';

//
const props = defineProps<{
  data: IProgressData;
}>();

//
const dataProgress = ref(props.data);
dataProgress.value.currentStep--;

//
const prevStep = () => {
  if (dataProgress.value.currentStep > 0) {
    dataProgress.value.currentStep--;
  }
};

const nextStep = () => {
  if (dataProgress.value.currentStep < dataProgress.value.steps.length) {
    dataProgress.value.currentStep++;
  }
};

//
defineExpose({
  prevStep,
  nextStep,
});
</script>

<template>
  <div class="container">
    <ul class="progress">
      <li
        v-for="(step, idx) in dataProgress.steps"
        :class="[
          'progress__item',
          {
            progress__first: idx === 0 && idx === dataProgress.currentStep,
            progress__active: idx === dataProgress.currentStep,
            progress__done: idx < dataProgress.currentStep,
          },
        ]"
      >
        <div class="progress__bubble">
          <span class="progress__number">{{ idx + 1 }}</span>
          <span class="progress__check">✔</span>
        </div>

        <div class="progress__text">{{ step }}</div>

        <div class="progress__line">
          <div class="progress__line_fill"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.container {
  padding: 30px;
}

/*  */
.progress {
  --passive-color: v-bind('dataProgress.passiveColor');
  --active-color: v-bind('dataProgress.activeColor');

  height: 60px;
  display: flex;
  align-items: center;
}

/*  */
.progress__item {
  position: relative;
  list-style: none;
  flex-grow: 1;

  display: flex;
  align-items: center;
}

.progress__item:last-child {
  flex-grow: 0;
}

/*  */
.progress__bubble {
  width: 35px;
  height: 35px;
  color: white;
  font-size: 30px;
  background-color: var(--passive-color);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
}

.progress__active .progress__bubble,
.progress__done .progress__bubble {
  width: 60px;
  height: 60px;
  background-color: var(--active-color);
}

/*  */
.progress__text {
  position: absolute;
  bottom: -30px;
  left: -12px;
  width: 60px;
  text-align: center;
  transition: left 0.3s ease;
}

.progress__active .progress__text,
.progress__done .progress__text {
  left: 0;
}

/*  */
.progress__number {
  display: none;
}

.progress__active .progress__number {
  display: block;
}

/*  */
.progress__check {
  display: none;
}

.progress__done .progress__check {
  display: block;
}

/*  */
.progress__line {
  --line-width: 35px;

  position: relative;
  width: calc(100% - var(--line-width));
  height: 5px;
  background-color: var(--passive-color);

  transition: width 0.3s ease;
}

.progress__active .progress__line,
.progress__done .progress__line {
  --line-width: 60px;
}

/*  */
.progress__line_fill {
  width: 0;
  height: 5px;
  background-color: var(--active-color);
  transition: width 0.3s ease;
}

.progress__first .progress__line_fill {
  width: 50%;
}

.progress__done .progress__line_fill {
  width: 100%;
}
</style>
