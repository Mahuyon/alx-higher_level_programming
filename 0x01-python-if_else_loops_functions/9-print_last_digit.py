#!/usr/bin/python3
def print_last_digit(number):
    if number >= 0:
        eko = number % 10
    else:
        eko = number % -10
        eko *= -1

    print("{:d}".format(eko), end='')
    return (eko)
