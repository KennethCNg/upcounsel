import React from 'react';
import * as TableAPIUtil from './api_util';
import { Form, Button } from 'react-bootstrap';

export default class Forms extends React.Component{
       constructor(props) {
           super(props);
       }

    renderErrors() {
        return (
            <div className="errors">
                {this.props.errors}
            </div>
        );
    }
       render() {
           return (
            <div>
                <Form onSubmit={ this.props.handleSubmit }>
                    <textarea 
                        name="cells" 
                        rows="10" 
                        cols="50" 
                        value={ this.props.val }
                        onChange={ this.props.handleInput }
                    />
                    <br/>
                    {(this.props.errors && this.props.input) ? this.renderErrors() : null}
                    <br/>
                    <div >
                        {this.props.input ? <Button type="submit" bsStyle="success" bsSize="small">Create A Table</Button> : null} 
                    </div>
                </Form>    
            </div>
           );
       }
}