import random

def pt(n):
    rt = []
    for a in range(1,n):
        for b in range(a, n):
            for c in range(b ,n):
                if a*a + b*b == c*c:
                    rt.append([a,b,c])
    return rt

def pt2(n):
    return [ (a,b,c) for a in range(1,n) for b in range(a,n) for c in range(b,n) if a*a + b*b == c*c]

print pt(3) #-> []
print pt(4) #-> []
print pt(5) #-> []
print pt(6) #-> []
print pt(7) #-> []
print pt(125)
print pt2(125)

def quicksort(a):
    return [] if not a else quicksort([x for x in a if x < a[0]]) + [x for x in a if x == a[0]] + quicksort( [ x for x in a if x > a[0] ] )

arr = [1,3,4,5,6,7,8,12,21,323,4,55,667,12,1313,14,23,2211,55]

print quicksort(arr)
