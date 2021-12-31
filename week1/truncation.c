#include <stdio.h>
#include <cs50.h>

int main(void) 
{
    int num1 = get_int("What is number1? ");
    int num2 = get_int("What is number2? ");
    
    float result = (float) num1 / (float) num2;
    printf("%f\n", result);
}