def get_sum(a,b):
    #good luck!
    if a==b:
        return a
    else:
        sum=0
        for number in range(min(a,b),max(a,b)+1):
            sum+=number
        return sum