class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

      if len(s) != len(t): 
         return False

      sdict = {}

      for letter in s: 
         if not letter in sdict:
            sdict[letter] = 1
         else: 
            sdict[letter] += 1
      
      for letter in t: 
         if not letter in sdict: 
            return False
         if sdict[letter] > 0:
            sdict[letter] -= 1 
         else: 
            return False
      
      return True 
      
      
      

        