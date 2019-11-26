import React from 'react';
import Feature from './Feature'

function Body(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx
        return (
            <Feature
                featureHash={featureHash}
                feature={props.features[feature]}
                updates={props.updates}
                currency={props.currency}
                selected={props.selected}
                featureName={feature}
            />
        );
    });

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    );
}
export default Body