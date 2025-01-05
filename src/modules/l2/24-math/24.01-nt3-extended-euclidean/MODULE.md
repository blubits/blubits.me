---
id: "24.01"
title: "Number theory 3: Extended Euclidean algorithm"
date-created: 2024-11-12
date-updated: 2025-01-04
status: review
summary: "The Extended Euclidean algorithm and its recursive and iterative implementations."
references:
    - "`[CP-ALGO]` [algebra/extended-euclid-algorithm](https://cp-algorithms.com/algebra/extended-euclid-algorithm.html)"
---
> [!summary]- Key ideas
> - The **extended Euclidean algorithm** extends the basic Euclidean algorithm calculates the smallest possible $(x, y)$ that satisfies the equation $ax + by = \gcd(a, b)$.
> - At the base case, we let $(x, y) = (1, 0)$; for each recursive step, we let $(x', y') = (y, x - my)$, where $m = \frac{a - a \mod b}{b}$ (or `a / b`).
> - To implement the algorithm iteratively instead of recursively, we calculate a recursive sequence for $x$ and $y$, given as $x_{i+1} = x_{i-1} - m_ix_i; y_{i+1} = y_{i-1} - m_iy_i$ with $x_0, y_0 = 1, 0$.

In [[l1/14-math/14.01-nt1-divisibility-prime-numbers/MODULE|14.02]], we briefly discussed **Bezout's identity**. This states that for integers $a$ and $b$ such that $\gcd(a, b) = d$, then we can find integers $x$ and $y$ such that

$$
ax+by=d
$$

In many cases, it would be useful to find the values of $x$ and $y$ that satisfy this equation. For example, $\gcd(28, 8) = 4$, and we want to find the values of $x$ and $y$ such that $28x+8y=4$. A solution would be $x=1, y = -3$. This solution is not unique; another possible solution would be $x = 3, y = -10$.

## Euclid's algorithm

It turns out that Euclid's algorithm, with additional bookkeeping, can help us find $x$ and $y$. To recall, Euclid's algorithm uses the following recurrence:

$$
\gcd(a, b)=\begin{cases}0&\text{if } b = 0 \\ \gcd(b, a \bmod b)&\text{otherwise}\end{cases}
$$

So for the pair $(28, 8)$, Euclid's algorithm does the following transition:

$$
(28, 8) \to (8, 4) \to (4, 0)
$$

Let's try to visualize what Euclid's algorithm is actually doing and why it works by analyzing the state transitions. Notice that two successive states share an element:

$$
(28, \textcolor{blue}{8}) \to (\textcolor{blue}{8}, \textcolor{red}{4}) \to (\textcolor{red}{4}, 0)
$$

The element added by state transition arrows $\to$ represent the operation $a \bmod b$. Now recall the definition of the modulo:

$$
a \bmod b = k \implies a - k = mb
$$

for some positive $m$. For example,

$$
28 \bmod 8 = 4 \implies 28 - 4 = m \cdot 8
$$

Here, $m$ is 3, since $m = \displaystyle \frac{a-k}{b} = 3$. We'll take note of this for later.

We can prove that this transition "preserves" the GCD, i.e. $\gcd(a, b) = \gcd(b, k)$. To prove this, we can use the division theorem, which states that $a=qb+k$ for some quotient $q$.

By divisibility rules, if an integer $c$ divides $b$ and $k$, then it must divide $a$, since $a$ is a linear combination of $b$ and $k$. We also note that $a - qb = k$, so if an integer $c$ divides $a$ and $b$, then it must divide $k$, since $k$ is a linear combination of $a$ and $b$.

Restating the paragraph above, if $c$ divides $b$ and $k$, it also divides $a$, and if $c$ divides $a$ and $b$, it also divides $k$. Bridging these two facts together, if $c$ divides $a$ and $b$, it must also divide $b$ and $k$, and vice versa. Thus, the pair $(a, b)$ shares the same divisors as the pair $(b, k)$, and they must share the same GCD.

Now this process must terminate, since the second element keeps on getting smaller ($a \bmod b < b$). Since the modulo operation never becomes negative for two positive inputs, at some point, $a \bmod b$ must be $0$. In fact, we can prove that the first element is halved every two iterations ($a \to b \to a \bmod b \implies a \bmod b \le a/2$), which proves that Euclid's algorithm is $O(\log{a})$.

## Bookkeeping

Let's extend Euclid's algorithm by keeping track of $m$. Let's zoom in on the first transition state:

$$
(28, 8) \to (8, 4)
$$

From before, we know that $28 - 4 = m \times 8$, with $m = 3$. If we move the $4$ on the right side, then we get

