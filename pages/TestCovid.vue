<template>
  <div class="rudy-test-body">
    <div class="row justify-center text-center no-gutters">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <v-date-picker class="h-date" v-model="dates" multiple></v-date-picker>
      </div>
    </div>
    <br />
    <div class="text-center">
      <v-btn class="color-btn" @click="clear">Clear</v-btn>
    </div>
    <br />
    <ChartCovid
      :Cases="getCases"
      :Death="getDeaths"
      :Recovered="getRecovered"
      :day="dates"
    />
    <br />
    <TableCovid
      :Cases="getCases"
      :Death="getDeaths"
      :Recovered="getRecovered"
      :day="dates"
    />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {

  data() {
    return {
      getCases: [],
      getDeaths: [],
      getRecovered: [],
      dates: [],
      menu: false,
    };
  },

  created() {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all")
      .then((result) => {
        //
        // Set cases value
        //

        let arrCases = [];
        for (const value in result.data.cases) {
          let ob = {
            day: moment(value).format("M/DD/YY"),
            cases: result.data.cases[value],
          };
          arrCases.push(ob);
        }

        this.getCases = arrCases;

        //
        // Set Death value
        //

        let arrDeath = [];
        for (const value in result.data.deaths) {
          let newObject = {
            day: moment(value).format("M/DD/YY"),
            deaths: result.data.deaths[value],
          };
          arrDeath.push(newObject);
        }

        this.getDeaths = arrDeath;

        //
        // Set Recovered value
        //

        let arrRecovered = [];
        for (const value in result.data.recovered) {
          let newObject = {
            day: moment(value).format("M/DD/YY"),
            recovered: result.data.recovered[value],
          };
          arrRecovered.push(newObject);
        }

        this.getRecovered = arrRecovered;
      });
  },

  methods: {
    clear() {
      this.dates = [];
      this.alert = false;
    },
  },
};
</script>

<style scoped>
.rudy-test-body {
  background-color: #ffff;
  width: 100%;
  position: fixed;
  top: 68px;
  overflow: scroll;
  height: calc(100% - 68px);
}
.h-date {
  background-color: #60a5fa;
  box-shadow: 0px 5px 4px rgb(0 0 0 / 30%);
}
.color-btn {
  background-color: #ff5252 !important;
  border-color: #ff5252 !important;
  box-shadow: 0px 5px 4px rgb(0 0 0 / 30%);
  color: #fff;
  width: 40px;
}
</style>
