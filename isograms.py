def is_isogram(string):

    string = string.upper()
    iteration = ""
    iso = True

    for i in string:
        if i in iteration:
            iso = False
        else:
            iteration += i
        
    return iso