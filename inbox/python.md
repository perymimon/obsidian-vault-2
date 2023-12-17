---
aliases:
  - פייטון
cssclasse: 
date-created: 2023-12-16
date-modified: 2023-12-17
tags: 
---

## String

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

strings

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

# List

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
