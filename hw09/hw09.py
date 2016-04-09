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
    return 1 if n <= 2 else fib(n - 1) + fib(n - 2)


print hello(1, 2, 3, 4)

print fib(5)
print fib(25)
