#include <bits/stdc++.h>
#include <iostream>
using namespace std;
const int N = 4005;
int n, k;
int a[N];
int lft[N];

void solve()
{
    int n, m;
    cin >> n >> m;
    vector<int> a(n), b(m);
    for (int i = 0; i < n; i++)
        cin >> a[i];
    for (int i = 0; i < m; i++)
        cin >> b[i];
    set<int> h1;
    stack<int> s1;
    h1.insert(0);
    s1.push(0);
    while (!s1.empty())
    {
        int x = s1.top();
        s1.pop();
        for (int i = 0; i < n; i++)
        {
            int y = a[i];
            if (!(h1.find(x | y) != h1.end()))
            {
                h1.insert(x | y);
                s1.push(x | y);
            }
        }
        if (false)
            // for(int i=1;i<2;i++)
            for (int i = 0; i < m; i++)
            {
                int y = b[i];
                if (!(h1.find(x & y) != h1.end()))
                {
                    h1.insert(x & y);
                    s1.push(x & y);
                }
            }
    }
    cout << h1.size() << endl;
}

int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int t;
    cin >> t;
    while (t--)
        solve();
    return 0;
}