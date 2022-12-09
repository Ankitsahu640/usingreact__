import React from 'react';
import ApexChart from "react-apexcharts";

const LineChart=()=>{

    return(
        <ApexChart
            options={{
                xaxis: {
                    categories: ['2021-02-03','2021-02-04','2021-02-05','2021-02-06','2021-02-07','2021-02-08','2021-02-09' ]
                },
                colors: ["#1ddeba"],
                tooltip: {
                    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                      debugger;
                      let data=` <div>
                      <p>${series[seriesIndex][dataPointIndex]}</p>
                    </div>`
                      return (data);
                    }
                  },
                  stroke:{width:2}
            }}
            series={[
                {
                    name: "new user",
                    data: [14,17,26,26,56,56,86]
                }
            ]}
            type="line"
            height={180}
            width={1000}
        />
    )
}

const DonutChart=(props)=>{
    return(
        <ApexChart
            type="donut"
            height={500}
            width={500}
            series={[props.total,200000]}
            // series={[32,9]}
            options={{
                labels:["No. of Invites","Duration of Events"]
            }}
        />
    )
}


export {LineChart,DonutChart}