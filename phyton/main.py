# x = (input("hello what is your name: "))
# y = (input("what is your lastname: "))
# z = (input("what is your age: "))

x = int(input("enter any number: "))

if x % 2 == 0:
    print("this is even")

elif x % 2 == 1:
    print("this is odd")

else:
    print("nothing")

y = 1

while y < 20:
    print(y)

    y += 1

def calculator(operatot,y,x):
    if x == "+":
        return x + y
    elif x == "-":
        return x - y
    elif x == "/":
        return x / y
    elif x == "*":
        return x * y
    else:
        return "nothing"

