import React from 'react';

function Sum(props) {
    let sum = Object.keys(props.selected).reduce (
        (acc, curr) => {return acc + props.selected[curr].cost},
        0
    );
        sum = props.currency.format(sum);
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {sum}
                </div>
            </div>
        );
}

export default Sum