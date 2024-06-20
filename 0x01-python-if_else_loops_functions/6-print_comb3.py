#!/usr/bin/python3
for eya in range(0, 90):
        if eya % 10 > eya / 10:
                if eya != 89:
                        print("{:02d}, ".format(eya), end='')
                else:
                        print("{:02d}".format(eya))
