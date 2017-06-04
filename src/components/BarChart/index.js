import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Header } from 'semantic-ui-react';

class BarChart extends Component {
    render() {
        const { vote1, vote2, unvoted } = this.props.data;
        const data = {
            labels: [
                'Orange',
                'Blue',
                'Belum Memilih'
            ],
            datasets: [{
                data: [vote1, vote2, unvoted],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(201, 203, 207, 0.8)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(201, 203, 207, 1)'
                ],
                label: 'Jumlah Suara Masuk'
            }]
        }
        const options = {
            responsive: true
        }

        return (
            <div>
            <Header as='h2'>{this.props.title}</Header>
            <Bar data={data} options={options} />
            </div>
        );
    }
}
export default BarChart;
