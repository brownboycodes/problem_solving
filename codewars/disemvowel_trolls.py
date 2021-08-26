def disemvowel(string):
    vowels_list = ['a','e','i','o','u','A','E','I','O','U']
    #returning the formatted string after excluding the vowels
    return ''.join([alphabet for alphabet in string if alphabet not in vowels_list])