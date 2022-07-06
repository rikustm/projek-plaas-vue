<template>
  <LayoutPage
    ><h1 class="text-3xl text-center font-bold mt-4">Kos</h1>
    <Table
      :rows="kos"
      :format="{
        naam: { show: false },
        aankopeR: { display: 'R', align: 'right' },
        gebruikKG: { display: 'kg', align: 'right' },
        aankopeKG: { display: 'kg', align: 'right' },
      }"
    />
    <h1 class="text-3xl text-center font-bold mt-4">Kampe</h1>
    <Table
      :rows="kampe"
      :format="{ naam: { show: false }, size: { display: 'ha', align: 'right', decimals: 0 } }"
    />
  </LayoutPage>
</template>

<script>
import { ref } from 'vue';
import LayoutPage from '../components/LayoutPage.vue';
import Table from '../components/Table.vue';
import db from '../assets/db.js';

export default {
  components: { LayoutPage, Table },
  setup() {
    const kos = ref(db.kos);
    const kampe = ref(db.kampe);
    return { kos, kampe };
  },
};
</script>
