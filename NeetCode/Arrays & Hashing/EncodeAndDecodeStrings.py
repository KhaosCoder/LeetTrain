"""
@param: strs: a list of strings
@return: encodes a list of strings to a single string.
"""
def encode(strs):
    # write your code here
    code = ""
    for word in strs:
        code += str(len(word)) + "$" + word
    return code

"""
@param: str: A string
@return: dcodes a single string to a list of strings
"""
def decode(str):
    # write your code here
    i = 0
    res = []
    while i < len(str):
        num = ""
        while str[i] != '$':
            num += str[i]
            i += 1
        i += 1
        res.append(str[i:i+int(num)])
        i += int(num)
    return res


print (encode(["aafsd", "bhrgtfdx", "c456"]))
print (decode(encode(["aafsd", "bhrgtfdx", "c456"])))