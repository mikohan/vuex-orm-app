<template>
  <div>
    <h2>
      {{ list.title }}
    </h2>
  </div>
</template>

<script>
import List from "@/classes/List";
export default {
  props: {
    list: {
      required: true,
      type: List,
    },
  },
};
</script>
