"""
You're having a big party and you're serving a pizza as a main dish. 
You got really tired of cutting the pizza, 
so you decided to do it as efficiently as possible by using no more than n cuts.

Each cut is required to be a straight line, 
and there is no requirement that the pizza pieces be the same size.

Given n, the number of straight cuts you're willing to make, 
find the maximum number of pieces you can cut the pizza into.
"""

def lazyCutter(n):
    return (n**2+n+2)/2
