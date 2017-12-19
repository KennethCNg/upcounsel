import React from 'react';
import * as TableAPIUtil from './api_util';
import { Form, Button } from 'react-bootstrap';

const Forms = (props) => {
    const renderErrors = () => {
        return (
            <div className="errors">
                {props.errors}
            </div>
        );
    };
    
    return (
        <div>
            <Form onSubmit={ props.handleSubmit }>
                <textarea 
                    name="cells" 
                    rows="10" 
                    cols="50" 
                    value={ props.val }
                    onChange={ props.handleInput }
                />
                <br/>
                {props.errors && props.input ? renderErrors() : null}
                <br/>
                <div >
                    {props.input ? <Button type="submit" bsStyle="success" bsSize="small">Create A Table</Button> : null} 
                </div>
            </Form>    
        </div>
    );
    
};

export default Forms;