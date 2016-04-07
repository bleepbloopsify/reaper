

def union(a, b):
    return a + [x for x in b if x not in a]

def intersect(a, b):
    return [x for x in a if x in b]

def setDifference(u, a):
    return [x for x in u if x not in a]

def symmetricDifference(a, b):
    return setDifference(a, b) + setDifference(b, a)

def cartesianProduct(a, b):
    return [(x,y) for x in a for y in b]

arr1 = [1,2,3,4,5,6,7,8,9,10]
arr2 = [10,11,12,13,14,15,16]
print union(arr1, arr2)
print intersect(arr1, arr2)
print symmetricDifference(arr1, arr2)
print cartesianProduct(arr1, arr2)
