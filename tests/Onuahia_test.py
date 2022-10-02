from brownie import Onuahia, network, reverts, accounts, Wei


# Return the first address.
# Owner is registry.
def owner():
	return accounts[0]


def returnBytes32Array():
	bytes32 = [
		"0x7465737400000000000000000000000000000000000000000000000000000001",
		"0x7465737400000000000000000000000000000000000000000000000000000002",
		"0x7465737400000000000000000000000000000000000000000000000000000003",
	]

	return bytes32


def onuahia():
	fee = "1 gwei"
	C = Onuahia.deploy(
        "Name",
        "SYM",
        accounts[1],
        returnBytes32Array(),
        fee,
        5,
        4209849258285295829, # Time obviously set into the future.
		{"from": owner()}
	)

	return C


def test_deploy():
	C = onuahia()


# Stake testing.
def test_stake():
	C = onuahia()
	with reverts():
		C.stake(
			"0x7465737400000000000000000000000000000000000000000000000000000001", 
			1, 
			{"value": "1 gwei", "from": accounts[1]}
		)

	with reverts():
		C.stake(
			"0x7465737400000000000000000000000000000000000000000000000000000001", 
			7, 
			{"value": "7 gwei", "from": accounts[2]}
		)

	with reverts():
		C.stake(
			"0x7465737400000000000000000000000000000000000000000000000000000001", 
			7, 
			{"value": "7 gwei", "from": accounts[2]}
		)

	with reverts():
		C.stake(
			"0x7400000000000000000000000000000000000000000000000000000000000001", 
			7, 
			{"value": "7 gwei", "from": accounts[2]}
		)

	C.stake(
		"0x7465737400000000000000000000000000000000000000000000000000000001", 
		1, 
		{"value": "1 gwei", "from": accounts[2]}
	)


def test_stakeWithExpiredTime():
	fee = "1 gwei"
	C = Onuahia.deploy(
        "Name",
        "SYM",
        accounts[1],
        returnBytes32Array(),
        fee,
        5,
        1664269700, # Time obviously set into the past.
		{"from": owner()}
	)

	with reverts():
		C.stake(
			"0x7465737400000000000000000000000000000000000000000000000000000001", 
			1, 
			{"value": "1 gwei", "from": accounts[2]}
		)


def test_resolveByAdmin():
	fee = "1 gwei"
	C = Onuahia.deploy(
        "Name",
        "SYM",
        accounts[1],
        returnBytes32Array(),
        fee,
        5,
        4209849258285295829, # Time obviously set into the future.
		{"from": owner()}
	)

	C.stake(
		"0x7465737400000000000000000000000000000000000000000000000000000001", 
		5,
		{"value": "5 gwei", "from": accounts[2]}
	)

	with reverts():
		C.resolveByAdmin("0x7465737400000000000000000000000000000000000000000000000000000001", {"from": accounts[4]})

	with reverts():
		C.resolveByAdmin("0x7465000000000000000000000000000000000000000000000000000000000001", {"from": owner()})

	C.resolveByAdmin("0x7465737400000000000000000000000000000000000000000000000000000001", {"from": owner()})

	with reverts():
		C.resolveByAdmin("0x7465737400000000000000000000000000000000000000000000000000000001", {"from": owner()})


def test_redeemEarningsBeforeResolve():
	C = onuahia()

	with reverts():
		C.redeemEarnings(1, {"from": accounts[5]})

	C.stake(
		"0x7465737400000000000000000000000000000000000000000000000000000001", 
		5, 
		{"value": "5 gwei", "from": accounts[2]}
	)

	with reverts():
		C.redeemEarnings(1, {"from": accounts[2]})


def test_redeemEarnings():
	fee = "1 gwei"
	C = Onuahia.deploy(
        "Name",
        "SYM",
        accounts[1],
        returnBytes32Array(),
        fee,
        10,
        4209849258285295829, # Time obviously set into the future.
		{"from": owner()}
	)


	bal = accounts[2].balance()

	C.stake(
		"0x7465737400000000000000000000000000000000000000000000000000000001", 
		5, 
		{"value": "5 gwei", "from": accounts[2]}
	)

	with reverts():
		C.stake(
			"0x7465766400000000000000000000000000000000000000000000000000000001", 
			5, 
			{"value": "5 gwei", "from": accounts[4]}
		)

	C.stake(
		"0x7465737400000000000000000000000000000000000000000000000000000003", 
		5, 
		{"value": "5 gwei", "from": accounts[4]}
	)

	# Money was spent.
	assert accounts[2].balance() <= bal

	C.resolveByAdmin("0x7465737400000000000000000000000000000000000000000000000000000001", {"from": owner()})


	assert C.valueOf(8) <= 0
	assert C.valueOf(0) > 0
	assert C.valueOf(1) > 0
	assert C.valueOf(2) > 0

	with reverts():
		C.redeemEarnings(1, {"from": accounts[5]})


	bal2 = accounts[2].balance()

	C.redeemEarnings(0, {"from": accounts[2]})
	assert accounts[2].balance() >= bal2 # Money was gained

	with reverts():
		C.redeemEarnings(0, {"from": accounts[2]})

	bal3 = accounts[2].balance()
	
	C.redeemEarnings(1, {"from": accounts[2]})
	C.redeemEarnings(2, {"from": accounts[2]})
	C.redeemEarnings(3, {"from": accounts[2]})
	C.redeemEarnings(4, {"from": accounts[2]})

	with reverts(): # Not holder
		C.redeemEarnings(5, {"from": accounts[2]})


	assert accounts[2].balance() >= bal3 # More Money was gained

	with reverts():
		C.redeemEarnings(4, {"from": accounts[2]})

	with reverts():
		C.redeemEarnings(8, {"from": accounts[4]}) # Wrong prediction

	with reverts(): # Already claimed.
		C.redeemEarnings(4, {"from": accounts[2]})


def test_valueOf():
	fee = "1 ether"
	C = Onuahia.deploy(
        "Name",
        "SYM",
        accounts[1],
        returnBytes32Array(),
        fee,
        10,
        4209849258285295829, # Time obviously set into the future.
		{"from": owner()}
	)

	C.stake(
		"0x7465737400000000000000000000000000000000000000000000000000000001", 
		5, 
		{"value": "5 ether", "from": accounts[2]}
	)

	C.stake(
		"0x7465737400000000000000000000000000000000000000000000000000000003", 
		5, 
		{"value": "5 ether", "from": accounts[4]}
	)

	C.resolveByAdmin("0x7465737400000000000000000000000000000000000000000000000000000001", {"from": owner()})

	assert C.valueOf(8) == 0
	assert C.valueOf(0) == "1.95 ether"

	C.redeemEarnings(0, {"from": accounts[2]})

	with reverts():
		assert C.valueOf(0) == "1.95 ether" # Redeemed already, invalid.

	# The math was solved on paper.