def usdcny(usd):
    cny = usd * 6.75
    return "{cny:.2f} Chinese Yuan".format(cny =  cny)


#Alternate solution
def usdcny(usd):
    return f"{(usd * 6.75):.2f} Chinese Yuan"