import ValidatorComponent from './components/Validator';
import RuleClass from './rules/Rule';

/**
 * The rule class will allow users of this library
 * create custom rules for their forms.
 */
export const Rule = RuleClass;

/**
 * The validator component is also exported
 * this way to allow deconstructed imports
 */
export const Validator = ValidatorComponent;

/**
 * export validator component as default
 */
export default ValidatorComponent