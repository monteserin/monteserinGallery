

#PRIMERA VEZ
#git init && git remote add origin https://github.com/monteserin/monteserinGallery.git && git add . && git commit -a
#git push -u --force origin master #en caso de que se nos pida hacer un merge, el --force fuerza a sobreescribir lo que hay en remoto con lo que hay en local




git tag 1.2.7 #esta versión debe coincidir con la del manifest
git commit -a
git push origin --force --tags



# ! [rejected]        master -> master (non-fast-forward)
#error: failed to push some refs to ' '
#To prevent you from losing history, non-fast-forward updates were rejected
#Merge the remote changes (e.g. 'git pull') before pushing again.  See the
#'Note about fast-forwards' section of 'git push --help' for details.
