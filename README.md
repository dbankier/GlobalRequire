## GlobalRequire

See this [blog post]() to understand what is going on over here.

## Usage

Add the `lib/require.js` file to your project.

Add the following lines the _beginning_ of your `app.js` file.

```
    if (Ti.Platform.osname==="android") {
      Ti.include("/lib/require.js");
    }
```

