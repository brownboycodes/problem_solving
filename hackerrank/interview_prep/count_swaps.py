#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the countSwaps function below.
def countSwaps(a):
    n = len(a);
    numberOfSwap = 0;
    for i in range(0,n):
        isSwaped = False
        for j in range(0,n-i-1):
            if a[j] > a[j + 1]:
                if a[j] > a[j + 1]:
                    [a[j], a[j + 1], isSwaped] = [a[j + 1], a[j], True]
                    numberOfSwap+=1
           
        if isSwaped == False:
            break;

    print(f"Array is sorted in {numberOfSwap} swaps.")
    print(f"First Element: {a[0]}")
    print(f"Last Element: {a[n - 1]}")

if __name__ == '__main__':
    n = int(input())

    a = list(map(int, input().rstrip().split()))

    countSwaps(a)
