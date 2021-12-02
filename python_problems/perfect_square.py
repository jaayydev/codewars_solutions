import math

def find_next_square(sq):

    #Check if parameter is a perfect square or not
    if math.sqrt(sq) % 1 == 0:

        current_sq = (math.floor(math.sqrt(sq)))

        # Finding next perfect square
        new_sq = (current_sq + 1) * (current_sq + 1)

        return new_sq

    else:        
        # Return the next square if sq is a square, -1 otherwise
        return -1
