"""
Write a function that reverses characters 
in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.
"""

def reverseInParentheses(inputString):
    s=[] 
  
    for i in range(len(inputString)): 
        # push the index of the current opening bracket 
        if (inputString[i] == '('): 
            s.append(i) 
  
        # Reverse the substarting after the last encountered opening bracket till the current character 
        elif (inputString[i] == ')'): 
            temp = inputString[s[-1]:i + 1] 
            inputString = inputString[:s[-1]] + temp[::-1] +inputString[(i + 1):] 
            del s[-1] 
  
    # To store the modified strring 
    res = "" 
    for i in range(len(inputString)): 
        if (inputString[i] != ')' and inputString[i] != '('): 
            res += (inputString[i]) 
    return res 