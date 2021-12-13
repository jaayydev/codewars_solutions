def zero_fuel(distance_to_pump, mpg, fuel_left):

    max_travel = mpg * fuel_left

    return True if max_travel >= distance_to_pump else False
