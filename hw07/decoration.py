def inc(x):
    return x + 1
def dec(x):
    return x - 1
f = inc
print f(5)

flist = [inc, dec]

print flist[1](5)


import random
def get_name():
    names = ['lol','lmao','rofl']
    return random.choice(names)

def dble(f):
    name= f()
    return name + name

print dble(get_name)

get_name = dble(get_name)

print get_name


def doubler(f):
    name = f()
    return name + name

@doubler
def get_name():
    names = ['lol', 'hello', 'goodby']
    return random.choice(names)

print get_name
