<template lang="pug">
table.table.table-borderless
  thead
    tr
      th(v-for="header in headers" :key="header") {{ header.charAt(0).toUpperCase() + header.slice(1) }}
  tbody
    tr(v-for="item in items" :key="item.id")
      td(v-for="header in headers" :key="`${item.id}_${header}`") 
        | {{ item[header.toLowerCase()] || item['userId']}}
</template>

<script>
export default {
  name: "CustomTable",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table {
  border-collapse: separate;
  border-spacing: 0;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
}

.table td,
.table th {
  min-width: 100px; /* istediğiniz genişlik değeri */
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
}

.table th {
  background-color: #f5f5f5;
  white-space: nowrap;
  /* text-align: left; */
  font-weight: bold;
  color: #333;
}
</style>
