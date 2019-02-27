import React from "react";
import AnimateHeight from "react-animate-height";

const CollapsibleIcon = ({ open }) => (
  <span className="collapsible-icon">{open ? "-" : "+"}</span>
);

class Colapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: this.props.open || false };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  toggleOpenFn = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { header, children } = this.props;

    return (
      <div>
        <span onClick={this.toggleOpenFn}>
          <span className="collapsible-header">
            {header}
            <CollapsibleIcon open={this.state.open} />
          </span>
        </span>
        <AnimateHeight
          duration={300}
          height={this.state.open ? "auto" : 0}
        >
          {children}
        </AnimateHeight>
      </div>
    );
  }
}

export default Colapsible;
