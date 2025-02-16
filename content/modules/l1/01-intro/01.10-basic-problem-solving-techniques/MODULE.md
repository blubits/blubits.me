---
id: "01.10"
title: "Basic problem solving techniques"
date-created: 2025-01-30
date-updated: 2025-01-31
status: draft
---
# Basic problem solving techniques

Competitive programming is, at its core, a contest about how to solve problems. To be a good competitive programmer, you have to be a good problem solver: that is, you have to be good at
1. determining what the problem is,
2. breaking it down into simpler steps, and then
3. overcoming those steps in order to get to the solution.

Many beginner programmers tend to find problem solving very difficult. If you don't have a solid math background, that's very understandable: many people simply find the prospect of solving a complex problem intimidating and overwhelming. Here's a few common errors I see a lot of people face:

1. They don't read the problem carefully, so they skip a few details.
2. They read the problem but they don't understand what the problem is actually asking for. They go straight into coding without exploring the problem.
3. They try a solution that doesn't work, but they continue to edit their non-working solution instead of trying to explore other solutions.
4. They overcomplicate a problem, mainly because they fail to seek patterns or aren't familiar with the problem at all, wasting time coding and debugging.
5. They code a correct solution, but fail to consider edge cases, resulting in a wrong answer verdict.

These problems haunt every aspiring problem solver, even before the advent of competitive programming. So in 1945, mathematician and educator George Polya wrote the definitive book on problem solving, still used by many today. Polya outlined a series of basic steps for solving any problem: **understand** the problem, devise a **plan**, **execute** the plan, and then **review** your solution.

We'll take a deep dive into these four steps, and see how you can implement them as you go through your competitive programming journey.

## Understanding the problem

The basic skeleton of a competitive programming problem is as follows:
- the **flavor text**, which describes the context of the problem and what we're trying to compute, perhaps in some colorful or otherwise non-straightforward language;
- the **input format** and **output format**, describing what we are given and what we should output, as well as the limits on the size and magnitude of the inputs; and
- sample inputs and the correct answers to those sample inputs.

A good competitive programmer parses the flavor text, cuts through the noise, and tries to determine what exactly the problem is asking for. This seems obvious, but a lot of beginner programmers still miss this:
- in the rush of trying to solve answers within a short period of time, or in a rush to begin coding, beginners (and even seasoned programmers!) skim the problem set and start coding, only to end up coding something that was completely different from what the problem is actually asking for;
- or sometimes, people "skim-and-skip" a problem because it seemed too overwhelming, only to realize later on that what the problem was asking is actually fairly simple.

Spending a few minutes reading and understanding the problem now will prevent you from spending way more time backtracking and rereading the problem later. To check if you understand the problem, ask yourself the following:

1. Do you understand all the words used in stating the problem?
2. What data are you given to work with?
3. What are you asked to find or show?
4. Can you restate the problem in your own words?
5. Can you think of a picture or diagram that might help you understand the
problem?

If you don't understand the problem at all, here are a few strategies you can employ.

