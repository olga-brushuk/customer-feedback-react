import React from 'react';
import Chart from 'react-google-charts';

//
// Line Chart component based on react-google-charts npm package
//

class LineChart extends React.Component {  

 	render() {

	  	const options = {
				title: "Rating Chart",
				curveType: "function",
				legend: { position: "bottom" },
				hAxis: { title: "Comments count", viewWindow: { min: 1 , max: this.props.chartData.length - 1}},
				vAxis: { title: "Rating", viewWindow: { min: 1, max: 5 } },
		}; 
	    return <Chart
	            chartType="LineChart"
	            width="100%"
	            height="500px"
	            data={this.props.chartData}
	            options={options} />;
  	}
}

export default LineChart;