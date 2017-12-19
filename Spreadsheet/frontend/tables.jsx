import React from 'react';
import * as TableAPIUtil from './api_util';
import { Grid, Button, Table, Form, Row, Col } from 'react-bootstrap';
import Grids from './grids';
import Forms from './forms';

export default class Tables extends React.Component{
 
    constructor(props) {
        super(props);
        this.state = {
            inputVal: "",
            outputVal: "",
            columns: 0,
            rows: 0,
            inputCells: [],
            outputCells: [],
            errors: "",
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createAndFetchTable = this.createAndFetchTable.bind(this);
    }


    // event handlers
    handleInput(e) {
        this.setState({inputVal: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.createAndFetchTable();
    }



    // sends post request to backend
    createAndFetchTable() {
        let input = this.state.inputVal;

        TableAPIUtil.createTable({
               cells: input 
            }).then((createdTable) => {
                this.setNewState(createdTable.cells);
            },
            (err) => {
                this.setErrorState(err.responseJSON),
                console.log(err);
            });  
    }

    setErrorState(err) {
        this.setState((prevState, props) => {
            return {
                inputVal: `${prevState.inputVal}`,
                outputVal: "",
                inputCells: [],
                outputCells: [],
                columns: 0,
                rows: 0,
                errors: err,
            };
        });
    }

    setNewState(cells) {
        let outputString = this.generateOutputString(cells);
        this.setState((prevState, props) => {
            return {
                inputVal: `${prevState.inputVal}`,
                outputVal: `${outputString}`,
                inputCells: cells.input.reverse(),
                outputCells: cells.output.reverse(),
                columns: parseInt(cells.size.split(" ")[0]),
                rows: parseInt(cells.size.split(" ")[1]),
                errors: "",
            };
        });
    }
    
    generateOutputString(cells) {
        let outputString = "";
        outputString = cells.size + "\n";
        for (let i = cells.output.length - 1; i >= 0; i--) {
            outputString += cells.output[i].value + "\n";
        }

        return outputString;
    }

    

    render() {
        return (
            <Grid >
                <Row inline="true">
                    
                    <Col xs={12} s={12} md={6} lg={6}>
                        <div className="form-container">
                            <h2> Table Input </h2>
                            <Forms 
                                val={this.state.inputVal}
                                handleInput={this.handleinput}
                                handleSubmit={this.handlesubmit}
                                errors={this.state.errors}
                                input={true}
                            />
                        </div>
                    </Col>
                    
                    <Col xs={12} s={12} md={6} lg={6}>
                        <div className="table-container">
                            { this.state.outputVal ? <Grids 
                                    cells={this.state.inputCells}
                                    columns={this.state.columns}
                                    rows={this.state.rows}
                            /> : null }
                        </div>
                    </Col>

                </Row>

                <Row inline="true">
                    <Col xs={12} s={12} md={6} lg={6}>
                        <div className="form-container">
                            <h2> Table Output </h2>
                            <Forms 
                                val={this.state.outputVal}
                                handleInput={this.handleinput}
                                handleSubput={this.handlesubmit}
                                errors={this.state.errors}
                                input={false}
                            />
                        </div>
                    </Col>

                    <Col xs={12} s={12} md={6} lg={6}>
                        <div className="table-container">
                            { this.state.outputVal ?     
                                <Grids 
                                    cells={this.state.outputCells}
                                    columns={this.state.columns}
                                    rows={this.state.rows}
                            /> : null }
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}