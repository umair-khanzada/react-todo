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
    this.props.selected && this.setState({value: this.props.selected.text})
  }

  componentWillReceiveProps(nextProps){
    nextProps.selected && this.setState({value: nextProps.selected.text})
  }

  //handling change, run whenever input change.
  handleChange(e){
    this.setState({value: e.target.value})
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
        <Button type="submit" text={submitButtonLabel} disabled={!value} />
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  placeHolder: PropTypes.string,
  submitButtonLabel: PropTypes.string.isRequired,
  selected: PropTypes.shape({
    text: PropTypes.string.isRequired
  })
};

//default props for Form component.
Form.defaultProps = {
  placeHolder: "Add todo.",
  submitButtonLabel: "add",
  onSubmit: () => {},
};

export default Form;