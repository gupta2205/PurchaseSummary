import React, { Component } from "react";
import { CollapsibleHeader } from "./Collapsible";
import Collapsible from "./Collapsible";

class PromotionCode extends Component {
  state = {
    code: ""
  };

  handleCodeChange = e =>
    this.setState({
      code: e.target.value
    });

  render() {
    let { onApply } = this.props;

    const headers = {
      openHeader: <CollapsibleHeader>Hide promo code</CollapsibleHeader>,
      closedHeader: <CollapsibleHeader>Apply promo code</CollapsibleHeader>
    };

    return (
      <Collapsible {...headers}>
        <input
          type="text"
          value={this.state.code}
          onChange={this.handleCodeChange}
        />
        <button className="apply-button" onClick={() => onApply(this.state.code)}>Apply</button>
      </Collapsible>
    );
  }
}

export default PromotionCode;
