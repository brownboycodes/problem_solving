"""
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
"""

def likes(names):
    #your code here
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return "{} likes this".format(names[0])
    elif len(names) == 2:
        return "{} and {} like this".format(names[0], names[1])
    elif len(names) == 3:
        return "{}, {} and {} like this".format(names[0], names[1], names[2])
    else:
        return "{}, {} and {} others like this".format(names[0], names[1], len(names)-2)