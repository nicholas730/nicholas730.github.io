$(document).ready(function () {
    $('td').mouseenter(function () {
        $(this).addClass('hovered');
    });
    $('td').mouseleave(function () {
        $(this).removeClass('hovered');
    });
    $('td').click(function () {
        $('td').removeClass('selected');
        $(this).addClass('selected');
    });
    $(".1_1").click(function () {
        $("#themes").html("Explore the value of numbers</br>Explore where numbers live in our number system</br>Solve problems comparing the value of numbers</br>Investigate number patterns");
        $("#key").html("Show the value of a number using objects or pictures</br>Read numbers to 20 in numerals and words</br>Write numbers to 20 and beyond in numerals</br>Write numbers to 20 in words</br>Identify and represent numbers on the number line</br>Identify and represent numbers using pictorial representations</br>Compare the value of numbers explaining if they are more/ less than or equal to another number or numbers</br>Read and write numbers to 100 in numerals</br>Count on to or back from numbers in ones from any given number up to 100</br>Count in multiples of two starting from zero</br>Count in multiples of five starting from zero</br>Count in multiples of ten starting from zero");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents+"  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACSsfcwEY87MJDLQL10HnOda/Stage%201/St1_U1_Number_System_WR.pdf?dl=0");
    });
    $(".1_2").click(function () {
        $("#themes").html("Explore 2 –D shapes</br>Compare 2 –D shapes</br>Explore 3 –D shapes</br>Compare 3-D shapes");
        $("#key").html("Recognise 2 –D shapes</br>Recognise and name rectangles</br>Recognise and name squares</br>Recognise and name circles</br>Recognise and name triangles</br>Compare 2-D shapes and explain how they are similar or different</br>Recognise 3 –D shapes</br>Recognise and name cuboids</br>Recognise and name cubes</br>Recognise and name pyramids</br>Recognise and name spheres</br>Compare 3-D shapes and explain how they are similar or different");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADFWTNF4Sg4ulfpRYSZ4UnJa/Stage%201/St1_U2_Visualising_Constructing_WR.pdf?dl=0");
    });
    $(".1_3").click(function () {
        $("#themes").html("Investigate one more or one less than any number</br>Investigate number patterns</br>Explore addition and subtraction facts determine, in the context of a problem, levels of accuracy");
        $("#key").html("Identify the number that is one more than a given number</br>Identify the number that is one less than a given number</br>Know addition facts to 10</br>Know subtraction facts from 10</br>Know addition facts within 10</br>Know subtraction facts within 10</br>Know addition facts to 20 </br>Know subtraction facts from 20</br>Know addition facts within 20 </br>Know subtraction facts within 20</br>Count to and across 100 and beyond in ones from any number</br>Count back from 100 and beyond in ones from any number");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACdFkE4s6Ufi8HRFoBpXBzba/Stage%201/St1_U3_Addition_Subtraction_1_WR.pdf?dl=0");
    });
    $(".1_4").click(function () {
        $("#themes").html("Understand the vocabulary of time</br>Organise events</br>Explore telling the time");
        $("#key").html("Know and use the days of the week</br>Know and use the months of the year</br>Know the number of days in each month </br>Recognise and use language relating to dates, including days of the week, weeks, months and years</br>Tell the time to the hour </br>Tell the time to half past the hour</br>Draw hands on a clock face to show time to the hour and half past the hour</br>Draw hands on a clock face to show time to half past the hour</br>Sequence events in chronological order within the same day </br>Sequence events in chronological order within the same week </br>Solve simple problems involving time");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADI5I-2Z4F-OK-f3VJqzhXWa/Stage%201/St1_U4_Time_WR.pdf?dl=0");
    });
    $(".1_5").click(function () {
        $("#themes").html("Explore ways of writing mathematical statements </br>Solve addition and subtraction problems ");
        $("#key").html("Add two one-digit numbers to 20, including zero </br>Add a one-digit and two-digit numbers to 20, including zero </br>Read and interpret statements involving the symbols ‘+’ and ‘=’ involving numbers up to 20</br>Write statements involving the symbols ‘+’ and ‘=’ involving numbers up to 20</br>Subtract one-digit number (a) from another one-digit number (b, a<b) within 20, including zero </br>Subtract a one-digit number from a two-digit numbers within 20, including zero </br>Read and interpret statements involving the symbols ‘-’ and ‘=’ involving numbers up to 20</br>Write statements involving the symbols ‘-’ and ‘=’ involving numbers up to 20</br>Solve one-step problems calculations involving numbers up to 20 using concrete objects and pictorial representations</br>Solve missing number problems involving adding numbers to 20 </br>Solve missing number problems involving subtracting numbers within 20");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAADJZMTpCbYQJxsHyNm_96ba/Stage%201/St1_U5_Addition_Subtraction_2_WR.pdf?dl=0");
    });
    $(".1_6").click(function () {
        $("#themes").html("Explore the measurement of distanceExplore the measurement of massExplore the measurement of capacityMeasure time");
        $("#key").html("Measure length using appropriate equipment</br>Measure mass using appropriate equipment</br>Measure capacity using appropriate equipment</br>Measure time using hours, minutes and seconds using appropriate equipment</br>Record measurements using a system of non-standard or standard units</br>Compare and order lengths using long/short, longer/shorter, tall/short, double/half</br>Compare and order masses using heavy/light, heavier than, lighter than</br>Compare and order capacities using full/empty, more than, less than, half, half full, quarter</br>Compare and order times using quicker, slower, earlier, later</br>Select appropriate language when making comparisons</br>Solve practical problems involving length, height, mass, volume</br>Solve practical problems involving time");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADYoWDpFtij87wS0O1-NdX4a/Stage%201/St1_U6_Measuring_Space_WR.pdf?dl=0");
    });
    $(".1_7").click(function () {
        $("#themes").html("Explore fractions");
        $("#key").html("Recognise a half as one of two equal parts of an object or shape </br>Recognise a half as one of two equal parts of a quantity</br>Recognise a quarter as one of four equal parts of an object or shape</br>Recognise a quarter as one of four equal parts of a quantity</br>Use fraction notation to write one half</br>Use fraction notation to write one quarter</br>Identify half of a set of objects</br>Identify quarter of a set of objects");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAB4LimqfSBvrGnS_lV3Xztya/Stage%201/St1_U7_Fractions_WR.pdf?dl=0");
    });
    $(".1_8").click(function () {
        $("#themes").html("Investigate mathematical language to describe movement");
        $("#key").html("Use mathematical language to describe position</br>Use mathematical language to describe movement along a straight line</br>Use mathematical language to describe a turn, including whole and half turns</br>Use mathematical language to describe a turn, including quarter turns</br>Use mathematical language to describe a turn, including three-quarter turns</br>Describe position, direction and movement, including whole turns</br>Describe position, direction and movement, including half turns</br>Describe position, direction and movement, including quarter and three-quarter turns");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAC8sBDMBG6TwzdI3az-tczVa/Stage%201/St1_U8_Mathematical_Movement_WR.pdf?dl=0");
    });
    $(".1_9").click(function () {
        $("#themes").html("Explore money");
        $("#key").html("Recognise the coins: 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2</br>Read and say amounts of money using the coins 1p, 2p, 5p, 10p, 20p, 50p</br>Recognise the coins: £1 and £2</br>Read and say amounts of money using the coins £1 and £2</br>Count, say and record amounts of money using the coins 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2</br>Recognise the notes: £5 and £10</br>Read and say amounts of money using the notes £5 and £10</br>Solve simple problems involving money");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAB2JkSy1U2Dml8dHfQoeQN_a/Stage%201/St1_U9_Money_WR.pdf?dl=0");
    });
    $(".1_10").click(function () {
        $("#themes").html("Develop arithmetic skillsExplore properties of numbersExplore ways of writing calculationsSolve problems involving multiplication and division");
        $("#key").html("Double numbers up to at least 10</br>Halve numbers up to (at least) 20</br>Count (from zero) in equal steps of 2s </br>Count (from zero) in equal steps of 5s </br>Count (from zero) in equal steps of 10s </br>Use concrete objects to solve one-step problems involving multiplication </br>Use concrete objects to solve one-step problems involving division (grouping)</br>Use concrete objects to solve one-step problems involving division (sharing)</br>Use pictorial representations to solve one-step problems involving multiplication </br>Use pictorial representations to solve one-step problems involving division (grouping)</br>Use pictorial representations to solve one-step problems involving division (sharing)</br>Use arrays to solve one-step problems involving multiplication");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/kfjmydgefcye4uh/AAC5g91CfbwmrQSrEoyuPYgFa/Stage%20and%20Unit%20Assessments/Stage%201?dl=0&preview=St1_U10_Multiplication_Division_WR.pdf");
    });
    $(".1_11").click(function () {
        $("#themes").html("Explore the value of numbersExplore where numbers live in our number systemSolve problems comparing the value of numbersInvestigate number patterns");
        $("#key").html("Solve problems involving:</br>- reading and writing numbers from 1 to 20 in numerals and words.</br>- identifying and representing numbers using objects and pictorial representations including the number line, and use the language of: equal to, more than, less than (fewer), most, least</br>- counting, reading and writing numbers to 100 in numerals; count in multiples of twos, fives and tens");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   (No download)");
        $(".download").attr("href", "");
    });
    $(".1_12").click(function () {
        $("#themes").html("Investigate one more or one less than any numberInvestigate number patternsExplore addition and subtraction facts");
        $("#key").html("Solve problems involving:</br>- given a number, identify one more and one less</br>- counting to and across 100, forwards and backwards, beginning with 0 or 1, or from any given number</br>- representing and using number bonds and related subtraction facts within 20");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   (No download)");
        $(".download").attr("href", "");
    });
    $(".1_13").click(function () {
        $("#themes").html("Explore ways of writing mathematical statements Solve addition and subtraction problems");
        $("#key").html("Solve problems involving:</br>-  reading , writing and interpreting mathematical statements involving addition (+), subtraction (–) and equals (=) signs</br>-  adding and subtracting one-digit and two-digit numbers to 20, including zero</br>-  one-step problems that involve addition and subtraction, using concrete objects and pictorial representations, and missing number problems such as 7 = ☐ – 9");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   (No download)");
        $(".download").attr("href", "");
    });
    $(".2_1").click(function () {
        $("#themes").html("Explore the value of numbers</br>Explore where numbers live in our number system</br>Solve problems comparing the value of numbers</br>Represent numbers in different ways");
        $("#key").html("Explain the value of each digit in a two- digit number</br>Read numbers to 100 in numerals and words</br>Read numbers to 500 in numerals and words</br>Write numbers to 100 in numerals and words</br>Write numbers to 500 in numerals and words</br>Represent and estimate numbers using a number line</br>Compare the value of numbers explaining if they are more/ less than or equal to another number or numbers</br>Represent numbers different ways using partitioning");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABy1IRZ9OyXj0fPiOX5L4-la/Stage%202/St2_U1_Number_System_WR.pdf?dl=0");
    });
    $(".2_2").click(function () {
        $("#themes").html("Solve problems comparing the value of numbers</br>Order numbers according to their value</br>Investigate number patterns");
        $("#key").html("Compare numbers from 0 to up to 100 </br>Use <, > and = symbols to when comparing numbers</br>Order numbers from lowest to greatest value </br>Order numbers from greatest to lowest value)</br>Count on and back in steps of 2 from 0 </br>Count on and back in steps of 3 from 0</br>Count on and back in steps of 5 from 0</br>Count on and back in tens from any number");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABOsZ0YV1ytd1uYDbuLa0Dva/Stage%202/St2_U2_Counting_WR.pdf?dl=0");
    });
    $(".2_3").click(function () {
        $("#themes").html("Explore 2 –D shapes</br>Explore 3 –D shapes</br>Compare 2-D and 3-D shapes");
        $("#key").html("Identify and describe the properties of pentagons</br>Identify and describe the properties of hexagons</br>Identify and describe the properties of octagons</br>Identify symmetry properties of 2-D shapes using vertical lines</br>Compare 2-D shapes and explain how they are similar or different</br>Sort 2-D shapes  </br>Identify and describe 2-D shapes on the surface of 3-D shapes</br>Identify and describe the properties of 3-D shapes including the number of edges</br>Identify and describe the properties of 3-D shapes including the number of vertices</br>Identify and describe the properties of 3-D shapes including the number of faces</br>Compare 3-D shapes and explain how they are similar or different</br>Sort 3-D shapes and everyday objects");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAC5oovYiwEjARjuwCyDiwYNa/Stage%202/St2_U3_Properties_of_Shapes_WR.pdf?dl=0");
    });
    $(".2_4").click(function () {
        $("#themes").html("Explore addition and subtraction facts</br>Explore mental strategies to solve calculations</br>Use the inverse relationship between addition and subtraction</br>Solve problems addition or subtraction");
        $("#key").html("Recall and use addition facts within 20</br>Derive addition facts within 100</br>Understand why addition is commutative</br>Add a two-digit number and ones using concrete objects, pictorial representations, and mentally</br>Add a two-digit number and tens using concrete objects, pictorial representations, and mentally</br>Add two two-digit numbers using concrete objects, pictorial representations, and mentally</br>Add three one-digit numbers using concrete objects, pictorial representations, and mentally</br>Recall and use subtraction facts within 20</br>Derive subtraction facts within 100</br>Understand why subtraction is not commutative</br>Subtract ones from a two-digit number using concrete objects, pictorial representations, and mentally</br>Subtract tens from a two-digit number using concrete objects, pictorial representations, and mentally</br>Subtract two two-digit number using concrete objects, pictorial representations, and mentally</br>Solve problems involving addition or subtraction using concrete objects and pictorial representations</br>Solve missing number problems</br>Check calculations using the correct inverse operation");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAByVnRKmiX7cQfaOXnt-3BIa/Stage%202/St2_U4_Addition_Subtraction_WR.pdf?dl=0");
    });
    $(".2_5").click(function () {
        $("#themes").html("Explore the relationship between units of time</br>Explore ways of recording time</br>Compare and sequence intervals of time");
        $("#key").html("Know that there are 60 minutes in one hour </br>Know that there are 24 hours in one day</br>Tell the time using quarter past/to the hour on an analogue clock</br>Write the time using quarter past/to the hour on an analogue clock</br>Tell the time to five minute intervals on an analogue clock </br>Write the time to five minute intervals on an analogue clock</br>Draw the hands on a clock face to show times to five minutes, including quarter past/to the hour</br>Compare and order a selection of times from earliest to latest or vice versa");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/s/jjmz7drq5yjyab7/St2_U5_Time_WR.pdf?dl=0");
    });
    $(".2_6").click(function () {
        $("#themes").html("Develop arithmetic skills</br>Develop knowledge of multiplication tables</br>Explore properties of numbers</br>Explore ways of writing calculations</br>Solve problems involving multiplication and division");
        $("#key").html("Recall and use multiplication facts for the 2 times table</br>Recall and use multiplication facts for the 5 times table</br>Recall and use multiplication facts for the 10 times table, linking multiplying by 10 to place value</br>Understand that multiplication is commutative</br>Recall and use division facts for the 2 times table</br>Recall and use division facts for the 5 times table</br>Recall and use division facts for the 10 times table</br>Understand that division is not commutative</br>Create mathematical statements for multiplication </br>Create mathematical statements for division </br>Recognise odd and even numbers</br>Use knowledge of commutativity when multiplying and dividing mentally</br>Understand the connection between multiplication and repeated addition</br>Identify the correct operation(s) required in order to solve a problem</br>Solve missing number problems involving multiplication</br>Solve missing number problems involving division");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABc9sTB-lHvC3VeoVzY-Kvza/Stage%202/St2_U6_Multiplication_Division_WR.pdf?dl=0");
    });
    $(".2_7").click(function () {
        $("#themes").html("Explore fractions of shapes, sets and objects</br>Write simple fraction statements");
        $("#key").html("Recognise one quarter as one of four equal parts of an object, shape or quantity and use fraction notation</br>Recognise two quarters as two of four equal parts, or two of one quarter, of an object, shape or quantity and use fraction notation</br>Recognise a three quarters as three of four equal parts, or three of one quarter of an object, shape or quantity and use fraction notation</br>Recognise one third as one of three equal parts of an object, shape or quantity and use fraction notation</br>Find one quarter of an object, shape or set of objects</br>Find two quarters of an object, shape or set of objects</br>Find three quarters of an object, shape or set of objects</br>Find one third of an object, shape or set of objects</br>Recognise that a half is equivalent to two quarters</br>Write simple fraction statements involving the fraction 1/2 such as 1/2 of 6 = 3</br>Write simple fraction statements involving the fractions 1/4, 2/4 or 3/4,  such as 1/4 of 8 = 2</br>Write simple fraction statements involving the fractions 1/3  such as 1/3 of 6 = 2");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABy9C9xbgppu-WrGTYYu0VEa/Stage%202/St2_U7_Fractions_WR.pdf?dl=0");
    });
    $(".2_8").click(function () {
        $("#themes").html("Investigate mathematical language to describe movement");
        $("#key").html("Use mathematical language to describe position</br>Use mathematical language to describe movement along a straight line</br>Use mathematical language to describe direction of a turn, including meaning of clockwise and anti-clockwise</br>Understand and use the language of right angles to describe the size of turn</br>Interpret instructions for following a simple route</br>Devise instructions for following a simple route</br>Order combinations of mathematical objects in patterns and sequences</br>Arrange combinations of mathematical objects in patterns and sequences");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACE4GIMcyoDDWnc2wELspIua/Stage%202/St2_U8_Mathematical_Movement_WR.pdf?dl=0");
    });
    $(".2_9").click(function () {
        $("#themes").html("Explore the measurement of distance</br>Explore the measurement of mass</br>Explore the measurement of capacity</br>Measure temperature");
        $("#key").html("Choose appropriate units to measure a given distance</br>Choose appropriate units to measure a given mass</br>Choose appropriate units to measure a given capacity</br>Measure a given distance choosing the appropriate equipment </br>Measure a given mass choosing the appropriate equipment </br>Measure a given capacity choosing the appropriate equipment </br>Measure a given temperature choosing the appropriate equipment </br>Estimate a given distance </br>Estimate a given mass</br>Estimate a given capacity</br>Compare and order lengths</br>Compare and order masses </br>Compare and order capacities</br>Compare and order temperatures </br>Compare and order measurements using >, < and =");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAD9sO4QZ68zrCYzEk7iPyOMa/Stage%202/St2_U9_Measuring_Space_WR.pdf?dl=0");
    });
    $(".2_10").click(function () {
        $("#themes").html("Explore money</br>Solve problems involving money");
        $("#key").html("Recognise and use the symbols for pounds (£) and pence (p)</br>Read and say amounts of money combining the coins 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2</br>Count, say and record amounts of money combining the coins 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2</br>Find different combinations of coins that equal the same amounts of money</br>Solve practically simple problems involving addition of money</br>Solve practically simple problems of money, including giving change ");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAB3_KdhpVM0lI3JsL7mnzcPa/Stage%202/St2_U10_Money_WR.pdf?dl=0");
    });
    $(".2_11").click(function () {
        $("#themes").html("Collect information</br>Sort information</br>Use pictures to represent information");
        $("#key").html("Interpret a pictogram where the symbol represents a single item</br>Interpret a pictogram where the symbol represents a multiple of 2 items</br>Interpret a pictogram where the symbol represents a multiple of 5 items</br>Construct a pictogram where the symbol represents a single item</br>Construct a pictogram where the symbol represents a multiple of 2 items</br>Construct a pictogram where the symbol represents a multiple of 5 items</br>Interpret and construct a tally chart</br>Interpret and construct a block diagram</br>Interpret information in a simple table</br>Create a table to show information </br>Ask and answer simple questions by counting the number of objects in each category </br>Ask and answer questions about totalling and comparing categorical data");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABaUdLqdpc1hzSDdzb-M8lha/Stage%202/St2_U11_Presenting_Data_WR.pdf?dl=0");
    });
    $(".3_1").click(function () {
        $("#themes").html("Work with numbers up to 1000</br>Explore ways of representing numbers</br>Develop skills of estimation</br>Solve problems involving numbers and the number system");
        $("#key").html("Understand place value in numbers up to 1000</br>Write numbers up to 1000</br>Read numbers up to 1000</br>Use zero as a place holder in numbers up to 1000</br>Interpret numbers up to 1000 on a number line</br>Represent numbers up to 1000 using a number line</br>Interpret and use scales representing measurements with numbers up to 1000</br>Use scales to represent measurements with numbers up to 1000");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADd3Nn94UKa-69yqTR9d-c2a/Stage%203/St3_U1_Number_System_WR.pdf?dl=0");
    });
    $(".3_2").click(function () {
        $("#themes").html("Work with numbers up to 1000</br>Explore ways of counting</br>Solve problems involving counting and comparing");
        $("#key").html("Order numbers up to 1000</br>Compare numbers up to 1000</br>Count (from 0) in multiples of 4</br>Count (from 0) in multiples of 8</br>Count (from 0) in multiples of 50</br>Count (from 0) in multiples of 100</br>Find 10 more than a given number</br>Find 10 less than a given number</br>Find 100 more than a given number</br>Find 100 less than a given number");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADR69dxD1m7I-6x4TIrHjDTa/Stage%203/St3_U2_Counting_WR.pdf?dl=0");
    });
    $(".3_3").click(function () {
        $("#themes").html("Classify lines</br>Construct 2D shapes</br>Explore 3D shapes");
        $("#key").html("Identify and draw horizontal and vertical lines</br>Identify and draw parallel lines</br>Identify and draw perpendicular lines</br>Sketch common 2D shapes</br>Draw and measure a line in centimetres</br>Construct common 2D shapes using a ruler</br>Make and identify 3D shapes using modelling materials </br>Describe 3D shapes using mathematical language");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAA9Lgtpj_T_rHzP4v7XOwYTa/Stage%203/St3_U3_Visualising_Constructing_WR.pdf?dl=0");
    });
    $(".3_4").click(function () {
        $("#themes").html("Extend mental methods of addition and subtraction</br>Develop written methods of addition and subtraction</br>Estimate answers to calculations</br>Solve problems involving addition and subtraction");
        $("#key").html("Add three-digit numbers and ones or tens mentally</br>Add three-digit numbers and hundreds mentally</br>Subtract three-digit numbers and one or tens mentally</br>Subtract three-digit numbers and hundreds mentally</br>Use column addition for numbers with up to three digits when carrying is not required</br>Use column addition for three-digit and two-digit numbers when carrying is required</br>Use column addition for numbers with three-digits when carrying is required</br>Use column subtraction for numbers with up to three digits when exchanging is not required</br>Use column subtraction for three-digit and two-digit numbers when exchanging is required</br>Use column subtraction for numbers with up to three-digits when exchanging is required</br>Estimate the answer to a calculation</br>Identify when addition or subtraction is needed as part of solving a problem");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACiN9hXBMWKVywuGv4dIK4sa/Stage%203/St3_U4_Addition_Subtraction_WR.pdf?dl=0");
    });
    $(".3_5").click(function () {
        $("#themes").html("Develop mental arithmetic skills</br>Develop knowledge of multiplication tables</br>Explore ways of writing calculations</br>Solve problems involving multiplication and division");
        $("#key").html("Recall and use multiplication facts for the 3 times table </br>Recall and use multiplication facts for the 4 times table</br>Recall and use multiplication facts for the 8 times table</br>Recall and use division facts for the 3 times table</br>Recall and use division facts for the 4 times table</br>Recall and use division facts for the 8 times table</br>Understand the distributive law applied to a multiplication of a two-digit number by a one-digit number</br>Identify the correct operation(s) required in order to solve a problem and create mathematical statements </br>Use known and derived facts when multiplying and dividing mentally</br>Use efficient methods to multiply a two-digit number by a one-digit number</br>Identify when a scaling (or correspondence problem) can be solved using multiplication or division");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADZKC473ryXYZi-Avlef1jza/Stage%203/St3_U5_Multiplication_Division_WR.pdf?dl=0");
    });
    $(".3_6").click(function () {
        $("#themes").html("Understand and use Roman numerals</br>Tell the time</br>Estimate time</br>Solve problems involving time");
        $("#key").html("Read Roman numerals up to XII</br>Know the vocabulary of telling the time</br>Know the number of seconds in a minute</br>Know the number of days in each month, year and leap year</br>Tell the time from a 12-hour analogue clock to the nearest minute</br>Tell the time from a 24-hour analogue clock to the nearest minute</br>Tell the time from a clock using Roman numerals to the nearest minute</br>Write times using 12-hour format</br>Estimate times </br>Compare times given in seconds, minutes and/or hours</br>Calculate the time taken by particular events or tasks");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABa69fH_2qSEjF4mGmu0kcSa/Stage%203/St3_U6_Time_WR.pdf?dl=0");
    });
    $(".3_7").click(function () {
        $("#themes").html("Understand the meaning of a fraction</br>Investigate the equivalence of fractions</br>Compare fractions");
        $("#key").html("Recognise a unit fraction of a set of objects</br>Recognise a non-unit fraction of a set of objects</br>Write a fraction of a set of objects</br>Understand a unit fraction as a number</br>Understand a non-unit fraction as a number</br>Understand the concept of equivalent fractions</br>Recognise equivalent fractions from diagrams</br>Complete diagrams to show equivalent fractions</br>Create diagrams to show equivalent fractions</br>Compare a set of unit fractions</br>Compare a set of fractions which have the same denominator");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABq-Cr_VdNeXkNtJgjgFHcha/Stage%203/St3_U7_Fractions_WR.pdf?dl=0");
    });
    $(".3_8").click(function () {
        $("#themes").html("Develop measurement skills</br>Solve problems involving measurement</br>Understand perimeter");
        $("#key").html("Use a ruler to measure lengths to the nearest millimetre</br>Use a ruler to measure lengths to the nearest centimetre</br>Use measuring equipment to measure lengths to the nearest metre</br>Use digital and mechanical scales to measure mass to the nearest kg</br>Use digital and mechanical scales to measure mass to the nearest g</br>Use measuring vessels to measure a volume of liquid</br>Choose appropriate units to state the result of a measurement</br>Compare the length of two or more objects</br>Compare the mass of two or more objects</br>Compare the volume of two or more objects</br>Compare the capacity of two or more objects</br>Find the perimeter of a 2-D shape by measuring");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABFCJYkLmABjdM7_oLMQzLDa/Stage%203/St3_U8_Measuring_Space_WR.pdf?dl=0");
    });
    $(".3_9").click(function () {
        $("#themes").html("Explore angles and turning</br>Compare angles");
        $("#key").html("Understand that angle is a description of turn</br>Understand that angles are a feature of shapes</br>Identify a right angle as a quarter turn and when a shape has a right angle</br>Recognise that two right angles make a half-turn</br>Recognise that three right angles make three quarters of a turn</br>Recognise that four right angles make a complete turn</br>Identify angles that are less than right angle</br>Identify angles that are greater than a right angle");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABoNUmrhzAUtmg6ttuS60Rva/Stage%203/St3_U9_Angles_WR.pdf?dl=0");
    });
    $(".3_10").click(function () {
        $("#themes").html("Develop knowledge of place value</br>Explore decimals</br>Calculate with fractions");
        $("#key").html("Recognise that tenths arise from dividing a number or object into ten equal parts</br>Write tenths as a fraction and as a decimal</br>Count up in tenths</br>Count down in tenths</br>Add fractions with the same denominator within one whole</br>Subtract fractions with the same denominator within one whole</br>Solve problems involving fractions and decimals");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAAeV0YReJaJYV6EOKPhECa9a/Stage%203/St3_U10_Calculating_Fractions_Decimals_WR.pdf?dl=0");
    });
    $(".3_11").click(function () {
        $("#themes").html("Explore money</br>Solve problems involving money");
        $("#key").html("Recognise the value of coins</br>Add amounts of money when the units are the same</br>Add amounts of money when the units are different</br>Subtract amounts of money when the units are the same</br>Subtract amounts of money when the units are different</br>Record a practical money problem using £ and/or p notation </br>Solve practical problems that involve calculating change in manageable amounts");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAAisxLdMzqHcU7RI5JlpgdHa/Stage%203/St3_U11_Money_WR.pdf?dl=0");
    });
    $(".3_12").click(function () {
        $("#themes").html("Explore ways to show data</br>Solve problems involving charts and tables");
        $("#key").html("Interpret a pictogram where the symbol represents multiple items</br>Construct a pictogram where the symbol represents multiple items</br>Interpret a bar chart</br>Construct a bar chart</br>Interpret data in a table</br>Create a table to show data</br>Answer one-step questions about data in charts and tables (e.g. ‘How many?’)</br>Answer two-step questions about data in charts and tables (e.g. ‘How many more?’)");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAClW3hLh5g5YUKOHoNx_qYWa/Stage%203/St3_U12_Presenting_Data_WR.pdf?dl=0");
    });
    $(".4_1").click(function () {
        $("#themes").html("Work with numbers less than 10 000</br>Understand and use Roman numerals</br>Explore the history of our number system</br>Explore ways of representing numbers</br>Develop skills of estimation");
        $("#key").html("Order numbers up to and including those with four digits</br>Write numbers up to and including those with four digits</br>Read numbers up to and including those with four digits</br>Read Roman numerals up to C</br>Understand the difference between the Roman numeral system and the decimal number system</br>Interpret numbers up to 10 000 on a number line</br>Represent numbers up to 10 000 using a number line</br>Use and interpret scales representing measurements with numbers up to 10 000");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABhPQbFkUiy-yk7CLzK8ZPxa/Stage%204/St4_U1_Number_System_WR.pdf?dl=0");
    });
    $(".4_2").click(function () {
        $("#themes").html("Work with numbers less than 10 000</br>Explore ways of counting</br>Investigate numbers less than zero</br>Compare and order decimals</br>Solve problems involving measurement");
        $("#key").html("Order numbers up to 10 000</br>Compare numbers up to 10 000</br>Count in multiples of 6</br>Count in multiples of 7</br>Count in multiples of 9</br>Count in multiples of 25</br>Count in multiples of 1000</br>Understand the concept of a negative number</br>Count backwards through zero in whole number steps</br>Compare and order numbers with one decimal place</br>Compare numbers with two decimal places</br>Order numbers with two decimal places");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAALX4NvCzp4fW8AAa8gGev6a/Stage%204/St4_U2_Counting_WR.pdf?dl=0");
    });
    $(".4_3").click(function () {
        $("#themes").html("Explore symmetry</br>Explore symmetrical patterns</br>Investigate 2D shapes");
        $("#key").html("Identify a line of symmetry of a 2D shape</br>Identify a line of symmetry of a pattern and for a diagram of a reflection</br>Use a line of symmetry to produce a symmetrical pattern</br>Use a line of symmetry to complete a symmetrical shape</br>Know that a shape and its reflection are congruent</br>Know and use the names of special types of triangle</br>Know and use the names of special types of quadrilateral</br>Compare and classify 2D shapes using given categories; e.g. number of sides, symmetry");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAD3NeP62S1H5jxvGAd7yzf9a/Stage%204/St4_U3_Properties_of_Shapes_WR.pdf?dl=0");
    });
    $(".4_4").click(function () {
        $("#themes").html("Develop mental methods of addition and subtraction</br>Extend written methods of addition and subtraction</br>Solve problems involving addition and subtraction");
        $("#key").html("Find 1000 more than a given number</br>Find 1000 less than a given number</br>Use columnar addition for numbers with up to four digits with no carrying required</br>Use columnar addition for four-digit and two-digit numbers with carrying required</br>Use columnar addition for four-digit and three-digit numbers with carrying required</br>Use columnar addition for four-digit numbers with carrying required</br>Use columnar subtraction for numbers with up to four digits with no exchanging required</br>Use columnar subtraction for four-digit and two-digit numbers with exchanging required</br>Use columnar subtraction for four-digit and three-digit numbers with exchanging required</br>Use columnar subtraction for four-digit and four-digit numbers with exchanging required</br>Solve two-step problems involving addition and/or subtraction");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAAzki4cXdLkdJfwTta6NqlGa/Stage%204/St4_U4_Addition_Subtraction_WR.pdf?dl=0");
    });
    $(".4_5").click(function () {
        $("#themes").html("Develop mental arithmetic skills</br>Develop knowledge of multiplication tables</br>Explore place value</br>Develop written methods of multiplication</br>Solve problems involving multiplication and division");
        $("#key").html("Recall and use multiplication facts for the 6 times table</br>Recall and use multiplication facts for the 7 times table</br>Recall and use multiplication facts for the 9 times table</br>Recall and use multiplication facts for the 11 times table</br>Recall and use multiplication facts for the 12 times table</br>Recall and use division facts for the 6 times table</br>Recall and use division facts for the 7 times table</br>Recall and use division facts for the 9 times table</br>Recall and use division facts for the 11 times table</br>Recall and use division facts for the 12 times table</br>Use knowledge of factor pairs (commutativity) when multiplying and dividing mentally including multiplying three numbers together</br>Know the effect of multiplying by 0 and 1 and dividing by 1</br>Use the distributive law to multiply a two-digit number by a one-digit number</br>Use short multiplication to multiply a two-digit number by a one-digit number</br>Use short multiplication to multiply a three-digit number by a one-digit number</br>Identify when a scaling or correspondence problem can be solved using multiplication or division");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACVd9yMVqEEEv2TKQ41wSZda/Stage%204/St4_U5_Multiplication_Division_WR.pdf?dl=0");
    });
    $(".4_6").click(function () {
        $("#themes").html("Solve problems involving time</br>Solve problems involving money</br>Estimate measures");
        $("#key").html("Read digital 24-hour clocks</br>Write times using digital 24-hour clock</br>Write times using analogue 12-hour clock</br>Convert between 12-hour time and 24-hour notation</br>Solve problems involving converting from hours to minutes and minutes to seconds; </br>Solve problems involving converting from weeks to days</br>Solve problems involving converting from years to months</br>Solve problems involving decimal notation to record money");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAB0TPTvuZJVI7NeTLyC8mePa/Stage%204/St4_U6_Time_Money_WR.pdf?dl=0");
    });
    $(".4_7").click(function () {
        $("#themes").html("Develop knowledge of place value</br>Explore decimals</br>Investigate fractions and decimals");
        $("#key").html("Recognise that hundredths arise from dividing a number or object into one hundred equal parts</br>Write hundredths as a fraction and as a decimal</br>Write decimal equivalents of any number of tenths and hundredths</br>Count up in hundredths</br>Count down in hundredths</br>Divide a one-digit number by 10 </br>Divide a one-digit number by 100</br>Divide a two-digit number by 10 </br>Divide a two-digit number by 100</br>Know and use the decimal equivalents to 1/4, 1/2, 3/4");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAAhFE0roLc7cjexeprLYjpia/Stage%204/St4_U7_Exploring_FDP_WR.pdf?dl=0");
    });
    $(".4_8").click(function () {
        $("#themes").html("Convert between measures</br>Solve problems involving measurement</br>Solve problems involving money");
        $("#key").html("Convert between kilometres and metres</br>Convert between centimetres and millimetres</br>Convert between kilograms and grams</br>Convert between litres and millilitres</br>Solve measurement problems involving fractions </br>Solve money problems involving fractions</br>Solve measurement problems involving decimals to two decimal places</br>Solve money problems involving decimals to two decimal places");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAC7Vnjn8PJLm9-uPFn50ubJa/Stage%204/St4_U8_Measuring_Space_WR.pdf?dl=0");
    });
    $(".4_9").click(function () {
        $("#themes").html("Develop knowledge of angles</br>Compare angles");
        $("#key").html("Identify acute angles</br>Identify obtuse angles</br>Identify acute angles in shapes</br>Identify obtuse angles in shapes</br>Identify right angles in shapes</br>Compare angles up to two right angles in size</br>Order angles up to two right angles in size");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACX9xhxD_W9Y2qk6XmXOzyHa/Stage%204/St4_U9_Angles_WR.pdf?dl=0");
    });
    $(".4_10").click(function () {
        $("#themes").html("Calculate with fractions</br>Investigate equivalent fractions");
        $("#key").html("Add fractions with the same denominator within and beyond one whole</br>Subtract fractions with the same denominator within and beyond one whole</br>Calculate a unit fraction of an amount when the answer is a whole number</br>Calculate a non-unit fraction of an amount when the answer is a whole number</br>Identify equivalent fractions from diagrams</br>Find families of equivalent fractions</br>Create diagrams to show families of equivalent fractions</br>Solve problems with increasingly harder fractions to calculate quantities");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACEuy7ef3O-1t-wJEDhET8xa/Stage%204/St4_U10_Calculating_FDP_WR.pdf?dl=0");
    });
    $(".4_11").click(function () {
        $("#themes").html("Calculate perimeter</br>Investigate area");
        $("#key").html("Measure and calculate the perimeter of 2D shapes when dimensions are unknown</br>Calculate the perimeter of rectangles (including squares) when dimensions are known</br>Calculate the perimeter of other rectilinear shapes when dimensions are known</br>Find the area of rectangles (including squares) by counting squares</br>Find the area of other rectilinear shapes by counting squares</br>Solve problems involving perimeter </br>Solve problems involving area");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACxL_CUUEDPv1XkyBnonFqta/Stage%204/St4_U11_Calculating_Space_WR.pdf?dl=0");
    });
    $(".4_12").click(function () {
        $("#themes").html("Explore ways of approximating numbers</br>Explore ways of checking answers");
        $("#key").html("Approximate any number by rounding to the nearest 10, 100 or 1000</br>Approximate any number with one decimal place by rounding to the nearest whole number</br>Understand checking as the process of working backwards from the answer to ensure that it makes sense</br>Understand estimating as the process of finding a rough value of an answer or calculation");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAA_1kDCVCQ2_45v-3m6dbZSa/Stage%204/St4_U12_Checking_WR.pdf?dl=0");
    });
    $(".4_13").click(function () {
        $("#themes").html("Understand and use Cartesian coordinates </br>Use transformations to move shapes");
        $("#key").html("Use coordinates to describe the position of a point in the first quadrant</br>Plot points in the first quadrant using co-ordinates</br>Use coordinates to plot a set of points to construct a polygon</br>Solve problems involving coordinates</br>Describe movements between positions as translations of a given unit to the left/right</br>Describe movements between positions as translations of a given unit to the up/down</br>Describe movements between positions as translations of a given unit to the left/right and up/down</br>Solve problems involving translation");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACUdYtJpL_jZxHxqi4VokBka/Stage%204/St4_U13_Movement_WR.pdf?dl=0");
    });
    $(".4_14").click(function () {
        $("#themes").html("Explore ways of presenting data</br>Solve problems involving charts and graphs");
        $("#key").html("Interpret a pictogram where the symbol represents multiple items</br>Interpret a bar chart</br>Interpret bar charts with different scales on the frequency axis</br>Create a bar chart with different scales on the frequency axis</br>Interpret a time graph</br>Create a time graph</br>Solve problems involving the data in charts and graphs</br>Solve problems involving the data in tables");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACZQ3NFugyqMJ7rcZUtL_yDa/Stage%204/St4_U14_Presenting_Data_WR.pdf?dl=0");
    });
    $(".5_1").click(function () {
        $("#themes").html("Identify multiples of numbers</br>Explore factors of numbers</br>Investigate prime numbers</br>Work with square and cube numbers");
        $("#key").html("Know and identify multiples of a given number</br>Know the identify factors of a given number</br>Find the ‘common factor’ of two numbers</br>Know the meaning of ‘prime number’ and recall the prime numbers less than 20</br>Know the prime factors of a given number</br>Know how to test if a number up to 100 is prime</br>Know and identify square numbers</br>Know and identify cube numbers");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABTwVxeiTYVWZHehBrzTCpJa/Stage%205/St5_U1_Number_System_WR.pdf?dl=0");
    });
    $(".5_2").click(function () {
        $("#themes").html("Work with numbers up to one million</br>Understand and use Roman numerals</br>Understand and use negative numbers");
        $("#key").html("Understand place value in numbers with up to seven digits</br>Order numbers up to and including those with seven digits</br>Write and read numbers up to and including those with seven digits</br>Read Roman numerals to 1000 (M)</br>Recognise years written in Roman numerals</br>Count forwards and backwards in whole number steps when negative numbers are included</br>Count forwards and backwards in whole number steps including through zero</br>Understand and use negative numbers in context, including temperatures below 0°C");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABdSV52c7UrERkko7k4734Ha/Stage%205/St5_U2_Counting_WR.pdf?dl=0");
    });
    $(".5_3").click(function () {
        $("#themes").html("Develop mental addition and subtraction skills</br>Extend written methods of addition and subtraction</br>Solve problems involving addition and subtraction");
        $("#key").html("Add four-digit numbers and ones, tens and hundreds mentally</br>Add four-digit numbers and thousands mentally  </br>Subtract four-digit numbers and ones, tens and hundreds mentally</br>Subtract four-digit numbers and thousands mentally</br>Use columnar addition for numbers with more than four digits with no carrying required</br>Use columnar addition for numbers with more than four digits with carrying required</br>Use columnar subtraction for numbers with more than four digits with no exchanging required</br>Use columnar subtraction for numbers with more than four digits with exchanging required");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADP4DrPHjp18wxmPpLLgZKDa/Stage%205/St5_U3_Addition_Subtraction_WR.pdf?dl=0");
    });
    $(".5_4").click(function () {
        $("#themes").html("Investigate 3D shapes");
        $("#key").html("Identify 3D-shapes from photographs and sketches</br>Identify 3D-shapes from nets</br>Identify 3D-shapes from diagrams on isometric paper</br>Construct diagrams of 3D-shapes on isometric paper");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADCEOF3l_RuRG4dnxkd9Ue5a/Stage%205/St5_U4_Visualising_Constructing_WR.pdf?dl=0");
    });
    $(".5_5").click(function () {
        $("#themes").html("Develop mental arithmetic skills</br>Explore multiplication and division of decimals</br>Develop written methods of multiplication</br>Develop written methods of division</br>Solve problems involving multiplication and division");
        $("#key").html("Multiply a whole number by 10</br>Multiply a whole number by 100</br>Multiply a whole number by 1000</br>Multiply a decimal by 10</br>Multiply a decimal by 100</br>Multiply a decimal by 1000</br>Divide a whole number by 10</br>Divide a whole number by 100</br>Divide a whole number by 1000</br>Divide a decimal by 10</br>Divide a decimal by 100</br>Divide a decimal by 1000</br>Multiply numbers up to 4-digits by a one-digit number using short multiplication</br>Multiply three-digit numbers by a two-digit number using long multiplication</br>Multiply four-digit numbers by a two-digit number using long multiplication</br>Divide a three-digit number by a one-digit number using short division with no remainder</br>Divide a three-digit number by a one-digit number using short division with a remainder</br>Divide a four-digit number by a one-digit number using short division with no remainder</br>Divide a four-digit number by a one-digit number using short division with a remainder</br>Interpret a remainder appropriately for the context when carrying out division");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAB7EvIJ7SDgY7E0KWH07ETAa/Stage%205/St5_U5_Multiplication_Division_WR.pdf?dl=0");
    });
    $(".5_6").click(function () {
        $("#themes").html("Explore the properties of rectangles</br>Investigate polygons");
        $("#key").html("Use the properties of rectangles to find missing lengths and angles</br>Use the properties of rectangles to find points on a coordinate grid</br>Know the difference between a regular and an irregular polygon</br>Use the properties of regular polygons to find points on a coordinate grid");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAAPFwh411vttW19uVMjjKVDa/Stage%205/St5_U6_Properties_of_Shapes_WR.pdf?dl=0");
    });
    $(".5_7").click(function () {
        $("#themes").html("Develop ways of counting");
        $("#key").html("Count forwards in tens and hundreds from any positive number up to 1 000 000</br>Count forwards in thousands from any positive number up to 1 000 000</br>Count backwards in tens and hundreds from any positive number up to 1 000 000</br>Count backwards in thousands from any positive number up to 1 000 000");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACtO_d3loYK-XtcTd1x4Yyka/Stage%205/St5_U7_Pattern_Sniffing_WR.pdf?dl=0");
    });
    $(".5_8").click(function () {
        $("#themes").html("Solve problems involving time</br>Interpret information in tables</br>Interpret information in timetables");
        $("#key").html("Solve a problem involving converting between different units of time</br>Read and interpret information given in a table</br>Read and interpret information given in a timetable</br>Solve problems that involve interpreting timetables");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADLNGRnlS0-2rqoNvNWPuica/Stage%205/St5_U8_Time_WR.pdf?dl=0");
    });
    $(".5_9").click(function () {
        $("#themes").html("Explore the equivalence between fractions</br>Explore the equivalence between fractions and decimals</br>Understand the meaning of percentages");
        $("#key").html("Compare fractions whose denominators are multiples of the same number</br>Order fractions whose denominators are multiples of the same number</br>Identify equivalent fractions represented using tenths and hundredths</br>Understand and use thousandths</br>Write a number (less than1) with one decimal place as a fraction</br>Write a number (less than 1) with two decimal places as a fraction</br>Recognise that thousandths arise from dividing a number (or object) into one thousand equal parts and dividing hundredths by ten</br>Solve problems involving number up to three decimal places</br>Read a number with three decimal places</br>Compare and order a set of numbers written to three decimal places</br>Compare and order a set of numbers with a mixed number of decimal places</br>Understand that per cent relates to number of parts per hundred</br>Write any percentage as a fraction with a denominator of 100</br>Write any percentage as a decimal");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABJ-0f2inrkVJ4wNT0zRi6-a/Stage%205/St5_U9_Exploring_FDP_WR.pdf?dl=0");
    });
    $(".5_10").click(function () {
        $("#themes").html("Convert between measures</br>Know and work with common Imperial units</br>Solve problems involving measurement</br>Solve problems involving money");
        $("#key").html("Convert between kilometres and metres</br>Convert between centimetres and metres</br>Convert between centimetres and millimetres</br>Convert between kilograms and grams</br>Convert between litres and millilitres</br>Use decimal notation when converting between metric units of length, mass and volume / capacity</br>Know approximate equivalencies between metric and imperial units including </br>Solving problems involving measures, including money");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACfzTJz1z7fUAFUgkoXvgmqa/Stage%205/St5_U10_Measuring_Space_WR.pdf?dl=0");
    });
    $(".5_11").click(function () {
        $("#themes").html("Develop knowledge of angles</br>Measure angles</br>Draw angles");
        $("#key").html("Know that angles are measured in degrees and estimate acute, obtuse and reflex angles</br>Know that a reflex angle is greater than 180° and estimate reflex angles</br>Identify and find angles at a point</br>Identify and find angles at a point on a straight line</br>Use a protractor to measure angles less than 180°</br>Use a protractor to measure angles greater than 180°</br>Use a protractor to draw angles less than 180°</br>Use a protractor to draw angles greater than 180°");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADeuQJYPuorXOBOOiK2Mnbfa/Stage%205/St5_U11_Angles_WR.pdf?dl=0");
    });
    $(".5_12").click(function () {
        $("#themes").html("Explore mixed numbers</br>Calculate with fractions</br>Explore fractions, decimals and percentages");
        $("#key").html("Convert a mixed number into an improper fraction (and vice versa)</br>Add fractions when one denominator is a multiple of the other including mixed numbers as part of the question and/or answer.</br>Subtract fractions when one denominator is a multiple of the other including mixed numbers as part of the question and/or answer </br>Multiply a proper fraction by a whole number</br>Multiply a mixed number by a whole number</br>Know percentage equivalents of 1/2, 1/4, 1/5, 2/5, 4/5 and fractions with a denominator of 10 and 100 </br>Establish percentage equivalents of fractions with a denominator of 20, 25, 40 and 50</br>Know decimal equivalents of 1/2, 1/4, 1/5, 2/5, 4/5 and fractions with a denominator of 10 and 100 </br>Establish decimal equivalents of fractions with a denominator of 20, 25, 40 and 50");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABCXrds2g73FUF1JkM3izw9a/Stage%205/St5_U12_Calculating_FDP_WR.pdf?dl=0");
    });
    $(".5_13").click(function () {
        $("#themes").html("Exploring the perimeter of composite shapes</br>Calculate areas of rectangles</br>Investigate volume and capacity");
        $("#key").html("Calculate the perimeter of composite rectilinear shapes </br>Calculate the area of a rectangles, including squares</br>Convert between square centimetres (cm²) and square metres (m²)  </br>Estimate the area of irregular shapes bounded by straight lines</br>Estimate the area of irregular shapes that include curved lines</br>Estimate volume by using 1 cm3 blocks to build cuboids, including cubes</br>Estimate capacity</br>Solve problems involvjng area and perimeter");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAAmfugDz6T8w2tlri6eyUBsa/Stage%205/St5_U13_Calculating_Space_WR.pdf?dl=0");
    });
    $(".5_14").click(function () {
        $("#themes").html("Explore ways of approximating numbers</br>Explore ways of checking answers");
        $("#key").html("Approximate any number by rounding to the nearest 10 000 or 100 000</br>Approximate any number with two decimal place by rounding to the nearest whole number or rounding to one decimal place</br>Understand estimating as the process of finding a rough value of an answer or calculation</br>Estimate calculations with up to four digits");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAD5TWqr20gutt0n9vqb51Mka/Stage%205/St5_U14_Checking_WR.pdf?dl=0");
    });
    $(".5_15").click(function () {
        $("#themes").html("Use transformations to move shapes");
        $("#key").html("Carry out a translation described using mathematical language</br>Describe a translation using mirror lines parallel to the axes</br>Carry out a reflection using a mirror line parallel to the axes</br>Carry out a reflection using a mirror line parallel to the axes and touching the object</br>Carry out a reflection using a mirror line parallel to the axes and crossing the object</br>Describe a reflection using mirror lines parallel to the axes</br>Understand that a translations and reflections produce a congruent image</br>Solve problems involving transformations");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAD0-TJocXT4wNlU5X5daWI0a/Stage%205/St5_U15_Movement_WR.pdf?dl=0");
    });
    $(".5_16").click(function () {
        $("#themes").html("Solve problems involving graphs");
        $("#key").html("Understand the difference between a line graph and a bar-line chart</br>Identify when a line graph is an appropriate way to show data</br>Read values from a line graph</br>Answer one-step questions about data in line graphs (e.g. ‘How much?’)</br>Answer two-step questions about data in line graphs (e.g. ‘How much more?’)</br>Solve problems using information presented in a line graph</br>Solve problems involving graphs");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACziQPVlEMLexR1XjcjoICKa/Stage%205/St5_U16_Presenting_Data_WR.pdf?dl=0");
    });
    $(".6_1").click(function () {
        $("#themes").html("Understand and use decimals with up to three decimal places</br>Work with numbers up to ten million</br>Explore the use of negative numbers</br>Develop understanding of factors and multiples</br>Investigate prime numbers");
        $("#key").html("Write and read numbers up to and including 10 000 000</br>Compare and order numbers up to and including 10 000 000</br>Multiply numbers by 10</br>Multiply numbers by 100</br>Multiply numbers by 1000</br>Divide numbers by 10 </br>Divide numbers by 100</br>Divide numbers by 1000</br>Understand and use negative numbers when working in context, such as temperature</br>Calculate intervals across zero</br>Find common multiples of two numbers</br>Find common factors of two numbers");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACgwxkofYMWNck2QHB4WiE9a/Stage%206/St6_U1_Number_System_WR.pdf?dl=0");
    });
    $(".6_2").click(function () {
        $("#themes").html("Develop mental calculation skills</br>Extend written methods of multiplication</br>Know and use the order of operations</br>Solve problems involving addition, subtraction and multiplication");
        $("#key").html("Carry out calculations mentally involving numbers up to 4 digits.</br>Multiply a four-digit number by a two-digit number using long multiplication</br>Carry out calculations involving a mixture of multiplication and division</br>Carry out calculations involving mixture of addition and subtraction</br>Carry out calculations involving mixture of multiplication and addition/subtraction</br>Carry out calculations involving mixture of division and addition/subtraction</br>Solve multi-step problems involving addition, subtraction and/or multiplication");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAABPFdV_LqNuChubs9d1t0ha/Stage%206/St6_U2_Calculating_WR.pdf?dl=0");
    });
    $(".6_3").click(function () {
        $("#themes").html("Construct 2D shapes</br>Investigate 3D shapes</br>Explore nets of 3D shapes");
        $("#key").html("Draw 2-D shapes given angles</br>Draw 2-D shapes given dimensions and angles</br>Recognise prisms</br>Recognise pyramids</br>Classify 3-D shapes including cylinders, cones and spheres</br>Draw nets of 3-D shapes</br>Solve 3-D problems using nets including visualising the edges (vertices) that will meet when folded");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABjW69T9fL9VYdgsxc9iBkaa/Stage%206/St6_U3_Visualising_Constructing_WR.pdf?dl=0");
    });
    $(".6_4").click(function () {
        $("#themes").html("Develop written methods of short division for numbers up to four-digits divided by a one-digit number</br>Deal with remainders when carrying out division</br>Solve problems involving the four operations");
        $("#key").html("Divide a three-digit number by a two-digit number using a formal written method of division with no remainder</br>Divide a three-digit number by a two-digit number using a formal written method of division with a remainder</br>Divide a four-digit number by a two-digit number using a formal written method of division with no remainder</br>Divide a four-digit number by a two-digit number using a formal written method of division with a remainder</br>Understand how to write the remainder to a division problem as a whole number remainder or as a fraction </br>Understand how to interpret remainder to a division problem appropriately for the context</br>Solve problems involving division");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABEivdgxhPLQ5wpPyMA7JHBa/Stage%206/St6_U4_Division_WR.pdf?dl=0");
    });
    $(".6_5").click(function () {
        $("#themes").html("Investigate properties of 2D shapes</br>Investigate angles in polygons</br>Understand and use the vocabulary of circles");
        $("#key").html("Classify 2D shapes using given categories; e.g. number of sides, symmetry</br>Find unknown angles in a triangle</br>Find unknown angles in an isosceles triangle when only one angle is known</br>Find unknown angles in a quadrilateral</br>Find unknown angles in regular polygons</br>Solve problems involving 2-D shapes</br>Know the names and relationships of the parts a circle");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAA2B-XCcsMeJbPs8q8OcgcAa/Stage%206/St6_U5_Properties_of_Shapes_WR.pdf?dl=0");
    });
    $(".6_6").click(function () {
        $("#themes").html("Explore the equivalence between fractions</br>Use the equivalence between fractions</br>Explore the equivalence between fractions, decimals and percentages");
        $("#key").html("Use common factors to simplify fractions</br>Use common multiples to find equivalent fractions</br>Compare and order fractions</br>Compare and order fractions, including fractions > 1</br>Understand a fraction is associated with division </br>Work out the decimal equivalents of fifths, eighths and tenths</br>Know simple fractions, decimals and percentages equivalences (e.g. 10%, 20%, 25%, 50%, 75%, 100%)</br>Find equivalencies between fractions, decimals and percentages");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAAfZuYG51ceK-DT4nQf_yNYa/Stage%206/St6_U6_Exploring_FDP_WR.pdf?dl=0");
    });
    $(".6_7").click(function () {
        $("#themes").html("Use simple formulae written in words</br>Create simple formulae written in words</br>Work with formulae written algebraically");
        $("#key").html("Use a simple one-step formula written in words</br>Use a simple two-step formula written in words</br>Use simple formula expressed in symbols</br>Convert between miles and kilometres");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABcaE5z_fLQgP2wA6muJL_2a/Stage%206/St6_U7_Formulae_WR.pdf?dl=0");
    });
    $(".6_8").click(function () {
        $("#themes").html("Solve problems involving scaling</br>Explore enlargement</br>Solve problems involving sharing and grouping");
        $("#key").html("Solve simple problems involving the relative sizes of two quantities where missing values can be found by using integer multiplication and division facts; e.g. find the value of the parts, given the whole)</br>Solve problems involving the relative sizes of two quantities where missing values can be found by using integer multiplication and division facts; e.g. find the value of the whole and parts, given one part)</br>Use a scale factor to solve problems involving similar shapes </br>Find the scale factor of similar shapes</br>Solve problems involving unequal sharing or grouping problems using fractions</br>Solve problems involving unequal sharing or grouping problems using multiples");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADhYHefcpgFE3rGJESCTlHTa/Stage%206/St6_U8_Proportion_WR.pdf?dl=0");
    });
    $(".6_9").click(function () {
        $("#themes").html("Explore number sequences");
        $("#key").html("Recognise and describe a linear sequence</br>Find the next terms in a linear sequence</br>Find a missing term in a linear sequence</br>Generate a linear sequence from its description");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AAD8nPEaiHiEI-qj0OFnR1pva/Stage%206/St6_U9_Pattern_Sniffing_WR.pdf?dl=0");
    });
    $(".6_10").click(function () {
        $("#themes").html("Solve problems involving measurement");
        $("#key").html("Convert between non-adjacent metric units length and mass from the smaller unit to the larger unit; e.g. centimetres to kilometres</br>Convert between non-adjacent metric units length and mass from the larger unit to the smaller unit; e.g. kilometres and centimetres</br>Convert between non-adjacent time units; e.g. hours to seconds</br>Solve problems involving converting between measures");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABNddzHDeRXQVTatU0qVDAea/Stage%206/St6_U10_Measuring_Space_WR.pdf?dl=0");
    });
    $(".6_11").click(function () {
        $("#themes").html("Develop knowledge of angles</br>Apply angle facts to deduce unknown angles");
        $("#key").html("Find missing angles where they meet at a point</br>Find missing angles where they meet on a straight line</br>Find missing angles where they are vertically opposite</br>Use known facts to find missing angles");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACPvUOlVZuEkp4dhaNkW-dta/Stage%206/St6_U11_Angles_WR.pdf?dl=0");
    });
    $(".6_12").click(function () {
        $("#themes").html("Calculate with fractions</br>Calculate with decimals</br>Calculate with percentages");
        $("#key").html("Add fractions with different denominators</br>Add a mixed number and a fraction, including with different denominators</br>Add mixed numbers, including with different denominators</br>Subtract fractions with different denominators</br>Subtract a mixed number and a fraction, including with different denominators</br>Subtract mixed numbers, including with different denominators</br>Multiply a proper fraction by a proper fraction</br>Divide a proper fraction by a whole number</br>Multiply U.t by U</br>Multiply U.th by U</br>Calculate percentages of a quantity</br>Solve problems involving the use of percentages to make comparisons");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABHM1DkuxaLUXeAAErRfurVa/Stage%206/St6_U12_Calculating_FDP_WR.pdf?dl=0");
    });
    $(".6_13").click(function () {
        $("#themes").html("Solve missing number problems</br>Understand and use algebra");
        $("#key").html("Find all combinations of two variables that solve a missing number problem with two unknowns</br>Find pairs of numbers that satisfy an equation with two unknowns e.g. a + b = 15</br>Know the basic rules of algebraic notation</br>Express and solve missing number problems algebraically");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABeJwmpazRKneIEuzCvi7x_a/Stage%206/St6_U13_Equations_WR.pdf?dl=0");
    });
    $(".6_15").click(function () {
        $("#themes").html("Explore area</br>Investigate volume</br>Solve problems involving area and volume");
        $("#key").html("Recognise that shapes with the same areas can have different perimeters and vice versa</br>Calculate the area of a parallelogram</br>Calculate the area of a triangle</br>Estimate the volume of cubes and cuboids</br>Calculate the volume of cuboid, including cubes</br>Recognise when it is possible to use formulae to calculate area and volume</br>Convert between metric units of area in simple cases</br>Convert between metric units of volume in simple cases");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AADGGJnCj5rRuxcRZ195ynhba/Stage%206/St6_U14_Calculating_Space_WR.pdf?dl=0");
    });
    $(".6_14").click(function () {
        $("#themes").html("Explore ways of approximating numbers</br>Explore ways of checking answers");
        $("#key").html("Approximate any number by rounding to a specified degree of accuracy; e.g. nearest 1, 10, 100, 1000, decimal place, etc</br>Understand estimating as the process of finding a rough value of an answer or calculation</br>Use estimation to predict the order of magnitude of the solution to a decimal calculation, including decimals</br>Check the order of magnitude of the solution to a calculation, including decimals");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AABTVUdQASxvO0sXeYr8uqjCa/Stage%206/St6_U15_Checking_WR.pdf?dl=0");
    });
    $(".6_16").click(function () {
        $("#themes").html("Understand and use Cartesian coordinates </br>Use transformations to move shapes");
        $("#key").html("Use coordinates to describe the position of a point in all four quadrants</br>Use coordinates to plot the position of a point in any of the four quadrants</br>Draw and translate simple shapes</br>Carry out a reflection using one of the axes as a mirror line ");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "https://www.dropbox.com/sh/taeg5o4vlpwggui/AACSxeh5cKYJvnHcrSVoEVmga/Stage%206/St6_U16_Movement_WR.pdf?dl=0");
    });
    $(".6_17").click(function () {
        $("#themes").html("Construct and interpret pie charts</br>Solve problems involving graphs and charts</br>Understand and use the mean");
        $("#key").html("Interpret pie charts </br>Construct a pie chart by measuring angles</br>Interpret line graphs</br>Construct line graphs</br>Understand the meaning of ‘average’ as a typicality (or location)</br>Calculate the mean of a set of discrete data</br>Interpret the mean of a set of discrete data</br>Use the mean to find a missing number in a set of data");
        var $contents = $(this).text();
        $(".external").children("h3").text($contents + "  -   Fluency, Reasoning and Solving Problems Exemplification (.pdf)");
        $(".download").attr("href", "");
    });
});
