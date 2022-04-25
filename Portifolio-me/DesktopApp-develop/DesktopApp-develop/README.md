
# ONFL Desktop App

## Learning resource

[Fetching Data from API in React by Simon](https://medium.com/@cymonmachera1/fetching-data-from-api-in-react-ff2810c2160e)

[Using json server by Yusuf](https://blacczeez.hashnode.dev/running-dbjson-using-json-server)

## Contributing Guidelnes:

- Checkout the official repository: https://github.com/OFNL-DEV/DesktopApp
- Next fork the repository, from the fork option on the top right corner of the repo page.
- Once thats done, you will have your own copy of the actual repository.
- Copy the link from browser bar. It should be something like this: https://github.com/you-github-username/DesktopApp
- Open Terminal (Linux and MacOS) or git bash terminal (Windows) and enter the following command :
```
$ git clone https://github.com/<Your account name>/DesktopApp

$ cd DesktopApp
```
- To install the packages:


#### Install dependencies

```
npm install
```
or
```
yarn
```

- To run the application


#### Run the app

```
npm run start
```
or
```
yarn start
```
- Now you will have the application running. Close the window and lets head back to terminal
- Then add upstream as follows:
```
git remote add upstream https://github.com/OFNL-DEV/DesktopApp
```
- Check if upstream is added:

```
git remote -v
```

- Make sure u get an ouput similar to the one below:

```
origin      https://github.com/<Your account name>/DesktopApp (fetch)
origin      https://github.com/<Your account name>/DesktopApp (push)
upstream    https://github.com/OFNL-DEV/DesktopApp (fetch)
upstream    https://github.com/OFNL-DEV/DesktopApp (push)
```

- Now create your own branch (for each module create a seperate branch and give the branch name as module name):
```
git checkout -b <branch-name>
```

- Open the app folder using VSCode or any code editor you use
- Make sure you are on your created branch
- Make changes to the app files
- Save everything
- Now comeback to the terminal. Now its time you push your changes to your forked repository in your github account.
```
git add <files-changed>
git commit -m "<Mention changes made>"
git push origin <branch-name-you-created>
```
- Now open the forked repo on Github. Change to your created branch. Now you will see an option to Make a Pull Request.

- Click on that , and make sure you are making a Pull request to the Develop branch of the original repository , NOT THE MAIN BRANCH !!
- Once you make the PR , sit back and relax. Dont do any changes until your PR is merged or until you are asked to make changes.

## Before you start making any changes

You need to make sure your forked repo is even with the parent repo.
Then continue with creating your own branch and follow the steps after that, mentioned in Steps to Contribute Efficiently and without upsetting the Reviewers :P.
```
git checkout main

git fetch upstream main

git pull upstream main

git push origin main

```


## For production

#### Build the app (automatic)

```
npm run package
```
or
```
yarn package
```

#### Build the app (manual)

```
npm run build
```
or
```
yarn build
```

#### Test the app (after `npm run build` || `yarn run build`)
```
npm run prod
```
```
yarn prod
```

### Reference used: 

https://github.com/alexdevero/electron-react-webpack-boilerplate.git
