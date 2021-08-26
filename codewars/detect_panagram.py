import string

def is_pangram(s):
    #storing the alphabets in an array
    alphabets= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    #creating a counter to count if all alphabets appear in the string
    counter=0;
    for alphabet in alphabets:
        if s.lower().find(alphabet)>=0:
            counter+=1
    return counter==26