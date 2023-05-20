import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSistrix } from "react-icons/fa";
import '../Input/Input.css'
const Input = () => {
    return (
        <>
            <InputGroup className="mb-3 input_text">
                <InputGroup.Text id="basic-addon1">
                    <FaSistrix/>
                </InputGroup.Text>
                <Form.Control
                    placeholder="Enter keyword.."
                    aria-label="text"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    );
};

export default Input;