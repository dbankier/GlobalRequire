if (Ti.Platform.osname==="android") {
  Ti.include("/lib/require.js");
}

require("/example/TestCase").run();

require("/example/Numbers");
require("/example/TestCase2").run();

var obj = {value: "hi"};
require("/example/TestCase3").run();
