def same_case(a, b): 
    if a.islower() and b.islower() == True:
        return 1
    elif a.isupper() and b.isupper() == True:
        return 1
    elif a.islower() and b.isupper() == True or a.isupper() and b.islower() == True:
        return 0
    else:
        return -1


#IMPROVED VERSION
def same_case(a, b):
    return a.isupper() == b.isupper() if a.isalpha() and b.isalpha() else -1