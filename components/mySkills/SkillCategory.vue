<template>
  <div class="col col-d-6 col-t-6 col-m-12 border-line-v">
    <div class="skills-list list">
      <div class="skill-title border-line-h">
        <div class="icon"><i :class="knowledges.icons"></i></div>
        <div class="name">{{ knowledges.title }}</div>
      </div>
      <ul>
        <li v-for="knowledge in knowledges.items" :key="knowledge.id">
          <div class="name">{{ knowledge.text }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    knowledges: {
      type: Object,
      required: true,
    },
  },
};
</script>
