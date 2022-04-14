var prompts = [
" List 5 things you’re grateful for today. ",
" What do you like most about your personality? ",
" Whom do you trust the most? Why? ",
" What are your strengths in friendships or relationships (e.g., kindness, empathy)? ",
" What do you most want for your children (or future children)? ",
" How do you draw strength from loved ones? ",
" What boundaries could you set in your relationships to safeguard your own wellbeing? ",
" What do you value most in your relationships, with romantic partners, friends or family? ",
" What five traits do you value most in potential partners? ",
" Write a love letter to yourself. ",
" What are three important lessons have you learned from previous relationships? ",
" What are three things that are working well in your current relationship? ",
" What are three things that could be better in your current relationship? ",
" How do you show compassion to others? How can you extend that same compassion to yourself? ",
" I get anxious when _____________. ",
" When do you feel most happy? ",
" What was one moment of joy or beauty you experienced today? ",
" Describe a place where you feel most relaxed and peaceful. ",
" Write a letter of forgiveness to yourself. ",
" What or who motivates you the most? ",
" Share an act of selflessness or kindness you did for someone. How did it feel to do this? ",
" What was your favorite story or book as a child? Why did you like it so much? ",
" What’s the most rewarding part of your work? ",
" What’s your favorite part of your day? ",
" Which parts of your daily life cause the most stress or frustration? How do you cope with them? ",
];


    var prompts = prompts[Math.floor(Math.random() * prompts.length)];
        document.getElementById("randomprompts").innerHTML = prompts;
