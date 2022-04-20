# class Solution:
#     def longestPalindrome(self, s: str) -> str:
#         l,r,pal,count = 0,0,"",0
#         for i in range(len(s)):
#             l,r = i,i
#             while l >=0 and r < len(s) and s[l] == s[r]:
#                 count = r-l+1
#                 if (count > len(pal)):
#                     pal = s[l:r+1]
#                 l-=1
#                 r+=1
#             l,r = i,i+1
#             while l >=0 and r < len(s) and s[l] == s[r]:
#                 count = r-l+1
#                 if (count > len(pal)):
#                     pal = s[l:r+1]
#                 l-=1
#                 r+=1
#         return pal

# 14/Dic/2021
# Runtime: 1444 ms, faster than 41.41% of Python3 online submissions for Longest Palindromic Substring
# Memory Usage: 14.3 MB, less than 81.57% of Python3 online submissions for Longest Palindromic Substring.

class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) <= 1:
            return s
        p, count, = 0,1
        for i in range(len(s)):
            # print(count)
            print(i-count)
            print(s[i:])
            if i-count >=1 and s[i-count-1:i+1] == s[i-count-1:i+1][::-1]:
                # print("par: " + s[i-count-1:i+1])
                p=i-count-1
                count+=2                
                continue

            if i-count >=0 and s[i-count:i+1] == s[i-count:i+1][::-1]:
                # print("impar: " + s[i-count:i+1])
                p=i-count
                count+=1
                # print(str(r) + " = " + str(l))

        return s[p:p+count]

s = Solution()
print(s.longestPalindrome("000r000frt"))
# print(s.longestPalindrome("abbbb") +  " - bbbb")
# print(s.longestPalindrome("babad") +  " - bab .. aba")
# print(s.longestPalindrome("cbbd") +  " - bb")
# print(s.longestPalindrome("a") +  " - a")
# print(s.longestPalindrome("ac") +  " - a .. c")
# print(s.longestPalindrome("abb") +  " - bb")
# print(s.longestPalindrome("abbb") +  " - bbb")
# print(s.longestPalindrome("aacabdkacaa") +  " - aca")