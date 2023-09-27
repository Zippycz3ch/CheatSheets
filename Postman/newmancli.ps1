# CLI scripts for testing Roger
# See scopes if you have problem running scripts https://learning.postman.com/docs/sending-requests/variables/#variable-scopes

# Admin Auth
# Exports admin_access_token into globals.json for later usage
# All later scripts use globals to import/export variables that are needed for other scripts
newman run .\scenarios\admin\AuthenticateAdminCLI.postman_collection.json -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json

# User E2E
newman run .\scenarios\user\e2eUserCLI.postman_collection.json -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json -g .\data\exports\globals.json

# Device E2E
newman run .\scenarios\device\deviceE2ECLI.postman_collection.json -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json -g .\data\exports\globals.json

