import React, { Component } from "react";
import axios from "axios";
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
                    categories: []
                }
            },
            series: [
                {
                    name: "Ventas",
                    data: []
                }
            ]
        };
    }

    componentDidMount() {
        // Solicitar las estadísticas de los tickets al backend
        axios
            .get("http://localhost:8080/ticket/statistics", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}` // Asegúrate de que el token esté en localStorage
                }
            })
            .then((response) => {
                const ticketStatistics = response.data;

                const categories = ticketStatistics.map((stat) => stat.eventName);
                const salesData = ticketStatistics.map((stat) => stat.ticketsSold);

                this.setState({
                    options: {
                        ...this.state.options,
                        xaxis: {
                            categories: categories,
                        },
                    },
                    series: [
                        {
                            name: "Ventas",
                            data: salesData,
                        },
                    ],
                });
            })
            .catch((error) => {
                console.error("Hubo un error al obtener las estadísticas:", error);
                alert("No tienes permisos para acceder a esta información.");
            });
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart xl:absolute p-5 flex-wrap py-[70px] px-[] flex justify-center flex-row right-16 w-full xl:w-9/12 h-9/12">
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
