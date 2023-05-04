<template>
  <div class="flex flex-wrap justify-center gap-2 chips-container">
    <a
      v-for="(chip, index) in chips"
      :key="index"
      class="px-4 py-1 text-white rounded-full cursor-pointer bg-brand-green-1 wobble"
      :style="{
        backgroundColor: index % 2 === 0 ? '#42B883' : '#E15A97'
      }"
      :href="chip.url"

    >
      {{ chip.name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'TheChips',
  props: {
    chips: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    }
  }
}
</script>