$$
\begin{align}
28 - 3 \times 8 &= 4 \\
1\times 28 + (-3) \times 8 &= 4
\end{align}
$$

Note that this already gives us the exact formulas for Bezout's identity: $x = 1$ and $\displaystyle y = -3 = \frac{a - k}{b} = \frac{a - a \bmod b}{b}$. So we see that this formula for $m$ is somehow key to getting the correct values of $x$ and $y$.

Let's try to look at a bigger example to see how to get the correct values of $x$ and $y$. The following is a trace table for $\gcd(305, 65) = 5$. Note that, as we found before, $m = \displaystyle \frac{a - a \bmod b}{b}$.

| $a$ | $b$ | $k = a \pmod b$ | $= a - mb$         |
| --- | --- | --------------- | ------------------ |
| 305 | 65  | 45              | = 305 - **4** x 65 |
| 65  | 45  | 20              | = 65 - **1** x 45  |
| 45  | 20  | 5               | = 45 - **2** x 20  |
| 20  | 5   | 0               | = 20 - **4** x 5   |
| 5   | 0   | -               | -                  |

To recover $x$ and $y$, we can start from the following equation in the bottom row:

$$
1 \times 5 + 0 \times 0 = 5
$$

where $x = 1, y = 0$. The row above states that $0 = 20 - 4 \times 5$, so we substitute that in:

$$
\begin{align}
1 \times 5 + 0 \times (20 - 4 \times 5) &= 5 \\
1 \times 5 + (0 \times 20) - (0 \times 5) &= 5 \\
0 \times 20 + 1 \times 5 &= 5
\end{align}
$$

So as $(a, b)$ went from $(5, 0)$ back to $(20, 5)$, $(x, y)$ transitioned from $(1, 0) \to (0, 1)$. Let's repeat this transition:

$$
\begin{align}
0 \times 20 + 1 \times (45 - 2 \times 20) &= 5 \\
0 \times 20 + (1 \times 45) - (2 \times 20) &= 5 \\
1 \times 45 - 2 \times 20 &= 5
\end{align}
$$

Let's repeat it again:

$$
\begin{align}
1 \times 45 - 2 \times (65 - 1 \times 45) &= 5 \\
1 \times 45 - (2 \times 65) + (2 \times 45) &= 5 \\
-2 \times 65 + 3 \times 45  &= 5 \\
\end{align}
$$

And one last time:

$$
\begin{align}
- 2 \times 65 + 3 \times (305 - 4 \times 65) &= 5 \\
-2 \times 65 + (3 \times 305) - (12 \times 65) &= 5 \\
3 \times 305 - 14 \times 65 &= 5
\end{align}
$$

So the transitions for $x, y$ are $(1, 0) \to (0, 1) \to (1, -2) \to (-2, 3) \to (3, -14)$, such that the final coefficients for Bezout's identity are $x = 3, y = -14$. It can be proven that this is the pair of values that minimizes $|x| + |y|$.

In general, when we transition from $(a_i, b_i, x_i, y_i) \to (a_{i-1}, b_{i-1}, x_{i-1}, y_{i - 1})$, noting that $b_i = a_{i-1} - mb_{i - 1}$, we do the following transition:

$$
\begin{align}
& a_ix_i+b_iy_i=\gcd(a,b) \\
&\to a_ix_i+y_i\left(a_{i - 1} - mb_{i - 1}\right)=\gcd(a,b)  \\
&\to a_ix_i+y_ia_{i - 1} - y_imb_{i - 1}=\gcd(a,b) \\
&\to b_{i-1}x_i+y_ia_{i - 1} - y_imb_{i - 1}=\gcd(a,b) \\
&\to a_{i-1}y_i + b_{i-1}(x_i-my_i) = \gcd(a,b)
\end{align}
$$

So at each step, we transition from $(x, y) \to (y, x - my)$. Recall that $\displaystyle m = \frac{a_{i-1} - a_{i-1} \bmod b_{i-1}}{b_{i-1}}$.

## Recursive algorithm

To calculate $x$ and $y$ along with the GCD $k$, we thus need to implement this state transition. Let's start off with the basic Euclidean algorithm. This is an expanded version of the one-liner algorithm from [[l1/14-math/14.01-nt1-divisibility-prime-numbers/MODULE|14.02]].

```cpp
int gcd(int a, int b) {
	if (b == 0) {
		return a;
	}
	int k = gcd(b, a % b);
	return k;
}
```

We want to calculate $x$ and $y$ as well, so we'll return a 3-tuple $(k, x, y)$. As our base case, $(k, x, y) = (a, 1, 0)$, since $\gcd(a, 0) = a = 1 \times a + 0 \times 0$.

