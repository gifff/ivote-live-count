import React, { Component } from 'react';
import './home.css';
import { Pie } from 'react-chartjs-2';
import { Grid, Header, Dimmer, Loader, Icon, Message, Image } from 'semantic-ui-react';
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
                        data: responseJson,
                        error: undefined,
                        errorCount: 0
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
                vote2: 15
            };
            const { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p } = this.state.data;
            return (

                <Grid stackable={true} textAlign="center">
                    <Grid.Row>
                        <Grid.Column width="3">
                            <Image src='/images/vote.jpg' fluid />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Header as='h1'>Live Count</Header>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header as='h2'>Persentase Vote</Header>
                            <Pie data={data} options={{ responsive: true }} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Jumlah Suara Masuk" data={data2} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <BarChart title="Kelas A" data={{vote1: a.vote_faiz, vote2: a.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas B" data={{vote1: b.vote_faiz, vote2: b.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas C" data={{vote1: c.vote_faiz, vote2: c.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas D" data={{vote1: d.vote_faiz, vote2: d.vote_anjas}} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <BarChart title="Kelas E" data={{vote1: e.vote_faiz, vote2: e.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas F" data={{vote1: f.vote_faiz, vote2: f.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas G" data={{vote1: g.vote_faiz, vote2: g.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas H" data={{vote1: h.vote_faiz, vote2: h.vote_anjas}} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <BarChart title="Kelas I" data={{vote1: i.vote_faiz, vote2: i.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas J" data={{vote1: j.vote_faiz, vote2: j.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas K" data={{vote1: k.vote_faiz, vote2: k.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas L" data={{vote1: l.vote_faiz, vote2: l.vote_anjas}} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <BarChart title="Kelas M" data={{vote1: m.vote_faiz, vote2: m.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas N" data={{vote1: n.vote_faiz, vote2: n.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas O" data={{vote1: o.vote_faiz, vote2: o.vote_anjas}} />
                        </Grid.Column>
                        <Grid.Column>
                            <BarChart title="Kelas P" data={{vote1: p.vote_faiz, vote2: p.vote_anjas}} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width="3">
                            <Header as='h3'>Powered by: </Header>
                            <Image src='/images/bcc.jpg' fluid />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            );
        }
    }
}

export default Home;
