import React from 'react';


class MyTimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { seconds: 0, minutes: 0, hours: 0, status: 'stop' }


        setInterval(() => { if (this.state.status !== 'stop') { this.setState({ seconds: this.state.seconds += 1, }) } }, 1000)

        setInterval(
            () => {
                if (this.state.status !== 'stop') {
                    this.setState({

                        minutes: this.state.minutes + 1,
                        seconds: 0

                    })

                }
            },

            (1000) * 60

        )



        setInterval(
            () => {
                if (this.state.status !== 'stop') {
                    this.setState({

                        hours: this.state.hours + 1,
                        minutes: 0

                    })
                }


            },

            ((1000) * 60) * 60

        )

    }

    startwatch = () => {
        if (this.state.status === 'stop') {
            this.setState({
                status: 'start'
            })
        } else {
            {
                this.setState({
                    status: 'stop'
                })
            }
        }
    }


    stopwatch = () => {
        this.setState(
            {
                seconds: 0,
                minutes: 0,
                hours: 0,
                status: 'stop'
            }
        )
    }



    render() {

        return (

            <div className='elements'>
                <div className="timebar">
                    <h1>{String(this.state.hours).padStart(2, '0') + ':'}</h1>
                    <h1>{String(this.state.minutes).padStart(2, '0') + ':'}</h1>
                    <h1>{String(this.state.seconds).padStart(2, '0')}</h1>

                </div>

                <div className="btntime">
                    <button onClick={this.startwatch}>{this.state.status === 'stop' ? 'start' : 'pause'}</button>
                    <button className='resetb' onClick={this.stopwatch}>Reset</button>
                </div>
            </div>
        );


    }




}


export default  MyTimer;