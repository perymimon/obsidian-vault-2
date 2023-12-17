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
list[1:3] 
```
