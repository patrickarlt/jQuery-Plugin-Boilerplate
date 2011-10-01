# jQuery Plugin Boilerplate
2 variants of patterns for creating jQuery plugins based on http://docs.jquery.com/Plugins/Authoring.

### Simple Plugin
1. Replace all instances of `simplePlugin` with the name of your plugin.
2. Write your plugin logic where the `//Plugin Logic` comment is
3. Use your plugin like this
    $("#selector").simplePlugin({myOption:true});

### Complex Plugin
1. Replace all instances of `complexPlugin` with the name of your plugin.
2. Write the methods for your plugin in the `methods` object
3. write Intialization Logic
4. Use you plugin like this
    $("#selector").complexPlugin({myOption:true});
    $("#selector").complexPlugin('methodName');
