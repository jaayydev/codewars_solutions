def pipe_fix(nums):

    lowest = min(nums)
    biggest = max(nums)
    counter = lowest
    full_list = []

    while counter < biggest:
        full_list.append(counter)
        counter += 1

    full_list.append(biggest)

    return full_list

