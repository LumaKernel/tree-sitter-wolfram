a!
a!!
a!!!
a''

a + b + c
a+b+c

4 + 5 + foo[[6]]
1.234

Hold[<| 1, 2, 3|>] @ FullForm

ClearAll[f];
f[x_Integer, 0] := x;
f[x_Integer, y_Integer] := f[x + y, y - 1];
f[3, 3]

(* comment 1 *)
(* hello (* comment 2 *) *)

"string\nhi"
"string\[FilledDiamond] String \[Alpha]\[Beta]\[Gamma]"

Cases[{1, 2, "ab", "cd", x, y}, _String]
