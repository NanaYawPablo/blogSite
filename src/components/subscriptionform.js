import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from "react"
import { Container, Button, Row, Col } from 'react-bootstrap';
import React from 'react'; 

const SubscriptionForm = () => {
    const [isLoading, setLoading] = useState(false);
    const { register, errors, handleSubmit, reset } = useForm();
    const toastifySuccess = () => {
        toast('Subscription Successful👌🏾', {
            position: 'bottom-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data) => {
        /* No need to escape script tags, emailJS handles it by escaping them automatically*/
        setLoading(true)
        reset();
        toastifySuccess();
        setLoading(false);
    };


    return (
        <Container fluid={'md'}>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className="fcf-body">
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>

                            <div className="fcf-form-group">
                                <div className="fcf-input-group">
                                    <input type="email" name="email"
                                        placeholder="Enter email address"
                                        className="fcf-form-control"
                                        ref={register({
                                            required: true,
                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        })}
                                    />
                                    {errors.email && (
                                        <span className='formError'>Please enter a valid email address</span>
                                    )}
                                </div>
                            </div>

                            <div className="fcf-form-group">
                                <Button type="submit" id="fcf-button"
                                    className="fcf-btn">
                                    {isLoading ? 'Loading…' : 'Subscribe'}
                                </Button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SubscriptionForm;