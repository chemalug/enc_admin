import React from "react";

import TableSchool from "./datatable.school";
import Header from "./header.school";
import { Container, Row, Card, CardHeader, CardBody } from "reactstrap";

class Schools extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow" style={{ height: "800px" }}>
                <CardHeader className="border-0">
                  <h3> Listado de Colegios</h3>
                </CardHeader>
                <CardBody className="border-1">
                  <TableSchool />
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Schools;
