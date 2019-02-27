import React from "react";
import AnimateHeight from "react-animate-height";

export const CollapsibleHeader = ({ children }) => (
  <p className="underlined-text">{children}</p>
);

const CollapsibleIcon = ({ open }) => (
  <span className="collapsible-icon">{open ? "-" : "+"}</span>
);

class Colapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  toggleOpenFn = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { open } = this.state;

    const { closedHeader, openHeader, children } = this.props;

    return (
      <div>
        <span onClick={this.toggleOpenFn}>
          <span className="collapsible-header">
            {open ? openHeader : closedHeader}
            <CollapsibleIcon open={this.state.open} />
          </span>
        </span>
        <AnimateHeight duration={300} height={this.state.open ? "auto" : 0}>
          {children}
        </AnimateHeight>
      </div>
    );
  }
}

export default Colapsible;
