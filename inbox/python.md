---
aliases:
  - פייטון
cssclasse: 
date-created: 2023-12-16
date-modified: 2023-12-25
tags: clearfy
---
`== dv.view("scripts/TOC")`

```python
print("Be careful not to fall off!")
```

```python
the_world_is_flat = False
if the_world_is_flat:
     print("Be careful not to fall off!")
else:
     print("spin arround")

```

## String

```python
#concat strings
'1' '2\n' "34"
# ` not work

```

```python
# parenttheses to brick lines
('8878787878'
'klklklkl')
```

```python
word = "good mornning"
word[-1] # last char
print(word[1:4]) # print 'ood'
print(word[:4]) # print 'good'
print(word[5:]) # print 'mornning'
print(word[100]) # throw `index out of range` 

```

```python
# but
print(word[:100]) # `good morning`
print(word[100:]) # ``
# word[0:2] = 'po' #throw `str object not support item assigment`
```

```python
print(len(word)) #print 13

```

```py
# template string
x = 10
print(f"x={x}")

yes_votes = 42_572_654
no_votes = 43_132_495
'{:-9} YES votes  {:2.2%}'.format(yes_votes, percentage)
# ' 42572654 YES votes  49.67%'

print('We are the {} who say "{}!"'.format('knights', 'Ni'))
# We are the knights who say "Ni!"

print('This {food} is {adjective}.'.format(food='spam', adjective='absolutely horrible')))
# This spam is absolutely horrible.

print('The story of {0}, {1}, and {other}.'.format('Bill', 'Manfred', other='Georg'))
# The story of Bill, Manfred, and Georg.

table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
print('Jack: {0[Jack]:d}; Sjoerd: {0[Sjoerd]:d}; ','Dcab: 0[Dcab]:d}'.format(table))
# Jack: 4098; Sjoerd: 4127; Dcab: 8637678

table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
print('Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table))
# Jack: 4098; Sjoerd: 4127; Dcab: 8637678
# this is useful with built-in function vars() which returns a dictionary containing all local variables.

for x in range(1, 11):
	print('{0:2d} {1:3d} {2:4d}'.format(x, x*x, x*x*x))
#  1   1    1
#  2   4    8
#  3   9   27
#  4  16   64
#  5  25  125
```
```py
import math
print(f'The pi is about {math.pi:.3f}`) #The pi is about 3.142

table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}
for name, phone in table.items(): 
	print(f'{name:10} ==> {phone:10d}')

bugs, count, area  = 'roaches', 13, 'living room'
print(f'Debugging {bugs=} {count=} {area=}') 
#Debugging bugs='roaches' count=13 area='living room'

```

## List

```py
list = [1,3,9,12]
print(list)
print(list[0], list[-1], list[-3:])
print('shalow copy of the list', list[:])
print('list support concatention', list + [15, 18])
# list supoort mutabel 
list[0] = 0;
print('list support mutable list[0] = 0;', list)
# add to list
list.append(15)
list.append(16)
print('add to list', list)

# assigment to slices
list[1:3] = ['a','b','c']
print('assigment to slices and extend the length of the list ', list)
list[-2:] = []
print('remove values from list',list)
print('length of the list', len(list))
```
```py
list.append(x)
list.extend(iterable)
list.insert(i,x) # list.insert(let(list),x) is like `append`
list.pop([i])
list.clear # like del list[:]
list.index(x,[start[,end]]) # return index of list item
list.count(x) 
list.sort(*, key=None, reverse=false)
list.reverse()
list.copy() 

```

For queue ( insert to start pop from end) should using `collections.deque`
```py
matrix = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
]

print([[row[i] for row in matrix] for i in range(4)])
```

## Set

```py
a = {'a','b','c'}
b = {'b','c','d'}

# print(a + b) // operator + not exist
print(a | b)
print(a & b)
print(a - b)
print(b - a)
print(a ^ b)
```

## Dictionaries

```py
tel = {'jack': 4098, 'sape': 4139}
print(list(tel))
sorted(list(tel))
# init opt 1
print(dict([('a',1),('b',2)]))
print(dict(a=1,b=2))
print('jack' in tel)
print('pery' not in tel)
```

## Programing

```py
a,b = 0,1
fibonacci = []
while a< 10:
	fibonacci.append(a)
	a,b = b, a+b
print('fibonacci', fibonacci)

# using the keyword argument `end` can be used to avoid new line with somthing else

a,b = 0,1
while a<10:
	print(a, end=',')
	a,b = b, a+b
```

```py 
#looping techniques
for k,v in ({'a': 1, 'b':2}).items():
	print(k,v)
print()
# sequence
for i,v in enumerate(['tic','tac','toe']):
	print(i, v)

print()

# over on two or more sequence by using zip()
a = [1,2,3]
b = ['a','b','c']

print( zip(a,b) )

