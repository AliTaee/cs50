#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int n;
    
    do
    {
        n = get_int("How many ? marks.\n");
    }while(n < 1);
    
    for(int index = 1; index <= n; index++)
    {
        printf("?");
    }
    printf("\n");
}