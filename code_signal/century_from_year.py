"""
Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100, 
the second - from the year 101 up to and including the year 200, etc.
"""

import math
def centuryFromYear(year):
    if (year/100)-math.trunc(year/100)==0:
        return math.trunc(year/100)
    else:
        return math.trunc(year/100)+1
