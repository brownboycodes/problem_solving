"""
Given an array of integers, 
find the pair of adjacent elements that has the largest product 
and return that product.
"""

def adjacentElementsProduct(inputArray):
    product=0
    for i in range(0,len(inputArray)-1):
        if inputArray[i]*inputArray[i+1]>product or product==0:
            product=inputArray[i]*inputArray[i+1]
    return product
    
