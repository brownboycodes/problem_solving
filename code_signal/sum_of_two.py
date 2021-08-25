def sumOfTwo(a, b, v):
    b = set(b)
    return any(v - x in b for x in a)