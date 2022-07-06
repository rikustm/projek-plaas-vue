<template>
  <table>
    <thead>
      <tr>
        <th v-for="field in headers" class="p-1">{{ formatHeader(field) }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows">
        <td
          v-for="field in headers"
          class="p-1"
          :class="{ 'text-right': format[field].align === 'right' }"
        >
          {{ formatValue(field, row[field]) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    rows: Array,
    columns: Array,
    format: { type: Object, default: {} }, // {field: {show: true}}
  },
  computed: {
    headers() {
      if (this.columns) {
        return this.columns;
      }
      if (this.rows.length > 0) {
        return Object.keys(this.rows[0]);
      }
      return [];
    },
  },
  methods: {
    formatHeader(field) {
      const format = this.format[field] || {};
      if (format.show === false) return '';
      if (format.display) return format.display;
      return field;
    },
    formatValue(field, value) {
      const format = this.format[field] || {};
      if (format.decimals != null) return Math.round(value, format.decimals);
      return value;
    },
  },
};
</script>
