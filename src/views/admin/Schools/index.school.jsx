import React from "react";
import { connect } from "react-redux";
import { Container, Row, Card, CardHeader, CardBody } from "reactstrap";

import { getSchools } from "redux/actions/school.action";
import TableSchool from "components/Tables/datatable.admin";
import Header from "components/Headers/header.admin";

class Schools extends React.Component {
  render() {
    return (
      <div>
        <Header labelButton={"Agregar Colegio"} icon={"fas fa-school"} />
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow" style={{ height: "800px" }}>
                <CardHeader className="border-0">
                  <h3> Listado de Colegios</h3>
                </CardHeader>
                <CardBody className="border-1">
                  <TableSchool />
                  {/*props.getSchools.map((s) => console.log(s))*/}
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schools: state.schools.loading === false ? [] : state.schools.map,
  };
}

export default Schools;
