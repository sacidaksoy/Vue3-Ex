<template lang="pug">
table.table.table-borderless
  thead
    tr
      th(v-for="header in headers" :key="header") {{ header.charAt(0).toUpperCase() + header.slice(1) }}
  tbody
    tr(v-for="item in items" :key="item.id")
      td(v-for="header in headers" :key="`${item.id}_${header}`" :class="{ 'align-center': header === 'userId' || header === 'id' }")
        | {{ item[header.toLowerCase()] || item['userId'] }}
</template>

<style scoped>
.table {
  border-collapse: separate;
  border-spacing: 0;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
}

.table tbody tr:hover {
  background-color: #f9f9f9;
}

.table td {
  text-align: start;
  min-width: 100px;
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
}

.table th {
  background-color: #f5f5f5;
  white-space: nowrap;
  font-weight: bold;
  color: #333;
  min-width: 100px;
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
}

/* We just want to align the 'userId' and 'id' columns. */
.table td.align-center {
  text-align: center;
}
</style>
