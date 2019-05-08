exports['snap-shot-compare works for different objects 1'] = `{
- foo: "foo"
+ bar: "bar"
}`

exports['snap-shot-compare works for different objects with json option 1'] = {
  "message": "{\n- foo: \"foo\"\n+ bar: \"bar\"\n}",
  "expected": {
    "foo": "foo"
  },
  "value": {
    "bar": "bar"
  }
}

exports['snap-shot-compare works for different objects with noColor option 1'] = `{
- foo: "foo"
+ bar: "bar"
}`

exports['snap-shot-compare works for text 1'] = ` line 1
-line 2
-line 3
+line 2 changed
+third line is new
`

