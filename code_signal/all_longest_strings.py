"""
Given an array of strings, return another array containing all of its longest strings.
"""

def allLongestStrings(inputArray):
    length= max(len(s) for s in inputArray)
    a=[]
    for i in inputArray:
        if len(i)==length:
            a.append(i)
    return a
