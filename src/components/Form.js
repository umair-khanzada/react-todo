import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Button from './Button';

class Form extends PureComponent{
  constructor(props){
    super(props);

    //initial state.
    this.state = {value: ''};

    //binding ref.
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  //life cycle hooks.
  componentDidMount(){
    this.props.selectedTodo && this.setState({value: this.props.selectedTodo.text})
  }

  componentWillReceiveProps(nextProps){
    nextProps.selectedTodo && this.setState({value: nextProps.selectedTodo.text})
  }

  //handling change, run whenever change event occur.
  handleChange(e){
    const {value} = e.target,
      {onInputChange} = this.props;

    onInputChange && onInputChange(value);
    this.setState({value})
  }

  onSubmit(e){
    e.preventDefault();

    const {value} = this.state,
      {selectedTodo} = this.props;
    value && this.props.onSubmit(selectedTodo ? selectedTodo.id : null, value);
    this.setState({value: ''});
  }

  onReset(){
    this.setState({value: ''});
    this.props.onReset();
  }

  render(){
    const {placeHolder, buttonLabel, selectedTodo, submitButton} = this.props,
      {value} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className={`form-group col-sm-${selectedTodo ? 8 : 10}`}>
          <input type="text" className="form-control"
            placeholder={placeHolder} onChange={this.handleChange} value={value} />
        </div>
        {selectedTodo && <Button text="cancel" onClick={this.onReset} />}
        {submitButton && <Button type="submit" disabled={!value} text={selectedTodo ? 'update' : buttonLabel} />}
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  placeHolder: PropTypes.string,
  buttonLabel: PropTypes.string,
  onInputChange: PropTypes.func,
  submitButton: PropTypes.bool,
  selectedTodo: PropTypes.shape({
    text: PropTypes.string.isRequired
  })
};

//default props for Form component.
Form.defaultProps = {
  placeHolder: "Add todo.",
  buttonLabel: "Add",
  onSubmit: () => {},
  onReset: () => {}
};

export default Form;