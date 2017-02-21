# Echo Component Library

## Example

###For react app.

```
    var ReactDOM    = require('react-dom');
    var EchoButton  = require('echo-component-library/Button').getClass();

    ReactDOM.render(<EchoButton />, document.getElementById('app')
```

###For angular app.

in index.html
```
    <html ng-app="myApp">

	<head>
		<title>React Component Test</title>
	</head>

	<body ng-controller="appCtrl" style="background: darkgray">
		<react-component name="ButtonComponent" props="props" watch-depth="reference"></react-component>
	</body>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
	<script src="../node_modules/react/dist/react.js"></script>	
	<script src="../node_modules/react-dom/dist/react-dom.js"></script>	
	<script src="../node_modules/ngreact/ngReact.js"></script>


	<script src="./app.js"></script>
    </html>
```

in app.js
```
    var EchoButton = require('echo-component-library/Button').self()

    // Create app
    var app = angular.module('myApp', ['react']);

    app.value('ButtonComponent', EchoButton);

    // Create controller
    app.controller('appCtrl', function($scope) {

        $scope.props =  {
            propOne: 'value'
        };

    }); 
```

###Non-framework specific implementation.

```
    var EchoButton = require('echo-component-library/Button');

    var buttonInstance = EchoButton.new({
        selector: '#button-one'
    });

    var props = {
        propOne: "value"
    };

    buttonInstance.render(props);
```

## Setup

### Set up artifactory

Add a .npmrc file to your user root (~/) with the following credentials 

```
    registry=http://rbcplatform.artifactoryonline.com/rbcplatform/api/npm/npm-virtual
    _auth=cmJjYWdlbnQ6QVA4WUJiUDJGdDhRa01iM3MyN3Y3VTdWOWRO
    always-auth=true
    email=first.last@redbookconnect.com
```
### Install

`yarn add echo-component-library`

or 

`npm install echo-component-library`

## Usage

`var ButtonFactory = require('echo-component-library/Button)`

##Component API

Each component has public interface that can be used in two mutually exclusive ways.   

1. Return class

`var Button = ButtonFactory.getClass(config)`

`ReactDOM.render(<Button />, document.getElementById('app')`

###Parameters 

*config*    - theme - Object - An object to inject custom styles overrides. 

2. Return Instances

`var button = ButtonFactory.new(config)`

###Parameters 

*config*    - config.theme - Object - An object to inject custom styles overrides. 
            - config.selector - String - The selector of the DOM element that will render the component. 

Render Instances

`button.render(props)`

###Parameters 

*props*  - Object - An object to hold component props. 

## Theming

Create theme.

```
    module.exports = {
        primary_color  : 'red',
        secondary_color: 'blue'
    };
```

Pass in theme to instance.

```
    var theme           = require('./theme.js);
    var ButtonFactory   = require('echo-component-library/Button);

    var Button = ButtonFactory.getClass({
        theme: theme
    });

    //or

    var button = ButtonFactory.new({
        selector: '#button-one',
        theme: theme
    }).render(
        {
            //props
        }
    );
```
