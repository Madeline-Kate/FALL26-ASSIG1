# Mission 4: Report it and brief the owner

## Commit history

Output of `git log --oneline`:

```
3f58cec (HEAD -> assignment1) I solved mission 2
8a2ba08 Completed mission 0 and mission 1
d890ff1 (origin/main, origin/HEAD, main) first push with the assignment files
294714d Initial commit
```

Pick your **best** commit message and your **worst** one. Which of the 7 rules does the worst one break?

> All of my commits were essentially the same message, which I think serve quite well. They could have had more information in bodies rather than just using subjects, but there wasn't much more context needed.

## Pull Request

PR link, inside your fork:

> https://github.com/Madeline-Kate/FALL26-ASSIG1/pull/1

## Creating value: the risk brief

The Operations Manager who owns the portal is not a developer. Write a brief of **120 to 180 words** addressed to them. It must answer:

1. What you proved, in terms of **impact** on operators and on the campus, not in terms of code.
2. Why "it uses HTTPS and validates its data" did **not** protect them.
3. The single most important change the backend team must make, stated concretely.
4. One honest limit of your engagement: what you did **not** test.

> Your site is very insecure and vulnerable to attacks as long as I have access to your system, which is easy to acquire with the public nature of this system. I can prevent operators from being able to access required functions, which can cause severe delays in your ability to operate functionally. While the data may be validated, I can interfere with your ability to input and output that data successfully, as well as alter your validation protocols because they are stored in the frontend. The single most important change to be made here is to store all of your protocols in the backend, not in the main html file where they can be modified. I did not go into depth testing potential network-based attacks, and your service is likely still vulerable to those (such as DOS or DDOS).

## Reflection

In one or two sentences: which concept from Units 1.1 to 1.3 do you understand much better now, and what made it click?

> I better understand how to manipulate html objects through JS, though I still struggle in certain ways, especially with event listeners. Mission 2 made a lot of things click.
