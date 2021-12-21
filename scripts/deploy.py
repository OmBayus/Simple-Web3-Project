from web3 import Web3
from scripts.helpful_scripts import get_account
from brownie import SimpleContract

def deploy_and_create_blog():
    account = get_account()
    simple_contract = SimpleContract.deploy({"from":account})
    tx = simple_contract.changeYourNumber(61,{"from":account})
    tx.wait(1)
    print(simple_contract.addressToNumber(account.address))
    print(simple_contract.getaAdressesLen())

    for i in range(0,simple_contract.getaAdressesLen()):
        print(simple_contract.addresses(i))
    

def main():
    deploy_and_create_blog()