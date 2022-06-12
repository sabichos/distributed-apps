import React from 'react';
import { SpinnerStyle } from "./styled.js";

export default function Spinner({ inverse, size }) {
    return (
        <SpinnerStyle inverse={inverse} size={size}>
            <span style={{ width: size, height: size }} />
            <span style={{ width: size, height: size }} />
            <span style={{ width: size, height: size }} />
        </SpinnerStyle>
    );
}

Spinner.defaultProps = {
    inverse: false,
    size: '10px'
};;
