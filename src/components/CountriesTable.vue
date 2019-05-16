<template>
  <b-table
    bordered
    striped
    hover
    :items="items"
  />
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    items: state => state.countries,
  }),
  created() {
    this.$store.dispatch('getCountries');
  },
};
</script>
