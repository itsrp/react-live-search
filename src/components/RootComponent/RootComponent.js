import React from "react";
import { BootstrapTable } from "react-bootstrap-table";
import { TableHeaderColumn } from "react-bootstrap-table";


class RootComponent extends React.Component {

  render() {
    return (
      <div className="root-component">
        <input type="text" onChange={this.props.onTextChange} />
        <BootstrapTable data={this.props.data} striped hover>
          <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default RootComponent;
