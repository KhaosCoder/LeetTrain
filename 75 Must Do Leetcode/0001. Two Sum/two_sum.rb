def two_sum(nums, target)
    hm = {}
    nums.each_with_index do |n, i|
        diff = target - n
        if hm.include? diff
            return [hm[diff], i]
        else hm[n] = i
        end
    end
end

# 23/Nov/2021
# Runtime: 97 ms, faster than 41.36% of Ruby online submissions for Two Sum.
# Memory Usage: 210.5 MB, less than 70.75% of Ruby online submissions for Two Sum.

print two_sum([3,3], 6)
puts
print two_sum([3,2,4], 6)
puts
print two_sum([2,7,11,15], 9)

=begin Memory Efficient
def two_sum(nums, target)
    nums.each_with_index do |n, i|
        diff = target - n
        if nums[(i+1)..].include? diff
            return [i, nums[(i+1)..].index(diff)+(i+1)]
        end
    end
end

# 22/Nov/2021
# Runtime: 500 ms, faster than 23.77% of Ruby online submissions for Two Sum.
# Memory Usage: 210.3 MB, less than 84.62% of Ruby online submissions for Two Sum.
=end