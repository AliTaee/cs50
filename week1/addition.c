#include <stdio.h>
#include <cs50.h>

int main(void)
{
    long num1 = get_long("What is number1? ");
    long num2 = get_long("What is number2? ");

    printf("%li\n", num1 + num2);
}