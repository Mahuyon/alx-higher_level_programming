#!/usr/bin/python3
for tv in reversed(range(97, 123)):
    print("{:c}".format(tv if (tv % 2 == 0) else (tv - 32)), end='')