for n,d in zip(a,b):
	print('number {0} for latter {1}'.format(a,b))

# reverse 
for i in reversed(range(1, 10, 2)):
	print(i)

# eliminate duplication 
basket  = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
print( set(basket) )
print( sorted(set(basket)) )
```

```py
#comparing
print((1, 2, 3)  < (1, 2, 4) )
print((1, 2, 3) < (1, 2, 3, 2) )
print([1, 2, 3] < [1, 2, 3] )
print( 'ABC' < 'C' < 'Pascal' < 'Python' )

```

## More Control Flow

```py
# If statment

x = int(input('please anter an integer: '))
print(x)
if x < 0:
	x = 0
	print('Negative changed to zero')
elif x==0:
	print('Zero')
elif x==1:
	print('Single')
else:
	print('More')

```

```py
# fpr statements
words = ["hello", "my", "world"]
for w in words:
	print(w,len(w))
```

```py
# over collection's clone to avoid tricky situation
users = {'Pery':1, 'Ron':0, 'Boris':1}
print(users)

# strategy: Iterate over a copy
for user,status in users.copy().items():
	if status == 0:
		del users[user]

print(users)


```

```py
# range() function 
for i in range(2,10,2):	print(i, end=', ')
print()
print(sum(range(10)))
```

``` 
# keyword as usual 
break 
continue
pass # pass statemenents does nothing , it require when syntax ask for somthing
	 # like : class Dog(*args): pass	
```

## Match Statements

```py
# basic def
def http_error(status)
	match status:
		case 400: 
			return "bad request"
		case 401 | 403 | 404:
			return "Not allowd"
		case 404: 
			return "Not Found"
		case 418:
			return "I'm a teapot"
		case _:
			return "Somthing's wrong with the internet"
```

```py
#Patterns can look like unpacking assignments, and can be used to bind variables:
match point:
    case (0, 0):
        print("Origin")
    case (0, y):
        print(f"Y={y}")
    case (x, 0):
        print(f"X={x}")
    case (x, y):
        print(f"X={x}, Y={y}")
    case _:
        raise ValueError("Not a point")
```

If you are using classes to structure your data you can use the class name followed by an argument list resembling a constructor, but with the ability to capture attributes into variables:
#clearfy
```py
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def where_is(point):
    match point:
        case Point(x=0, y=0):
            print("Origin")
        case Point(x=0, y=y):
            print(f"Y={y}")
        case Point(x=x, y=0):
            print(f"X={x}")
        case Point():
            print("Somewhere else")
        case _:
            print("Not a point")
```
#clearfy
```py
#Patterns can be arbitrarily nested. For example, if we have a short list of Points, with `__match_args__` added, we could match it like this:

class Point:
    __match_args__ = ('x', 'y')
    def __init__(self, x, y):
        self.x = x
        self.y = y

match points:
    case []:
        print("No points")
    case [Point(0, 0)]:
        print("The origin")
    case [Point(x, y)]:
        print(f"Single point {x}, {y}")
    case [Point(0, y1), Point(0, y2)]:
        print(f"Two on the Y axis at {y1}, {y2}")
    case _:
        print("Something else")
```

```py
match point
	case Point(x,y) if x==y:
		print(f"Y=X at {x}")
	case Point(x,y):
		print(f"Not on the diagonal")
```
	
```py
#Patterns may use named constants. These must be dotted names to prevent them from being interpreted as capture variable:
from enum import Enum
class Color(Enum):
    RED = 'red'
    GREEN = 'green'
    BLUE = 'blue'

color = Color(input("Enter your choice of 'red', 'blue' or 'green': "))

match color:
    case Color.RED:
        print("I see red!")
    case Color.GREEN:
        print("Grass is green")
    case Color.BLUE:
        print("I'm feeling the blues :(")
```

more on that subject : [PEP 636 – Structural Pattern Matching: Tutorial | peps.python.org](https://peps.python.org/pep-0636/)

## Function

```py 
def fib(n):
	"""print a Fibonacci series up to n."""
	a,b=0,1
	while a<n:
		print(a, end=',')
		a,b=b,a+b
	print()
# now call the function
fib(2000)
print(fib(0))
```

```py

def ask_ok(prompt, retries=4, reminder='Please try again!'):
    while True:
        reply = input(prompt)
        if reply in {'y', 'ye', 'yes'}:
            return True
        if reply in {'n', 'no', 'nop', 'nope'}:
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)
```

## Modules

```py
# the value of the global variable __name__ contain module name
print("module name",__name__)

import fibo
#fibo.fib(1000)
fibo.__name__ #name of the module

from fibo import fib, fib2
from fibo import * 
import fibo as fib
from fibo import fib as fibonacci

# reload module again 
import importlib;
importlib.reload(modulename)

