const withDuplicates = ["a", "b", "a", "c", "b", "a"];
let filtered = [];

for (let i = 0; i < withDuplicates.length; i++) {
    if (!filtered.includes(withDuplicates[i])) {
        filtered.push(withDuplicates[i]);
    }
}

console.log(filtered);