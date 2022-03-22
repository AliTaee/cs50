#include <stdio.h>
#include <cs50.h>

int main (void)
{
    int number_of_scores = get_int("How many score do you have? ");
    int avarage = 0;
    
    int scores[number_of_scores];
    
    for(int i = 0; i < number_of_scores; i++) 
    {
        scores[i] = get_int("Please enter your score: ");
    }
    
    for(int i = 0; i < number_of_scores; i++) 
    {
        avarage += scores[i];
    }
    
    printf("the avarage is %.2f \n", (float) avarage / (float) number_of_scores);
}