`Libraries and @types`

  + `@types org (https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)`

import * as lodash from 'lodash';
import { flatten } from 'lodash';
import * as React from 'react';

+ `npm install --save @types/lodash`
+ `npm install --save @types/react`

lodash.floor
flatten.name

// ===

type HelloProps = {
  name: string,
}

type HelloState = {
  mountedAt: Date,
}

class Hello extends React.Component<HelloProps, HelloState> {
  componentWillMount() {
    this.setState({
      mountedAt: new Date
    });
  }

  render() {
    const { name } = this.props;
    const { mountedAt } = this.state;

    return `<h1>Hello ${name}</h1><h3>Mounted at ${mountedAt}</h3>`;
  }
}

export const SayHello = () => (
  <div>
    <Hello name="Sagi" />
  </div>
);
