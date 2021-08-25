"""
Let's call a list beautiful if its first element is equal to its last element, 
or if a list is empty. 
Given a list a, your task is to chop off its first and 
its last element until it becomes beautiful. 
Implement a function that will make the given a beautiful as described, 
and return the resulting list as an answer.
"""

def listBeautifier(a):
    res = a[:]
    while res and res[0] != res[-1]:
        a,*res,b= res
    return res
