def lengthOfLongestSubstring(s: str) -> int:
    chars,l,res = set(),0,0
    
    for r in range(len(s)):
        while s[r] in chars:
            chars.remove(s[l])
            l+=1
        chars.add(s[r])
        res = max(res, r-l+1)
        
    return res

print(lengthOfLongestSubstring("abcabcbb"))
print(lengthOfLongestSubstring("bbbbb"))
print(lengthOfLongestSubstring("pwwkew"))

# 09/Nov/2021
# Runtime: 61 ms, faster than 70.09% of Python3 online submissions for Longest Substring Without Repeating Characters.
# Memory Usage: 14.4 MB, less than 25.47% of Python3 online submissions for Longest Substring Without Repeating Characters.