def two_sum(nums, target)
    nums.each_with_index do |n, i|
        diff = target - n
        if nums[(i+1)..].include? diff
            return [i, nums[(i+1)..].index(diff)+(i+1)]
        end
    end
end

print two_sum([3,3], 6)
puts
print two_sum([3,2,4], 6)
puts
print two_sum([2,7,11,15], 9)

# 22/Nov/2021
# Runtime: 500 ms, faster than 23.77% of Ruby online submissions for Two Sum.
# Memory Usage: 210.3 MB, less than 84.62% of Ruby online submissions for Two Sum.