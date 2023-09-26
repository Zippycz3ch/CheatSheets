# Admin Auth
newman run .\scenarios\admin\AuthenticateAdminCLI.postman_collection.json -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json

# User E2E
newman run .\scenarios\user\e2eUserCLI.postman_collection.json -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json -g .\data\exports\globals.json

