exports['snap-shot-compare works for equal numbers 1'] = {
  "valid": true
}

exports['snap-shot-compare works for different objects 1'] = `{
- foo: "foo"
+ bar: "bar"
}`

exports['snap-shot-compare works for text 1'] = `line 1
-line 2 changed
-third line is new
+line 2
+line 3`

