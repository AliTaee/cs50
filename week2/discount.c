#include <stdio.h>
#include <cs50.h>

float discount(float price, int percentage);

int main(void)
{
    float regular = get_float("What is the price?\n");
    int percent_off = get_int("What is number of percent for off?\n"); 
    
    float price = discount(regular, percent_off);
    printf("The discount is: %.2f\n", price);
}

float discount(float price, int percentage) 
{
    return price * (100 - percentage) / 100;
}