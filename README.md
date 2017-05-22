# babel-plugin-component-identification
***

Identifies react components and adds a `data-component-id` to them with their identifier, this was made with the intention of aiding automated testing through easier DOM selectors and should not be used in production.

```html
<div data-component-id="ExampleComponent">I am component</div>
```

This plugin identifies a component if it detects:

- An instance of a class with a render method that returns JSX
- A function that returns JSX

## Install

```sh
npm install --save-dev babel-plugin-component-identification
```

## Usage (`.babelrc`)

```sh
{
    "plugins": ["component-identification"]
}
```
