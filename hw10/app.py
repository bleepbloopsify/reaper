from flask import Flask
from functools import wraps


import time
def getfunc(function):
    @wraps(function)
    def inner(*args):
        print "Function Name: "+function.func_name+"\nArguments: " + str(args)
        return function(*args)
    return inner

def gettime(function):
    @wraps(function)
    def getstartend(*args):
        start = time.time()
        finish = function(*args)
        print "Executed in " + str(time.time() - start) + ' seconds'
        return finish
    return getstartend

app = Flask(__name__)
app.debug = True

@app.route('/')
@gettime
@getfunc
def index(hello='0'):
    return '<h1>hello</h1>'

@app.route('/test')
@gettime
@getfunc
def test(hi='hi'):
    return '<h1>test</h1>'

if __name__ == "__main__":
    app.run(port=8000)
