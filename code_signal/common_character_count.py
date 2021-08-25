"""Given two strings, find the number of common characters between them."""

from collections import Counter
def commonCharacterCount(s1, s2):
    d1=Counter(s1)
    d2=Counter(s2)
    return len(list((d1&d2).elements()))
