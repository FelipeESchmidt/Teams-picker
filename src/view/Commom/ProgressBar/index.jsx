import React from 'react';

function ProgressBar({ size, porcentage }) {
    const pi = Math.PI;
    const r = size / 2.5;

    const calcPerimeter = () => 2 * pi * r;
    const calcSizeHalf = () => size / 2;
    const calcWidth = () => `${size / 12}px`;

    const porcentageOffset = ((100 - porcentage) / 100) * calcPerimeter();

    return (
        <svg id="svg" width={size} height={size}>
            <circle
                r={r}
                cx={calcSizeHalf()}
                cy={calcSizeHalf()}
                fill="transparent"
                stroke="#666"
                strokeWidth={calcWidth()}
                strokeDasharray={calcPerimeter()}
                strokeDashoffset="0"
                />
            <circle
                r={r}
                cx={calcSizeHalf()}
                cy={calcSizeHalf()}
                fill="transparent"
                stroke="#43a047"
                strokeWidth={calcWidth()}
                strokeDasharray={calcPerimeter()}
                strokeDashoffset={porcentageOffset}
            />
        </svg>
    );
}

export default ProgressBar;