import * as React from 'react';
import startCase = require('lodash/startCase');
import { ApplyRule } from '../rules/ApplyRule';
import { Props, States, ValidationState, Data, Messages } from '../utils/intefaces';

/**
 * Instantiate the apply rule class.
 * The apply rule contains all inbuilt rules
 * that come with the library
 */
const Rule = new ApplyRule;

/**
 * The validator component is where all the magic happens,
 * this is where the validation takes place
 */
export class Validator extends React.Component<Props, States>
{
    constructor(props:Props)
    {
        super(props);
        this.reset = this.reset.bind(this);
        this.state = { touched: [] };
    }

    componentDidMount() {
        if(this.props.touched)
        {
            var touched = Object.keys(this.props.data);
            this.setState({touched: touched});
        }
        this.fireOnChangeCallback();
    }

    componentDidUpdate(prevProps:Props)
    {
        this.updateTouchedData(prevProps.data, this.props.data);
    }

    render()
    {
        return true;
    }

    private fireOnChangeCallback()
    {
        var states:ValidationState; states = { valid: true, fields: {} };
        var data = this.props.data;
        var messages: any; messages = this.props.messages;
        var fields = Object.keys(data);

        for(var i = 0; i < fields.length; i++)
        {
            var field = fields[i];

            if(!data.hasOwnProperty(field))
            { continue; }

            if(!this.props.rules[field] || !messages[field])
            { continue; }

            var validation = this.getDataValidity(field, data[field], this.props.rules[field], messages[field]);
            states.fields[field] = {
                field: field,
                value: data[field],
                touched: this.props.touched.indexOf(field) != -1 ? true : false,
                error: validation.error, 
            };

            // set validator validity state to false if any field is invalid
            if(!validation.error) states.valid = false;
        }

        // fire on state change listener
        if(this.props.onChange)
        { this.props.onChange(states); }
    }
    
    private getDataValidity(field:string, value:any, rules:Array<string>, messages?:Messages)
    {
        // 
        var error:string|false|null = null, 
            rule,
            customMessage:string|false;
        
        if(rules && messages)
        {
            // 
            for(var i = 0; i < rules.length; i++)
            {
                // seperate rule from arguments
                rule = rules[i].split(':');

                // aply rules to field
                var appliedRule = Rule.apply(this.props.data, value, rule[0], rule[1] || '');

                if(rule[0] == 'sometimes' && appliedRule.error == false){
                    error = false;
                    break;
                }

                // set custom message when there is an error
                if(typeof appliedRule.error == 'string'){
                    customMessage = typeof messages[field+rule[0]] == 'string' 
                                    ? messages[field+rule[0]] 
                                    : appliedRule.error;
                }

                // add field name is specified in the error.
                if(typeof customMessage == 'string'){
                    customMessage = customMessage.replace(':field', field);
                    customMessage = startCase(customMessage);
                }

                // set return values
                error = customMessage || false;
                break;
            }
        }

        // 
        return { error: error };
    }

    private updateTouchedData(prevData:Data, newData:Data)
    {
        var touched = [...this.state.touched];
        var wasTouched = false;

        /**
         * :NOTES
         * this seems like a dead code, consider removing it.
         */
        if(JSON.stringify(prevData) !== JSON.stringify(newData))
        {
            wasTouched = true;
        }

        for(var field in prevData)
        {
            if(
                prevData[field] != newData[field] && 
                (this.props.rules[field] && this.props.messages[field])
            ){ 
                touched.push(field);
                wasTouched = true;
            }
        }

        if(wasTouched)
        { 
           this.setState({touched: touched}); 
           this.fireOnChangeCallback();
        }
    }

    public reset()
    {
        this.setState({touched: []});
    }
}

export default Validator;