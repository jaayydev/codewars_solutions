def twice_as_old(dad_years_old, son_years_old):
    match = False
    years_count = 0
    dad_years_alt = dad_years_old
    son_years_alt = son_years_old

    if son_years_old == 0:
            years_count = dad_years_old - son_years_old
            return years_count
            exit
    else:
        while match != True:
            if dad_years_old == 0:
                dad_years_old += 1
            elif son_years_old == 0:
                son_years_old += 1
            elif dad_years_alt == 0:
                dad_years_alt += 1
            elif dad_years_alt == 0:
                dad_years_alt += 1
            elif son_years_alt == 0:
                son_years_alt += 1

            elif dad_years_old / son_years_old == 2 or dad_years_alt / son_years_alt == 2:
                match = True
                break
            else:
                dad_years_old -= 1
                son_years_old -= 1
                dad_years_alt += 1
                son_years_alt += 1
                years_count += 1
                print(dad_years_old, son_years_old)
                print(dad_years_alt, son_years_alt)

    return (years_count)