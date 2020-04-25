<template>
  <div class="home">
    <h2>Globally:</h2>
    <vs-row v-if="summary.Global">
      <vs-col
              v-for="( singleSummary,title, index) in summary.Global"
              :key="index"
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="2"
      >
        <vs-alert
                :title="title"
                :color="colors[index]"
                active="true"
                class="summary"
        >{{singleSummary}}</vs-alert>
      </vs-col>
    </vs-row>



    <hr>
    <h2>Locally:</h2>
    <vs-select
            autocomplete
            class="selectExample"
            label="Select Country:"
            v-model="selectedCountry"
            @change="countryChanged"
    >
      <vs-select-item :key="index" :value="item.CountryCode" :text="item.Country" v-for="(item,index) in summary.Countries" />
    </vs-select>

    <div id="loadingResults">

      <div v-if="lastScan">
        <h4>
          Last update: {{lastScan.Date.slice(0,10)}}
        </h4>
        <vs-row>
<!--
          <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="3"
          >
            <vs-alert
                    title="Active"
                    :color="colors[1]"
                    active="true"
                    class="summary"
            >{{lastScan.Active||0}}</vs-alert>
          </vs-col>
-->
          <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="4"
          >
            <vs-alert
                    title="Confirmed"
                    :color="colors[0]"
                    active="true"
                    class="summary"
            >{{lastScan.Confirmed||0}}</vs-alert>
          </vs-col>
          <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="4"
          >
            <vs-alert
                    title="Deaths"
                    :color="colors[3]"
                    active="true"
                    class="summary"
            >{{lastScan.Deaths||0}}</vs-alert>
          </vs-col>
          <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="4"
          >
            <vs-alert
                    title="Recovered"
                    :color="colors[5]"
                    active="true"
                    class="summary"
            >{{lastScan.Recovered||0}}</vs-alert>
          </vs-col>
        </vs-row>
      </div>
    </div>
    <div class="chart-container">
      <canvas id="globalChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'Dashboard',
  data(){
    return{
      summary :{},
      colors:['primary','success','danger','dark','warning','#5b3cc4'],
      selectedCountry: null,
      country: null,
      lastScan: null
    }
  },
  components: {

  },
  methods:{
    countryChanged(){
      this.country = null;
      this.lastScan = null;

      //  get new data for selected country
      if (this.selectedCountry){

        this.$http.get(`country/${this.selectedCountry.toString()}`).then(response => {
          this.country=response.body;
          this.lastScan = this.country[this.country.length-1];


          this.drawGlobalChart(this.country)

        });
      }
    },
    drawGlobalChart(countryInfo){
      // هبدأ اجيب البيانات من البتاع ده بعد الفطار
      let charData={
        Active:[],
        City:[],
        CityCode:[],
        Confirmed:[],
        Country:[],
        CountryCode:[],
        Date:[],
        Deaths:[],
        Lat:[],
        Lon:[],
        Province:[],
        Recovered:[],
      };

      countryInfo.forEach(day=>{
        charData.Active.push(day.Active);
        charData.City.push(day.City);
        charData.CityCode.push(day.CityCode);
        charData.Confirmed.push(day.Confirmed);
        charData.Country.push(day.Country);
        charData.CountryCode.push(day.CountryCode);
        charData.Date.push(day.Date.slice(0,10));
        charData.Deaths.push(day.Deaths);
        charData.Lat.push(day.Lat);
        charData.Lon.push(day.Lon);
        charData.Province.push(day.Province);
        charData.Recovered.push(day.Recovered);
      });

      var ctx = document.getElementById('globalChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: charData.Date,
          datasets: [
            {
              label: 'Confirmed',
              type: "line",
              borderColor: "#2fa2a2",
              data: charData.Confirmed,
              borderWidth: 1,
            },
            {
              label: 'Deaths',
              type: "line",
              borderColor: "#001521",
              data: charData.Deaths,
              borderWidth: 1,
            },
            {
              label: 'Recovered',
              type: "line",
              borderColor: "#6bcd01",
              data: charData.Recovered,
              borderWidth: 1,
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Covid-19 infection'
          },

          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          }
        }
      });

    }
  },
  computed:{
    latestScan(){
      return this.country[this.country.length-1]
    }
  },
  created() {
    this.$http.get('summary').then(response => {
      this.summary=response.body

    });
  }
}
</script>

<style lang="sass">
.summary
  margin: 10px
  height: auto!important
  min-height: 70px
  text-align: center
  .titlex
    font-size: 20px
  .vs-alert
    font-size: 36px



.chart-container
  margin: 30px auto
  width: 80%
  max-width: 1000px
</style>
