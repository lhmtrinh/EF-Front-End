import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EfChart = ({points}) => {
    const options = {
        chart: {
            type: "scatter"
        },
        boost: {
            useGPUTranslations: true,
            usePreAllocated: true
        },
        title: {
            text: ""
        },
        yAxis: {
            title: {
            text: "Return rate (%)"
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            title: {
            text: "Risk rate (%)"
            }
        },
        series: [{
            type: 'scatter',
            data: points,
            color: '#009879',
            marker: {
                radius: 0.5
            },
            tooltip: {
                followPointer: false,
                pointFormat: 'Risk: <b>{point.x}</b><br> Return: <b>{point.y}</b>'
            }
        }]

    };
    return (
        <div>
           <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default EfChart
