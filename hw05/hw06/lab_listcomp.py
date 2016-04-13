password = "p@ssW01rd324&5%xcxc?><LASDASDasdadada:"

LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
NUMBERS = "1234567890"
NONALPHANUMERIC = ".?!&#,;:-_*"

# Checks if the password has at least one upeercase, one lowercase, and one number.
def isvalid(p):
    if [x for x in p if x in LETTERS ] and [x for x in p if x in LETTERS.lower()] and [x for x in p if x in NUMBERS]:
        return True
    return False

def strengthrating(p):
    strength = 10
    lowercase = [x for x in p if x in LETTERS.lower()]
    uppercase = [x for x in p if x in LETTERS]
    numbers = [x for x in p if x in NUMBERS]
    specialchars = [x for x in p if x in NONALPHANUMERIC]
    if not isvalid(p):
        return 0
    if  len(uppercase) >= 3 and  len(lowercase) >= 3:
        if uppercase != lowercase:
            strength -= 1
    else:
        strength -= 2
    if len(numbers) <= 3:
        strength -= 2
    elif len(numbers) == 4:
        strength -= 1
    if len(specialchars) <= 2:
        strength -= 2
    elif len(specialchars) <= 3:
        strength -= 1
    return strength

print str(isvalid(password))
print str(strengthrating(password))
