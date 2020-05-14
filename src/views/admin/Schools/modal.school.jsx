import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      fade: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    console.log("hello");
    this.setState({
      modal: !this.state.modal,
    });
    console.log("after setState: ", this.state);
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Launch
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={this.state.fade}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Do Something</Button>{" "}
            <Button onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;
