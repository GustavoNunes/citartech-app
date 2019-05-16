<template>
  <b-container id="home">
    <b-row>
      <b-col>
        <b-img
          height="150"
          src="@/assets/logo.png"
        />
        <h1 class="mt-4">
          Country Codes
        </h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-button
          variant="dark"
          size="lg"
          class="mx-1"
          to="country-codes"
        >
          View List
        </b-button>
        <b-button
          variant="dark"
          size="lg"
          class="mx-1"
          :href="CSVPath"
        >
          Download (.CSV)
        </b-button>
        <b-button
          variant="dark"
          size="lg"
          class="mx-1"
          :href="XLSXPath"
        >
          Download (Excel)
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CountryService from '@/services/CountryService';

export default {
  data() {
    return {
      CSVPath: CountryService.CSVPath,
      XLSXPath: CountryService.XLSXPath,
    };
  },
};
</script>

<style>
 #home {
   text-align: center;
 }
</style>
