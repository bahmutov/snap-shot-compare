exports['disparity compareText diffs multiple text 1'] = ` line 1
[31m-line 2[39m
[32m+line 2b[39m
 line 3
`

exports['disparity compareText returns diff 1'] = ` line 1
-line 2
+line 2b
 line 3
`

exports['disparity compareLongText diffs long text 1'] = `
----------
Difference
----------
 line 1
-line 2
+line 2b
 line 3
-------------------
Saved snapshot text
-------------------
line 1
line 2
line 3
------------
Current text
------------
line 1
line 2b
line 3
--------
Diff end
--------
`

exports['disparity compareText returns JSON diff 1'] = {
  "message": " line 1\n-line 2\n+line 2b\n line 3\n",
  "expected": "line 1\nline 2\nline 3",
  "value": "line 1\nline 2b\nline 3"
}

exports['disparity compareLongText returns JSON diff 1'] = {
  "message": " line 1\n-line 2\n+line 2b\n line 3\n",
  "expected": "line 1\nline 2\nline 3",
  "value": "line 1\nline 2b\nline 3"
}

