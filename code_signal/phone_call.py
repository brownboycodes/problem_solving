"""
Some phone usage rate may be described as follows:

first minute of a call costs min1 cents,
each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
each minute after 10th costs min11 cents.
You have s cents on your account before the call. 
What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?
"""

def phoneCall(min1, min2_10, min11, s):
    m=0
    if s<min1:
        return m
    s-=min1
    m+=1
    if s<9*min2_10:
        m+=s//min2_10
        return m
    s-=9*min2_10
    m+=9
    m+=s//min11
    return m
