def remainder(a,b):

    if a == 0 and b >= 0: 
        return None

    elif a >= 0 and b == 0:
        return None

    else:
        if a > b:
            return a % b
        elif a < b:
            return b % a
        else:
            return a % b