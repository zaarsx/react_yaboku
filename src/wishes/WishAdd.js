import React from "react";
import { connect } from 'react-redux';

import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Modal from "react-bootstrap/Modal";


class WishAdd extends React.Component {

    state = {
        show: false,
        form: {
            text: '',
        }
    }

    change = (event) => {
        const {name, value} = event.target;
        this.setState({ form: { [name]: value}})
    }

    setShow = state => {
        this.setState({show: state})
    }

    submit = (event) => {
        event.preventDefault();
        this.props.postData(`http://127.0.0.1:8000/api/v1/wish/`, this.state.form);
        this.handleClose();
    }


    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true);

    render() {

        return (
            <div>
                <div className='action-button'>
                    <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
                        <Button variant="primary" onClick={this.handleShow}>Click</Button>
                    </OverlayTrigger>
                </div>


                <Modal
                    show={this.state.show} onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="" onSubmit={this.submit}>
                            <textarea name="text" id="" cols="30" rows="10" onChange={this.change}>
                            </textarea>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.submit}>Understood</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}




const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Add your wish!</Popover.Title>
        <Popover.Content>
            You can add your <strong>wishes</strong> by click this button
        </Popover.Content>
    </Popover>
);



const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = (dispatch, data) => {
    return {
        postData: (url, data) => {
            const response = (async () => {
                return await fetch(url, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => {
                        if (!response.ok) {
                            console.log(response)
                            throw new Error(response.statusText)
                        }

                        return response
                    })
                    .then(response => response.json())

            })();
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(WishAdd);