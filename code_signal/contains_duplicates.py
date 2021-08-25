"""
Given an array of integers, write a function that determines 
whether the array contains any duplicates. 
Your function should return true if any element appears at least twice in the array, 
and it should return false if every element is distinct.
"""

def containsDuplicates(a):
    return len(a)!=len(set(a))

