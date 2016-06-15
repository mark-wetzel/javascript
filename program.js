// line ending comment (preferred)

/* block comments that
can span lines (not preferred--can interfere with regex) */

// Name: letter followed by one or more letter, digits or underscores
// Names are used for statements, variables, parameters, property names, operators, and labels.

/* RESERVED WORDS
abstract
boolean break byte
case catch char class const continue
debugger default delete do double
else enum export extends
false final finally float for function
goto
if implements import in instanceof int interface
long
native new null
package private protected public
return
short static super switch synchronized
this throw throws transient true try typeof
var volatile void
while with
*/

// NUMBERS
// Single number type - 64 bit float
// No integer type
// Leading with 0 indicates octal value
// Fraction = .{digit}
// Exponent {digit}{E/e}{+/-}{digit}
// NaN is not equal to any value including itself
    // isNaN(number)
// Infinity represents all values greater than 1.79769313486231570e+308

// STRINGS
// No char type
// All characters in javascript are 16 bits wide

/* Escaping characters:

" double quote
' single quote
\ backslash
/ slash
b backspace
f formfeed
n new line
r carriage return
t tab
u 4 hexadecimal digits

*/

// length property - "Mark".length === 4
// Strings are immutable - can't be changed once made
// Concatenation: 'c' + 'a' + 't' === 'cat'
// toUpperCase()

// STATEMENTS
// Blocks in JS don't create new scopes; vars should be defined at top of function, not in blocks
/* Falsy values:

false
null
undefined
''
0
NaN

*/

Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

var aNum = 0500;
console.log(aNum);

// left off page 12