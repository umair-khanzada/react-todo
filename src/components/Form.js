import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Button from './Button';

class Form extends PureComponent{
  constructor(props){
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  componentDidMount(){
    this.props.selected && this.setState({value: this.props.selected.text})
  }

  componentWillReceiveProps(nextProps){
    nextProps.selected && this.setState({value: nextProps.selected.text})
  }

  handleChange(e){
    const {onInputChange} = this.props,
      {value} = e.target;
    this.setState({value});
    onInputChange && onInputChange(value)
  }

  onSubmit(e){
    e.preventDefault();

    const {value} = this.state;
    value && this.props.onSubmit(value);
    this.setState({value: ''});
  }

  onReset(){
    this.setState({value: ''});
    this.props.onReset();
  }

  render(){
    const {placeHolder, submitButtonLabel, onReset} = this.props,
      {value} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className={`form-group col-sm-${onReset ? 8 : 10}`}>
          <input type="text" className="form-control"
            placeholder={placeHolder} onChange={this.handleChange} value={value} />
        </div>
        {onReset && <Button text="cancel" onClick={this.onReset} />}
        {submitButtonLabel && <Button type="submit" text={submitButtonLabel} disabled={!value} />}
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  onInputChange: PropTypes.func,
  placeHolder: PropTypes.string,
  submitButtonLabel: PropTypes.string,
  selected: PropTypes.shape({
    text: PropTypes.string.isRequired
  })
};

//default props for Form component.
Form.defaultProps = {
  placeHolder: "Add todo.",
  onSubmit: () => {},
};

export default Form;