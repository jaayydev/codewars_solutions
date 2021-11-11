# Write a function called repeatStr which repeats the given string string exactly n times.

def repeat_str(repeat, string):
    res = ""
    for i in range(0, repeat):
        res += string
    return res