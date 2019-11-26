import React from 'react';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';

function Feature(props) {
    const featureItems = props.feature.map(item=> {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <FeatureItem
                itemHash={itemHash}
                item={item}
                currency={props.currency}
                selected={props.selected}
                featureName={props.featureName}
                updates={props.updates}
            />
        );
    });

    return (
        <fieldset className="feature" key={props.featureHash}>
        <legend className="feature__name">
          <h3>{props.featureName}</h3>
        </legend>
        {featureItems}
      </fieldset>
    );
}
export default Feature