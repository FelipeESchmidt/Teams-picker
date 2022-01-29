import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideMessage } from '../../store/Alert/Alert.actions';
import { alert } from '../../store/Alert/Alert.selectors';

import { StyledAlert, StyledSnackbar } from './index.styles';

function AlertMessage() {
    const dispatch = useDispatch();

    const { open, type, message } = useSelector(alert);
    const alertRef = useRef(null);

    function handleCloseAlert(event, reason) {
        if (reason === 'clickaway') return;
        dispatch(hideMessage());
    };

    return (
        <StyledSnackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleCloseAlert}
        >
            <StyledAlert
                onLoad={alertRef.current = this}
                ref={alertRef}
                onClose={handleCloseAlert}
                severity={type}
            >
                {message}
            </StyledAlert>
        </StyledSnackbar>
    );
}

export default AlertMessage;