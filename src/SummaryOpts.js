import React from 'react';

function SummaryOpts (props) {
    const pricing = props.currency.format(props.selectedOpt.cost);
    return (
    <div className="summary__option" key={props.featureHash}>
        <div className="summary__option__label">{props.feature} </div>
        <div className="summary__option__value">{props.selectedOpt.name}</div>
        <div className="summary__option__cost">
            {pricing}
        </div>
    </div>
    );
}

export default SummaryOpts