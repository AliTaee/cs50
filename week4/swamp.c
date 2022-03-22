#include <stdio.h>

void swamp(int *x, int *y);

int main(void)
{
    int x = 1;
    int y = 2;
    
    printf("x is %i y is %i\n", x, y);
    swamp(&x, &y);
    printf("x is %i y is %i\n", x, y);
}

void swamp(int *x, int *y)
{
    int temp = *x;
    *x = *y;
    *y = *x; 
}