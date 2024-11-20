import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ["BadBunny", "LuisMi", "Nodal", "Wos", "nickinicole", "RHCP", "MagodeOz", "SteveAoki"]
                }
            },
            series: [
                {
                    name: "Ventas",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart xl:absolute p-5 flex-wrap  py-[70px] px-[] flex   justify-center flex-row right-16  w-full xl:w-9/12  h-9/12">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="500"
                        />

                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            
                            type="line"
                            width="500"
                        />

                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="area"
                            width="500"
                        />

                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="radar"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;