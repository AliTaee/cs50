#include <stdio.h>
#include <math.h>
#include <cs50.h>

int main (void)
{
    float dolars = get_float("Dollars amount:\n");
    int pennies = round(dolars * 100);
    printf("pennies: %i\n ", pennies);
}