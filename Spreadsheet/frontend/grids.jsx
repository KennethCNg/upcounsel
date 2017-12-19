import React from 'react';
import * as TableAPIUtil from './api_util';
import { Table } from 'react-bootstrap';

const Grids = (props) => {

    const generateAlphabet = () => {
        let alphabet = [];

        for (let i = 65; i <= 90; i++) {
            alphabet.push(String.fromCharCode(i));
        }
        
        return alphabet;
    };

    // creates the A B C header
    const generateHeader = () => {
        let alphabet = generateAlphabet();

        let res = [];
        for (let i = 0; i < parseInt(props.columns); i++) {
            res.push(alphabet[i]);
        }
        
        return res;
    };

    // index into the cell object's value makes a <td> of each
    const generateCells =(i) => {
        let cells = [];
        for ( let j = 0; j < props.columns; j++) {
                cells.push(
                    <td key={`cell_input_${i+j}`}>
                       {props.cells[i+j].value} 
                    </td>
                );
        }
        return cells;
    };

    // generates each row
    const generateRow = () => {
        let rows = [];

        for (let i = 0; i < props.rows; i++) {
                rows.push(
                    <tr key={`row_${i}`}>
                        <td key={`row_header_${i}`}>{i+1}</td>
                        {generateCells(i * props.columns)}
                    </tr>
                );
            }
        return rows;
    };

    
    const renderTable = () => {
        let header = generateHeader();
        return (
            <Table responsive striped bordered condensed hover>
                <tbody>
                    <tr key={`header`}>
                        <td key={`empty`}></td>
                        {header.map((cell, idx) => <td key={idx}>{cell}</td>)}
                    </tr>
                        { generateRow() }
                </tbody>
            </Table>
        );
    };

    return (
        <div>
            { renderTable() }
        </div>
    );  
};

export default Grids;