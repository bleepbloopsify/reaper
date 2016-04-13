import time
def getfunc(function):
    def inner(*args):
        print "Function Name: "+function.func_name+"\nArguments: " + str(args)
        return function(*args)
    return inner

def gettime(function):
    def getstartend(*args):
        start = time.time()
        finish = function(*args)
        print "Executed in " + str(time.time() - start) + ' seconds'
        return finish
    return getstartend

@gettime
@getfunc
def hello(*args):
    return "Hello!"

@gettime
@getfunc
def fib(n):
    return fibhelper(n)

def fibhelper(n):
    return 1 if n <= 2 else fib(n - 1) + fib(n - 2)

@gettime
@getfunc
def quicksort(a):
    return [] if not a else quicksort([x for x in a if x < a[0]]) + [x for x in a if x == a[0]] + quicksort( [ x for x in a if x > a[0] ] )

arr = [1,3,4,5,6,7,8,12,21,323,4,55,667,12,1313,14,23,2211,55]

print quicksort(arr)




print hello(1, 2, 3, 4)

print fib(5)
print fib(25)