```

```text
sound/                          Top-level package
      __init__.py               Initialize the sound package
      formats/                  Subpackage for file format conversions
              __init__.py
              wavread.py
              wavwrite.py
              aiffread.py
              aiffwrite.py
              auread.py
              auwrite.py
              ...
      effects/                  Subpackage for sound effects
              __init__.py
              echo.py
              surround.py
              reverse.py
              ...
      filters/                  Subpackage for filters
              __init__.py
              equalizer.py
              vocoder.py
              karaoke.py
              ...
```
```py
import sound.effects.echo
#it must reference with it's full name
sound.effect.echo(input,output, delay=0.6, atten=4)
#or
from sound.effects import echo
echo.echofilter(input,output, delay=0.6, atten=4)
#or 
from sound.effects.echo import echoFilter
echofilter(input,output, delay=0.6, atten=4)

#if __all__ define in sound/effects/__init__.py 
__all__ = ["echo", "surround","reverse"]
#then
from sound.effects import *
import just those names to local namespace
```

```py
#relative import inside a package
from . import echo
from .. import formats
from ..filters import equalizer
```

### Executing Modules as Scripts

```cmd
python fibo.py <arguments>
```

Interactively run file as root or module
```py
if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))
```

### The Module Search Path

 for `import spam`
1. first searches for a built-in module in `sys.builtin_module_names`
2. then searches for a file named `spam.py` in directories names in `sys.path`	that init from next source:
	
	1. directory containing the input script (or the current directory when no file is specified).
	2. PYTHONPATH (a list of directory names, with the same syntax as the shell variable PATH).
	3. The installation-dependent default (by convention including a site-packages directory, handled by the site module). #clearfy

After initialization, Python programs can modify sys.path.

#### [“Compiled” Python files](https://docs.python.org/3/tutorial/modules.html#compiled-python-files)

## Standard Modules

```py
import sys
sys.ps1 #define the strings used as primary prompy '>>>'
sys.ps2 #define the strings used as secondary promp '...'
sys.path #list of string that determines moduls search paths, init from  system varible PYTHONPATH or default if not set

sys.path.append('another path')

dir() #used to get list of all names module defined
dir(sys) #[..., ..]
```

without parameter `dir()` list names i defiend currently;

```bash py
>>> a = [1, 2, 3, 4, 5]
>>> import fibo
>>> fib = fibo.fib
>>> dir()
['__builtins__', '__name__', 'a', 'fib', 'fibo', 'sys']

>>> import builtins
>>> dir(builtins)
# print all builtin varialbes and names 
```

### Output & Inputs

```py
write() #to file object
sys.stdout #standart output
```

```py
# open(filename, mode, encoding=None) returns a file object
f = open('filename', 'w', encoding="utf-8")
# w = just write, r = (defult) just read, a = append, r+ = write & read
# add b to encoding opend file to read byets.

```

```py
#using `with` to close automatic file after use even on exepetion
with open('workfile', encoding="utf-8") as f:
	read_data = f.read(size = 100)

f.readline() #for reading until `\n`  include.

# more efficient way is loop array.
for line in f:
	print(line, end='')

# to read all file's line directly to list
list(file)
# or
f.readlines()

f.tell() # return current position as byts from begining of the file
f.seek(offset, whence) #whence=0(default) from file begin, 1 = from current location, 2=from end
f.seek(-3, 2)  # Go to the 3rd byte before the end
# In text files only seeks relative to start of file (0)
```

```py
import json
x = [1, 'simple', 'list']
print(json.dumps(x))
# save directly to object file
json.dump(x, objectTextFile)
# to read 
json.load(objectFile)
```

## Exeptions

```py
while True:
	try:
		 x = int(input("Please enter a number: "))
		 break
	except ValueError:
		print("Oops!  That was no valid number.  Try again...")
		raise Exception
		#or 
		raise # rerise the same exepetion
	else:
		print(f'{x} is a number')
```

```py
class B(Exception):
    pass

class C(B):
    pass

class D(C):
    pass

for cls in [B, C, D]:
    try:
        raise cls()
    except D:
        print("D")
    except C:
        print("C")
    except B:
        print("B")
```

Get into Exception details

```py
try:
	raise Exception('spam', 'eggs')
except Exception as inst:
	print(type(inst))    # the exception type
	print(inst.args)     # arguments stored in .args
	print(inst)          # __str__ allows args to be printed directly,
                         # but may be overridden in exception subclasses
	x, y = inst.args     # unpack args
	print('x =', x)
	print('y =', y)


# BaseException is the common base class of all exceptions
# Exception in sub class of BaseException, is the base class of all the non-fatal exceptions
```

Be specific as posible

```
import sys

try:
    f = open('myfile.txt')
    s = f.readline()
    i = int(s.strip())
except OSError as err:
    print("OS error:", err)
except ValueError:
    print("Could not convert data to an integer.")
except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")
    raise

```
