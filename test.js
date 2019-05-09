function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function nextRound(){
    index = round.indexOf(current_Round);
    round.splice(index, 1);
    random = getRandomInt(round.length);
    current_Round= round[random];
    // document.getElementById('guess').value = "";
    // document.getElementById('photo1').src = current_Round.photo1;
    // document.getElementById('photo2').src = current_Round.photo2;
    // document.getElementById('photo3').src = current_Round.photo3;
    // document.getElementById('photo4').src = current_Round.photo4;
}
const round_1 = {
    photo1: "img/round 1/image1.jpg",
    photo2: "img/round 1/image2.jpg",
    photo3: "img/round 1/image3.jpg",
    photo4: "img/round 1/image4.jpg",
    answer: "Technology"
};
const round_2 = {
    photo1: "img/round 2/image1.jpg",
    photo2: "img/round 2/image2.jpg",
    photo3: "img/round 2/image3.jpg",
    photo4: "img/round 2/image4.jpg",
    answer: "Train"
};
const round_3 = {
    photo1: "img/round 3/image1.jpg",
    photo2: "img/round 3/image2.jpg",
    photo3: "img/round 3/image3.jpg",
    photo4: "img/round 3/image4.jpg",
    answer: "Heavy"
};
const round_4 = {
    photo1: "img/round 4/image1.jpg",
    photo2: "img/round 4/image2.jpg",
    photo3: "img/round 4/image3.jpg",
    photo4: "img/round 4/image4.jpg",
    answer: "Trip"
};
const round_5 = {
    photo1: "img/round 5/image1.jpg",
    photo2: "img/round 5/image2.jpg",
    photo3: "img/round 5/image3.jpg",
    photo4: "img/round 5/image4.jpg",
    answer: "Bass"
};
const round_6 = {
    photo1: "img/round 6/image1.jpg",
    photo2: "img/round 6/image2.jpg",
    photo3: "img/round 6/image3.jpg",
    photo4: "img/round 6/image4.jpg",
    answer: "Peace"
};
const round_7 = {
    photo1: "img/round 7/image1.jpg",
    photo2: "img/round 7/image2.jpg",
    photo3: "img/round 7/image3.jpg",
    photo4: "img/round 7/image4.jpg",
    answer: "swing"
};
const round_8 = {
    photo1: "img/round 8/image1.jpg",
    photo2: "img/round 8/image2.jpg",
    photo3: "img/round 8/image3.jpg",
    photo4: "img/round 8/image4.jpg",
    answer: "record"
};
const round_9 = {
    photo1: "img/round 9/image1.jpg",
    photo2: "img/round 9/image2.jpg",
    photo3: "img/round 9/image3.jpg",
    photo4: "img/round 9/image4.jpg",
    answer: "Marble"
};
const round_10 = {
    photo1: "img/round 10/image1.jpg",
    photo2: "img/round 10/image2.jpg",
    photo3: "img/round 10/image3.jpg",
    photo4: "img/round 10/image4.jpg",
    answer: "slide"
};
const round_11 = {
    photo1: "img/round 11/image1.jpg",
    photo2: "img/round 11/image2.jpg",
    photo3: "img/round 11/image3.jpg",
    photo4: "img/round 11/image4.jpg",
    answer: "braces"
};
const round_12 = {
    photo1: "img/round 12/image1.jpg",
    photo2: "img/round 12/image2.jpg",
    photo3: "img/round 12/image3.jpg",
    photo4: "img/round 12/image4.jpg",
    answer: "organ"
};
const round_13 = {
    photo1: "img/round 13/image1.jpg",
    photo2: "img/round 13/image2.jpg",
    photo3: "img/round 13/image3.jpg",
    photo4: "img/round 13/image4.jpg",
    answer: "fly"
};
const round_14 = {
    photo1: "img/round 14/image1.jpg",
    photo2: "img/round 14/image2.jpg",
    photo3: "img/round 14/image3.jpg",
    photo4: "img/round 14/image4.jpg",
    answer: "smash"
};
const round_15 = {
    photo1: "img/round 15/image1.jpg",
    photo2: "img/round 15/image2.jpg",
    photo3: "img/round 15/image3.jpg",
    photo4: "img/round 15/image4.jpg",
    answer: "adder"
};
const round_16 = {
    photo1: "img/round 16/image1.jpg",
    photo2: "img/round 16/image2.jpg",
    photo3: "img/round 16/image3.jpg",
    photo4: "img/round 16/image4.jpg",
    answer: "wedge"
};
const round_17 = {
    photo1: "img/round 17/image1.jpg",
    photo2: "img/round 17/image2.jpg",
    photo3: "img/round 17/image3.jpg",
    photo4: "img/round 17/image4.jpg",
    answer: "fall"
};
const round_18 = {
    photo1: "img/round 18/image1.jpg",
    photo2: "img/round 18/image2.jpg",
    photo3: "img/round 18/image3.jpg",
    photo4: "img/round 18/image4.jpg",
    answer: "flake"
};
const round_19 = {
    photo1: "img/round 19/image1.jpg",
    photo2: "img/round 19/image2.jpg",
    photo3: "img/round 19/image3.jpg",
    photo4: "img/round 19/image4.jpg",
    answer: "ring"
};
const round_20 = {
    photo1: "img/round 20/image1.jpg",
    photo2: "img/round 20/image2.jpg",
    photo3: "img/round 20/image3.jpg",
    photo4: "img/round 20/image4.jpg",
    answer: "skate"
};
var round = [round_1,round_2, round_3, round_4, round_5, round_6, round_7, round_8, round_9, round_10, round_11, round_12, round_13, round_14, round_15, round_16, round_17, round_18, round_19, round_20]
var current_Round = round_1
var players = {};
function enterUser(username) {
    if (username in players) {}
    else players[username] = {"user": username, "score": 0};
    return players
}
function enterGuess(word, guess, username) {
    if (word == guess) players[username]["score"] += 1
    else players[username]["score"] -= 1
}

