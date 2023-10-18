# CLI scripts for testing Roger
# See scopes if you have problem running scripts https://learning.postman.com/docs/sending-requests/variables/#variable-scopes


# Section 0
# Needs user_admin, user_admin_secret, Abp-TenantId 

# Create and auth host and admin
newman run .\scenarios\CreateTenantAndAminWithHost\CreateTenantAndAdminWithHost.json -e .\data\env\RogerUP.postman_environment.json --export-globals .\data\exports\globals.json -g .\data\exports\globals.json

# Admin Auth
# Exports admin_access_token into globals.json for later usage
# All later scripts use globals to import/export variables that are needed for other scripts
# Probably obsolete, admin is create and authed via host scenario
# newman run .\scenarios\admin\AuthenticateAdminCLI.postman_collection.json -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json

# Section 1
# These cases need Admin Auth run first

# User E2E
newman run .\scenarios\user\e2eUserCLI.postman_collection.json -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json -g .\data\exports\globals.json

# Device E2E
newman run .\scenarios\device\deviceE2ECLI.postman_collection.json -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json -g .\data\exports\globals.json

# Device LightWeight E2E
newman run .\scenarios\device\deviceLightWeightE2ECLI.postman_collection.json  -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json -g .\data\exports\globals.json

# UserSynch
newman run .\scenarios\userSynchronization\UserSynchronizationE2E.postman_collection.json -e .\data\env\devEnvironment.json --export-globals .\data\exports\globals.json -g .\data\exports\globals.json -d .\data\testData\userSynchAllGroups.csv