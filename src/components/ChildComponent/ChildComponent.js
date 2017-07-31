import React    from "react";


class ChildComponent extends React.Component {
  render() {
    return (
    <div className="child-component">
      <label>Initial value:{this.props.text}</label>
    </div>
  );
  }
}

export default ChildComponent;
