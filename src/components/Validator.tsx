import * as React from 'react';

interface Rules {
    [key:string]:  Array<Function>
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
    rules: Rules;
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

            var validation = this.getDataValidity(form[field], this.props.rules[field], messages[field]);
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
    
    private getDataValidity(value:any, rules:Array<Function>, messages?:Messages)
    {
        // 
        var valid = true, error = null, rule;
        
        if(rules && messages)
        {
            // 
            for(var i in rules)
            {
                if(!rules.hasOwnProperty(i))
                { continue; }

                rule = rules[i];

                if(!rule(value))
                { valid = false; error = messages[i]; break; }
            }
        }

        // 
        return { error: error, valid: valid };
    }

    private updateTouchedData(prevForm:Form, newform:Form)
    {
       var touched = [...this.state.touched];
       var wasTouched = false;

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