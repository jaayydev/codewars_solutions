def find_average(numbers):
    sum = 0
    for i in numbers:
        sum += i

    length = len(numbers)
    avg = sum / length

    return avg



print(find_average([1, 2, 3, 4]))

