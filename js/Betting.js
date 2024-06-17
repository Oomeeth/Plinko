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

function PlaceBet(hasGameStarted, balance, debitAmount, isDebit) {
    if (!hasGameStarted && balance >= debitAmount) {
        balance = UpdateBalance(balance, debitAmount, isDebit);
        UpdateBalanceUI(balance);
        hasGameStarted = true;
        ball = DrawBall(ballSize, app);
        currentNodeIndex = 0;
        predeterminedPath = Pathfinding(nodeGrid);
        predeterminedPath = predeterminedPath.reverse();
    }

    return balance;
}