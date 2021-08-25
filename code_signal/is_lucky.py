"""
Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first half of the digits 
is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
"""

def isLucky(n):
    n=list(map(int, str(n)))
    l=len(n)
    return sum(n[:(l//2)])==sum(n[l//2:])