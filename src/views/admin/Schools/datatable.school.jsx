import React from "react";
import { MDBDataTableV5, MDBBtn } from "mdbreact";

import axios from "axios";
import { getSchools } from "services/schools.service";

class TableSchool extends React.Component {
  state = {
    schools: [],
  };

  componentDidMount() {
    if (!!localStorage.jwtToken) {
      try {
        return axios
          .get(`${process.env.REACT_APP_PROXY}/api/schools/`, {
            headers: {
              Authorization: localStorage.jwtToken,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            const schools = res.data;
            this.setState({ schools });
          })
          .catch((err) => console.log("asdfasdf" + err));
      } catch (e) {
        console.log(e.response.data);
      }
    }
  }
  render() {
    const datatable = {
      columns: [
        {
          label: "Name",
          field: "name",
          width: 250,
          attributes: {
            "aria-controls": "DataTable",
            "aria-label": "Name",
          },
        },
        {
          label: "Email",
          field: "email",
          width: 170,
        },
        {
          label: "Telefono",
          field: "telephone",
          width: 100,
        },
        {
          label: "Web Site",
          field: "website",
          width: 100,
        },
        {
          label: "",
          field: "actions",
          width: 100,
        },
      ],
      rows: this.state.schools.map((value) => {
        return {
          name: <strong>{value.name}</strong>,
          email: value.email,
          telephone: value.telephone,
          website: value.website,
          actions: (
            <div>
              <MDBBtn
                color="warning"
                outline
                id={value.id}
                onClick={(e) => console.log(e)}
                size="sm"
              >
                <i className="fas fa-edit"></i>
              </MDBBtn>
              {"|"}
              <MDBBtn color="danger" outline size="sm" id="1">
                <i className="fas fa-trash"></i>
              </MDBBtn>
            </div>
          ),
        };
      }),
    };

    return (
      <div>
        <MDBDataTableV5
          responsive
          hover
          entriesOptions={[10, 20, 25]}
          entries={10}
          pagesAmount={4}
          data={datatable}
          searchTop
          pagingTop
          searchBottom={false}
        />
      </div>
    );
  }
}

export default TableSchool;
