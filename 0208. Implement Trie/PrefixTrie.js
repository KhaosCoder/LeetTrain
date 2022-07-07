// function TrieNode(endOfWord) {
//     this.children = null;
//     this.endOfWord = endOfWord;
// }

// var Trie = function() {
//     this.root = new TrieNode();
// };

// /** 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
//     let len = word.length;
//     let dup = this.root;
//     for (let i = 0; i < len; i++) {
//         let eow = i === len-1;
//         let currChar = word[i];
//         console.log("INSERT => ", currChar);
//         if (!dup.children)
//             dup.children = new Map();
//         // only update
//         if (dup.children.has(currChar)) {
//             console.log("Already here")
//             if (eow) dup.children.get(currChar).endOfWord = true;
//         }
//         else {
//             console.log("First time");
//             dup.children.set(currChar, new TrieNode(eow));
//         }
//         // go down the tree
//         dup = dup.children.get(currChar);
//         console.log(dup)
//     }
// };

// /** 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
//     if (!this.root.children)
//         return false;
//     let len = word.length;
//     let dup = this.root;
//     for (let i = 0; i < len; i++) {
//         let eow = i === len-1;
//         let currChar = word[i];
//         if (!dup.children || !dup.children.has(currChar))
//             return false;
//         let next = dup.children.get(currChar);
//         if (next.endOfWord && eow)
//             return true;
//         dup = next;
//     }
//     return false;
// };

// /** 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
//     if (!this.root.children)
//         return false;
//     let len = prefix.length;
//     let dup = this.root;
//     for (let i = 0; i < len; i++) {
//         let currChar = prefix[i];
//         if (!dup.children || !dup.children.has(currChar))
//             return false;
//         let next = dup.children.get(currChar);
//         dup = next;
//     }
//     return true;
// };


// var trie = new Trie();
// console.log("search(a)::True => ", trie.search("a")); // false
// console.log("Inserting => apple");
// trie.insert("apple");
// console.log("search(apple)::True => ", trie.search("apple")); // true
// console.log("search(app)::False => ", trie.search("app")); // false
// console.log("startsWith(app)::True => ", trie.startsWith("app")); // true
// console.log("Inserting => app");
// trie.insert("app");
// console.log("search(app)::True => ", trie.search("app")); // true

// July 7, 2022
// Runtime: 266 ms, faster than 64.70% of JavaScript online submissions for Implement Trie (Prefix Tree).
// Memory Usage: 71.7 MB, less than 17.72% of JavaScript online submissions for Implement Trie (Prefix Tree).

// ===================================================================
function TrieNode() {
    this.children = new Map();
    this.endOfWord = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for (let char of word) {
        if (!curr.children.has(char))
            curr.children.set(char, new TrieNode());
        curr = curr.children.get(char);
    }
    curr.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    for (let char of word) {
        if (!curr.children.has(char))
            return false
        curr = curr.children.get(char);
    }
    return curr.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for (let char of prefix) {
        if (!curr.children.has(char))
            return false
        curr = curr.children.get(char);
    }
    return true;
};

var trie = new Trie();
console.log("search(a)::True => ", trie.search("a")); // false
console.log("Inserting => apple");
trie.insert("apple");
console.log("search(apple)::True => ", trie.search("apple")); // true
console.log("search(app)::False => ", trie.search("app")); // false
console.log("startsWith(app)::True => ", trie.startsWith("app")); // true
console.log("Inserting => app");
trie.insert("app");
console.log("search(app)::True => ", trie.search("app")); // true

// July 7, 2022: optimized
// Runtime: 218 ms, faster than 85.11% of JavaScript online submissions for Implement Trie (Prefix Tree).
// Memory Usage: 66.7 MB, less than 31.05% of JavaScript online submissions for Implement Trie (Prefix Tree).