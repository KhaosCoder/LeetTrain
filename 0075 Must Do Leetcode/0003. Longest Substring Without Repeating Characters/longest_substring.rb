def length_of_longest_substring(s)
    r = 0
    l = 0
    max_len = 0
    chars = Set.new
    s.each_char do |c|
        if !chars.include? c
            max_len = [max_len, r - l + 1].max
        else 
            while chars.include? c
                chars.delete(s[l])
                l += 1
            end
        end
        r += 1
        chars.add(c)
    end
    return max_len
end

print length_of_longest_substring("abcabcbb")
puts
print length_of_longest_substring("bbbbb")
puts
print length_of_longest_substring("pwwkew")

# 23/Nov/2021
# Runtime: 124 ms, faster than 56.79% of Ruby online submissions for Longest Substring Without Repeating Characters.
# Memory Usage: 210 MB, less than 96.54% of Ruby online submissions for Longest Substring Without Repeating Characters.