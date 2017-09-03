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
    $(".5_1").click(function () {
        $("#statements").html("identify multiples and factors, including finding all factor pairs of a number, and common factors of two numbers<br/>know and use the vocabulary of prime numbers, prime factors and composite (non-prime) numbers<br/>establish whether a number up to 100 is prime and recall prime numbers up to 19<br/>recognise and use square numbers and cube numbers, and the notation for squared (²) and cubed (³)");
        $("#themes").html("Identify multiples of numbers<br/>Explore factors of numbers<br/>Investigate prime numbers<br/>Work with square and cube numbers");
        $("#key").html("Know and identify multiples of a given number<br/>Know the identify factors of a given number<br/>Find the ‘common factor’ of two numbers<br/>Know the meaning of ‘prime number’ and recall the prime numbers less than 20<br/>Know the prime factors of a given number<br/>Know how to test if a number up to 100 is prime<br/>Know and identify square numbers<br/>Know and identify cube numbers");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_2").click(function () {
        $("#statements").html("read, write, order and compare numbers to at least 1 000 000 and determine the value of each digit<br/>read Roman numerals to 1000 (M) and recognise years written in Roman numerals<br/>interpret negative numbers in context, count forwards and backwards with positive and negative whole numbers, including through zero");
        $("#themes").html("Work with numbers up to one million<br/>Understand and use other number systems<br/>Understand and use negative numbers");
        $("#key").html("Understand place value in numbers with up to seven digits<br/>Order numbers up to and including those with seven digits<br/>Write and read numbers up to and including those with seven digits<br/>Read Roman numerals to 1000 (M)<br/>Recognise years written in Roman numerals<br/>Count forwards and backwards in whole number steps when negative numbers are included<br/>Count forwards and backwards in whole number steps including through zero<br/>Understand and use negative numbers in context, including temperatures below 0°C");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_3").click(function () {
        $("#statements").html("round any number up to 1 000 000 to the nearest 10, 100, 1000, 10 000 and 100 000<br/>round decimals with two decimal places to the nearest whole number and to one decimal place<br/>use rounding to check answers to calculations and determine, in the context of a problem, levels of accuracy");
        $("#themes").html("Explore ways of approximating numbers<br/>Explore ways of checking answers");
        $("#key").html("Round any number up to 1 000 000 to the nearest 10 and 100<br/>Round any number up to 1 000 000 to the nearest 1 000<br/>Round any number up to 1 000 000 to the nearest 10 000<br/>Round any number up to 1 000 000 to the nearest 100 000<br/>Round any number with two decimal place to one decimal place<br/>Round any number with two decimal place to the nearest whole number<br/>Understand estimating as the process of finding a rough value of an answer or calculation<br/>Estimate calculations with up to four digits");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_4").click(function () {
        $("#statements").html("add and subtract numbers mentally with increasingly large numbers<br/>add and subtract whole numbers with more than 4 digits, including using formal written methods (columnar addition and subtraction)<br/>solve addition and subtraction multi-step problems in contexts, deciding which operations and methods to use and why");
        $("#themes").html("Develop mental addition and subtraction skills<br/>Extend written methods of addition and subtraction<br/>Solve problems involving addition and subtraction");
        $("#key").html("Add four-digit numbers and ones, tens, hundreds or thousands mentally <br/>Subtract four-digit numbers and ones, tens, hundreds or thousands mentally<br/>Use columnar addition for numbers with more than four digits with no carrying required<br/>Use columnar addition for numbers with more than four digits with carrying required<br/>Use columnar subtraction for numbers with more than four digits with no exchanging required<br/>Use columnar subtraction for numbers with more than four digits with exchanging required<br/>Solve multi-step problems involving addition and/or subtraction");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_5").click(function () {
        $("#statements").html("identify 3-D shapes, including cubes and other cuboids, from 2-D representations");
        $("#themes").html("Investigate 3D shapes");
        $("#key").html("Identify 3D-shapes from photographs and sketches<br/>Identify 3D-shapes from nets<br/>Identify 3D-shapes from diagrams on isometric paper<br/>Construct diagrams of 3D-shapes on isometric paper");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_6").click(function () {
        $("#statements").html("multiply and divide numbers mentally drawing upon known facts<br/>multiply and divide whole numbers and those involving decimals by 10, 100 and 1000<br/>multiply numbers up to 4 digits by a one- or two-digit number using a formal written method, including long multiplication for two-digit numbers<br/>divide numbers up to 4 digits by a one-digit number using the formal written method of short division and interpret remainders appropriately for the context<br/>solve problems involving multiplication and division including using their knowledge of factors and multiples, squares and cubes<br/>solve problems involving multiplication and division, including scaling by simple fractions and problems involving simple rates<br/>solve problems involving addition, subtraction, multiplication and division and a combination of these, including understanding the meaning of the equals sign");
        $("#themes").html("Develop mental arithmetic skills<br/>Explore multiplication and division of decimals<br/>Develop written methods of multiplication<br/>Develop written methods of division<br/>Solve problems involving multiplication and division");
        $("#key").html("Use knowledge of multiplication tables when multiplying and dividing mentally<br/>Multiply a whole number or decimal by 10, 100 or 1000<br/>Divide a whole number or decimal by 10, 100 or 1000<br/>Multiply numbers up to 4-digits by a one-digit number using short multiplication<br/>Multiply three-digit numbers by a two-digit number using long multiplication<br/>Multiply four-digit numbers by a two-digit number using long multiplication<br/>Divide a three-digit number by a one-digit number using short division with no remainder<br/>Divide a three-digit number by a one-digit number using short division with a remainder<br/>Divide a four-digit number by a one-digit number using short division with no remainder<br/>Divide a four-digit number by a one-digit number using short division with a remainder<br/>Interpret a remainder appropriately for the context when carrying out division<br/>Identify when knowledge of factors (multiples, squares, cubes) can be used to help solve a problem");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_7").click(function () {
        $("#statements").html("use the properties of rectangles to deduce related facts and find missing lengths and angles<br/>distinguish between regular and irregular polygons based on reasoning about equal sides and angles");
        $("#themes").html("Explore the properties of rectangles<br/>Investigate polygons");
        $("#key").html("Use the properties of rectangles to find missing lengths and angles<br/>Use the properties of rectangles to find points on a coordinate grid<br/>Know the difference between a regular and an irregular polygon<br/>Use the properties of regular polygons to find points on a coordinate grid");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_8").click(function () {
        $("#statements").html("count forwards or backwards in steps of powers of 10 for any given number up to 1 000 000");
        $("#themes").html("Develop ways of counting");
        $("#key").html("Count forwards in tens and hundreds from any positive number up to 1 000 000<br/>Count forwards in thousands from any positive number up to 1 000 000<br/>Count backwards in tens and hundreds from any positive number up to 1 000 000<br/>Count backwards in thousands from any positive number up to 1 000 000");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_9").click(function () {
        $("#statements").html("solve problems involving converting between units of time<br/>complete, read and interpret information in tables, including timetables");
        $("#themes").html("Solve problems involving time<br/>Interpret information in tables<br/>Interpret information in timetables");
        $("#key").html("Solve a problem involving converting between different units of time<br/>Read and interpret information given in a table<br/>Read and interpret information given in a timetable<br/>Solve problems that involve interpreting timetables");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_10").click(function () {
        $("#statements").html("compare and order fractions whose denominators are all multiples of the same number<br/>identify, name and write equivalent fractions of a given fraction, represented visually, including tenths and hundredths<br/>recognise and use thousandths and relate them to tenths, hundredths and decimal equivalents<br/>read and write decimal numbers as fractions [for example, 0.71 = 71/100]<br/>read, write, order and compare numbers with up to three decimal places<br/>recognise the per cent symbol (%) and understand that per cent relates to ‘number of parts per hundred’, and write percentages as a fraction with denominator 100, and as a decimal");
        $("#themes").html("Explore the equivalence between fractions<br/>Explore the equivalence between fractions and decimals<br/>Understand the meaning of percentages");
        $("#key").html("Compare fractions whose denominators are multiples of the same number<br/>Order fractions whose denominators are multiples of the same number<br/>Identify equivalent fractions represented using tenths and hundredths<br/>Understand and use thousandths<br/>Write a number (less than1) with one decimal place as a fraction<br/>Write a number (less than 1) with two decimal places as a fraction<br/>Recognise that thousandths arise from dividing a number (or object) into one thousand equal parts and dividing hundredths by ten<br/>Solve problems involving number up to three decimal places<br/>Read a number with three decimal places<br/>Compare and order a set of numbers written to three decimal places<br/>Compare and order a set of numbers with a mixed number of decimal places<br/>Understand that per cent relates to number of parts per hundred<br/>Write any percentage as a fraction with a denominator of 100<br/>Write any percentage as a decimal");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_11").click(function () {
        $("#statements").html("convert between different units of metric measure (for example, kilometre and metre; centimetre and metre; centimetre and millimetre; gram and kilogram; litre and millilitre)<br/>understand and use approximate equivalences between metric units and common imperial units such as inches, pounds and pints<br/>use all four operations to solve problems involving measure [for example, length, mass, volume, money] using decimal notation, including scaling");
        $("#themes").html("Convert between different units of metric measure (for example, kilometre and metre; centimetre and metre; centimetre and millimetre; gram and kilogram; litre and millilitre)<br/>Understand and use approximate equivalences between metric units and common imperial units such as inches, pounds and pints<br/>Use all four operations to solve problems involving measure [for example, length, mass, volume, money] using decimal notation, including scaling");
        $("#key").html("Convert between kilometres and metres<br/>Convert between centimetres and metres<br/>Convert between centimetres and millimetres<br/>Convert between kilograms and grams<br/>Convert between litres and millilitres<br/>Use decimal notation when converting between metric units of length, mass and volume / capacity<br/>Know approximate equivalencies between metric and imperial units including <br/>Solving problems involving measures, including money");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_12").click(function () {
        $("#statements").html("know angles are measured in degrees: estimate and compare acute, obtuse and reflex angles<br/>draw given angles, and measure them in degrees (°)<br/>identify: angles at a point and one whole turn (total 360°); angles at a point on a straight line and 1/2 a turn (total 180°); other multiples of 90°");
        $("#themes").html("Develop knowledge of angles<br/>Measure angles<br/>Draw angles");
        $("#key").html("Know that angles are measured in degrees and estimate acute, obtuse and reflex angles<br/>Know that a reflex angle is greater than 180° and estimate reflex angles<br/>Identify and find missing angles at a point<br/>Identify and find missing angles at a point on a straight line<br/>Use a protractor to measure angles less than 180°<br/>Use a protractor to measure angles greater than 180°<br/>Use a protractor to draw angles less than 180°<br/>Use a protractor to draw angles greater than 180°");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_13").click(function () {
        $("#statements").html("recognise mixed numbers and improper fractions and convert from one form to the other and write mathematical statements > 1 as a mixed number [for example, 2/5 + 4/5 = 6/5 = 1 1/5]<br/>add and subtract fractions with the same denominator and denominators that are multiples of the same number<br/>multiply proper fractions and mixed numbers by whole numbers, supported by materials and diagrams<br/>solve problems which require knowing percentage and decimal equivalents of 1/2, 1/4, 1/5, 2/5, 4/5 and those fractions with a denominator of a multiple of 10 or 25<br/>solve problems involving number up to three decimal places");
        $("#themes").html("Explore mixed numbers<br/>Calculate with fractions<br/>Explore fractions, decimals and percentages");
        $("#key").html("Convert a mixed number into an improper fraction (and vice versa)<br/>Add fractions when one denominator is a multiple of the other including mixed numbers as part of the answer<br/>Add fractions when one denominator is a multiple of the other including mixed numbers as part of the question <br/>Subtract fractions when one denominator is a multiple of the other including mixed numbers as part of the answer<br/>Subtract fractions when one denominator is a multiple of the other including mixed numbers as part of the question<br/>Multiply a proper fraction by a whole number<br/>Multiply a mixed number by a whole number<br/>Know percentage equivalents of 1/2, 1/4, 1/5, 2/5, 4/5 and fractions with a denominator of 10 and 100 <br/>Establish percentage equivalents of fractions with a denominator of 20, 25, 40 and 50<br/>Know decimal equivalents of 1/2, 1/4, 1/5, 2/5, 4/5 and fractions with a denominator of 10 and 100 <br/>Establish decimal equivalents of fractions with a denominator of 20, 25, 40 and 50");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_14").click(function () {
        $("#statements").html("measure and calculate the perimeter of composite rectilinear shapes in centimetres and metres<br/>calculate and compare the area of rectangles (including squares), and including using standard units, square centimetres (cm²) and square metres (m²) and estimate the area of irregular shapes<br/>estimate volume [for example, using 1 cm³ blocks to build cuboids (including cubes)] and capacity [for example, using water]");
        $("#themes").html("Exploring the perimeter of composite shapes<br/>Calculate areas of rectangles<br/>Investigate volume and capacity");
        $("#key").html("Calculate the perimeter of composite rectilinear shapes <br/>Calculate the area of a rectangles, including squares<br/>Convert between square centimetres (cm²) and square metres (m²)  <br/>Estimate the area of irregular shapes bounded by straight lines<br/>Estimate the area of irregular shapes that include curved lines<br/>Estimate volume by using 1 cm3 blocks to build cuboids, including cubes<br/>Estimate capacity");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_15").click(function () {
        $("#statements").html("identify, describe and represent the position of a shape following a reflection or translation, using the appropriate language, and know that the shape has not changed");
        $("#themes").html("Use transformations to move shapes");
        $("#key").html("Carry out a translation described using mathematical language<br/>Describe a translation using mirror lines parallel to the axes<br/>Carry out a reflection using a mirror line parallel to the axes<br/>Carry out a reflection using a mirror line parallel to the axes and touching the object<br/>Carry out a reflection using a mirror line parallel to the axes and crossing the object<br/>Describe a reflection using mirror lines parallel to the axes<br/>Understand that a translations and reflections produce a congruent image");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".5_16").click(function () {
        $("#statements").html("solve comparison, sum and difference problems using information presented in a line graph");
        $("#themes").html("Solve problems involving graphs");
        $("#key").html("Understand the difference between a line graph and a bar-line chart<br/>Identify when a line graph is an appropriate way to show data<br/>Read values from a line graph<br/>Answer one-step and two-step questions about data in line graphs (e.g. ‘How much?’)<br/>Solve problems using information presented in a line graph");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_1").click(function () {
        $("#statements").html("identify the value of each digit in numbers given to three decimal places and multiply and divide numbers by 10, 100 and 1000 giving answers up to three decimal places<br/>read, write, order and compare numbers up to 10 000 000 and determine the value of each digit<br/>use negative numbers in context, and calculate intervals across zero<br/>identify common factors, common multiples and prime numbers");
        $("#themes").html("Understand and use decimals with up to three decimal places<br/>Work with numbers up to ten million<br/>Explore the use of negative numbers<br/>Develop understanding of factors and multiples<br/>Investigate prime numbers");
        $("#key").html("Write and read numbers up to and including 10 000 000<br/>Compare and order numbers up to and including 10 000 000<br/>Multiply whole numbers by 10<br/>Multiply whole numbers by 100<br/>Multiply whole numbers by 1000<br/>Divide whole numbers by 10<br/>Divide whole numbers by 100<br/>Divide whole numbers by 1000<br/>Understand and use negative numbers when working in context, such as temperature<br/>Calculate intervals across zero<br/>Find common multiples of two numbers<br/>Find common factors of two numbers");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_2").click(function () {
        $("#statements").html("solve problems which require answers to be rounded to specified degrees of accuracy<br/>use estimation to check answers to calculations and determine, in the context of a problem, an appropriate degree of accuracy<br/>round any whole number to a required degree of accuracy");
        $("#themes").html("Explore ways of approximating numbers<br/>Explore ways of checking answers");
        $("#key").html("Round a number to the nearest 10<br/>Round a number to the nearest 100<br/>Round a number to the nearest 1000<br/>Round a number to the nearest whole number<br/>Round a number to the nearest 1 decimal place<br/>Round a number to the nearest 2 decimal places<br/>Understand estimating as the process of finding a rough value of an answer or calculation");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_3").click(function () {
        $("#statements").html("perform mental calculations, including with mixed operations and large numbers<br/>solve addition and subtraction multi-step problems in contexts, deciding which operations and methods to use and why<br/>multiply multi-digit numbers up to 4 digits by a two-digit whole number using the formal written method of long multiplication<br/>solve problems involving addition, subtraction and multiplication<br/>use their knowledge of the order of operations to carry out calculations");
        $("#themes").html("Develop mental calculation skills<br/>Extend written methods of multiplication<br/>Know and use the order of operations<br/>Solve problems involving addition, subtraction and multiplication");
        $("#key").html("Carry out addition and subtraction calculations mentally involving numbers up to 4 digits.<br/>Multiply a four-digit number by a two-digit number using long multiplication<br/>Carry out calculations involving a mixture of multiplication and division<br/>Carry out calculations involving mixture of addition and subtraction<br/>Carry out calculations involving mixture of multiplication and addition/subtraction<br/>Carry out calculations involving mixture of division and addition/subtraction<br/>Solve multi-step problems involving addition, subtraction and/or multiplication<br/>Check the order of magnitude of the solution to a calculation, including decimals");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_4").click(function () {
        $("#statements").html("divide numbers up to 4 digits by a two-digit whole number using the formal written method of long division; interpret remainders as whole number remainders, fractions, or by rounding, as appropriate for the context<br/>divide numbers up to 4 digits by a two-digit number using the formal written method of short division where appropriate, interpreting remainders according to the context<br/>use written division methods in cases where the answer has up to two decimal places<br/>solve problems involving division<br/>use their knowledge of the order of operations to carry out calculations involving the four operations");
        $("#themes").html("Develop written methods of short division for numbers up to four-digits divided by a one-digit number<br/>Deal with remainders when carrying out division<br/>Solve problems involving the four operations");
        $("#key").html("Divide a three-digit number by a two-digit number using a formal written method of division with no remainder<br/>Divide a three-digit number by a two-digit number using a formal written method of division with a remainder<br/>Divide a four-digit number by a two-digit number using a formal written method of division with no remainder<br/>Divide a four-digit number by a two-digit number using a formal written method of division with a remainder<br/>Understand how to write the remainder to a division problem as a whole number remainder or as a fraction<br/>Understand how to interpret remainder to a division problem appropriately for the context<br/>Solve problems involving division");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_5").click(function () {
        $("#statements").html("draw 2-D shapes using given dimensions and angles<br/>recognise, describe and build simple 3-D shapes, including making nets");
        $("#themes").html("Construct 2D shapes<br/>Investigate 3D shapes<br/>Explore nets of 3D shapes");
        $("#key").html("Draw 2-D shapes given angles<br/>Draw 2-D shapes given dimensions and angles<br/>Recognise prisms<br/>Recognise pyramids<br/>Classify 3-D shapes including cylinders, cones and spheres<br/>Build 3-D shapes form nets<br/>Draw nets of 3-D shapesSolve 3-D problems using nets including visualising the edges (vertices) that will meet when folded");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_6").click(function () {
        $("#statements").html("compare and classify geometric shapes based on their properties and sizes and find unknown angles in any triangles, quadrilaterals, and regular polygons<br/>illustrate and name parts of circles, including radius, diameter and circumference and know that the diameter is twice the radius");
        $("#themes").html("Investigate properties of 2D shapes<br/>Investigate angles in polygons<br/>Understand and use the vocabulary of circles");
        $("#key").html("Classify 2D shapes using given categories; e.g. number of sides, symmetry<br/>Find unknown angles in a triangle<br/>Find unknown angles in an isosceles triangle when only one angle is known<br/>Find unknown angles in a quadrilateral<br/>Find unknown angles in regular polygons<br/>Solve problems involving missing angles<br/>Solve problems involving 2-D shapes<br/>Know the names and relationships of the parts a circle");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_7").click(function () {
        $("#statements").html("use common factors to simplify fractions; use common multiples to express fractions in the same denomination<br/>compare and order fractions, including fractions > 1<br/>associate a fraction with division and calculate decimal fraction equivalents [for example, 0.375] for a simple fraction [for example, 3/8]<br/>recall and use equivalences between simple fractions, decimals and percentages, including in different contexts");
        $("#themes").html("Explore the equivalence between fractions<br/>Use the equivalence between fractions<br/>Explore the equivalence between fractions, decimals and percentages");
        $("#key").html("Use common factors to simplify fractions<br/>Use common multiples to find equivalent fractions<br/>Compare and order fractions (fractions < 1)<br/>Compare and order fractions, including fractions > 1<br/>Understand a fraction is associated with division<br/>Work out the decimal equivalents of fifths, eighths and tenths<br/>Know simple fractions, decimals and percentages equivalences (e.g. 10%, 20%, 25%, 50%, 75%, 100%)<br/>Find equivalencies between fractions, decimals and percentages");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_8").click(function () {
        $("#statements").html("use simple formulae<br/>convert between miles and kilometres");
        $("#themes").html("Use simple formulae written in words<br/>Create simple formulae written in words<br/>Work with formulae written algebraically");
        $("#key").html("Use a simple one-step formula written in words<br/>Use a simple two-step formula written in words<br/>Use simple formula expressed in symbols<br/>Convert between miles and kilometres");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_9").click(function () {
        $("#statements").html("solve problems involving the relative sizes of two quantities where missing values can be found by using integer multiplication and division facts<br/>solve problems involving similar shapes where the scale factor is known or can be found<br/>solve problems involving unequal sharing and grouping using knowledge of fractions and multiples");
        $("#themes").html("Solve problems involving scaling<br/>Explore enlargement<br/>Solve problems involving sharing and grouping");
        $("#key").html("Solve simple problems involving the relative sizes of two quantities where missing values can be found by using integer multiplication and division facts; e.g. find the value of the parts, given the whole)<br/>Solve problems involving the relative sizes of two quantities where missing values can be found by using integer multiplication and division facts; e.g. find the value of the whole and parts, given one part)<br/>Use a scale factor to solve problems involving similar shapes<br/>Find the scale factor of similar shapes<br/>Solve problems involving unequal sharing or grouping problems using fractions<br/>Solve problems involving unequal sharing or grouping problems using multiples");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_10").click(function () {
        $("#statements").html("generate and describe linear number sequences");
        $("#themes").html("Explore number sequences");
        $("#key").html("Recognise and describe a linear sequence<br/>Find the next terms in a linear sequence<br/>Find a missing term in a linear sequence<br/>Generate a linear sequence from its description<br/>Solve problems involving linear sequences");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_11").click(function () {
        $("#statements").html("use, read, write and convert between standard units, converting measurements of length, mass, volume and time from a smaller unit of measure to a larger unit, and vice versa, using decimal notation to up to three decimal places");
        $("#themes").html("Solve problems involving measurement");
        $("#key").html("Convert between non-adjacent metric units length from the smaller unit to the larger unit; e.g. centimetres to kilometres<br/>Convert between non-adjacent metric units length from the larger unit to the smaller unit; e.g. kilometres and centimetres<br/>Convert between non-adjacent metric units mass from the smaller unit to the larger unit; e.g. grams to kilograms<br/>Convert between non-adjacent metric units mass from the larger unit to the smaller unit; e.g. kilograms to grams<br/>Convert between non-adjacent time units; e.g. hours to seconds<br/>Solve problems involving converting between measures");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_12").click(function () {
        $("#statements").html("recognise angles where they meet at a point, are on a straight line, or are vertically opposite, and find missing angles");
        $("#themes").html("Develop knowledge of angles<br/>Apply angle facts to deduce unknown angles");
        $("#key").html("Find missing angles where they meet at a point<br/>Find missing angles where they meet on a straight line<br/>Find missing angles where they are vertically opposite<br/>Solve problems involving missing angles");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_13").click(function () {
        $("#statements").html("add and subtract fractions with different denominators and mixed numbers, using the concept of equivalent fractions<br/>multiply simple pairs of proper fractions, writing the answer in its simplest form [for example, 1/4 × 1/2 = 1/8]<br/>divide proper fractions by whole numbers [for example, 1/3 ÷ 2 = 1/6]<br/>multiply one-digit numbers with up to two decimal places by whole numbers<br/>solve problems involving the calculation of percentages [for example, of measures, and such as 15% of360] and the use of percentages for comparison");
        $("#themes").html("Calculate with fractions<br/>Calculate with decimals<br/>Calculate with percentages");
        $("#key").html("Add fractions with different denominators<br/>Add a mixed number and a fraction, including with different denominators<br/>Add mixed numbers, including with different denominators<br/>Subtract fractions with different denominators<br/>Subtract a mixed number and a fraction, including with different denominators<br/>Subtract mixed numbers, including with different denominators<br/>Multiply a proper fraction by a proper fraction<br/>Divide a proper fraction by a whole number<br/>Multiply U.t by U<br/>Multiply U.th by U<br/>Calculate percentages of a quantity<br/>Solve problems involving the use of percentages to make comparisons");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_14").click(function () {
        $("#statements").html("enumerate possibilities of combinations of two variables<br/>express missing number problems algebraically<br/>find pairs of numbers that satisfy an equation with two unknowns");
        $("#themes").html("Solve missing number problems<br/>Understand and use algebra");
        $("#key").html("Find all combinations of two variables that solve a missing number problem with two unknowns<br/>Find pairs of numbers that satisfy an equation with two unknowns e.g. a + b = 15<br/>Know the basic rules of algebraic notation<br/>Express and solve missing number problems algebraically");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_15").click(function () {
        $("#statements").html("recognise that shapes with the same areas can have different perimeters and vice versa<br/>calculate the area of parallelograms and triangles<br/>calculate, estimate and compare volume of cubes and cuboids using standard units, including cubic centimetres (cm³) and cubic metres (m³), and extending to other units [for example, mm³ and km³]<br/>recognise when it is possible to use formulae for area and volume of shape<br/>solve problems involving the calculation and conversion of units of measure, using decimal notation up to three decimal places where appropriate");
        $("#themes").html("Explore area<br/>Investigate volume<br/>Solve problems involving area and volume");
        $("#key").html("Recognise that shapes with the same areas can have different perimeters and vice versa<br/>Calculate the area of a parallelogram<br/>Calculate the area of a triangle<br/>Estimate the volume of cubes and cuboids<br/>Calculate the volume of cuboid, including cubes<br/>Recognise when it is possible to use formulae to calculate area and volume<br/>Convert between metric units of area in simple cases<br/>Convert between metric units of volume in simple cases");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_16").click(function () {
        $("#statements").html("describe positions on the full coordinate grid (all four quadrants)<br/>draw and translate simple shapes on the coordinate plane, and reflect them in the axes");
        $("#themes").html("Understand and use Cartesian coordinates <br/>Use transformations to move shapes");
        $("#key").html("Use coordinates to describe the position of a point in all four quadrants<br/>Use coordinates to plot the position of a point in any of the four quadrants<br/>Draw and translate simple shapes<br/>Carry out a reflection using one of the axes as a mirror line ");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_17").click(function () {
        $("#statements").html("interpret and construct pie charts and line graphs and use these to solve problems");
        $("#themes").html("Construct and interpret pie charts<br/>Solve problems involving graphs and charts<br/>Understand and use the mean");
        $("#key").html("Interpret pie charts<br/>Construct a pie chart by measuring angles<br/>Interpret line graphs<br/>Construct line graphs<br/>Understand the meaning of ‘average’ as a typicality (or location)<br/>Calculate the mean of a set of discrete data<br/>Interpret the mean of a set of discrete data<br/>Use the mean to find a missing number in a set of data");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".6_18").click(function () {
        $("#statements").html("calculate and interpret the mean as an average");
        $("#themes").html("Understand and use the mean");
        $("#key").html("Understand the meaning of ‘average’ as a typicality (or location)<br/>Calculate the mean of a set of discrete data<br/>Interpret the mean of a set of discrete data<br/>Use the mean to find a missing number in a set of data");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    
    $(".7_1").click(function () {
        $("#statements").html("use the concepts and vocabulary of prime numbers, factors (divisors), multiples, common factors, common multiples, highest common factor and lowest common multiple<br/>use positive integer powers and associated real roots (square, cube and higher), recognise powers of 2, 3, 4, 5<br/>recognise and use sequences of triangular, square and cube numbers, simple arithmetic progressions");
        $("#themes").html("Solve problems using common factors and highest common factors<br/>Exploring prime numbers<br/>Solve problems using common multiples and lowest common multiples<br/>Explore powers and roots");
        $("#key").html("Find common factors of numbers<br/>Find the highest common factor of numbers, including co-prime<br/>Recognise and solve problems involving highest common factor <br/>Find prime numbers and test numbers to see if they are prime <br/>Find common multiples of numbers<br/>Recognise and solve problems involving the lowest common multiple <br/>Read, write and evaluate powers<br/>Recognise and use triangular, square and cube numbers <br/>Define and find square roots (including using the √ symbol)<br/>Define and find cube roots and other roots (including using the ∛   and √ symbols), including the use of  a scientific calculator");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_2").click(function () {
        $("#statements").html("understand and use place value (e.g. when working with very large or very small numbers, and when calculating with decimals)<br/>apply the four operations, including formal written methods, to integers and decimals<br/>use conventional notation for priority of operations, including brackets<br/>recognise and use relationships between operations, including inverse operations (e.g. cancellation to simplify calculations and expressions)");
        $("#themes").html("Exploring place value<br/>Exploring written methods of calculation<br/>Calculating with decimals<br/>Know and apply the correct order of operations");
        $("#key").html("Multiply a positive integer by a power of 10 <br/>Multiply a decimal by a power of 10 <br/>Divide a positive integer by a power of 10 <br/>Divide a decimal by a power of 10 <br/>Add numbers up to six-digits using a formal written method <br/>Add decimals with same, and different, number of decimal places <br/>Subtract numbers up to six-digits using a formal written method <br/>Subtract decimals with same and different, number of decimal places <br/>Multiply a number up to four-digits by a one or two-digit number using a formal written method<br/>Transform a multiplication involving decimals to an equivalent multiplication involving integers<br/>Multiply a large integer up to four-digits by a decimal of up to 2dp using integer multiplication <br/>Divide a number up to four-digits by a one or two-digit number using a formal written method<br/>Use a formal method to divide a decimal by an integer < 10<br/>Use a formal method to divide a decimal by an integer greater than 10 <br/>Transform a calculation involving the division of decimals to an equivalent division involving integers <br/>Apply the order of operations correctly to multi-step calculations involving up to four operations and brackets");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_3").click(function () {
        $("#statements").html("round numbers and measures to an appropriate degree of accuracy (e.g. to a specified number of decimal places or significant figures)<br/>estimate answers; check calculations using approximation and estimation, including answers obtained using technology<br/>recognise and use relationships between operations, including inverse operations (e.g. cancellation to simplify calculations and expressions)");
        $("#themes").html("Explore ways of approximating numbers<br/>Explore ways of checking answers");
        $("#key").html("Round a number to a specified number of decimal places<br/>Round a number to a specified number of significant figures<br/>Estimate calculations by rounding numbers to one significant figure");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_4").click(function () {
        $("#statements").html("order positive and negative integers, decimals and fractions<br/>use the symbols =, ≠, <, >, ≤, ≥");
        $("#themes").html("Comparing numbers<br/>Ordering integers and decimals<br/>Ordering fractions<br/>Ordering integers, decimals and fractions (including mixed numbers)<br/>Using comparison symbols in algebraic contexts");
        $("#key").html("Use the signs <, > and = to compare numbers<br/>Use a compound inequality to compare three of more numbers (eg -1<0.5<4)<br/>Order a set of integers<br/>Order a set of decimals <br/>Order a set of integers and decimals<br/>Order fractions with the same denominator or denominators are a multiple of each other<br/>Order fractions where the denominators are not multiples of each other<br/>Order mixed numbers and fractions<br/>Order a combination of integers, decimals, fractions and mixed numbers");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_5").click(function () {
        $("#statements").html("use conventional terms and notations: points, lines, vertices, edges, planes, parallel lines, perpendicular lines, right angles, polygons, regular polygons and polygons with reflection and/or rotation symmetries<br/>use the standard conventions for labelling and referring to the sides and angles of triangles<br/>draw diagrams from written description");
        $("#themes").html("Interpret geometrical conventions and notation<br/>Apply geometrical conventions and notation");
        $("#key").html("Understand and use labelling notation for parallel and perpendicular lines<br/>Identify line and rotational symmetry in polygons<br/>Use ruler and protractor to construct triangles, and other shapes, from written descriptions<br/>Use ruler and compasses to construct triangles when all three sides known");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_6").click(function () {
        $("#statements").html("identify properties of the faces, surfaces, edges and vertices of: cubes, cuboids, prisms, cylinders, pyramids, cones and spheres<br/>derive and apply the properties and definitions of: special types of quadrilaterals, including square, rectangle, parallelogram, trapezium, kite and rhombus; and triangles and other plane figures using appropriate language");
        $("#themes").html("Investigate the properties of 3D shapes<br/>Explore quadrilaterals<br/>Explore triangles");
        $("#key").html("Know the connection between faces, edges and vertices in 3D shapes<br/>Recognise and use nets of 3D shapes <br/>Know and solve problems using the properties and definitions of triangles<br/>Know and solve problems using the properties and definitions of special types of quadrilaterals (including diagonals)<br/>Know and solve problems using the properties of other plane figures");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_7").click(function () {
        $("#statements").html("understand and use the concepts and vocabulary of expressions, equations, formulae and terms<br/>use and interpret algebraic notation, including: ab in place of a × b, 3y in place of y + y + y and 3 × y, a² in place of a × a, a³ in place of a × a × a, a/b in place of a ÷ b, brackets<br/>simplify and manipulate algebraic expressions by collecting like terms and multiplying a single term over a bracket<br/>where appropriate, interpret simple expressions as functions with inputs and outputs<br/>substitute numerical values into formulae and expressions<br/>use conventional notation for priority of operations, including brackets");
        $("#themes").html("Understand the vocabulary and notation of algebra<br/>Manipulate algebraic expressions<br/>Explore functions<br/>Evaluate algebraic statements");
        $("#key").html("Know the meaning of expression, term, formula, equation, function<br/>Know and use basic algebraic notation (the ‘rules’ of algebra)<br/>Simplify a simple expression by collecting like terms<br/>Simplify more complex expressions by collecting like terms<br/>Manipulate expressions by multiplying an integer over a bracket (the distributive law)<br/>Manipulate expressions by multiplying a single term over a bracket (the distributive law)<br/>Substitute positive numbers into expressions and formulae<br/>Given a function, establish outputs from given inputs and inputs from given outputs");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_8").click(function () {
        $("#statements").html("express one quantity as a fraction of another, where the fraction is less than 1 or greater than 1<br/>define percentage as ‘number of parts per hundred’<br/>express one quantity as a percentage of another");
        $("#themes").html("Understand and use top-heavy fractions<br/>Understand the meaning of ‘percentage’<br/>Explore links between fractions and percentages");
        $("#key").html("Write one quantity as a fraction of another where the fraction is less than 1<br/>Write one quantity as a fraction of another where the fraction is greater than 1<br/>Write a percentage as a fraction<br/>Write a quantity as a percentage of another");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_9").click(function () {
        $("#statements").html("use ratio notation, including reduction to simplest form<br/>divide a given quantity into two parts in a given part:part or part:whole ratio");
        $("#themes").html("Understand and use ratio notation<br/>Solve problems that involve dividing in a ratio");
        $("#key").html("Describe a comparison of measurements or objects using ratio notation a:b<br/>Simplify a ratio by cancelling common factors<br/>Divide a quantity in two parts in a given part:part ratio<br/>Divide a quantity in two parts in a given part:whole ratio");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_10").click(function () {
        $("#statements").html("generate terms of a sequence from a term-to-term rule");
        $("#themes").html("Investigate number patterns<br/>Explore number sequences<br/>Explore sequences");
        $("#key").html("Recognise simple arithmetic progressions<br/>Use a term-to-term rule to generate a linear sequence<br/>Use a term-to-term rule to generate a non-linear sequence");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_11").click(function () {
        $("#statements").html("use standard units of measure and related concepts (length, area, volume/capacity, mass, time, money, etc.)<br/>use standard units of mass, length, time, money and other measures (including standard compound measures) using decimal quantities where appropriate<br/>change freely between related standard units (e.g. time, length, area, volume/capacity, mass) in numerical contexts<br/>measure line segments and angles in geometric figures");
        $("#themes").html("Measure accurately<br/>Convert between measures<br/>Solve problems involving measurement");
        $("#key").html("Use a ruler to accurately measure line segments to the nearest millimetre<br/>Use a protractor to accurately measure angles to the nearest degree<br/>Convert fluently between metric units of length <br/>Convert fluently between metric units of mass<br/>Convert fluently between metric units of volume / capacity<br/>Convert fluently between units of time<br/>Convert fluently between units of money");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_12").click(function () {
        $("#statements").html("apply the properties of angles at a point, angles at a point on a straight line, vertically opposite angles");
        $("#themes").html("Investigate angle properties");
        $("#key").html("Recognise and solve problems using vertically opposite angles<br/>Recognise and solve problems using angles at a point<br/>Recognise and solve problems using angles at a point on a line");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_13").click(function () {
        $("#statements").html("apply the four operations, including formal written methods, to simple fractions (proper and improper), and mixed numbers<br/>interpret percentages and percentage changes as a fraction or a decimal, and interpret these multiplicatively<br/>compare two quantities using percentages<br/>solve problems involving percentage change, including percentage increase/decrease");
        $("#themes").html("Calculate with fractions<br/>Calculate with percentages");
        $("#key").html("Apply addition to proper fractions, improper fractions and mixed numbers<br/>Apply subtraction to proper fractions, improper fractions and mixed numbers<br/>Multiply proper and improper fractions<br/>Multiply mixed numbers<br/>Divide a proper fraction by a proper fraction<br/>Divide improper fractions and mixed numbers<br/>Identify the multiplier for a percentage increase or decrease <br/>Use calculators to find a percentage of an amount using multiplicative methods<br/>Use calculators to increase and decrease an amount by a percentage using multiplicative methods<br/>Compare two quantities using percentages<br/>Know that percentage change = actual change ÷ original amount<br/>Calculate the percentage change in a given situation, including percentage increase / decrease");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_14").click(function () {
        $("#statements").html("recognise and use relationships between operations, including inverse operations (e.g. cancellation to simplify calculations and expressions)<br/>solve linear equations in one unknown algebraically");
        $("#themes").html("Explore way of solving equations<br/>Solve two-step equations<br/>Solve three-step equations");
        $("#key").html("Solve one-step equations when the solution is a positive integer or fraction<br/>Solve two-step equations when the solution is a positive integer or fraction<br/>Solve two-step equations when the solution is a positive integer or fraction<br/>Solve multi-step equations including the use of brackets when the solution is a positive integer or fraction <br/>Solve equations when the solution is an integer or fraction");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_15").click(function () {
        $("#statements").html("use standard units of measure and related concepts (length, area, volume/capacity)<br/>calculate perimeters of 2D shapes<br/>know and apply formulae to calculate area of triangles, parallelograms, trapezia<br/>calculate surface area of cuboids<br/>know and apply formulae to calculate volume of cuboids<br/>understand and use standard mathematical formulae");
        $("#themes").html("Develop knowledge of area<br/>Investigate surface area<br/>Explore volume");
        $("#key").html("Calculate perimeters of 2D shapes<br/>Use and apply the formula to calculate the area of triangles <br/>Use and apply the formula to calculate the area of trapezia<br/>Use and apply the formula to calculate the volume of cuboids<br/>Find the surface area of cuboids (including cubes) ");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_16").click(function () {
        $("#statements").html("work with coordinates in all four quadrants<br/>understand and use lines parallel to the axes, y = x and y = -x<br/>solve geometrical problems on coordinate axes<br/>identify, describe and construct congruent shapes including on coordinate axes, by considering rotation, reflection and translation<br/>describe translations as 2D vectors");
        $("#themes").html("Explore lines on the coordinate grid<br/>Use transformations to move shapes<br/>Describe transformations");
        $("#key").html("Solve geometrical problems on coordinate axes<br/>Write the equation of a line parallel to the x-axis or the y-axis<br/>Identify and draw the lines y = x and y = -x<br/>Construct and describe reflections in horizontal, vertical and diagonal mirror lines (45° from horizontal)<br/>Describe a translation as a 2D vector<br/>Construct and describe rotations using a given angle, direction and centre of rotation<br/>Solve problems involving rotations, reflections and translations");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_17").click(function () {
        $("#statements").html("interpret and construct tables, charts and diagrams, including frequency tables, bar charts, pie charts and pictograms for categorical data, vertical line charts for ungrouped discrete numerical data and know their appropriate use");
        $("#themes").html("Explore types of data<br/>Construct and interpret graphs<br/>Select appropriate graphs and charts");
        $("#key").html("Interpret and construct frequency tables<br/>Construct and interpret bar charts and know their appropriate use<br/>Construct and interpret comparative bar charts<br/>Construct and interpret pie charts and know their appropriate use<br/>Construct and interpret vertical line charts<br/>Choose appropriate graphs or charts to represent data");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".7_18").click(function () {
        $("#statements").html("interpret, analyse and compare the distributions of data sets from univariate empirical distributions through appropriate measures of central tendency (median, mean and mode) and spread (range)");
        $("#themes").html("Investigate averages<br/>Explore ways of summarising data<br/>Analyse and compare sets of data");
        $("#key").html("Find the mode of set of data<br/>Find the median of a set of data including when there are an even number of numbers in the data set<br/>Calculate the mean from a frequency table<br/>Find the mode from a frequency table<br/>Find the median from a frequency table<br/>Calculate and understand the range as a measure of spread (or consistency)<br/>Analyse and compare sets of data, appreciating the limitations of different statistics (mean, median, mode, range)");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_1").click(function () {
        $("#statements").html("use the concepts and vocabulary of prime numbers, highest common factor, lowest common multiple, prime factorisation, including using product notation and the unique factorisation theorem<br/>round numbers and measures to an appropriate degree of accuracy (e.g. to a specified number of decimal places or significant figures)<br/>interpret standard form A × 10n, where 1 ≤ A < 10 and n is an integer");
        $("#themes").html("Identify and use the prime factorisation of a number<br/>Understand and use standard form");
        $("#key").html("Write a number as a product of its prime factors<br/>Use prime factorisations to find the highest common factor of two numbers<br/>Use prime factorisations to find the lowest common multiple of two numbers<br/>Round numbers to one or two significant figures<br/>Round numbers to one and two decimal places<br/>Use standard form to write large numbers<br/>Use standard form to write small numbers");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_2").click(function () {
        $("#statements").html("apply the four operations, including formal written methods, to integers, decimals and simple fractions (proper and improper), and mixed numbers – all both positive and negative<br/>use conventional notation for priority of operations, including brackets, powers, roots and reciprocals");
        $("#themes").html("Calculate with negative numbers<br/>Apply the correct order of operations");
        $("#key").html("Add a positive number to a negative number<br/>Subtract a positive number from a negative number<br/>Add a negative number to a positive number<br/>Subtract a negative number from a positive number<br/>Add a negative number to a negative number<br/>Subtract a negative number from a negative number<br/>Multiply positive numbers by a negative number<br/>Multiply negative numbers by a negative number<br/>Divide positive numbers by a negative number<br/>Divide negative numbers by a negative number<br/>Square and cube positive and negative numbers<br/>Use a scientific calculator to calculate with fractions, both positive and negative<br/>Understand how to use the order of operations including powers<br/>Understand how to use the order of operations including roots");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_3").click(function () {
        $("#statements").html("measure line segments and angles in geometric figures, including interpreting maps and scale drawings and use of bearings<br/>identify, describe and construct similar shapes, including on coordinate axes, by considering enlargement<br/>interpret plans and elevations of 3D shapes<br/>use scale factors, scale diagrams and maps");
        $("#themes").html("Explore enlargement of 2D shapes<br/>Use and interpret scale drawings<br/>Use and interpret bearings<br/>Explore ways of representing 3D shapes");
        $("#key").html("Use the centre and scale factor to carry out an enlargement with positive integer scale factor<br/>Use the centre and scale factor to carry out an enlargement with fractional scale factor <br/>Find the centre of enlargement<br/>Find the scale factor of an enlargement<br/>Use scale diagrams, including maps<br/>Use the concept of scaling in diagrams<br/>Interpret plans and elevations<br/>Understand and use bearings<br/>Construct scale diagrams and solve geometrical problems using bearings");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_4").click(function () {
        $("#statements").html("relate relative expected frequencies to theoretical probability, using appropriate language and the 0 - 1 probability scale<br/>record describe and analyse the frequency of outcomes of probability experiments using tables<br/>construct theoretical possibility spaces for single experiments with equally likely outcomes and use these to calculate theoretical probabilities<br/>apply the property that the probabilities of an exhaustive set of outcomes sum to one");
        $("#themes").html("Understand the meaning of probability<br/>Explore experiments and outcomes<br/>Develop understanding of probability");
        $("#key").html("Know and use the vocabulary of probability<br/>Understand the use of the 0-1 scale to measure probability<br/>List all the outcomes for an experiment, including the use of tables<br/>Work out theoretical probabilities for events with equally likely outcomes<br/>Know that the sum of probabilities for all outcomes is 1<br/>Apply the fact that the sum of probabilities for all outcomes is 1");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_5").click(function () {
        $("#statements").html("use and interpret algebraic notation, including: a²b in place of a × a × b, coefficients written as fractions rather than as decimals<br/>understand and use the concepts and vocabulary of factors<br/>simplify and manipulate algebraic expressions by taking out common factors and simplifying expressions involving sums, products and powers, including the laws of indices<br/>substitute numerical values into scientific formulae<br/>rearrange formulae to change the subject");
        $("#themes").html("Understand the concept of a factor<br/>Understand the notation of algebra<br/>Manipulate algebraic expressions<br/>Evaluate algebraic statements");
        $("#key").html("Use and interpret algebraic notation, including: a² b in place of a × a × b, coefficients written as fractions rather than as decimals<br/>Simplify an expression involving terms with combinations of variables (e.g. 3a²b + 4ab² + 2a² – a²b)<br/>Factorise an algebraic expression by taking out common factors<br/>Simplify expressions using the law of indices for multiplication<br/>Simplify expressions using the law of indices for division<br/>Simplify expressions using the law of indices for powers<br/>Know and use the zero index<br/>Substitute positive and negative numbers into formulae<br/>Change the subject of a formula when one step is required<br/>Change the subject of a formula when a two steps are required");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_6").click(function () {
        $("#statements").html("work interchangeably with terminating decimals and their corresponding fractions (such as 3.5 and 7/2 or 0.375 or 3/8)");
        $("#themes").html("Explore links between fractions, decimals and percentages");
        $("#key").html("Identify if a fraction is terminating or recurring<br/>Recall some decimal and fraction equivalents (e.g. tenths, fifths, eighths, thirds, quarters, etc)<br/>Write a terminating decimal as a fraction<br/>Write a fraction in its lowest terms by cancelling common factors<br/>Use a calculator to change any fraction to a decimal");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_7").click(function () {
        $("#statements").html(" express the division of a quantity into two parts as a ratio; apply ratio to real contexts and problems (such as those involving conversion, comparison, scaling, mixing, concentrations)<br/>identify and work with fractions in ratio problems<br/>understand and use proportion as equality of ratios<br/>express a multiplicative relationship between two quantities as a ratio or a fraction<br/>use compound units (such as speed, rates of pay, unit pricing)<br/>change freely between compound units (e.g. speed, rates of pay, prices) in numerical contexts<br/>relate ratios to fractions and to linear functions");
        $("#themes").html("Explore the uses of ratio<br/>Investigate the connection between ratio and proportion<br/>Solve problems involving proportional reasoning<br/>Solve problems involving compound units");
        $("#key").html("Express the division of a quantity into two parts as a ratio<br/>Solve problems involving ratio in a real-life context<br/>Find a relevant multiplier in a situation involving proportion<br/>Understand the connections between ratios and fractions<br/>Understand and use compound units<br/>Know the connection between speed, distance and time<br/>Solve problems involving speed<br/>Identify when it is necessary to convert quantities in order to use a sensible unit of measure");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_8").click(function () {
        $("#statements").html("generate terms of a sequence from either a term-to-term or a position-to-term rule<br/>deduce expressions to calculate the nth term of linear sequences");
        $("#themes").html("Explore sequences");
        $("#key").html("Generate terms of a sequence from a term-to-term rule<br/>Generate terms of a sequence from a position-to-term rule<br/>Describe the position-to-term rule of a linear sequence using nth term<br/>Use the nth term of a sequence to deduce if a given number is in a sequence");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_9").click(function () {
        $("#statements").html("understand and use alternate and corresponding angles on parallel lines<br/>derive and use the sum of angles in a triangle (e.g. to deduce and use the angle sum in any polygon, and to derive properties of regular polygons)");
        $("#themes").html("Develop knowledge of angles<br/>Explore geometrical situations involving parallel lines");
        $("#key").html("Solve missing angle problems involving alternate angles<br/>Solve missing angle problems involving corresponding angles<br/>Use knowledge of alternate and corresponding angles to calculate missing angles in geometrical diagrams<br/>Establish the fact that angles in a triangle must total 180°<br/>Establish the size of an interior angle in a regular polygon<br/>Establish the size of an exterior angle in a regular polygon<br/>Solve missing angle problems in polygons");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_10").click(function () {
        $("#statements").html("interpret fractions and percentages as operators<br/>work with percentages greater than 100%<br/>solve problems involving percentage change, including original value problems, and simple interest including in financial mathematics<br/>calculate exactly with fractions");
        $("#themes").html("Calculate with fractions<br/>Calculate with percentages");
        $("#key").html("Identify the multiplier for a percentage increase or decrease when the percentage is greater than 100%<br/>Use calculators to increase an amount by a percentage greater than 100%<br/>Solve problems involving percentage change<br/>Solve original value problems when working with percentages<br/>Solve financial problems including simple interest<br/>Solve problems that require exact calculation with fractions");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_11").click(function () {
        $("#statements").html("solve linear equations with the unknown on both sides of the equation<br/>find approximate solutions to linear equations using a graph");
        $("#themes").html("Solve linear equations with the unknown on one side<br/>Solve linear equations with the unknown on both sides<br/>Explore connections between graphs and equations");
        $("#key").html("Solve linear equations with the unknown on one side when the solution is a negative number<br/>Solve linear equations with the unknown on both sides when the solution is a whole number<br/>Solve linear equations with the unknown on both sides when the solution is a fraction<br/>Solve linear equations with the unknown on both sides when the solution is a negative number<br/>Solve linear equations with the unknown on both sides when the equation involves brackets<br/>Recognise that the point of intersection of two graphs corresponds to the solution of a connected equation");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_12").click(function () {
        $("#statements").html("compare lengths, areas and volumes using ratio notation<br/>calculate perimeters of 2D shapes, including circles<br/>identify and apply circle definitions and properties, including: centre, radius, chord, diameter, circumference<br/>know the formulae: circumference of a circle = 2πr = πd, area of a circle = πr²<br/>calculate areas of circles and composite shapes<br/>know and apply formulae to calculate volume of right prisms (including cylinders)");
        $("#themes").html("Investigate circles<br/>Discover pi<br/>Solve problems involving circles<br/>Explore prisms and cylinders");
        $("#key").html("Know circle definitions and properties, including: centre, radius, chord, diameter, circumference<br/>Calculate the circumference of a circle when radius or diameter is given<br/>Calculate the perimeter of composite shapes that include sections of a circle<br/>Calculate the area of a circle when radius or diameter<br/>Calculate the area of composite shapes that include sections of a circle<br/>Calculate the volume of a right prism<br/>Calculate the volume of a cylinder<br/>Compare lengths, areas and volumes using ratio notation");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_13").click(function () {
        $("#statements").html("plot graphs of equations that correspond to straight-line graphs in the coordinate plane<br/>identify and interpret gradients and intercepts of linear functions graphically<br/>recognise, sketch and interpret graphs of linear functions and simple quadratic functions<br/>plot and interpret graphs and graphs of non-standard (piece-wise linear) functions in real contexts, to find approximate solutions to problems such as simple kinematic problems involving distance and speed");
        $("#themes").html("Plot and interpret linear graphs<br/>Plot and quadratic graphs<br/>Model real situations using linear graphs");
        $("#key").html("Know that graphs of functions of the form y = mx + c, x ± y = c and ax ± by = c are linear<br/>Plot graphs of functions of the form y = mx ± c<br/>Plot graphs of functions of the form ax ± by = c<br/>Find the gradient of a straight line on a unit grid<br/>Find the y-intercept of a straight line<br/>Sketch linear graphs<br/>Distinguish between a linear and quadratic graph<br/>Plot graphs of quadratic functions of the form y = x²  ± c<br/>Sketch a simple quadratic graph<br/>Plot and interpret graphs of piece-wise linear functions in real contexts<br/>Plot and interpret distance-time graphs (speed-time graphs) including approximate solutions to kinematic problems ");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_14").click(function () {
        $("#statements").html("apply systematic listing strategies<br/>record describe and analyse the frequency of outcomes of probability experiments using frequency trees<br/>enumerate sets and combinations of sets systematically, using tables, grids and Venn diagrams<br/>construct theoretical possibility spaces for combined experiments with equally likely outcomes and use these to calculate theoretical probabilities<br/>apply ideas of randomness, fairness and equally likely events to calculate expected outcomes of multiple future experiments");
        $("#themes").html("Explore experiments and outcomes<br/>Develop understanding of probability<br/>Use probability to make predictions");
        $("#key").html("List all elements in a combination of sets using a Venn diagram<br/>List outcomes of an event systematically<br/>Use a table to list all outcomes of an event<br/>Use frequency trees to record outcomes of probability experiments<br/>Construct theoretical possibility spaces for combined experiments with equally likely outcomes<br/>Calculate probabilities using a possibility space<br/>Use theoretical probability to calculate expected outcomes<br/>Use experimental probability to calculate expected outcomes");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_15").click(function () {
        $("#statements").html("interpret, analyse and compare the distributions of data sets from univariate empirical distributions through appropriate graphical representation involving discrete, continuous and grouped data<br/>use and interpret scatter graphs of bivariate data<br/>recognise correlation");
        $("#themes").html("Explore types of data<br/>Construct and interpret graphs<br/>Select appropriate graphs and charts");
        $("#key").html("Construct and interpret a grouped frequency table for continuous data<br/>Construct and interpret histograms for grouped data with equal class intervals<br/>Plot a scatter diagram of bivariate data<br/>Interpret a scatter diagram using understanding of correlation");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".8_16").click(function () {
        $("#statements").html("interpret, analyse and compare the distributions of data sets from univariate empirical distributions through appropriate measures of central tendency (median, mean, mode and modal class) and spread (range, includingconsideration of outliers)<br/>apply statistics to describe a population");
        $("#themes").html("Investigate averages<br/>Explore ways of summarising data<br/>Analyse and compare sets of data");
        $("#key").html("Find the modal class of set of grouped data<br/>Find the class containing the median of a set of data<br/>Calculate an estimate of the mean from a grouped frequency table<br/>Estimate the range from a grouped frequency table<br/>Analyse and compare sets of data, appreciating the limitations of different statistics (mean, median, mode, range)<br/>Choose appropriate statistics to describe a set of data");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    
    $(".9_1").click(function () {
        $("#statements").html("calculate with roots, and with integer indices<br/>calculate with standard form A × 10n, where 1 ≤ A < 10 and n is an integer<br/>use inequality notation to specify simple error intervals due to truncation or rounding<br/>apply and interpret limits of accuracy");
        $("#themes").html("Calculate with powers and roots<br/>Explore the use of standard form<br/>Explore the effects of rounding");
        $("#key").html("Calculate with positive indices<br/>Calculate with roots<br/>Calculate with negative indices in the context of standard form<br/>Use a calculator to evaluate numerical expressions involving powers<br/>Use a calculator to evaluate numerical expressions involving roots<br/>Add numbers written in standard form<br/>Subtract numbers written in standard form<br/>Multiply numbers written in standard form<br/>Divide numbers written in standard form<br/>Use standard form on a scientific calculator including interpreting the standard form display of a scientific calculator<br/>Understand the difference between truncating and rounding<br/>Identify the minimum and maximum values of an amount that has been rounded (to nearest x, x d.p., x s.f.)<br/>Use inequalities to describe the range of values for a rounded value<br/>Solve problems involving the maximum and minimum values of an amount that has been rounded");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_2").click(function () {
        $("#statements").html("use the standard ruler and compass constructions (perpendicular bisector of a line segment, constructing a perpendicular to a given line from/at a given point, bisecting a given angle)<br/>use these to construct given figures and solve loci problems; know that the perpendicular distance from a point to a line is the shortest distance to the line<br/>construct plans and elevations of 3D shapes");
        $("#themes").html("Know standard mathematical constructions<br/>Apply standard mathematical constructions<br/>Explore ways of representing 3D shapes");
        $("#key").html("Use ruler and compasses to construct the perpendicular bisector of a line segment<br/>Use ruler and compasses to bisect an angle<br/>Use a ruler and compasses to construct a perpendicular to a line from a point and at a point<br/>Know how to construct the locus of points a fixed distance from a point and from a line<br/>Solve simple problems involving loci<br/>Combine techniques to solve more complex loci problems<br/>Choose techniques to construct 2D shapes; e.g. rhombus<br/>Construct a shape from its plans and elevations<br/>Construct the plan and elevations of a given shape");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_3").click(function () {
        $("#statements").html("understand and use the concepts and vocabulary of identities<br/>know the difference between an equation and an identity<br/>simplify and manipulate algebraic expressions by expanding products of two binomials and factorising quadratic expressions of the form x² + bx + c<br/>argue mathematically to show algebraic expressions are equivalent, and use algebra to support and construct arguments<br/>translate simple situations or procedures into algebraic expressions or formulae");
        $("#themes").html("Understand equations and identities<br/>Manipulate algebraic expressions<br/>Construct algebraic statements");
        $("#key").html("Understand the meaning of an identity<br/>Multiply two linear expressions of the form (x + a)(x + b)<br/>Multiply two linear expressions of the form (x ± a)(x ± b)<br/>Expand the expression (x ± a)²<br/>Factorise a quadratic expression of the form x² + bx<br/>Factorise a quadratic expression of the form x² + bx + c<br/>Work out why two algebraic expressions are equivalent<br/>Create a mathematical argument to show that two algebraic expressions are equivalent<br/>Distinguish between situations that can be modelled by an expression or a formula<br/>Create an expression or a formula to describe a situation");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_4").click(function () {
        $("#statements").html("solve problems involving direct and inverse proportion including graphical and algebraic representations<br/>apply the concepts of congruence and similarity, including the relationships between lengths in similar figures<br/>change freely between compound units (e.g. density, pressure) in numerical and algebraic contexts<br/>use compound units such as density and pressure");
        $("#themes").html("Solve problems involving different types of proportion<br/>Investigate ways of representing proportion<br/>Understand and solve problems involving congruence<br/>Understand and solve problems involving similarity<br/>Know and use compound units in a range of situations");
        $("#key").html("Know the difference between direct and inverse proportion<br/>Recognise direct proportion in a situation<br/>Know the features of a graph that represents a direct proportion situation<br/>Recognise inverse proportion in a situation<br/>Know the features of a graph that represents an inverse proportion situation<br/>Know the features of an expression, or formula, that represents a direct proportion situation<br/>Know the features of an expression, or formula, that represents an inverse proportion situation<br/>Understand the connection between the multiplier, the expression and the graph<br/>Identify congruence of shapes in a range of situations<br/>Identify similarity of shapes in a range of situations<br/>Finding missing lengths in similar shapes<br/>Solve problems involving compound units, such as density, pressure, population density and speed<br/>Convert between units of density and speed");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_5").click(function () {
        $("#statements").html("recognise and use Fibonacci type sequences, quadratic sequences");
        $("#themes").html("Investigate Fibonacci numbers<br/>Investigate Fibonacci type sequences<br/>Explore quadratic sequences");
        $("#key").html("Recognise and use the Fibonacci sequence<br/>Generate Fibonacci type sequences<br/>Recognise and use quadratic sequences<br/>Generate terms of a quadratic sequence from a written rule<br/>Generate terms of a quadratic sequence from its nth term<br/>Find the nth term of simple quadratic sequences");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_6").click(function () {
        $("#statements").html("understand and use the concepts and vocabulary of inequalities<br/>solve linear inequalities in one variable<br/>represent the solution set to an inequality on a number line");
        $("#themes").html("Explore the meaning of an inequality<br/>Solve linear inequalities");
        $("#key").html("Find the set of integers that are solutions to an inequality, including the use of set notation<br/>Know how to show a range of values that solve an inequality on a number line<br/>Solve a simple linear inequality in one variable with unknowns on one side<br/>Solve a complex linear inequality in one variable with unknowns on one side<br/>Solve a linear inequality in one variable with unknowns on both sides<br/>Solve a linear inequality in one variable involving brackets<br/>Solve a linear inequality in one variable involving brackets negative terms<br/>Solve problems by constructing and solving linear inequalities in one variable");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_7").click(function () {
        $("#statements").html("identify and apply circle definitions and properties, including: tangent, arc, sector and segment<br/>calculate arc lengths, angles and areas of sectors of circles<br/>calculate surface area of right prisms (including cylinders)<br/>calculate exactly with multiples of π<br/>know the formulae for: Pythagoras’ theorem, a² + b² = c², and apply it to find lengths in right-angled triangles in two dimensional figures");
        $("#themes").html("Solve problems involving arcs and sectors<br/>Solve problems involving prisms<br/>Investigate right-angled triangles<br/>Solve problems involving Pythagoras’ theorem");
        $("#key").html("Know circle definitions and properties, including:  tangent, arc, sector and segment<br/>Calculate the arc length of a sector, including calculating exactly with multiples of π<br/>Calculate the area of a sector, including calculating exactly with multiples of π<br/>Calculate the angle of a sector when the arc length and radius are known<br/>Calculate the surface area of a right prism<br/>Calculate the surface area of a cylinder, including calculating exactly with multiples of π<br/>Know and use Pythagoras’ theorem<br/>Calculate the hypotenuse of a right-angled triangle using Pythagoras’ theorem in two dimensional figures<br/>Calculate one of the shorter sides in a right-angled triangle using Pythagoras’ theorem in two dimensional figures<br/>Solve problems using Pythagoras’ theorem in two dimensional figures");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_8").click(function () {
        $("#statements").html("use the basic congruence criteria for triangles (SSS, SAS, ASA, RHS)<br/>apply angle facts, triangle congruence, similarity and properties of quadrilaterals to conjecture and derive results about angles and sides, including Pythagoras’ Theorem and the fact that the base angles of an isosceles triangle are equal, and use known results to obtain simple proofs");
        $("#themes").html("Explore the congruence of triangles<br/>Investigate geometrical situations<br/>Form conjectures<br/>Create a mathematical proof");
        $("#key").html("Identify congruent triangles<br/>Know and use the criteria for triangles to be congruent (SSS, SAS, ASA, RHS)<br/>Solve problems, including geometrical proof, involving congruence<br/>Solve problems involving similarity<br/>Test conjectures using known facts in geometrical situations, including why the base angles in an isosceles triangle must be equal<br/>Explain the connections between Pythagorean triples");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_9").click(function () {
        $("#statements").html("identify and interpret gradients and intercepts of linear functions algebraically<br/>use the form y = mx + c to identify parallel lines<br/>find the equation of the line through two given points, or through one point with a given gradient<br/>interpret the gradient of a straight line graph as a rate of change<br/>recognise, sketch and interpret graphs of quadratic functions<br/>recognise, sketch and interpret graphs of simple cubic functions and the reciprocal function y = 1/x with x ≠ 0<br/>plot and interpret graphs (including reciprocal graphs) and graphs of non-standard functions in real contexts, to find approximate solutions to problems such as simple kinematic problems involving distance, speed and acceleration");
        $("#themes").html("Investigate features of straight line graphs<br/>Explore graphs of quadratic functions<br/>Explore graphs of other standard non-linear functions<br/>Create and use graphs of non-standard functions<br/>Solve kinematic problems");
        $("#key").html("Identify and interpret gradients of linear functions algebraically<br/>Identify and interpret intercepts of linear functions algebraically<br/>Use the form y = mx + c to identify parallel lines<br/>Find the equation of a line through one point with a given gradient<br/>Find the equation of a line through two given points<br/>Interpret the gradient of a straight line graph as a rate of change<br/>Plot graphs of quadratic functions<br/>Plot graphs of cubic functions<br/>Plot graphs of reciprocal functions<br/>Recognise and sketch the graphs of quadratic functions<br/>Interpret the graphs of quadratic functions<br/>Recognise and sketch the graphs of cubic functions<br/>Interpret the graphs of cubic functions<br/>Recognise and sketch the graphs of reciprocal functions<br/>Interpret the graphs of reciprocal functions<br/>Plot and interpret graphs of non-standard functions in real contexts<br/>Find approximate solutions to kinematic problems involving distance, speed and acceleration");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_10").click(function () {
        $("#statements").html("solve, in simple cases, two linear simultaneous equations in two variables algebraically<br/>derive an equation (or two simultaneous equations), solve the equation(s) and interpret the solution<br/>find approximate solutions to simultaneous equations using a graph");
        $("#themes").html("Solve simultaneous equations<br/>Use graphs to solve equations<br/>Solve problems involving simultaneous equations");
        $("#key").html("Understand that there are an infinite number of solutions to the equation ax + by = c (a, b non-zero)<br/>Find approximate solutions to simultaneous equations using a graph<br/>Solve two linear simultaneous equations in two variables in very simple cases (addition but no multiplication required)<br/>Solve two linear simultaneous equations in two variables in very simple cases (subtraction but no multiplication required)<br/>Solve two linear simultaneous equations in two variables in very simple cases (addition or subtraction but no multiplication required)<br/>Solve two linear simultaneous equations in two variables in simple cases (multiplication of one equation only required with addition)<br/>Solve two linear simultaneous equations in two variables in simple cases (multiplication of one equation only required with subtraction)<br/>Solve two linear simultaneous equations in two variables in simple cases (multiplication of one equation only required with addition or subtraction)<br/>Derive and solve two simultaneous equations<br/>Solve problems involving two simultaneous equations and interpret the solution");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_11").click(function () {
        $("#statements").html("calculate the probability of independent and dependent combined events, including using tree diagrams and other representations, and know the underlying assumptions<br/>enumerate sets and combinations of sets systematically, using tree diagrams<br/>understand that empirical unbiased samples tend towards theoretical probability distributions, with increasing sample size");
        $("#themes").html("Understand and use tree diagrams<br/>Develop understanding of probability in situations involving combined events<br/>Use probability to make predictions");
        $("#key").html("Calculate the probabilities of independent combined events<br/>Calculate the probabilities of dependent combined events<br/>Construct and list outcomes of combined events using a tree diagram<br/>Use a tree diagram to solve simple problems involving independent combined events<br/>Use a tree diagram to solve complex problems involving independent combined events<br/>Use a tree diagram to solve simple problems involving dependent combined events<br/>Use a tree diagram to solve complex problems involving dependent combined events<br/>Understand that relative frequency tends towards theoretical probability as sample size increases");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".9_12").click(function () {
        $("#statements").html("interpret and construct tables, charts and diagrams, including tables and line graphs for time series data and know their appropriate use<br/>draw estimated lines of best fit; make predictions<br/>know correlation does not indicate causation; interpolate and extrapolate apparent trends whilst knowing the dangers of so doing");
        $("#themes").html("Construct and interpret graphs of time series<br/>Interpret a range of charts and graphs<br/>Interpret scatter diagrams<br/>Explore correlation");
        $("#key").html("Construct graphs of time series<br/>Interpret graphs of time series<br/>Construct and interpret compound bar charts<br/>Interpret a wider range of non-standard graphs and charts<br/>Interpret a scatter diagram using understanding of correlation<br/>Construct a line of best fit on a scatter diagram and use the line of best fit to estimate values<br/>Know when it is appropriate to use a line of best fit to estimate values<br/>Understand that correlation does not indicate causation");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    
    $(".10_1").click(function () {
        $("#statements").html("make links to similarity (including trigonometric ratios) and scale factors<br/>know the exact values of sinθ and cosθ for θ = 0°, 30°, 45°, 60° and 90°; know the exact value of tanθ for θ = 0°, 30°, 45° and 60°<br/>know the trigonometric ratios, sinθ = opposite/hypotenuse, cosθ = adjacent/hypotenuse, tanθ = opposite/adjacent<br/>apply it to find angles and lengths in right-angled triangles in two dimensional figures");
        $("#themes").html("Investigate similar triangles<br/>Explore trigonometry in right-angled triangles<br/>Set up and solve trigonometric equations<br/>Use trigonometry to solve practical problems");
        $("#key").html("Appreciate that the ratio of corresponding sides in similar triangles is constant<br/>Choose an appropriate trigonometric ratio that can be used in a given situation<br/>Understand that sine, cosine and tangent are functions of an angle<br/>Establish the exact values of sinθ and cosθ for θ = 0°, 30°, 45°, 60° and 90°<br/>Establish the exact value of tanθ for θ = 0°, 30°, 45° and 60°<br/>Use a calculator to find the sine, cosine and tangent of an angle<br/>Know the trigonometric ratios, sinθ = opp/hyp, cosθ = adj/hyp, tanθ = opp/adj<br/>Set up and solve a trigonometric equation to find a missing side in a right-angled triangle<br/>Set up and solve a trigonometric equation when the unknown is in the denominator of a fraction<br/>Set up and solve a trigonometric equation to find a missing angle in a right-angled triangle<br/>Use trigonometry to solve problems involving bearings<br/>Use trigonometry to solve problems involving an angle of depression or an angle of elevation");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_2").click(function () {
        $("#statements").html("estimate powers and roots of any given positive number<br/>calculate with roots, and with integer and fractional indices<br/>calculate exactly with surds<br/>apply and interpret limits of accuracy, including upper and lower bounds");
        $("#themes").html("Estimate with powers and roots<br/>Calculate with powers and roots<br/>Explore the impact of rounding");
        $("#key").html("Estimate squares and cubes of numbers up to 100<br/>Estimate powers of numbers up to 10<br/>Estimate square roots of numbers up to 150 and cube roots of numbers up to 20<br/>Know and use the fact that a-n = 1/an<br/>Know and use the fact that a1/n = na<br/>Calculate exactly with surds<br/>Choose the required minimum and maximum values when solving a problem involving upper and lower bounds<br/>Calculate the upper and lower bounds in a given situation");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_3").click(function () {
        $("#statements").html("find approximate solutions to equations numerically using iteration<br/>solve two linear simultaneous equations in two variables algebraically");
        $("#themes").html("Find approximate solutions to complex equations<br/>Solve simultaneous equations<br/>Solve problems involving simultaneous equations");
        $("#key").html("Use decimal search to solve a complex equation<br/>Use interval bisection to locate an approximate solution for a complex equation<br/>Use an iterative formula to find approximate solutions to equations<br/>Use an iterative formula to find approximate solutions, to a given number of decimal places, to an equation<br/>Solve two linear simultaneous equations in two variables by substitution<br/>Solve two linear simultaneous equations in two variables by elimination (multiplication of both equations required)<br/>Solve two linear simultaneous equations in two variables by elimination (fractional coefficients)<br/>Derive and solve two simultaneous equations in complex cases<br/>Interpret the solution to a pair of simultaneous equations");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_4").click(function () {
        $("#statements").html("identify, describe and construct similar shapes, including on coordinate axes, by considering enlargement (including fractional scale factors)<br/>make links between similarity and scale factors<br/>describe the changes and invariance achieved by combinations of rotations, reflections and translations");
        $("#themes").html("Explore enlargement of 2D shapes<br/>Investigate the transformation of 2D shapes");
        $("#key").html("Use the centre and scale factor to carry out an enlargement of a 2D shape with a fractional scale factor<br/>Find the scale factor of an enlargement with fractional scale factor<br/>Find the centre of an enlargement with fractional scale factor<br/>Solve problems involving similarity<br/>Perform a sequence of transformations on a 2D shape<br/>Find and describe a single transformation given two congruent 2D shapes");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_5").click(function () {
        $("#statements").html("simplify and manipulate algebraic expressions involving algebraic fractions<br/>manipulate algebraic expressions by expanding products of more than two binomials<br/>simplify and manipulate algebraic expressions (including those involving surds) by expanding products of two binomials and factorising quadratic expressions of the form x² + bx + c, including the difference of two squares<br/>manipulate algebraic expressions by factorising quadratic expressions of the form ax² + bx + c");
        $("#themes").html("Manipulate algebraic fractions<br/>Manipulate algebraic expressions");
        $("#key").html("Add and subtract algebraic fractions<br/>Multiply and divide algebraic fractions<br/>Simplify an algebraic fraction<br/>Expand the product of three binomials<br/>Expand the product of two binomials involving surds<br/>Factorise an expression involving the difference of two squares<br/>Factorise a quadratic expression of the form ax² + bx + c (a is prime)<br/>Factorise a quadratic expression of the form ax² + bx + c (a is composite)<br/>Identify when factorisation of the numerator and/or denominator is needed to simplify an algebraic fraction<br/>Simplify an algebraic fraction that involves factorisation<br/>Change the subject of a formula when more than two steps are required<br/>Change the subject of a formula when the required subject appears twice");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_6").click(function () {
        $("#statements").html("interpret equations that describe direct and inverse proportion<br/>recognise and interpret graphs that illustrate direct and inverse proportion<br/>understand that X is inversely proportional to Y is equivalent to X is proportional to 1/Y");
        $("#themes").html("Explore differences between direct and inverse proportion<br/>Investigate ways of representing proportion in situation<br/>Solve problems involving proportion");
        $("#key").html("Recognise and interpret graph that illustrates direct proportion<br/>Recognise and interpret graph that illustrates inverse proportion<br/>Understand that X is inversely proportional to Y is equivalent to X is proportional to 1/Y<br/>Interpret equations that describe direct proportion<br/>Interpret equations that describe inverse proportion<br/>Solve problems which include finding the multiplier in a situation involving direct proportion<br/>Solve problems which include finding the multiplier in a situation involving inverse proportion");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_7").click(function () {
        $("#statements").html("deduce expressions to calculate the nth term of quadratic sequences<br/>recognise and use simple geometric progressions (r^n where n is an integer, and r is a rational number > 0 )");
        $("#themes").html("Explore quadratic sequences<br/>Investigate geometric progressions");
        $("#key").html("Find the nth term of a sequence of the form ax2 + b<br/>Find the nth term of a sequence of the form ax2 + bx + c<br/>Recognise and describe a simple geometric progression (of the form r^n)<br/>Find the next three terms, or a given term, in a geometric progression");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_8").click(function () {
        $("#statements").html("solve linear inequalities in two variables<br/>represent the solution set to an inequality using set notation and on a graph");
        $("#themes").html("Understand and use set notation<br/>Solve inequalities<br/>Represent inequalities on a graph");
        $("#key").html("State the (simple) inequality represented by a shaded region on a graph<br/>Construct and shade a graph to show a linear inequality of the form y > ax + b, y < ax + b, y ≥ ax + b or y ≤ ax + b<br/>Construct and shade a graph to show a linear inequality in two variables stated implicitly<br/>Construct and shade a graph to represent a set of linear inequalities in two variables<br/>Find the set of integer coordinates that are solutions to a set of inequalities in two variables<br/>Use set notation to represent the solution set to an inequality");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_9").click(function () {
        $("#statements").html("calculate surface area and volume of spheres, pyramids, cones and composite solids<br/>apply the concepts of congruence and similarity, including the relationships between length, areas and volumes in similar figures");
        $("#themes").html("Calculate surface areas of solids<br/>Calculate volumes of solids<br/>Solve problems involving enlargement and 3D shapes");
        $("#key").html("Use Pythagoras’ theorem to find lengths in a pyramid or cone<br/>Find the surface area of spheres, cones and pyramids<br/>Find the volume of spheres, cones and pyramids<br/>Identify how to find the volume or surface area of a composite solid<br/>Solve practical problems involving the surface area of solids<br/>Solve practical problems involving the volume of solids<br/>Understand the implications of enlargement on area<br/>Understand the implications of enlargement on volume<br/>Move freely between scale factors for length, area and volume<br/>Solve practical problems involving length, area and volume in similar figures");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_10").click(function () {
        $("#statements").html("apply and prove the standard circle theorems concerning angles, radii, tangents and chords, and use them to prove related results");
        $("#themes").html("Investigate geometric patterns using circles<br/>Explore circle theorems<br/>Make and prove conjectures");
        $("#key").html("Know that ‘the angle in a semicircle is a right angle’<br/>Know that ‘the angle at the centre is double the angle at the circumference’<br/>Know that ‘angles in the same segment are equal’<br/>Know that ‘opposite angles in a cyclic quadrilateral sum to 180’<br/>Know that ‘two tangents from an external point are equal in length’<br/>Know that ‘a radius is perpendicular to a tangent at that point’<br/>Know that ‘a radius that bisects a chord is perpendicular to that chord’<br/>Know the alternate segment theorem<br/>Create a chain of logical steps to create a proof in a geometrical situation<br/>Use a combination of known and derived facts to solve a geometrical problem<br/>Identify when a circle theorem can be used to help solve a geometrical problem<br/>Justify solutions to geometrical problems");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_11").click(function () {
        $("#statements").html("plot and interpret graphs (including exponential graphs) and graphs of non-standard functions in real contexts, to find approximate solutions to problems such as simple kinematic problems involving distance, speed and acceleration<br/>calculate or estimate gradients of graphs and areas under graphs (including quadratic and other non-linear graphs), and interpret results in cases such as distance-time graphs, velocity-time graphs and graphs in financial contexts<br/>interpret the gradient at a point on a curve as the instantaneous rate of change<br/>identify and interpret roots, intercepts, turning points of quadratic functions graphically");
        $("#themes").html("Explore exponential graphs<br/>Create and use graphs of non-standard functions<br/>Investigate gradients of graphs<br/>Find and interpret areas under graphs<br/>Investigate features of quadratic graphs");
        $("#key").html("Recognise, plot and interpret exponential graphs<br/>Plot graphs of non-standard functions<br/>Use graphs of non-standard functions to solve simple kinematic problems<br/>Recognise that the gradient of a curve is not constant<br/>Know that the gradient of a curve is the gradient of the tangent at that point<br/>Calculate the gradient at a point on a curve<br/>Interpret the gradient at a point on a curve as the instantaneous rate of change<br/>Interpret the gradient of a chord as an average rate of change<br/>Solve problems involving the gradients of graphs in context<br/>Calculate an estimate for the area under a graph, including the area under a speed-time graph as distance<br/>Solve problems involving the area under graphs in context<br/>Identify and interpret roots, intercepts and turning points of quadratic functions graphically");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_12").click(function () {
        $("#statements").html("change recurring decimals into their corresponding fractions and vice versa<br/>set up, solve and interpret the answers in growth and decay problems, including compound interest");
        $("#themes").html("Explore the links between recurring decimals and fractions<br/>Solve problems involving repeated percentage change<br/>Solve problems involving exponential growth and decay");
        $("#key").html("Convert a fraction to a recurring decimal<br/>Convert a recurring decimal of the form 0. 𝑥̇, 0. 𝑥̇𝑦̇, 0. 𝑥̇𝑦𝑧̇ to a fraction<br/>Convert a recurring decimal of the form 0.0𝑥̇, 0.0𝑥̇𝑦̇, to a fraction<br/>Recognise when a situation involves compound interest<br/>Calculate the result of a repeated percentage change, including compound interest<br/>Solve problems involving growth and decay");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_13").click(function () {
        $("#statements").html("solve quadratic equations algebraically by factorising<br/>solve quadratic equations (including those that require rearrangement) algebraically by factorising<br/>find approximate solutions to quadratic equations using a graph<br/>deduce roots of quadratic functions algebraically");
        $("#themes").html("Solve quadratic equations<br/>Use graphs to solve equations");
        $("#key").html("Solve a quadratic equation of the form x² + bx + c by factorising<br/>Solve a quadratic equation by rearranging and factorising<br/>Make connections between graphs and quadratic equations of the form ax² + bx + c = 0<br/>Make connections between graphs and quadratic equations of the form ax² + bx + c = dx + e<br/>Find approximate solutions to quadratic equations using a graph<br/>Deduce roots of quadratic functions algebraically<br/>Solve problems that involve solving a quadratic equation in context");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_14").click(function () {
        $("#statements").html("apply systematic listing strategies including use of the product rule for counting<br/>calculate and interpret conditional probabilities through representation using expected frequencies with two-way tables, tree diagrams and Venn diagrams.");
        $("#themes").html("Understand and use the product rule for counting<br/>Use Venn diagrams to represent probability situations<br/>Use two-way tables to represent probability situations<br/>Solve probability problems involving combined events");
        $("#key").html("Apply the product rule for counting<br/>Use a Venn diagram to sort information in a probability problem<br/>Use a two-way table to sort information in a probability problem<br/>Use a Venn diagram to calculate theoretical probabilities<br/>Use a two-way table to calculate theoretical probabilities<br/>Calculate conditional probabilities using different representations");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_15").click(function () {
        $("#statements").html("infer properties of populations or distributions from a sample, whilst knowing the limitations of sampling<br/>construct and interpret diagrams for grouped discrete data and continuous data, i.e. cumulative frequency graphs, and know their appropriate use<br/>interpret, analyse and compare the distributions of data sets from univariate empirical distributions through appropriate graphical representation involving discrete, continuous and grouped data, including box plots<br/>interpret, analyse and compare the distributions of data sets from univariate empirical distributions through appropriate measures of central tendency including quartiles and inter-quartile range");
        $("#themes").html("Construct and interpret cumulative frequency graphs<br/>Construct and interpret box plots<br/>Analyse distributions of data sets");
        $("#key").html("Understand the limitations of sampling<br/>Use a sample to infer properties of a population<br/>Know the meaning of the lower quartile and upper quartile<br/>Find the quartiles for discrete data sets<br/>Calculate and interpret the interquartile range<br/>Construct and interpret a box plot for discrete data<br/>Use box plots to compare distributions<br/>Understand the meaning of cumulative frequency<br/>Complete a cumulative frequency table<br/>Construct a cumulative frequency curve<br/>Use a cumulative frequency curve to estimate the quartiles for grouped continuous data sets<br/>Use a cumulative frequency curve to estimate properties of grouped continuous data sets");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_16").click(function () {
        $("#statements").html("use the form y = mx + c to identify perpendicular lines<br/>recognise and use the equation of a circle with centre at the origin<br/>find the equation of a tangent to a circle at a given point");
        $("#themes").html(" Investigate features of straight line graphs<br/>Know and use the equation of a circle with centre at the origin<br/>Solve problems involving the equation of a circle");
        $("#key").html("Know that perpendicular lines have gradients with a product of -1<br/>Identify perpendicular lines using algebraic methods<br/>Identify the equation of a circle from its graph<br/>Use the equation of a circle to draw its graph<br/>Find the equation of a tangent to circle at a given point<br/>Solve algebraic problems involving tangents to a circle");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".10_17").click(function () {
        $("#statements").html("apply addition and subtraction of vectors, multiplication of vectors by a scalar, and diagrammatic and column representations of vectors");
        $("#themes").html("Explore the concept of a vector<br/>Solve problems involving vectors");
        $("#key").html("Know and use different notations for vectors, including diagrammatic representation<br/>Add and subtract vectors<br/>Multiply a vector by a scalar<br/>Solve simple geometrical problems involving vectors");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    
    $(".11_1").click(function () {
        $("#statements").html("know the formulae for Pythagoras’ theorem, a² + b² = c², and apply it to find lengths in three dimensional figures<br/>know the trigonometric ratios, sinθ = opposite/hypotenuse, cosθ = adjacent/hypotenuse, tanθ = opposite/adjacent and apply them to find angles and lengths in three dimensional figures<br/>know and apply the sine rule, a/sinA = b/sinB = c/sinC, and the cosine rule, a² = b² + c² - 2bc cosA, to find unknown lengths and angles<br/>know and apply area = ½ab sinC to calculate the area, sides or angles of any triangle");
        $("#themes").html("Explore three-dimensional shapes<br/>Apply Pythagoras’ theorem in three dimensions<br/>Apply trigonometry in three dimensions<br/>Know and use the sine rule<br/>Know and use the cosine rule");
        $("#key").html("Use Pythagoras’ theorem to find the length a given diagonal in a cuboid<br/>Use Pythagoras’ theorem to find the lengths in a cuboid<br/>Use Pythagoras’ theorem to find missing lengths in other three dimensional figures<br/>Use Pythagoras’ theorem to solve problems involving three dimensional figures<br/>Use trigonometry to find the angle between a line and a plane<br/>Solve simple problems involving missing lengths and angles in three dimensional figures<br/>Solve more complex problems involving missing lengths and angles in three dimensional figures<br/>Know and use the sine rule in simple cases<br/>Use the sine rule to find a missing side in a non-right angled triangle<br/>Use the sine rule to find a missing angle(s) in a non-right angled triangle<br/>Know and use the cosine rule in simple cases<br/>Use the cosine rule to find a missing side in a non-right angled triangle<br/>Use the cosine rule to find a missing angle in a non-right angled triangle<br/>Solve problems involving bearings<br/>Know and use area = ½ab sinC to calculate the area of any triangle<br/>Know and use area = ½ab sinC to calculate sides or angles of any triangle");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_2").click(function () {
        $("#statements").html("simplify surd expressions involving squares (e.g. √12 = √(4 × 3) = √4 × √3 = 2√3) and rationalise denominators");
        $("#themes").html("Manipulate expressions by simplifying surds");
        $("#key").html("Know and use √𝑎 × 𝑏 = √𝑎 × √𝑏<br/>Simplify surds<br/>Solve problems involving the simplification of surds<br/>Multiply two binomials involving surds<br/>Rationalise the denominator of a simple surd expression<br/>Rationalise the denominator of a more complex surd expression");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_3").click(function () {
        $("#statements").html("solve quadratic equations by completing the square and by using the quadratic formula<br/>deduce turning points of quadratic functions by completing the square<br/>deduce roots of quadratic functions algebraically<br/>work with general iterative processes");
        $("#themes").html("Solve quadratic equations<br/>Solve practical problems involving quadratic equations<br/>Understand and use iterative processes");
        $("#key").html("Complete the square for a quadratic expression (a = 1)<br/>Complete the square for a quadratic expression (a > 1)<br/>Solve a quadratic equation (a = 1) by completing the square<br/>Solve a quadratic equation (a > 1) by completing the square<br/>Deduce the turning point of a quadratic function by completing the square<br/>Deduce the roots of a quadratic function by factorising<br/>Deduce the roots of a quadratic function using the completed square form<br/>Know and apply the formula for solving a simple quadratic equation of the form ax² + bx + c = 0<br/>Know and apply the formula for solving more complex quadratic equation of the form ax² + bx + c = 0<br/>Solve equations involving fractions that can be rearranged into the form ax² + bx + c = 0<br/>Solve problems involving quadratic equations<br/>Identify when iteration should be used to find approximate solutions to an equation");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_4").click(function () {
        $("#statements").html("identify, describe and construct similar shapes, including on coordinate axes, by considering enlargement (including negative scale factors)");
        $("#themes").html("Explore enlargement of 2D shapes");
        $("#key").html("Use the centre and scale factor to carry out an enlargement of a 2D shape with a negative scale factor<br/>Find the scale factor of an enlargement with negative scale factor<br/>Find the centre of an enlargement with negative scale factor");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_5").click(function () {
        $("#statements").html("interpret the succession of two functions as a ‘composite function’<br/>interpret the reverse process as the ‘inverse function’");
        $("#themes").html("Solve problems involving functions");
        $("#key").html("Understand the meaning of a function<br/>Know and use the notation for composite functions<br/>Solve problems involving composite functions<br/>Find the inverse of a given function<br/>Solve problems involving inverse functions");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_6").click(function () {
        $("#statements").html("construct equations that describe direct and inverse proportion");
        $("#themes").html("Explore differences between direct and inverse proportion<br/>Solve problems involving proportion");
        $("#key").html("Construct and use simple equations describing direct proportion<br/>Construct and use more complex equations describing direct proportion<br/>Construct and use simple equations describing inverse proportion<br/>Construct and use more complex equations describing inverse proportion<br/>Solve problems involving direct and inverse proportion");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_7").click(function () {
        $("#statements").html("recognise and use simple geometric progressions (r^n where n is an integer, and r is a rational number > 0 or a surd) and other sequences");
        $("#themes").html("investigate geometric progressions");
        $("#key").html("Recognise and use geometric progressions, ar^n, when r is a fraction > 0 or a surd<br/>Recognise and use geometric progressions, ar^n, when r is a surd<br/>Solve problems involving geometric sequences<br/>Recognise and use non-standard sequences");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_8").click(function () {
        $("#statements").html("solve quadratic inequalities in one variable<br/>solve two simultaneous equations in two variables where one is quadratic algebraically");
        $("#themes").html("Solve inequalities<br/>Solve simultaneous equations");
        $("#key").html("Solve a quadratic inequality (a = 1)<br/>Solve a quadratic inequality (a > 1)<br/>Solve simultaneous equations in two variables where one is a simple quadratic equation using substitution<br/>Solve simultaneous equations in two variables where one is a more complex quadratic equation using substitution<br/>Make connections between simultaneous equations and graphs<br/>Solve problems involving linear and quadratic simultaneous equations");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_9").click(function () {
        $("#statements").html("recognise, sketch and interpret graphs of exponential functions y = k^x for positive values of k, and the trigonometric functions (with arguments in degrees) y = sin x, y = cos x and y = tan x for angles of any size<br/>sketch translations and reflections of a given function");
        $("#themes").html("Explore graphs of exponential functions<br/>Explore graphs of trigonometric functions<br/>Investigate the connections between graphs of functions and their translations");
        $("#key").html("Plot and use the key features of the graph of an exponential function, y = k^x, for positive values of k<br/>Plot and use the key features of the graph of the trigonometric function y = sin x<br/>Plot and use the key features of the graph of the trigonometric function y = cos x<br/>Plot and use the key features of the graph of the trigonometric function y = tan x<br/>Know the effects of transforming the graph y = f(x): f(ax), af(x), f(x) + a, f(x + a), y = f(-x) and y = -f(x)<br/>Solve simple problems involving the transformation of graphs<br/>Solve more complex problems involving the transformation of graphs");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_10").click(function () {
        $("#statements").html("construct and interpret diagrams for grouped discrete data and continuous data, i.e. histograms with equal and unequal class intervals and know their appropriate use");
        $("#themes").html("Construct and interpret histograms<br/>Analyse distributions of data sets<br/>Solve problems involving histograms");
        $("#key").html("Construct histograms for grouped data with equal class intervals<br/>Construct histograms for grouped data with unequal class intervals<br/>Use a histogram to find missing values in a frequency table<br/>Use a partially completed histogram and frequency table to complete both<br/>Solve problems involving histograms");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_11").click(function () {
        $("#statements").html("apply the concepts of average and instantaneous rate of change (gradients of chords and tangents) in numerical, algebraic and graphical contexts)");
        $("#themes").html("Manipulate quadratic functions<br/>Solve problems involving graphs of quadratic functions<br/>Explore rates of change");
        $("#key").html("Apply the concept of average rate of change in numerical, algebraic and graphical contexts<br/>Apply the concept of instantaneous rate of change in numerical, algebraic and graphical contexts<br/>Solve practical problems involving rates of change");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
    $(".11_12").click(function () {
        $("#statements").html("use vectors to construct geometric arguments and proofs");
        $("#themes").html("Use vectors to create geometric arguments and proofs");
        $("#key").html("Understand how to create and present a proof involving vectors<br/>Make deductions about situations involving vectors that are multiples of other vectors<br/>Make deductions about situations involving vectors expressed using ratios<br/>Make deductions about situations involving vectors and parallel lines");
        var $contents = $(this).text();
        //$(".external").children("h3").text($contents + "  -   (No download)");
    });
});

