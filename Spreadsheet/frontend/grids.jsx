import React from 'react';
import * as TableAPIUtil from './api_util';
import { Table } from 'react-bootstrap';

export default class Grids extends React.Component{
       constructor(props) {
           super(props);
       }

    generateAlphabet() {
        let alphabet = [];

        for (let i = 65; i <= 90; i++) {
            alphabet.push(String.fromCharCode(i));
        }
        
        return alphabet;
    }

    // creates the A B C header
    generateHeader() {
        let alphabet = this.generateAlphabet();

        let res = [];
        for (let i = 0; i < parseInt(this.props.columns); i++) {
            res.push(alphabet[i]);
        }
        
        return res;
    }

    // index into the cell object's value makes a <td> of each
    generateCells(i) {
        let cells = [];
        for ( let j = 0; j < this.props.columns; j++) {
                cells.push(
                    <td key={`cell_input_${i+j}`}>
                       {this.props.cells[i+j].value} 
                    </td>
                );
        }
        return cells;
    }

    // generates each row
    generateRow() {
        let rows = [];

        for (let i = 0; i < this.props.rows; i++) {
                rows.push(
                    <tr key={`row_${i}`}>
                        <td key={`row_header_${i}`}>{i+1}</td>
                        {this.generateCells(i * this.props.columns)}
                    </tr>
                );
            }
        return rows;
    }

    
    renderTable() {
        let header = this.generateHeader();
        return (
            <Table responsive striped bordered condensed hover>
                <tbody>
                    <tr key={`header`}>
                        <td key={`empty`}></td>
                        {header.map((cell, idx) => <td key={idx}>{cell}</td>)}
                    </tr>
                        { this.generateRow() }
                </tbody>
            </Table>
        );
    }

    render() {
        return (
            <div>
                { this.renderTable() }
            </div>
        );
    }   
}   