var assert = require('assert');
describe('getting the Random int', function() {
    it('should return the number of a round within the range', function(){
        getRandomInt(20);
        var isValid = getRandomInt(20);
        var truth = "is Valid";
        if (isValid <= 20) {
            truth = "is Valid";
        }
        else{
            truth = 'is not valid'
        }
        assert.equal('is Valid', truth);
    });
});

describe('get new Round', function() {
    it('if round 1 is current round, round should no longer be in list', function(){
        nextRound();
        var truth = false;
        if ( round.indexOf(round_1) > -1 ) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(false, truth);
    });
    it('new round should not be round 1', function(){
        nextRound();
        var truth = true;
        if(current_Round != round_1) {
            truth = true;
        }
        else {
            truth = false;
        }
        assert.equal(true, truth);
    });
});
describe('checking if the functions pictures are aligned with the right word', function() {
    it('should say if the guess were aligned w its respective picture that it would be right', function(){
        var guess = 'Technology';
        var correct = round_1.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_1.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_1.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'Train';
        var correct = round_2.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_2.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_2.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'Heavy';
        var correct = round_3.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_3.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_3.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'Trip';
        var correct = round_4.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_4.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_4.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'Bass';
        var correct = round_5.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_5.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_5.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'Peace';
        var correct = round_6.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_6.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_6.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'swing';
        var correct = round_7.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_7.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_7.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'record';
        var correct = round_8.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_8.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_8.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'Marble';
        var correct = round_9.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_9.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_9.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'slide';
        var correct = round_10.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_10.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_10.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'braces';
        var correct = round_11.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_11.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_11.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'organ';
        var correct = round_12.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_12.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_12.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'fly';
        var correct = round_13.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_13.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_13.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'smash';
        var correct = round_14.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_14.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_14.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'adder';
        var correct = round_15.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_15.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_15.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'wedge';
        var correct = round_16.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_16.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_16.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'fall';
        var correct = round_17.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_17.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_17.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'flake';
        var correct = round_18.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_18.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_18.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'ring';
        var correct = round_19.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_19.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_19.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if guess is right', function(){
        var guess = 'skate';
        var correct = round_20.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is correct', truth)
    });
    it('should say if the empty string were aligned w picture that it would be wrong', function(){
        var guess = '';
        var correct = round_20.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });
    it('should say if the wrong guess were aligned w picture that it would be wrong', function(){
        var guess = 'bunny';
        var correct = round_20.answer;
        var truth = 'is correct';
        if (guess === correct) {
            truth = 'is correct';
        }
        else {
            truth = 'is incorrect';
        }
        assert.equal = ('is incorrect', truth)
    });

});

