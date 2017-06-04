import React, { Component } from 'react';
import './home.css';
import { Pie } from 'react-chartjs-2';
import { Grid, Header, Dimmer, Loader, Icon, Message } from 'semantic-ui-react';
import BarChart from '../BarChart';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // data: null
            errorCount: 0
        }
        // this.fetchData = this.fetchData.bind(this);
    }
    fetchData() {
        console.log('fetching...');
        fetch('http://45.32.115.11:1404/vote/report', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                setTimeout(() => {
                    this.setState({
                        data: responseJson
                    })
                }, 3000);
            })
            .catch(error => {
                if (this.state.errorCount < 10) {
                    setTimeout(
                        () => {
                            this.setState({
                                error,
                                errorCount: this.state.errorCount + 1
                            });
                        }, 3000);
                }
            });
    }
    render() {
        this.fetchData();
        if (this.state.error) {
            return (
                <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                        <Message.Header>Oops...</Message.Header>
                        Error has occured. Please contact our admin @gedeagas or @gifarydhimas while we are trying to get it back to live...{this.state.errorCount}
                        </Message.Content>
                </Message>

            )
        }
        if (this.state.data === undefined) {
            return (
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>

            );
        } else {
            console.log(this.state.data);
            const { vote_faiz, vote_anjas, golput } = this.state.data;
            const data = {
                labels: [
                    'Faiz',
                    'Anjas'
                ],
                datasets: [{
                    data: [vote_faiz, vote_anjas],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(54, 162, 235, 0.8)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 159, 64, 1)',
                        'rgba(54, 162, 235, 1)'
                    ]
                }]
            };

            let data2 = {
                vote1: vote_faiz,
                vote2: vote_anjas,
                unvoted: golput
            };
            let dataKelasA, dataKelasB, dataKelasC, dataKelasD = dataKelasC = dataKelasB = dataKelasA = {
                vote1: 17,
                vote2: 15,
                unvoted: 5
            };
            return (

                <Grid stackable={true}>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header as='h2'>Persentase Vote</Header>
                            <Pie data={data} options={{ responsive: true }} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Jumlah Suara Masuk" data={data2} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className="rowVoteKelas" columns={4}>
                        <Grid.Column>
                            <BarChart title="Kelas A" data={dataKelasA} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas B" data={dataKelasB} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas C" data={dataKelasC} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas D" data={dataKelasD} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            );
        }
    }
}

export default Home;
