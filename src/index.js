import React from 'react';
import ReactDOM from 'react-dom';
import ButtonComponent from "./ButtonComponent.js";

export default {

  button: {
    self: () => {
      return React.createClass({
        render() {
          return <div>{this.props.name}</div>
        }
      });
    },
    new: (config) => {

      // let uid = uniqueid({prefix: 'widget_ns_'});

      return {

        render: (args) => {

          ReactDOM.render(
            <ButtonComponent
              name={args.name}
              />, document.querySelector(config.selector)

          );

        }
      };
    }
  }
};