**Play with the input.** Work with the sample input using pen and paper, and see if you can get the sample output from it. If there are weird operations, try to understand what those operations do (or don't do) to the input, and what you can do from there. If there are weird structures, try to sketch them out. The goal is to familiarize yourself with how the problem works. Eventually, you'll familiarize yourself with the problem enough to be able to understand it.

**Abstract the input**. It's easier to work with a precisely-defined problem. Redefine the input of the problem so you can more precisely word what the problem really is. Work with integers, lists, and structures, instead of general objects. In this way, we are abstracting away the details of the problem into a form that we can play around with more. For example, if we're given a basket of fruits with their weights, or a lineup of people by height, we can instead work with a set of integers. The structure of the objects is more important than what the objects actually are.

## Devising a plan

Once you're familiar with the problem, it's time to devise a plan on how to attack the problem. That plan comes in the form of an algorithm that can get the input and process it to generate a correct output.

A lot of top competitive programmers take around a quarter to half of the contest time writing things down on pen and paper, not coding up anything at all. They instead take some time exploring the problem and devising a concrete plan.

It's possible that just by playing with the input, we already have a clear picture in our head as to how to attack the problem. If not, we can play with more inputs. Try to create test cases that aren't given in the problem, and play around with them see if you can get the correct solution. The goal is to see if there are any patterns that we can observe that we can use to get the answer, or if there's a known method or process that can get us from point A to point B.

Sometimes you might have to play around with a solution by listing down all the possible answers, and then checking which one of those answers is correct or the most optimal. Sometimes we can create code that does that for us. We might also be able to create an algorithm that checks if an answer is correct more easily than actually computing the correct answer. We can only know where we're at if we explore the problem a bit more.

Note that if you have a solution that you think will work, there is no harm in implementing it. We call this principle the **leap of faith**: even if it seems wrong, if you have a solution you think works, do it! If you're not convinced as to why it works, try to figure out what's stopping you, and try to attack the problem from there. If you do the leap of faith and it works, that's great! But if it doesn't, step back and figure out what went wrong, and don't hesitate to backtrack and start thinking of another possible strategy or attack another problem instead.

### Heuristics

If we don't know a solution to the problem outright, we can ask ourselves the following question:

> Is there a problem, similar to this one, that I already know how to answer?

That similar problem can come in many forms. Here are some:

1. **Specialization**. If I specify or fix certain inputs, do I know how to solve the problem? For example, if there are three inputs, see what happens if I fix one and manipulate the other two. If a problem has subtasks, typically the earlier subtasks are special cases: try to work with these cases.
2. **Mapping.** Can I transform the input into a form that I know how to work with? For example, I can redefine a list of integer values $A$ into a Boolean list $B$, where $B[i]$ is true if $i \in A$. Or I can redefine the same list into a dictionary of frequencies. The most common form of transformation would be to sort an input list, if we're given a list.
3. **Decomposition.** Can I break down the problem into two problems, each one easier than the big problem? If so, I can then simply find a way to bridge these two, simpler problems together. For example, given a list, I can map it into another list, and then try to figure out how to search through that list.
4. **Generalization.** Given a few specific cases, can I find a general solution? This requires us to observe patterns in the small cases, and then convince ourselves that this pattern still works in the large case. For example, if the answer for small cases seem to be powers of two, try to see if this holds for $n$ in general.
5. **Flipping the problem.** Can I work backward, from the solution to the answer? Sometimes attacking the problem from the other end can help us get insights that will help us in attacking the problem from the right end.

Taken together, we call these strategies **heuristics**. None of them guarantee that we get to a solution, but they can help us get closer to figuring out a solution.

### Proximal development

As we continue to devise a plan, we might figure out that it needs a technique that we know but aren't too familiar with. Or we might see that it's something that's completely out of our wheelhouse.

There's a concept in psychology called the **zone of proximal development**. This is the group of concepts or skills that you know how to do, but aren't fully confident in how to execute. Inside it is the zone of skills that you can do without guidance, and outside it is the zone of skills that you are totally unfamiliar with. A good competitive programmer which zone of the three a certain problem belongs. In essence, you want to know what you're already good at, what you need practice on, and what you really don't know.

To get more familiar with this, keep a mental toolbox of the concepts you know in your brain, or somewhere more physical. When you encounter an entirely new term or concept, put it in the unfamiliar zone and try to see where it pops up. Research what that concept is, what it means, and how to implement it. If the terms you see are still completely alien to you, take note of those as well. The key is to first know what concepts are out there, even if you don't know how they work, just in case you encounter them again.

As you solve more problems and study more, you'll get more familiar with the basics of those concepts. Eventually you'll be somewhat familiar with them that you'll recognize if a problem uses those concepts. Now you're in the zone of proximal development. Here you continue practicing the concept and see how different problems work with the concept in different ways, and how the concept interplays with other concepts. Eventually there comes a point where you can instantly recognize and code up the concept when you see it in a problem, which means that you've mastered it.

## Executing the plan

Before you start coding, first make sure that your plan is fully clear in your head. Your idea of a solution must be easily translatable to logic and code. It might be helpful to frame it as a series of steps, as a flowchart, or a hybrid of code and English (or **pseudocode**.) Your solution might contain several, smaller subroutines; make sure it's clear in your head how to implement these too, or at least know how they fit in the entire solution.

Once you know what to code, it's time to start coding. Start with writing the code that parses the input, and then you can proceed with coding the answer. Some people prefer to encapsulate the entire solution code in a `solve` function, while others write it flat. Some people might prefer to break down their solution even further into smaller functions. This makes your code a lot more readable, at the cost of code time; it's your job to figure out if this time tradeoff is worth it.

As you code, use the following tips to save time:
- Write down your code step by step, especially for complex problems with lots of moving parts. Code up one part of the solution, and see whether it works as you expect. Once that works, move on to the next part. In case a problem shows up, you know that the problem is with the code you just typed up.
- Keep your code neat. Indent and space your code in a way that will make sense to you. Follow a [style guide](https://peps.python.org/pep-0008/) to make your code nicer and more consistent. Use good and meaningful variable and function names that fit their purpose. Add comments to explain your logic. But the best code is **self-documenting**, meaningful and readable enough that it is easy to see what it does at a glance.

### Debugging

Somewhere along the line, as you solve problems, you'll run into some piece of code that you thought was correct but was actually wrong, and you have no idea what went wrong. **Debugging** is the process of rooting out errors or bugs in code.

There are three main types of errors that we usually encounter: syntax errors, runtime errors, and logic errors. **Syntax errors** are bugs in the way we type code: the compiler or interpreter can't understand what we mean, and thus exits. For example, we can miss a colon or indent the code wrong. These errors are the easiest to diagnose, but also is the most common error encountered by very beginner programmers. Debugging syntax errors takes a careful, observant eye, and mastery of basic programming constructs.

**Runtime errors** are errors that occur during the execution of the program itself: the program tries to execute an instruction that is disallowed or doesn't make sense, and thus exits. Sometimes a program runs forever without end instead of exiting: this would be an **infinite loop**. Runtime errors can have many causes:

1. A variable was misused: maybe it doesn't exist and was mistyped, or there was a mix in data types that doesn't make sense (like adding a string with an integer).
2. A list or data structure was accessed incorrectly, for example by using an index that doesn't exist (called an **out-of-bounds** error).
3. A function was called incorrectly: maybe the function doesn't exist, or you called it using too many or too few arguments. If a function is called recursively and an infinite recursion error was raised, the function may not have a base case or the base case was incorrectly specified.
4. For infinite loops, a certain condition that ends a loop is never met.

Runtime errors are also easy to spot and correct: we just have to identify the error, understand the error message, and fix the relevant line.

**Logic errors** are errors with how the algorithm processes the input that doesn't actually end the program, but instead make the program print an incorrect answer. If your program doesn't give you the output you expected, or a judge marks it with a wrong answer, you have a logic error.

Logic errors are the hardest to test and identify, because normally you don't know where the code errors out. Some logic errors can be as simple as accidentally swapping variables, incorrectly printing the output, forgetting to clear out lists, or failing to handle edge cases. Some are a lot more subtle, like an incorrect argument or a wrong initialization of variables. Sometimes, the error might be in the thought process itself, and your algorithm just doesn't work.

Two good ways to diagnose logic errors are:

**Visualizing the program** by seeing the step-by-step process that it takes when processing the input. This allows you to compare what you think the program is calculating versus what it's actually calculating. Competitive programmers typically use print statements to see the state of certain variables in loops or functions. A dedicated program called a **debugger** can step into programs and visualize variables for us, and is more useful for complex programs; debuggers aren't normally used in contests due to time constraints.

**Stress-testing**. In addition to our wrong code, create two different pieces of code: a **test case generator**, which generates small but random test cases that fit the input format, and a **slow-solver**, which solves the program in a guaranteed-correct, but slower way. We run the test case generator and pass it to the slow-solver to get a correct answer, which we can then compare to the answer given by our own solution.

Once we see a certain input where the output of the slow-solver is different from our solution, we can dive deep into the generated input and see what makes it different from the cases we know how to deal with correctly. Here, visualizing the program can come in handy to see where our code trips up. We might have to revisit the drawing board and dissect the input by hand, to see why it is a special case and how to adapt our algorithm for that.

Lastly, **time limit exceeded** verdicts aren't necessarily errors, but it's good to mention them as well. Sometimes programs that encounter a TLE can be optimized by removing extraneous statements (like print statements) or by changing programming languages. Sometimes a TLE is caused by a simple, unhandled error, as mentioned before.

More often than not, TLE verdicts are caused by algorithms that are simply too slow to optimize. Doing asymptotic analysis, as mentioned in [[01.XX]], can help determine whether the algorithm has a chance to run within the time limit, given the input limits. If your code passes small subtasks but not larger ones, you can at least be confident that the program is a slow-solver, and you can use it to stress-test faster solutions later on.

## Reviewing the solution

At the end of the contest, or when getting an AC in a problem during practice, it is always a good idea to review your code. Ask yourself what problems you found easy, what did you find a bit tricky but doable, and what you found impossible. This will help you revise the toolbox of knowledge and expand your zone of proximal development.

Take time to review your solution as well. For an AC solution, why did it work? What topics did I use? How different was it from what I encountered before? If a solution was partially AC or entirely WA, review your code and compare it to the editorial solution or, if done as practice, with other submissions. What did they do that you didn't? Did they employ a new solution you haven't heard of before, or a new technique that you know but didn't think of using? See where your thought process diverged from theirs, so you can learn from it and take note of it in the future.

A good competitive programmer learns from every contest and every problem they attempt. As you go through your contest journey, it's helpful to keep all of your solution code in a single folder. It'd also be helpful to have a notebook or a document or a text file somewhere with topics you've learned or key insights you've seen from other problems. Review these constantly as you do practice, so you can continually improve your solutions in the future.

## TikzJaX test

```tikz
\begin{document}

\begin{tikzpicture}
    % Function to draw a lightbulb
    \newcommand{\lightbulb}[3]{
        % Position: #1 (x, y), State: #2 (on/off), Label: #3
        \begin{scope}[shift={#1}]
            % Bulb outline
            \draw[thick] (0, 0) circle(0.5cm);
            
            % Bulb fill
            \ifnum#2=1
                \fill[yellow!80] (0, 0) circle(0.5cm); % ON (yellow fill)
            \else
                \fill[white] (0, 0) circle(0.5cm); % OFF (white fill)
            \fi
            
            % Filament
            \draw[thick] (-0.2, -0.2) -- (0.2, -0.2); % Horizontal line
            \draw[thick] (-0.2, -0.2) -- (0, -0.4); % Left diagonal
            \draw[thick] (0.2, -0.2) -- (0, -0.4); % Right diagonal
            
            % Base
            \draw[thick, fill=gray!60] (-0.2, -0.5) rectangle (0.2, -0.7);
            \draw[thick] (-0.2, -0.7) -- (-0.3, -0.8);
            \draw[thick] (0.2, -0.7) -- (0.3, -0.8);
            
            % Label below the bulb
            \node[below] at (0, -0.9) {\large \texttt{#3}};
        \end{scope}
    }
    
    % Draw the lightbulbs
    \lightbulb{(2, 0)}{1}{1}  % Second bulb (ON)
    \lightbulb{(4, 0)}{0}{0}  % Third bulb (OFF)
    \lightbulb{(6, 0)}{1}{1}  % Fourth bulb (ON)
    \lightbulb{(8, 0)}{1}{1}  % Fifth bulb (ON)
\end{tikzpicture}

\end{document}
```

Next set 2:

%% This is a comment. %%

```tikz
\begin{document}
\begin{tikzpicture}[
  every node/.style={circle, draw, font=\sffamily\Large, minimum size=1cm},
  level/.style={sibling distance = 5cm/(#1-0.2), level distance = 1.5cm},
  box/.style={draw=red, thick, rounded corners}
]
\node {8 \small (1)}
    child {node {\textcolor{green}{6} \small (2)} 
        child {node {2 \small (4)}}
        child {node {5 \small (5)}}
        child {node {1 \small (6)}
            child {node {16 \small (9)}}
            child {node {7 \small (10)}}
        }
    }
    child {node {9 \small (3)} 
        child {node {1 \small (7)}}
        child {node {10 \small (8)}}
    };
    
	\draw[thick] (-7,-5.5) rectangle (1.5,-0.5);

\end{tikzpicture}

\end{document}
```

For the tree above, the `tt`, `idx`, and `sz` values are the following (note that we store the vertices zero-indexed): %% TODO: update %%

```tikz
\begin{document}
\begin{tikzpicture}[
  every node/.style={circle, draw, font=\sffamily\Large, minimum size=1cm},
  level/.style={sibling distance = 5cm/(#1-0.2), level distance = 1.5cm}
]
\node {1}
    child {node {2} 
        child {node {4}}
        child {node {5}}
        child {node {6}
            child {node {9}}
            child {node {10}}
        }
    }
    child {node {3} 
        child {node {7}}
        child {node {8}}
    };

%\draw[thick,->] (1.5,-0.7) -- (1.5,-0.1);
%\draw[thick,->] (5.5,-0.7) -- (5.5,-0.1);
\end{tikzpicture}

\end{document}
```

```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0) grid (10,3);

\draw[ultra thick] (0, 2) -- (10, 2);

\node at (-0.8, 2.5) {\Large \texttt{tt}};
\node at (-0.9, 1.5) {\Large \texttt{idx}};
\node at (-0.8, 0.5) {\Large \texttt{sz}};

\foreach \i in {0,...,9} {
	\node at (\i+0.5,3.5) {\texttt{\i}};
}

\foreach \i [count=\n] in {0,1,3,4,5,8,9,2,6,7} {
	\node at (\n-0.5,2.5) {\Large $\mathsf{\i}$};
}

\foreach \i [count=\n] in {0,1,7,2,3,4,8,9,5,6} {
	\node at (\n-0.5,1.5) {\Large $\mathsf{\i}$};
}

\foreach \i [count=\n] in {10,6,3,1,1,3,1,1,1,1} {
	\node at (\n-0.5,0.5) {\Large $\mathsf{\i}$};
}
\end{tikzpicture}
\end{document}
```


##### References
- [Polya's Problem Solving Techniques](https://shenshen.mit.edu/demos/polya.pdf)

