"""
Given a sequence of integers as an array, 
determine whether it is possible to obtain a strictly increasing sequence by 
removing no more than one element from the array.

Note: sequence a0, a1, ..., aN is considered to be a strictly increasing if a0 < a1 < ... < aN. 
Sequence containing only one element is also considered to be strictly increasing.
"""

def almostIncreasingSequence(sequence):
    j=bad_pair(sequence)
    if j==-1:
        return True
    print(sequence[-1:0])
    if bad_pair(sequence[j-1:j]+sequence[j+1:])==-1:
        return True
    if bad_pair(sequence[j:j+1]+sequence[j+2:])==-1:
        return True
    return False
    
def bad_pair(sequence):
    for i in range(0,len(sequence)-1):
        if sequence[i]>=sequence[i+1]:
            return i
    return -1

