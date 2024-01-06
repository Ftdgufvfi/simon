var buttonColors = ["red","blue","green","yellow"];
var pattern = [];
var userClickedPattern = [];
var level = 0;
$('html').keypress(function()
{
    level = 0;
    setTimeout(function() {
        nextSequence();
    }, 500);
});
$(".btn").click(function() 
{
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    addAnimation(userChosenColour);
    checkAnswer(level,userClickedPattern.length-1);
  });
function checkAnswer(level,idx)
{
    if(userClickedPattern[idx]===pattern[idx])
    {
        if(idx==level-1)
        {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else
    {
        $("*").addClass("game-over");
        $("h1").text("Game-over! Press any key to restart the level!");
        setTimeout(function() {
            $('*').removeClass("game-over");
        }, 200);
        var audio = new Audio("wrong.mp3");
        audio.play();
    }

}
function nextSequence()
{
    userClickedPattern = [];
    level++;
    var a = Math.floor(Math.random()*4);
    var color = buttonColors[a];
    $("h1").text("level "+level);
    pattern.push(color);
    addAnimation(color);
    return a;
}




function playSound(color)
{
    var audio = new Audio(color + ".mp3");
    audio.play();
}
function addAnimation(color)
{
    var idi = "#"+color;
    $(idi).fadeOut(100).fadeIn(100);
}
