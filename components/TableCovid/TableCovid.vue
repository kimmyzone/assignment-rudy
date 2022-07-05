<template>
  <div>
    <div class="rudy-test-body">
      <table class="table table-bordered text-center font-serif">
        <thead style="background-color: #60a5fa; color:#ffff">
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Cases</th>
            <th scope="col">Deaths</th>
            <th scope="col">Recovered</th>
          </tr>
        </thead>
        <tr>
          <td>
            <div v-for="(item, index) in FinalCases" :key="index">
              <p class="text-center">{{ item.day | day }}</p>
            </div>
          </td>
          <td>
            <div v-for="(item, index) in FinalCases" :key="index">
              <p class="text-center">{{ item.cases }}</p>
            </div>
          </td>
          <td>
            <div v-for="(item, index) in FinalDeath" :key="index">
              <p class="text-center">{{ item.deaths }}</p>
            </div>
          </td>
          <td>
            <div v-for="(item, index) in FinalRecovered" :key="index">
              <p class="text-center">{{ item.recovered }}</p>
            </div>
          </td>
        </tr>
        <!-- </tbody> -->
      </table>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "TableCovid",
  props: {
    Cases: [],
    Death: [],
    Recovered: [],
    day: [],
  },

  computed: {
    FinalCases() {
      let arrCases = this.Cases.filter((data) => {
        for (let i = 0; i < this.day.length; i++) {
          const ele = moment(this.day[i]).format("M/DD/YY");
          if (data.day == ele) {
            return data;
          }
        }
      });

      if (arrCases.length == 0) {
        return this.Cases;
      } else {
        return arrCases;
      }
    },

    FinalDeath() {
      let arrDeath = this.Death.filter((data) => {
        for (let i = 0; i < this.day.length; i++) {
          const ele = moment(this.day[i]).format("M/DD/YY");
          if (data.day == ele) {
            return data;
          }
        }
      });
      if (arrDeath.length == 0) {
        return this.Death;
      } else {
        return arrDeath;
      }
    },

    FinalRecovered() {
      let arrRecovered = this.Recovered.filter((data) => {
        for (let i = 0; i < this.day.length; i++) {
          const ele = moment(this.day[i]).format("M/DD/YY");
          if (data.day == ele) {
            return data;
          }
        }
      });

      if (arrRecovered.length == 0) {
        return this.Recovered;
      } else {
        return arrRecovered;
      }
    },
  },
  filters: {
    day(value) {
      return moment(value).format("DD/M/YY");
    },
  },
};
</script>

<style scoped>
.rudy-test-body {
  background-color: #ffff;
  width: 60%;
  position: relative;
  top: 20px;
  overflow: scroll;
  margin: auto;
}
</style>
