player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player3_name = localStorage.getItem("player3_name");

player1_score = 0;
player2_score = 0;
player3_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player3_name").innerHTML = player3_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
document.getElementById("player3_score").innerHTML = player3_score ;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
document.getElementById("third_persion").innerHTML = "Third player : " + player3_name;

function send() {
    number1 = document.getElementById("number1").value;
     number2 = document.getElementById("number2").value;
    number3 = document.getElementById("number3").value;
    actual_answer = parseInt(number1) + parseInt(number2) + parseInt(number3);
    console.log(actual_answer);
    
    question_number = "<h4>" + number1 + "+"+ number2 + "+"+ number2 +"<h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
     document.getElementById("number2").value = "";
    document.getElementById("number3").value = "";
}
question_turn = "player1";
answer_turn = "player2";
nutral = "player3";
function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
        {
            if(answer_turn == "player1")
                {
                    player1_score = player1_score +1;
                    document.getElementById("player1_score").innerHTML = player1_score;
                }
            else if(answer_turn == "player2")
                {
                    player2_score = player2_score +1;
                    document.getElementById("player2_score").innerHTML = player2_score; 
                }
             else
                {
                    player3_score = player3_score +1;
                    document.getElementById("player3_score").innerHTML = player3_score; 
                }
             }
    if(question_turn == "player1")
    {
     question_turn = "player2"; 
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    }
    else if(question_turn == "player2")
        {
         question_turn = "player3"; 
        document.getElementById("player_question").innerHTML = "Question Turn : " + player3_name;   
        }
     else
        {
         question_turn = "player1"; 
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;   
        }
    if(answer_turn == "player1")
        {
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
        }
    else if(answer_turn == "player2")
        {
            answer_turn = "player3";
            document.getElementById("player_answer").innerHTML = "Answer Turn : " + player3_name;
        }
    else
        {
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
        }
    
    if(nutral == "player1")
    {
     nutral = "player2"; 
        document.getElementById("third_persion").innerHTML = "Third player : " + player2_name;
    }
    else if(nutral == "player2")
        {
         nutral = "player3"; 
        document.getElementById("third_persion").innerHTML = "Third player : " + player3_name;   
        }
     else
        {
         nutral = "player1"; 
        document.getElementById("third_persion").innerHTML = "Third player : " + player1_name;   
        }
    document.getElementById("output").innerHTML = "";
}