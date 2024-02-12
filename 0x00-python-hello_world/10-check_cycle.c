#include "lists.h"

/**
 * check_cycle - checks if a singly linked list has
 * a cycle in it
 * @list: pointer to the list
 * Return: 0 if there is no cycle,
 * 1 if there is a cycle
 */
int check_cycle(listint_t *list)
{
	listint_t *eya;
	listint_t *eko;

	eya = list;
	eko = list;
	while (list && eya && eya->next)
	{
		list = list->next;
		eya = eya->next->next;

		if (list == eya)
		{
			list = eko;
			eko =  eya;
			while (1)
			{
				eya = eko;
				while (eya->next != list && eya->next != eko)
				{
					eya = eya->next;
				}
				if (eya->next == list)
					break;

				list = list->next;
			}
			return (1);
		}
	}

	return (0);
}
