(this["webpackJsonpgraph-test"]=this["webpackJsonpgraph-test"]||[]).push([[0],{155:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),i=a(29),s=a.n(i),o=(a(155),a(91)),c=a(12),l=(a(92),a(93),a(11)),d=a(8),b=a(22),m=(a(43),a(30)),h=a(2),u=[{name:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c DFS",theory:{paragraphs:["\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u0433\u043b\u0443\u0431\u0438\u043d\u0443 DFS \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e \u043e\u0431\u0445\u043e\u0434\u0430 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043b\u043e\u0436\u043d\u0443\u044e BFS. \u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e  \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0435 \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u0435\u0440\u0448\u0438\u043d\u044b s, \u0430 \u0437\u0430\u0442\u0435\u043c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043a \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439.           \u0415\u0449\u0435 \u043e\u0434\u043d\u043e\u0439 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e DFS \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u0432\u0441\u0435 \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0438\u0437 s \u0443\u0436\u0435 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u044b, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0447\u0430\u0441\u0442\u044c \u0432\u0435\u0440\u0448\u0438\u043d \u043e\u0441\u0442\u0430\u043b\u0430\u0441\u044c \u043d\u0435\u043f\u043e\u0441\u0435\u0449\u0435\u043d\u043d\u044b\u043c\u0438, \u0442\u043e DFS \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043d\u043e\u0432\u0443\u044e \u043a\u043e\u0440\u043d\u0435\u0432\u0443\u044e \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 \u043e\u0431\u0445\u043e\u0434.           \u0412 \u0446\u0435\u043b\u044f\u0445 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0445 \u0432\u0438\u0437\u0438\u0442\u043e\u0432 \u0432\u0435\u0440\u0448\u0438\u043d DFS \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0434\u0432\u0430 \u0442\u0438\u043f\u0430 \u043c\u0435\u0442\u043e\u043a:","- \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f d[v] \u2013 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0438 \u0432\u0435\u0440\u0448\u0438\u043d\u044b;","- \u0432\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f f[v] \u2013 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043e\u0431\u0445\u043e\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u0434\u043b\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u043c\u0435\u0436\u043d\u044b\u0445 \u0432\u0435\u0440\u0448\u0438\u043d.","\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u0448\u0438\u0440\u0438\u043d\u0443 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e\u0439 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u043e\u0439 DFS. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0447\u043a\u0438 \u0432\u0445\u043e\u0434\u0430 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0434\u0432\u0435 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b.          \u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 DFS_Check \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0432\u0435\u0440\u0448\u0438\u043d\u0430 \u0440\u0430\u043d\u0435\u0435 \u043d\u0435 \u0431\u044b\u043b\u0430 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0430. \u041f\u043e\u0434\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 DFS_Visit \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435  \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u043c\u0435\u0436\u043d\u044b\u0445 \u0432\u0435\u0440\u0448\u0438\u043d.","\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f - O(n + m)","DFS(G,s)".split("DFS(G,s)").map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[0!==t&&Object(h.jsx)("b",{children:"DFS(G,s)"})," ",e]})})),"1. d = [0,...,0]","2. f = [0,...,0]","3. \u03c0 = [\u22a5,..,\u22a5]","4. foreach s \u2208 V","5. DFS_Check(s, s)","DFS_Check(u, v)".split("DFS_Check(u, v)").map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[0!==t&&Object(h.jsx)("b",{children:"DFS_Check(u, v)"})," ",e]})})),"1. if \u03c0[v] = \u22a5","2. \u03c0[v] = u","3. d[v] = time","4. time++","5. DFS_Visit(u,v)","DFS_Visit(u,v)".split("DFS_Visit(u,v)").map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[0!==t&&Object(h.jsx)("b",{children:"DFS_Visit(u,v)"})," ",e]})})),"1. foreach (v,w) \u2208 E","2. DFS_Check(v,w)","3. f[v] = time","4. time++","\u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043c \u0430\u043d\u0430\u043b\u0438\u0437 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u0433\u043b\u0443\u0431\u0438\u043d\u0443:","- \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442 O(n) \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439.","- DFS_Visit \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0432\u0435\u0440\u0448\u0438\u043d\u044b (\u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u03c0[v] = \u221e), \u043e\u0442\u043a\u0443\u0434\u0430 \u043e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f O(n).","- DFS_Check \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0434\u043b\u044f \u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0433\u0440\u0430\u043d\u0435\u0439, \u043e\u0442\u043a\u0443\u0434\u0430 \u043e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f O(m).","\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f - O(n + m)."],graphAnimationExample:{graph:{nodes:[{id:1,label:"1"},{id:2,label:"2"},{id:3,label:"3"},{id:4,label:"4"},{id:5,label:"5"},{id:6,label:"6"},{id:7,label:"7"},{id:8,label:"8"}],edges:[{id:12,from:1,to:2},{id:13,from:1,to:3},{id:15,from:1,to:5},{id:14,from:1,to:4},{id:26,from:2,to:6},{id:27,from:2,to:7},{id:38,from:3,to:8}]},animationPath:[12,26,27,13,38,14,15]}},graphQuestion:{graph:{nodes:[{id:1,label:"1"},{id:2,label:"2"},{id:3,label:"3"},{id:4,label:"4"},{id:5,label:"5"},{id:6,label:"6"},{id:7,label:"7"}],edges:[{id:12,from:1,to:2},{id:16,from:1,to:6},{id:23,from:2,to:3},{id:24,from:2,to:4},{id:45,from:4,to:5},{id:67,from:6,to:7}]},correctPaths:[[12,23,24,45,16,67],[16,67,12,23,24,45],[12,24,45,23,16,17],[16,67,12,24,45,23]]}},{name:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c BFS",theory:{paragraphs:["\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c BFS \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u0430 \u043f\u043e \u0441\u043b\u043e\u044f\u043c, \u0442.\u0435. \u0432\u0435\u0440\u0448\u0438\u043d\u0430 s \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 0-\u0439 \u0441\u043b\u043e\u0439,       \u0435\u0451 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u0441\u0435\u0434\u0438 1-\u044b\u0439 \u0441\u043b\u043e\u0439 \u0438 \u0442\u0434. \u0412\u044b\u0445\u043e\u0434\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f: \u043c\u0430\u0441\u0441\u0438\u0432 d, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043e\u0442 \u0432\u0435\u0440\u0448\u0438\u043d\u044b i \u0434\u043e \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0439 s      (\u2261 \u043d\u043e\u043c\u0435\u0440 \u0441\u043b\u043e\u044f), \u0438 \u043c\u0430\u0441\u0441\u0438\u0432 parent, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438 \u043d\u0430 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0432\u0435\u0440\u0448\u0438\u043d\u0443 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0431\u044b\u043b\u0430 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0430 \u0432\u043f\u0435\u0440\u0432\u044b\u0435       (\u0435\u0441\u043b\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0433\u0440\u0430\u043d\u044c (i,j), \u0442\u043e parent[i] = j).","\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 BFS - O(m + n).","BFS(G,s)".split("BFS(G,s)").map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[0!==t&&Object(h.jsx)("b",{children:"BFS(G,s)"})," ",e]})})),"1. d = [\u221e,..,\u221e]","2. parent = [\u22a5,..,\u22a5]","3. d[s] = 0","4. parent[s] = s","5. Q = {s}   // \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0441\u043b\u043e\u0439","6. Q' = {}   //\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u043b\u043e\u0439","7. for l = 1 to \u221e while Q \u2260 {}","8. foreach u \u2208 Q","9. foreach(u,v) \u2208 E //\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u043c \u0432\u0441\u0435 \u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0433\u0440\u0430\u043d\u0438","10. if parent[v] = \u22a5 //\u0431\u044b\u043b\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0430 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0430 \u0440\u0430\u043d\u0435\u0435?","11. Q' = Q' \u222a {v}","12. d[v] = l","13. parent[v] = u","14. (Q, Q') = (Q', {}) //\u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c","15. return (d, parent)"],graphAnimationExample:{graph:{nodes:[{id:1,label:"1"},{id:2,label:"2"},{id:3,label:"3"},{id:4,label:"4"},{id:5,label:"5"}],edges:[{id:12,from:1,to:2},{id:13,from:1,to:3},{id:24,from:2,to:4},{id:25,from:2,to:5}]},animationPath:[12,13,24,25]}},graphQuestion:{graph:{nodes:[{id:1,label:"1"},{id:2,label:"2"},{id:3,label:"3"},{id:4,label:"4"},{id:5,label:"5"},{id:6,label:"6"},{id:7,label:"7"},{id:8,label:"8"}],edges:[{id:12,from:1,to:2},{id:13,from:1,to:3},{id:24,from:2,to:4},{id:25,from:2,to:5},{id:36,from:3,to:6},{id:68,from:6,to:8},{id:57,from:5,to:7}]},correctPaths:[[13,12,24,25,36,57,68],[13,12,24,25,36,68,57],[13,12,25,24,36,57,68],[13,12,25,24,36,68,57],[13,12,36,24,25,57,68],[13,12,36,24,25,68,57],[13,12,36,25,24,57,68],[13,12,36,25,24,68,57],[12,13,24,25,36,57,68],[12,13,24,25,36,68,57],[12,13,25,24,36,57,68],[12,13,25,24,36,68,57],[12,13,36,24,25,57,68],[12,13,36,24,25,68,57],[12,13,36,25,24,57,68],[12,13,36,25,24,68,57]]}},{name:" \u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u041a\u0440\u0430\u0441\u043a\u0430\u043b\u0430",theory:{paragraphs:["\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u041a\u0440\u0430\u0441\u043a\u0430\u043b\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e, \u0447\u0442\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0433\u0440\u0430\u0444\u0430 \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0433\u0440\u0430\u043d\u0435\u0439.             \u0414\u043b\u044f \u0440\u0430\u0437\u0440\u044f\u0436\u0435\u043d\u043d\u044b\u0445 \u0433\u0440\u0430\u0444\u043e\u0432 (m = O(n)) \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u043c.","1. T = {}","2. foreach (u,v) \u2208 E \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044f \u0432\u0435\u0441\u0430 c","3. /TAB/ if \u0432\u0435\u0440\u0448\u0438\u043d\u044b u,v \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442 \u0440\u0430\u0437\u043d\u044b\u043c \u043f\u043e\u0434\u0434\u0435\u0440\u0435\u0432\u044c\u044f\u043c T","4. T = T \u222a {(u,v)}","5. return T","\u041a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c. \u041f\u0443\u0441\u0442\u044c \u0422 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043b\u0435\u0441 MST, \u0435\u0441\u043b\u0438 \u0433\u0440\u0430\u043d\u044c (u,w) \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u0442\u043e\u043c\u0443 \u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0435\u0432\u0443 T'\u2282 T,             \u0442\u043e (\u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0443 \u0446\u0438\u043a\u043b\u0430) \u043e\u043d\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u043e\u0439 \u0432\u0435\u0441\u043e\u043c\u043e\u0439 \u0433\u0440\u0430\u043d\u044c\u044e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430 \u0421 \u2286 T' \u222a {(u,w)} \u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u043c.            \u0418\u043d\u0430\u0447\u0435 (u,v) \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0434\u0432\u0430 MST \u0434\u0435\u0440\u0435\u0432\u0430  T1 \u0438 T2. \u0413\u0440\u0430\u043d\u044c (u,w) - \u0441\u0430\u043c\u0430\u044f \u043b\u0435\u0433\u043a\u0430\u044f \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0434\u0435\u0440\u0435\u0432\u044c\u044f\u043c\u0438, \u0438\u043d\u0430\u0447\u0435 \u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0431\u044b\u043b\u043e \u0431\u044b \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u0440\u0430\u043d\u0435\u0435.            \u0421\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0443 \u0441\u0435\u0447\u0435\u043d\u0438\u044f \u043e\u043d\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0434\u0435\u0440\u0435\u0432\u043e MST. \u0412\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 O(m log m), \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0442\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u0432\u043e\u0451\u043c \u043d\u0430 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0433\u0440\u0430\u043d\u0435\u0439 \u0433\u0440\u0430\u0444\u0430."],graphAnimationExample:{graph:{nodes:[{id:1,label:"1"},{id:2,label:"2"},{id:3,label:"3"},{id:4,label:"4"}],edges:[{id:12,from:1,to:2,label:"1",font:{size:45}},{id:23,from:2,to:3},{id:24,from:2,to:4},{id:34,from:3,to:4}]},animationPath:[]}},graphQuestion:{graph:{nodes:[{id:1,label:"1"},{id:2,label:"2"},{id:3,label:"3"},{id:4,label:"4"},{id:5,label:"5"},{id:6,label:"6"},{id:7,label:"7"},{id:8,label:"8"}],edges:[{id:12,from:1,to:2},{id:13,from:1,to:3},{id:24,from:2,to:4},{id:25,from:2,to:5},{id:36,from:3,to:6},{id:68,from:6,to:8},{id:57,from:5,to:7}]},correctPaths:[[13,12,24,25,36,57,68],[13,12,24,25,36,68,57],[13,12,25,24,36,57,68],[13,12,25,24,36,68,57],[13,12,36,24,25,57,68],[13,12,36,24,25,68,57],[13,12,36,25,24,57,68],[13,12,36,25,24,68,57],[12,13,24,25,36,57,68],[12,13,24,25,36,68,57],[12,13,25,24,36,57,68],[12,13,25,24,36,68,57],[12,13,36,24,25,57,68],[12,13,36,24,25,68,57],[12,13,36,25,24,57,68],[12,13,36,25,24,68,57]]}}],p={apiKey:"AIzaSyDuxcEkgf_OaiUrNxdgnglnx69C_mzHZi0",authDomain:"webapp-3ed23.firebaseapp.com",databaseURL:"https://webapp-3ed23-default-rtdb.firebaseio.com",projectId:"webapp-3ed23",storageBucket:"webapp-3ed23.appspot.com",messagingSenderId:"835037297481",appId:"1:835037297481:web:7e45a05b992fc199897898"},j=function(){return Object(h.jsx)(m.a,{children:function(e){var t=e.isSignedIn;e.user,e.providerId;return Object(h.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark px-5",children:[Object(h.jsx)("a",{className:"navbar-brand",children:"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u0442\u0435\u043e\u0440\u0438\u0438 \u0433\u0440\u0430\u0444\u043e\u0432"}),Object(h.jsxs)("div",{className:"navbar-nav mr-auto",children:[!t&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{to:"/sign-up",className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{to:"/login",className:"nav-link",children:"\u0412\u0445\u043e\u0434"})})]}),t&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{to:"/problems",className:"nav-link",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(l.b,{onClick:function(){return b.a.auth().signOut()},className:"nav-link",children:"\u0412\u044b\u0439\u0442\u0438"})})]})]})]})}})},f=a(20),g=a(21),x=a(23),v=a(24),O=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n}return Object(g.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({email:e.currentTarget.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.currentTarget.value})}},{key:"signUp",value:function(e){e.preventDefault(),this.state.email.length>=5&&this.state.password.length>=5&&b.a.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch((function(e){e.code;var t=e.message;c.b.error(t)}))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"text-center container h-100 flex-grow",children:Object(h.jsx)("div",{className:"row align-items-center h-100 flex-grow",children:Object(h.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-8 col-xs-10 mx-auto",children:Object(h.jsxs)("form",{className:"d-flex flex-column align-items-center form-signin",onSubmit:function(t){e.signUp(t)},children:[Object(h.jsx)("h1",{className:"pt-5 mt-5 pb-3",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(h.jsx)("label",{className:"sr-only",htmlFor:"inputEmail",children:"\u041f\u043e\u0447\u0442\u0430"}),Object(h.jsx)("input",{type:"email",id:"inputEmail",className:"form-control mb-3 mt-3 pl-4",style:{border:"none",fontSize:"14px",borderBottom:"1px solid #eee"},placeholder:"Email",onChange:function(t){e.handleEmailChange(t)},required:!0}),Object(h.jsx)("label",{className:"sr-only",htmlFor:"inputPassword",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)("input",{type:"password",id:"inputPassword",className:"form-control mb-4 pl-4",style:{border:"none",fontSize:"14px",borderBottom:"1px solid #eee"},placeholder:"Password",onChange:function(t){e.handlePasswordChange(t)},required:!0}),Object(h.jsx)("button",{className:"btn btn-dark border-0 mt-3 mb-3 w-100 py-1",style:{fontSize:"18px",background:"#37AAE9"},type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(h.jsx)("button",{className:"btn btn-dark border-0 mb-3 w-100 py-1",onClick:function(){var e=new b.a.auth.GoogleAuthProvider;b.a.auth().signInWithPopup(e)},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Google"})]})})})})}}]),a}(n.Component),y=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n}return Object(g.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({email:e.currentTarget.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.currentTarget.value})}},{key:"login",value:function(e){e.preventDefault(),this.state.email.length>=5&&this.state.password.length>=5&&b.a.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch((function(e){e.code;var t=e.message;c.b.error(t)}))}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"text-center container h-100 flex-grow",children:Object(h.jsx)("div",{className:"row align-items-center h-100 flex-grow",children:Object(h.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-8 col-xs-10 mx-auto",children:Object(h.jsxs)("form",{className:"d-flex flex-column align-items-center form-signin",onSubmit:function(t){e.login(t)},children:[Object(h.jsx)("h1",{className:"pt-5 mt-5 pb-3",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(h.jsx)("label",{className:"sr-only",htmlFor:"inputEmail",children:"\u041f\u043e\u0447\u0442\u0430"}),Object(h.jsx)("input",{type:"email",id:"inputEmail",className:"form-control mb-3 mt-3 pl-4",style:{border:"none",fontSize:"14px",borderBottom:"1px solid #eee"},placeholder:"Email",onChange:function(t){e.handleEmailChange(t)},required:!0}),Object(h.jsx)("label",{className:"sr-only",htmlFor:"inputPassword",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(h.jsx)("input",{type:"password",id:"inputPassword",className:"form-control mb-4 pl-4",style:{border:"none",fontSize:"14px",borderBottom:"1px solid #eee"},placeholder:"Password",onChange:function(t){e.handlePasswordChange(t)},required:!0}),Object(h.jsx)("button",{className:"btn btn-dark border-0 mt-3 mb-3 w-100 py-1",style:{fontSize:"18px",background:"#37AAE9"},type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(h.jsx)("button",{className:"btn btn-dark border-0 mb-3 w-100 py-1",onClick:function(){var e=new b.a.auth.GoogleAuthProvider;b.a.auth().signInWithPopup(e)},children:"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Google"})]})})})})}}]),a}(n.Component),w=a(90),S=a(148),k=a(149),C=a(63),F=a.n(C),N=a(34);a(300);N.a.initializeApp(p);var P=N.a.database().ref("/attempts"),E=new(function(){function e(){Object(f.a)(this,e)}return Object(g.a)(e,[{key:"getAll",value:function(){return P}},{key:"create",value:function(e){return P.push(e)}},{key:"update",value:function(e,t){return P.child(e).update(t)}},{key:"delete",value:function(e){return P.child(e).remove()}},{key:"deleteAll",value:function(){return P.remove()}}]),e}()),D=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).timer=function(e){return new Promise((function(t){return setTimeout(t,e)}))},n.problemConfig=u.find((function(t){return t.name==e.match.params.name})),n}return Object(g.a)(a,[{key:"runGraphAnimationExample",value:function(){var e=Object(k.a)(Object(w.a)().mark((function e(t){var a,n,r;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(S.a)(this.problemConfig.theory.graphAnimationExample.animationPath),e.prev=1,a.s();case 3:if((n=a.n()).done){e.next=10;break}return r=n.value,t.selectEdges([r]),e.next=8,this.timer(1e3);case 8:e.next=3;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),a.e(e.t0);case 15:return e.prev=15,a.f(),e.finish(15);case 18:return e.next=20,this.timer(2e3);case 20:this.runGraphAnimationExample(t);case 21:case"end":return e.stop()}}),e,this,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:[this.problemConfig.name," \u0422\u0435\u043e\u0440\u0438\u044f"]}),Object(h.jsx)("div",{children:this.problemConfig.theory.paragraphs.map((function(e){return Object(h.jsx)("p",{children:e.split("/TAB/").map((function(e){return Object(h.jsxs)("span",{children:[e,"\xa0 \xa0 \xa0"]})}))})}))}),Object(h.jsx)(l.b,{to:"/problems/".concat(this.problemConfig.name,"/test"),className:"btn-dark btn mt-3",children:"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442"}),Object(h.jsx)(F.a,{options:A,graph:this.problemConfig.theory.graphAnimationExample.graph,getNetwork:function(t){e.runGraphAnimationExample(t)}})]})}}]),a}(n.Component),A={layout:{hierarchical:!0},edges:{color:"#000000",physics:!1,width:2},nodes:{font:{size:25}},interaction:{dragNodes:!1,dragView:!1,zoomView:!1},height:"500px"},T=a(150),B=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).problemConfig=u.find((function(t){return t.name==e.match.params.name})),n.state={currentPath:[],possibleCorrectPaths:n.problemConfig.graphQuestion.correctPaths,alreadyFailed:!1,alreadyPassed:!1},n}return Object(g.a)(a,[{key:"submitAttempt",value:function(e){var t={userId:N.a.auth().currentUser.uid,userEmail:N.a.auth().currentUser.email,problem:this.problemConfig.name,result:e,date:(new Date).toGMTString()};E.create(t).catch((function(e){console.log(e),c.b.error("\u041d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u0448\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440: "+e.message)}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:[this.problemConfig.name," \u0422\u0435\u0441\u0442"]}),Object(h.jsx)("div",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0440\u0435\u0431\u0440\u043e, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0432\u0435\u0440\u0448\u0438\u043d\u044b 1, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0439\u0442\u0435 \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0440\u0435\u0431\u0440\u0430 \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d."}),Object(h.jsx)(l.b,{to:"/problems/".concat(this.problemConfig.name,"/theory"),className:"btn-dark btn mt-3",children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0442\u0435\u043e\u0440\u0438\u0438"}),Object(h.jsx)(F.a,{options:I,graph:this.problemConfig.graphQuestion.graph,events:{selectEdge:function(t){if(e.state.alreadyFailed)c.b.info("\u0422\u0435\u0441\u0442 \u0443\u0436\u0435 \u043f\u0440\u043e\u0432\u0430\u043b\u0435\u043d.");else if(e.state.alreadyPassed)c.b.info("\u0422\u0435\u0441\u0442 \u0443\u0436\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d.");else if(0===t.nodes.length)if(t.edges.length>1)c.b.error("\u041d\u0435 \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043e \u0431\u043e\u043b\u0435\u0435 1 \u0443\u0437\u043b\u0430.");else{var a=t.edges[0];if(a!=e.state.currentPath[e.state.currentPath.length-1]){e.setState({currentPath:[].concat(Object(T.a)(e.state.currentPath),[a])}),console.log(e.state);for(var n=function(t){e.setState({possibleCorrectPaths:e.state.possibleCorrectPaths.filter((function(a){return a[t]===e.state.currentPath[t]}))})},r=0;r<e.state.currentPath.length;r++)n(r);return 0==e.state.possibleCorrectPaths.length?(c.b.error("\u0422\u0435\u0441\u0442 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d.",{autoClose:!1}),e.setState({alreadyFailed:!0}),void e.submitAttempt("FAILURE")):e.state.possibleCorrectPaths.some((function(t){return t.length===e.state.currentPath.length}))?(c.b.success("\u0422\u0435\u0441\u0442 \u0441\u0434\u0430\u043d.",{autoClose:!1}),e.setState({alreadyPassed:!0}),void e.submitAttempt("SUCCESS")):void 0}}else c.b.info("\u0412\u044b\u0431\u0440\u0430\u043d \u0443\u0437\u0435\u043b. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0440\u0435\u0431\u0440\u043e.")}}})]})}}]),a}(n.Component),I={layout:{hierarchical:!0},edges:{color:"#000000",physics:!1,width:2},nodes:{font:{size:25}},interaction:{dragNodes:!1,dragView:!1,zoomView:!1},height:"800px"},_=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container pt-5 justify-content-center w-50",children:[Object(h.jsx)("div",{className:"row h5 text-center",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0434\u043b\u044f \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u044f:"}),u&&u.map((function(e){return Object(h.jsx)("div",{className:"row pt-2",children:Object(h.jsx)(l.b,{to:"/problems/".concat(e.name,"/theory"),className:"btn-dark btn",children:e.name})})}))]})}}]),a}(n.Component),z=function(){return Object(h.jsx)(l.a,{children:Object(h.jsx)(m.b,Object(o.a)(Object(o.a)({},p),{},{firebase:b.a,children:Object(h.jsx)("div",{children:Object(h.jsx)(m.a,{children:function(e){var t=e.isSignedIn;e.user,e.providerId;return Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"container mt-3",children:Object(h.jsxs)(d.d,{children:[t&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.b,{exact:!0,path:"/problems",component:_}),Object(h.jsx)(d.b,{exact:!0,path:"/problems/:name/theory",component:D}),Object(h.jsx)(d.b,{exact:!0,path:"/problems/:name/test",component:B}),Object(h.jsx)(d.a,{exact:!0,from:"/",to:"/problems"}),Object(h.jsx)(d.a,{exact:!0,from:"/login",to:"/problems"})]}),!t&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.b,{exact:!0,path:"/login",component:y}),Object(h.jsx)(d.b,{exact:!0,path:"/sign-up",component:O}),Object(h.jsx)(d.a,{exact:!0,from:"/",to:"/login"}),Object(h.jsx)(d.a,{exact:!0,from:"/problems",to:"/login"})]})]})})}),Object(h.jsx)(c.a,{})]})}})})}))})};Object(i.render)(Object(h.jsx)(z,{}),document.getElementById("root"));var G=z,Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,302)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),Q()}},[[301,1,2]]]);
//# sourceMappingURL=main.216f1f48.chunk.js.map