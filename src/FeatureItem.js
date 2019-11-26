import React from 'react';
import slugify from 'slugify';

function featureItem(props) {
    const cost = props.currency.format(props.item.cost);
    return (
        <div key={props.itemHash} className="feature__item">
            <input
              type="radio"
              id={props.itemHash}
              className="feature__option"
              name={slugify(props.featureName)}
              checked={props.item.name === props.selected[props.featureName].name}
              onChange={e => props.updates(props.featureName, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
              {props.item.name} ({cost})
            </label>
          </div>
    );
}
export default featureItem