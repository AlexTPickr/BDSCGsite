invoke-expression 'cmd /c start powershell -Command { C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe --dbpath C:\Users\HyPerRifiC\Documents\WORK\BDSCGsite\data }' 
Start-Sleep -s 5
invoke-expression 'cmd /c start powershell -Command { C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe }' 