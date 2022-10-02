from brownie import AuthProxy, Akwukwo, config, network, accounts

def deploy():
    print("Getting account...")
    account = get_account()
    print(f"Deployer account {account} confirmed!!!")
    print("Deploying contracts...")
    network.gas_price("1.2 gwei")
    
    deploy_auth = AuthProxy.deploy({"from": account})
    auth_proxy_address = deploy_auth.address
    
    print(f"AuthProxy Contract deployed successfully at {deploy_auth.address}")
    
    # Set authority address.
    # authority_address = "0x00000000000000000000000000000000000000000000"
    authority_address = auth_proxy_address
    deploy_akwukwo = Akwukwo.deploy(authority_address, {"from": account})
    
    print(f"Akwukwo Contract deployed successfully at {deploy_akwukwo.address}")

    with open("Deployment Address.txt", "w+") as dep:
        dep.write("AuthProxy => "+auth_proxy_address+"\n\n")
        dep.write("Akwukwo => "+deploy_akwukwo.address+"\n\n")


def get_account():
    if network.show_active() == "development":
        return accounts[0]
    else:
        return accounts.add(config['wallet']['from_key'])


def main():
    deploy()