# Proposed Structure

## SCSS

### Component

#### Creating Component

1. The className of the inner component div - ex. `<ButtonComponent buttonClassName={/* HERE */} buttonClassName={override_class}></ButtonComponent>`
    * specify positioning and size of component
    * override default styles
    
2. The default className of the inner component dev - ex. `<button className={this.props.buttonClassName /* HERE */}> <button>`
    * default styling (inside the border)
    * Its own inherent styling
    * Styling of its different variants/modifiers/states
    * Styling of its descendants (i.e. children) and/or siblings (if necessary)

3. The parent component should house shared vars and style sheets for its child components; this way we only have to import the parent component style sheet for the child components.

NOTE: the public component should not expose className so that fish can change the style?
    * what about sizing and positioning? do that at the ng-react level?

### Main

* Will not assume that fish will have included it.
* Components themselves will include what they need from the assets/.

### Theming

* If a component is to be themed, will need to wrap the component with the ThemeHOCFactory.
* The public component's api should pass the theme in.
* Every sub component should have a theme prop which we can use to theme the component.

TODO: set up a config to pass in stuff like theme

### Questions