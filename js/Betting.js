function UpdateBalance(balance, amount, isDebit)
{
	if(isDebit)
	{
		balance -= amount;
	}
	else
	{
		balance += amount;
	}

	return balance;
}