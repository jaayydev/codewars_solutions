def expression_matter(a, b, c):

    highest = []
    a_add = a + b
    a_multi= a * b
    c_add = b + c
    c_multi = b * c

    highest.append(a_add + c)
    highest.append(a_add * c)
    highest.append(a_multi + c)
    highest.append(a_multi * c)

    highest.append(c_add + a)
    highest.append(c_add * a)
    highest.append(c_multi + a)
    highest.append(c_multi * a)

    return max(highest)



#IMPROVED VERSION
def expression_matter(a, b, c):
    return max(a*b*c, a+b+c, (a+b)*c, a*(b+c))


