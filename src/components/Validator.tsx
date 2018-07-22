import * as React from 'react';
import { startCase } from 'lodash';
import { Rules } from '../rules/_';
import { ApplyRule } from '../rules/ApplyRule';

interface RulesInterface {
    [key:string]:  Array<string>
}

interface Messages {
    [key:string]:  string
}

interface Form {
    [key:string]:  any
}

interface Props {
    touched: Array<string>;
    form: Form;
    rules: RulesInterface;
    messages: Messages;
    onChange: Function;
}

interface States {
    touched: Array<string>
}

interface ValidationState {
    valid: boolean,
    fields: ValidationStateFields
}

interface ValidationStateFields {
    [key:string]: any
}

const Rule = new ApplyRule;

class Validator extends React.Component<Props, States>
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
            var touched = Object.keys(this.props.form);
            this.setState({touched: touched});
        }
        this.fireOnChangeCallback();
    }

    componentDidUpdate(prevProps:Props)
    {
        this.updateTouchedData(prevProps.form, this.props.form);
    }

    render()
    {
        return true;
    }

    private fireOnChangeCallback()
    {
        var states:ValidationState; states = { valid: true, fields: {} };
        var form = this.props.form;
        var messages: any; messages = this.props.messages;
        var fields = Object.keys(form);

        for(var i = 0; i < fields.length; i++)
        {
            var field = fields[i];

            if(!form.hasOwnProperty(field))
            { continue; }

            if(!this.props.rules[field] || !messages[field])
            { continue; }

            var validation = this.getDataValidity(field, form[field], this.props.rules[field], messages[field]);
            states.fields[field] = {
                field: field,
                value: form[field],
                touched: this.props.touched.indexOf(field) != -1 ? true : false,
                error: validation.error, 
                valid: validation.valid
            };

            if(!validation.valid) 
            { states.valid = false; }
        }

        // fire on state change listener
        if(this.props.onChange)
        { this.props.onChange(states); }
    }
    
    private getDataValidity(field:string, value:any, rules:Array<string>, messages?:Messages)
    {
        // 
        var valid = true, 
            error = null, 
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
                var appliedRule = Rule.apply(this.props.form, value, rule[0], rule[1] || '');

                // set custom message
                customMessage = typeof messages[field+rule[0]] == 'string' 
                                ? messages[field+rule[0]] 
                                : typeof appliedRule.error == 'string' 
                                    ? appliedRule.error : false;

                // add field name is specified in the error.
                if(typeof customMessage == 'string'){
                    customMessage = customMessage.replace(':field', field);
                    customMessage = startCase(customMessage);
                }
                // set return values
                valid = appliedRule.error ? false : true; 
                error = customMessage; break;
            }
        }

        // 
        return { error: error, valid: valid };
    }

    private updateTouchedData(prevForm:Form, newform:Form)
    {
        var touched = [...this.state.touched];
        var wasTouched = false;

        /**
         * :NOTES
         * this seems like a dead code, consider removing it.
         */
        if(JSON.stringify(prevForm) !== JSON.stringify(newform))
        {
            wasTouched = true;
        }

        for(var field in prevForm)
        {
            if(
                prevForm[field] != newform[field] && 
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