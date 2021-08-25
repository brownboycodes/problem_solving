"""
Some people are standing in a row in a park. 
There are trees between them which cannot be moved. 
Your task is to rearrange the people by their heights in a non-descending order 
without moving the trees. 
People can be very tall!
"""

def sortByHeight(a):
    heights=[]
    for n, i in enumerate(a):
        if i != -1:
            heights.append(i)
            a[n]=''
    heights.sort()
    c=0            
    for n, i in enumerate(a):
        if i != -1:
            a[n]=heights[c]
            c+=1
    return a
        
