import yaml
import json
import shutil
import os

def update_front_end():
    # Sending the build folder
    copy_folder_to_front_end("./build","./front_end/src/chain-info")

    # Sending the front end our config in JSON format
    with open("brownie-config.yaml","r") as brownie_config:
        config_dict = yaml.load(brownie_config,Loader=yaml.FullLoader)
        with open("./front_end/src/brownie-config.json","w") as brownie_config_json:
            json.dump(config_dict,brownie_config_json)
    print("Front end updated")

def copy_folder_to_front_end(src,dest):
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(src,dest)

def main():
    update_front_end()