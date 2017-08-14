exports['snap-shot-compare works for equal numbers 1'] = {
  "valid": true
}

exports['snap-shot-compare works for different objects 1'] = "snapshot difference\n{\n- foo: \"foo\"\n+ bar: \"bar\"\n}"

exports['snap-shot-compare works for text 1'] = "snapshot difference\n--- removed\n+++ added\n@@ -1,3 +1,3 @@\n line 1\n-line 2\n-line 3\n+line 2 changed\n+third line is new\n"

