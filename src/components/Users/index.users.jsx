import React from "react";

import Header from "components/Headers/Header";
import {
  Container,
  Row,
  Card,
  CardHeader,
  Table,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Progress,
  UncontrolledTooltip,
  Badge,
  Media,
} from "reactstrap";
import ServerTable from "react-strap-table";
class Users extends React.Component {
  buildTable() {
    const url =
      "https://react-strap-table.000webhostapp.com/?query=&limit=20&page=2&orderBy=&ascending=true";
    const columns = ["id", "name", "email", "created_at"];
    const options = {
      headings: { id: "#", created_at: "Created At" },
      sortable: ["name", "email"],
    };
    return (
      <ServerTable
        columns={columns}
        url={url}
        options={options}
        bordered
        hover
      />
    );
  }
  render() {
    return (
      <div>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3> Listado de usuarios</h3>
                </CardHeader>
                {this.buildTable()}
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Users;