```cpp {1,3}
tuple<int, int, int> ext_gcd(int a, int b) {
	if (b == 0) {
		return {a, 1, 0};
	}
	int k = gcd(b, a % b);
	return k;
}
```

`ext_gcd` now returns a tuple, so we'll have to recover $(k, x', y')$. Remember that $(x')(b) + (y')(a \bmod b) = k$.

```cpp {5}
tuple<int, int, int> ext_gcd(int a, int b) {
	if (b == 0) {
		return {a, 1, 0};
	}
	auto [k, xp, yp] = ext_gcd(b, a % b);
	return k;
}
```

Once we've gotten the GCD, we need to work our way backwards, like in our trace table above. We need to calculate $x$ and $y$ for our current $(a, b)$ pair, based on the $(a, b)$ pair below it in the table. From before, we know that this is given by the state transition $(x, y) \to (y, x - my)$. Note that this $m$ is given by $\displaystyle \frac{a - a \bmod b}{b}$ for the current pair and not the pair we just calculated in line 5.

To simplify our code, we note that our calculation for $m$ is equivalent to integer division, `a / b`.

```cpp {6,7}
tuple<int, int, int> ext_gcd(int a, int b) {
	if (b == 0) {
		return {a, 1, 0};
	}
	auto [k, xp, yp] = ext_gcd(b, a % b);
	int x = yp, y = xp - yp * (a / b);
	return {k, x, y};
}
```

You can confirm that this function calculates $x$ and $y$ in the same way as our problem above, starting with $(1, 0)$ and ending at the correct values for $x$ and $y$.

## Iterative algorithm

Converting this algorithm to work alternatively is a bit difficult because our state transition for $(x, y)$ works from base case upwards, in the reverse direction of how we compute $(a, b)$.

If we look at how Euclid's algorithm transitions between states:

$$
(28, \textcolor{blue}{8}) \to (\textcolor{blue}{8}, \textcolor{red}{4}) \to (\textcolor{red}{4}, 0)
$$

Since each pair of values has a clear overlap, we can restate this as a sequence:

$$
r_i: 28 \to 8 \to 4 \to 0
$$

This sequence $\left\{r_i\right\}$ is a sequence of remainders, with $r_0=a$, $r_1=b$, and $r_{i+1} = r_{i-1} \bmod r_{i} = r_{i-1} - m_ir_i$ (for some quotient $m_i = \left\lfloor\frac{r_{i-1}}{r_i}\right\rfloor$). The sequence terminates when $r_n = 0$, with the GCD being $r_{n-1}$.

We can see if we can express $x, y$ as a sequence $\{x_i\}, \{y_i\}$. We want to maintain the following invariant for any $i$:

$$
ax_i+by_i = r_i
$$

This way, when $i = n - 1$, we have

$$
ax_{n-1}+by_{n-1}=r_{n-1}=\gcd(a,b)
$$

which is what we want.

We first set $x_0=1,x_1=0$ and $y_0=0,y_1=1$ to make the following two equations correct:

$$
\begin{align*}
ax_0+by_0 &= r_0=a\\
ax_1+by_1 &= r_1=b\\
\end{align*}
$$

Now $r_2=r_0 \bmod r_1 = r_0 - m_1r_1$. If we substitute in the equations for $r_0$ and $r_1$ as above, we get:

$$
\begin{align}
r_2&=r_0-m_1r_1\\
&= ax_0+by_0-m_1\left(ax_1+by_1\right) \\
&= ax_0 - am_1x_1 + by_0-bm_1y_1 \\
&= a(x_0-m_1x_1)+b(y_0-m_1y_1) \\
&= ax_2+by_2
\end{align}
$$

and thus $x_2 = x_0 - m_1x_1$, $y_2 = y_0-m_1y_1$. This holds for greater values of $i$, so in general, we have

$$
\begin{align}
x_{i+1} &= x_{i-1} - m_ix_i \\
y_{i+1} &= y_{i-1} - m_iy_i
\end{align}
$$

which exactly parallels the recurrence for $r_i$. We can easily implement this using the code below:

```cpp
tuple<int, int, int> ext_gcd(int a, int b) {
	int xi = 1, yi = 0, ri = a;
	int xii = 0, yii = 1, rii = b;
	while (rii != 0) {
		int m = ri / rii;
		tie(xi, xii) = {xii, xi - m * xii};
		tie(yi, yii) = {yii, yi - m * yii};
		tie(ri, rii) = {rii, ri - m * rii};
	}
	return {ri, xi, yi};
}
```

Note that `tie(i, j)` creates an "assignable pair"; C++ will get the pair on the right, unpack it, and assign it to each individual value on the left.
