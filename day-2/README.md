# Day 2

## Part 1

This one took me about an hour and a half ...or so I thought... Got the wrong answer.
So I took a break, came back, and then spent some time trying to get tsc and jest behaving the way I wanted (partially succeeded). Next, I attempted to improve my test coverage in an effort to find the bug. It narrowed the issue, but all my tests were still passing, so I figured I needed to use a different set of test data. I started with a subset (10) of rounds from the full input to see if I could find an issue. Finally I realized that `C` vs `X` which is the opponent playing `Scissors` and me playing `Rock` was being counted as a loss. After verifying my sanity by making sure there wasn't a victory scenario I hadn't accounted for, I looked at the code. "sciccors"! I had misspelled "scissors" 🤦‍♀️🤦‍♀️🤦‍♀️. I thought this was the very type of mistake Typescript is supposed to prevent!! Clearly I need more practice. I found a way to get Typescript to complain about my mistake, but it feels a bit gross. Hopefully, I can take this lesson forward and build my classes and types in a better way.

## Part 2

Also spent a good bit of time on this one. I started by refactoring and creating a bunch of new classes to try and aleve some of the issues I had run into in part 1. However, I struggled to get the types right. At first I thought I had it down because the compiler wasn't complaining, but as soon as I tried to run my test, it was clear the code was not functioning as expected. I ended up writing a bunch more tests to help me track down where the issues were. In short, I think I was confused about what the syntax I was using was actually doing. You live and learn!