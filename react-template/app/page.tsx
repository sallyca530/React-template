'use client'

// import Image from "next/image";
// import styles from './page.module.scss'
// import React, { use } from "react";
// import { useState, useEffect } from "react";
// import { VictoryChart, VictoryLine, VictoryTheme } from "victory";



// export default function Home() {

//   const data = [
//     { x: 1, y:2 },
//     { x: 2, y:3 },
//     { x: 3, y: 4},
//     {x: 4, y: 5},
//     { x: 6, y: 7}
//   ];

//   return (
//     <VictoryChart theme={VictoryTheme.material}>
//       <VictoryLine data={data} style={{data: { stroke: "white"}}}>
//       </VictoryLine>
//     </VictoryChart>
//   )
// }
import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const MyVictoryChart = () => {

  return(
  <VictoryChart domainPadding={20}>
    <VictoryAxis
      tickValues={[1, 2, 3, 4]}
      tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={(x) => (`$${x / 1000}k`)}
    />
    <VictoryBar
      data={[{quarter: 1, earnings: 13000}, {quarter: 2, earnings: 16500}, 
        {quarter: 3, earnings: 14250}, {quarter: 4, earnings: 19000}]}
      x="quarter"
      y="earnings"
    />
  </VictoryChart>
  )
};

export default MyVictoryChart;