describe('counting pictures', function() {
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_1['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_1['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_1['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_1['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_2['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_2['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_2['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_2['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_3['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_3['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_3['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_3['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_4['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_4['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_4['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_4['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_5['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_5['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_5['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_5['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    }); it('should return correct number of photos', function(){
        var truth = true
        if ((round_6['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_6['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_6['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_6['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_7['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_7['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_7['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_7['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    }); it('should return correct number of photos', function(){
        var truth = true
        if ((round_8['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_8['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_8['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_8['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    }); it('should return correct number of photos', function(){
        var truth = true
        if ((round_9['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_9['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_9['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_9['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_10['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_10['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_10['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_10['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_11['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_11['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_11['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_11['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_12['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_12['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_12['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_12['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_13['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_13['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_13['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_13['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_14['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_14['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_14['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_14['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_15['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_15['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_15['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_15['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_16['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_16['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_16['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_16['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_17['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_17['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_17['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_17['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_18['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_18['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_18['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_18['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_19['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_19['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_19['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_19['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
    it('should return correct number of photos', function(){
        var truth = true
        if ((round_20['photo1']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_20['photo2']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        if ((round_20['photo3']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }if ((round_20['photo4']).includes('jpeg') > -1) {
            truth = true
        }
        else {
            truth = false
        }
        assert.equal(true, truth);
    });
});

// web app testing
describe('entering the user', function() {
    it('get a new user with a score of 0', function(){
        enterUser("username1");
        assert.equal(players["username1"]["user"], "username1");
        assert.equal(players["username1"]["score"], 0);
    });
    it('get an old user with a score of 0', function(){
        enterUser("username1");
        enterUser("username1");
        assert.equal(players["username1"]["user"], "username1");
        assert.equal(players["username1"]["score"], 0);
    });
    it('get 2 old users with scores of 0', function(){
        enterUser("username1");
        enterUser("username1");
        enterUser("username2");
        enterUser("username2");
        assert.equal(players["username1"]["user"], "username1");
        assert.equal(players["username1"]["score"], 0);
        assert.equal(players["username2"]["user"], "username2");
        assert.equal(players["username2"]["score"], 0);
    });
    it('enter correct guess technology', function(){
        enterUser("username1");
        enterGuess("technology", "technology", "username1");
        assert.equal(players["username1"]["user"], "username1");
        assert.equal(players["username1"]["score"], 1);
    });
    it('enter incorrect guess technology', function(){
        enterUser("username2");
        enterGuess("technology", "robot", "username2");
        assert.equal(players["username2"]["user"], "username2");
        assert.equal(players["username2"]["score"], -1);
    });
    it('multiple guesses never get it right technology', function(){
        enterUser("username3");
        enterGuess("technology", "robot", "username3");
        enterGuess("technology", "robot", "username3");
        enterGuess("technology", "robot", "username3");
        enterGuess("technology", "robot", "username3");
        assert.equal(players["username3"]["user"], "username3");
        assert.equal(players["username3"]["score"], -4);
    });
    it('enter correct guess train', function(){
        enterUser("username1");
        enterGuess("train", "train", "username1");
        assert.equal(players["username1"]["user"], "username1");
        assert.equal(players["username1"]["score"], 1);
    });
    it('enter incorrect guess', function(){
        enterUser("username1");
        enterGuess("train", "robot", "username1");
        assert.equal(players["username1"]["user"], "username1");
        assert.equal(players["username1"]["score"], -1);
    });
    it('wrong guesses multiple', function() {
        enterUser("username1");
        enterGuess("train", "robot", "username1");
        enterGuess("train", "robot", "username1");
        enterGuess("train", "robot", "username1");
        enterGuess("train", "robot", "username1");
        assert.equal(players["username1"]["user"], "username1");
        assert.equal(players["username1"]["score"], -4);
    });
    it('wrong guesses multiple but ends w right one', function() {
        enterUser("username1");
        enterGuess("train", "robot", "username1");
        enterGuess("train", "robot", "username1");
        enterGuess("train", "robot", "username1");
        enterGuess("train", "train", "username1");
        assert.equal(players["username1"]["user"], "username1");
        assert.equal(players["username1"]["score"], -2);
    });
});
