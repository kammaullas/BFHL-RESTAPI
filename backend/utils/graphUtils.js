function isValidEdge(edge) {
    edge = edge.trim();
    const regex = /^[A-Z]->[A-Z]$/;
    if (!regex.test(edge)) return false;

    const [p, c] = edge.split("->");
    if (p === c) return false;

    return true;
}

function buildGraph(data) {
    let validEdges = [];
    let invalid = [];
    let duplicate = new Set();
    let seen = new Set();

    for (let edge of data) {
        edge = edge.trim();

        if (!isValidEdge(edge)) {
            invalid.push(edge);
            continue;
        }

        if (seen.has(edge)) {
            duplicate.add(edge);
            continue;
        }

        seen.add(edge);
        validEdges.push(edge);
    }

    let graph = {};
    let parentMap = {};

    for (let edge of validEdges) {
        let [p, c] = edge.split("->");

        if (parentMap[c]) continue; // multi-parent discard

        parentMap[c] = p;

        if (!graph[p]) graph[p] = [];
        graph[p].push(c);
    }

    let nodes = new Set();
    validEdges.forEach(e => {
        let [p, c] = e.split("->");
        nodes.add(p);
        nodes.add(c);
    });

    let children = new Set(Object.keys(parentMap));
    let roots = [...nodes].filter(n => !children.has(n));

    if (roots.length === 0 && nodes.size > 0) {
        roots = [Array.from(nodes).sort()[0]];
    }

    let visitedGlobal = new Set();
    let hierarchies = [];
    let totalTrees = 0;
    let totalCycles = 0;
    let largestDepth = 0;
    let largestRoot = "";

    function dfs(node, visitedLocal) {
        if (visitedLocal.has(node)) return null; // cycle

        visitedLocal.add(node);

        let children = graph[node] || [];        
        let obj = {};
        let maxDepth = 1;

        for (let child of children) {
            let res = dfs(child, new Set(visitedLocal));
            if (res === null) return null;

            obj[child] = res.tree;
            maxDepth = Math.max(maxDepth, res.depth + 1);
        }

        return { tree: obj, depth: maxDepth };
    }

    for (let root of roots) {
        let result = dfs(root, new Set());

        if (result === null) {
            hierarchies.push({
                root,
                tree: {},
                has_cycle: true
            });
            totalCycles++;
        } else {
            hierarchies.push({
                root,
                tree: { [root]: result.tree },
                depth: result.depth
            });

            totalTrees++;

            if (
                result.depth > largestDepth ||
                (result.depth === largestDepth && root < largestRoot)
            ) {
                largestDepth = result.depth;
                largestRoot = root;
            }
        }
    }

    return {
        hierarchies,
        invalid_entries: invalid,
        duplicate_edges: [...duplicate],
        summary: {
            total_trees: totalTrees,
            total_cycles: totalCycles,
            largest_tree_root: largestRoot
        }
    };
}

module.exports = { buildGraph };