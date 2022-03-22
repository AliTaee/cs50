#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

int main(void)
{
    string s = get_string("s: ");
    
    string t = malloc(strlen(s) + 1);
    if(t == NULL)
    {
        return -1; 
    }
    
    strcpy(t, s);
    
    if(strlen(t) > 0)
    t[0] = toupper(t[0]);
    
    printf("S: %s\n", s);
    printf("T: %s\n", t);
    
    free(t)
    return 0
}