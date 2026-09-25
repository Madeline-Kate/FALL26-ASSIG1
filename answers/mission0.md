# Mission 0: Get the code, the professional way

**Name:Maddie Aleksak**
**GitHub username:Madeline-Kate**

## Evidence

### `git remote -v`
```
origin  https://github.com/Madeline-Kate/FALL26-ASSIG1 (fetch)
origin  https://github.com/Madeline-Kate/FALL26-ASSIG1 (push)
```

### `git branch`
```
* assignment1
  main
```

### `git status` before the `.gitignore` fix
```
On branch assignment1
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../.gitignore
        modified:   ../public/js/validator.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../node_modules/
        ../package-lock.json

no changes added to commit (use "git add" and/or "git commit -a")
```

### `git status` after the `.gitignore` fix
```
On branch assignment1
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../.gitignore
        modified:   ../public/js/validator.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../package-lock.json

no changes added to commit (use "git add" and/or "git commit -a")
```

## Questions

1. Which folder should not be committed, and why? Give one practical reason and one security-related reason.

   > node_modules. For practical reasons, it is unncessary data to package and results in larger filesizes. For security reasons, the modules could contain sensitive data and there is no reason to risk sending them.

2. What line or lines did you add to `.gitignore`? What does a trailing `/` mean in a `.gitignore` pattern?

   > node_modules/. A trailing / means it is ignoring a dirsctory and all files within it.

3. **Connections:** in one or two sentences, what is the difference between a **fork** and a **clone**? Which one lives on GitHub and which one lives on your machine?

   > A fork is a github copy, a separate repository you create. A clone is just a local download of an existing repository on your machine.

## Documentation log

| Page I used, with URL | One thing I learned from it |
|---|---|
| | |
