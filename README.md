# Proposed Structure

## SCSS

### Component

Need to dictate what each component governs.

#### Guidelines

1. The className of the component div - ex. `<Button buttonClassName={/* HERE */} buttonClassName={override_class}> </Button>`
    * positioning and size
    * can override from here through the [component]ClassName prop
    
2. The className of the inner component dev - ex. `<button className={/* HERE */}> <button>`
    * inner styling, default (inside the border)

#### Notes

* we should constrain this to specific styles, not just replace a whole class
    
### Util

To use, import from util.scss.

Comprised of helpful classes - ex. left, right etc.
    
### Main

To use, import from main.scss.
