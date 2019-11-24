import React from 'react';
import Chart from "react-google-charts";



class LineChart extends React.Component {  

  render() {

  	const options = {
		  title: "Rating Chart",
		  curveType: "function",
		  legend: { position: "bottom" },
		  hAxis: { title: "Comment index", viewWindow: { min: 0 , max: this.props.chartData.length - 1}},
		  vAxis: { title: "Rating", viewWindow: { min: 1, max: 5 } },
	  }; 
    return <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={this.props.chartData}
            options={options} />;
  }
}

export default LineChart;