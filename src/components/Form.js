import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

class Form extends PureComponent{
  constructor(props){
    super(props);

    //initial state.
    this.state = {value: ''};

    //binding ref.
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //handling change, run whenever change event occur.
  handleChange(e){
    this.setState({value: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    let {value} = this.state;
    value && this.props.onSubmit(value);
  }

  render(){
    let {placeHolder, buttonLabel} = this.props,
      {value} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group col-sm-10">
          <input type="text" className="form-control"
            placeholder={placeHolder} onChange={this.handleChange} value={value} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!value}>{buttonLabel}</button>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  placeHolder: PropTypes.string,
  buttonLabel: PropTypes.string
};

//default props for Form component.
Form.defaultProps = {
  onSubmit: () => {},
  placeHolder: "Add todo.",
  buttonLabel: "Add"
};

export default Form;