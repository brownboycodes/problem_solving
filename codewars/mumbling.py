"""
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
"""

def accum(s):
    # your code
    ans=''
    i=0
    while i < len(s):
        n = 0
        while n < i+1:
            if n == 0:
                #the first occurence of the letter of in uppercase
                ans += s[i].upper()
            else:
                #the subsequent occurences of the letter of in lowercase
                ans += s[i].lower()
            n += 1
        ans += '-'
        i += 1
    return ans[:len(ans)-1]