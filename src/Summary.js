import React from 'react';
import SummaryOpts from './SummaryOpts';
import Sum from './Sum'

function Summary(props) {

    const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
        <SummaryOpts
            featureHash={featureHash}
            feature={feature}
            selectedOpt={selectedOption}
            currency={props.currency}
        />
    );
  });

  return (
      <section className="main__summary">
          <h2>Your cart</h2>
          {summary}
          <Sum
            currency={props.currency}
            selected={props.selected}
          />
      </section>
  );
};

export default Summary