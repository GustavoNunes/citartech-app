<template>
  <b-container>
    <b-row
      id="header"
      class="my-3"
    >
      <b-col>
        <b-button to="/">
          Back to Home
        </b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <countries-table />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CountriesTable from '@/components/CountriesTable.vue';

export default {
  components: {
    CountriesTable,
  },
};
</script>
