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
        $("#themes").html("Identify multiples of numbers<br/>Explore factors of numbers<br/>Investigate prime numbers<br/>Work with square and cube numbers");
        $("#key").html("Know and identify multiples of a given number<br/>Know the identify factors of a given number<br/>Find the ‘common factor’ of two numbers<br/>Know the meaning of ‘prime number’ and recall the prime numbers less than 20<br/>Know the prime factors of a given number<br/>Know how to test if a number up to 100 is prime<br/>Know and identify square numbers<br/>Know and identify cube numbers");
    });
    $(".5_2").click(function () {
        $("#themes").html("Work with numbers up to one million<br/>Understand and use other number systems<br/>Understand and use negative numbers");
        $("#key").html("Understand place value in numbers with up to seven digits<br/>Order numbers up to and including those with seven digits<br/>Write and read numbers up to and including those with seven digits<br/>Read Roman numerals to 1000 (M)<br/>Recognise years written in Roman numerals<br/>Count forwards and backwards in whole number steps when negative numbers are included<br/>Count forwards and backwards in whole number steps including through zero<br/>Understand and use negative numbers in context, including temperatures below 0°C");
    });
    $(".5_3").click(function () {
        $("#themes").html("Round any number up to 1 000 000 to the nearest 10, 100, 1000, 10 000 and 100 000<br/>Round decimals with two decimal places to the nearest whole number and to one decimal place<br/>Use rounding to check answers to calculations and determine, in the context of a problem, levels of accuracy");
        $("#key").html("Round any number up to 1 000 000 to the nearest 10 and 100<br/>Round any number up to 1 000 000 to the nearest 1 000<br/>Round any number up to 1 000 000 to the nearest 10 000<br/>Round any number up to 1 000 000 to the nearest 100 000<br/>Round any number with two decimal place to one decimal place<br/>Round any number with two decimal place to the nearest whole number<br/>Understand estimating as the process of finding a rough value of an answer or calculation<br/>Estimate calculations with up to four digits");
    });
    $(".5_4").click(function () {
        $("#themes").html("Develop mental addition and subtraction skills<br/>Extend written methods of addition and subtraction<br/>Solve problems involving addition and subtraction");
        $("#key").html("Add four-digit numbers and ones, tens, hundreds or thousands mentally <br/>Subtract four-digit numbers and ones, tens, hundreds or thousands mentally<br/>Use columnar addition for numbers with more than four digits with no carrying required<br/>Use columnar addition for numbers with more than four digits with carrying required<br/>Use columnar subtraction for numbers with more than four digits with no exchanging required<br/>Use columnar subtraction for numbers with more than four digits with exchanging required<br/>Solve multi-step problems involving addition and/or subtraction");
    });
    $(".5_5").click(function () {
        $("#themes").html("Investigate 3D shapes");
        $("#key").html("Identify 3D-shapes from photographs and sketches<br/>Identify 3D-shapes from nets<br/>Identify 3D-shapes from diagrams on isometric paper<br/>Construct diagrams of 3D-shapes on isometric paper");
    });
    $(".5_6").click(function () {
        $("#themes").html("Develop mental arithmetic skills<br/>Explore multiplication and division of decimals<br/>Develop written methods of multiplication<br/>Develop written methods of division<br/>Solve problems involving multiplication and division");
        $("#key").html("Use knowledge of multiplication tables when multiplying and dividing mentally<br/>Multiply a whole number or decimal by 10, 100 or 1000<br/>Divide a whole number or decimal by 10, 100 or 1000<br/>Multiply numbers up to 4-digits by a one-digit number using short multiplication<br/>Multiply three-digit numbers by a two-digit number using long multiplication<br/>Multiply four-digit numbers by a two-digit number using long multiplication<br/>Divide a three-digit number by a one-digit number using short division with no remainder<br/>Divide a three-digit number by a one-digit number using short division with a remainder<br/>Divide a four-digit number by a one-digit number using short division with no remainder<br/>Divide a four-digit number by a one-digit number using short division with a remainder<br/>Interpret a remainder appropriately for the context when carrying out division<br/>Identify when knowledge of factors (multiples, squares, cubes) can be used to help solve a problem");
    });
    $(".5_7").click(function () {
        $("#themes").html("Explore the properties of rectangles<br/>Investigate polygons");
        $("#key").html("Use the properties of rectangles to find missing lengths and angles<br/>Use the properties of rectangles to find points on a coordinate grid<br/>Know the difference between a regular and an irregular polygon<br/>Use the properties of regular polygons to find points on a coordinate grid");
    });
    $(".5_8").click(function () {
        $("#themes").html("Develop ways of counting");
        $("#key").html("Count forwards in tens and hundreds from any positive number up to 1 000 000<br/>Count forwards in thousands from any positive number up to 1 000 000<br/>Count backwards in tens and hundreds from any positive number up to 1 000 000<br/>Count backwards in thousands from any positive number up to 1 000 000");
    });
    $(".5_9").click(function () {
        $("#themes").html("Solve problems involving time<br/>Interpret information in tables<br/>Interpret information in timetables");
        $("#key").html("Solve a problem involving converting between different units of time<br/>Read and interpret information given in a table<br/>Read and interpret information given in a timetable<br/>Solve problems that involve interpreting timetables");
    });
    $(".5_10").click(function () {
        $("#themes").html("Explore the equivalence between fractions<br/>Explore the equivalence between fractions and decimals<br/>Understand the meaning of percentages");
        $("#key").html("Compare fractions whose denominators are multiples of the same number<br/>Order fractions whose denominators are multiples of the same number<br/>Identify equivalent fractions represented using tenths and hundredths<br/>Understand and use thousandths<br/>Write a number (less than1) with one decimal place as a fraction<br/>Write a number (less than 1) with two decimal places as a fraction<br/>Recognise that thousandths arise from dividing a number (or object) into one thousand equal parts and dividing hundredths by ten<br/>Solve problems involving number up to three decimal places<br/>Read a number with three decimal places<br/>Compare and order a set of numbers written to three decimal places<br/>Compare and order a set of numbers with a mixed number of decimal places<br/>Understand that per cent relates to number of parts per hundred<br/>Write any percentage as a fraction with a denominator of 100<br/>Write any percentage as a decimal");
    });
    $(".5_11").click(function () {
        $("#themes").html("Convert between different units of metric measure (for example, kilometre and metre; centimetre and metre; centimetre and millimetre; gram and kilogram; litre and millilitre)<br/>Understand and use approximate equivalences between metric units and common imperial units such as inches, pounds and pints<br/>Use all four operations to solve problems involving measure [for example, length, mass, volume, money] using decimal notation, including scaling");
        $("#key").html("Convert between kilometres and metres<br/>Convert between centimetres and metres<br/>Convert between centimetres and millimetres<br/>Convert between kilograms and grams<br/>Convert between litres and millilitres<br/>Use decimal notation when converting between metric units of length, mass and volume / capacity<br/>Know approximate equivalencies between metric and imperial units including <br/>Solving problems involving measures, including money");
    });
    $(".5_12").click(function () {
        $("#themes").html("Develop knowledge of angles<br/>Measure angles<br/>Draw angles");
        $("#key").html("Know that angles are measured in degrees and estimate acute, obtuse and reflex angles<br/>Know that a reflex angle is greater than 180° and estimate reflex angles<br/>Identify and find missing angles at a point<br/>Identify and find missing angles at a point on a straight line<br/>Use a protractor to measure angles less than 180°<br/>Use a protractor to measure angles greater than 180°<br/>Use a protractor to draw angles less than 180°<br/>Use a protractor to draw angles greater than 180°");
    });
    $(".5_13").click(function () {
        $("#themes").html("Explore mixed numbers<br/>Calculate with fractions<br/>Explore fractions, decimals and percentages");
        $("#key").html("Convert a mixed number into an improper fraction (and vice versa)<br/>Add fractions when one denominator is a multiple of the other including mixed numbers as part of the answer<br/>Add fractions when one denominator is a multiple of the other including mixed numbers as part of the question <br/>Subtract fractions when one denominator is a multiple of the other including mixed numbers as part of the answer<br/>Subtract fractions when one denominator is a multiple of the other including mixed numbers as part of the question<br/>Multiply a proper fraction by a whole number<br/>Multiply a mixed number by a whole number<br/>Know percentage equivalents of 1/2, 1/4, 1/5, 2/5, 4/5 and fractions with a denominator of 10 and 100 <br/>Establish percentage equivalents of fractions with a denominator of 20, 25, 40 and 50<br/>Know decimal equivalents of 1/2, 1/4, 1/5, 2/5, 4/5 and fractions with a denominator of 10 and 100 <br/>Establish decimal equivalents of fractions with a denominator of 20, 25, 40 and 50");
    });
    $(".5_14").click(function () {
        $("#themes").html("Exploring the perimeter of composite shapes<br/>Calculate areas of rectangles<br/>Investigate volume and capacity");
        $("#key").html("Calculate the perimeter of composite rectilinear shapes <br/>Calculate the area of a rectangles, including squares<br/>Convert between square centimetres (cm²) and square metres (m²)  <br/>Estimate the area of irregular shapes bounded by straight lines<br/>Estimate the area of irregular shapes that include curved lines<br/>Estimate volume by using 1 cm3 blocks to build cuboids, including cubes<br/>Estimate capacity");
    });
    $(".5_15").click(function () {
        $("#themes").html("Use transformations to move shapes");
        $("#key").html("Carry out a translation described using mathematical language<br/>Describe a translation using mirror lines parallel to the axes<br/>Carry out a reflection using a mirror line parallel to the axes<br/>Carry out a reflection using a mirror line parallel to the axes and touching the object<br/>Carry out a reflection using a mirror line parallel to the axes and crossing the object<br/>Describe a reflection using mirror lines parallel to the axes<br/>Understand that a translations and reflections produce a congruent image");
    });
    $(".5_16").click(function () {
        $("#themes").html("Solve problems involving graphs");
        $("#key").html("Understand the difference between a line graph and a bar-line chart<br/>Identify when a line graph is an appropriate way to show data<br/>Read values from a line graph<br/>Answer one-step and two-step questions about data in line graphs (e.g. ‘How much?’)<br/>Solve problems using information presented in a line graph");
    });
    $(".6_1").click(function () {
        $("#themes").html("Understand and use decimals with up to three decimal places<br/>Work with numbers up to ten million<br/>Explore the use of negative numbers<br/>Develop understanding of factors and multiples<br/>Investigate prime numbers");
        $("#key").html("Write and read numbers up to and including 10 000 000<br/>Compare and order numbers up to and including 10 000 000<br/>Multiply whole numbers by 10<br/>Multiply whole numbers by 100<br/>Multiply whole numbers by 1000<br/>Divide whole numbers by 10<br/>Divide whole numbers by 100<br/>Divide whole numbers by 1000<br/>Understand and use negative numbers when working in context, such as temperature<br/>Calculate intervals across zero<br/>Find common multiples of two numbers<br/>Find common factors of two numbers");
    });
    $(".6_2").click(function () {
        $("#themes").html("Explore ways of approximating numbers<br/>Explore ways of checking answers");
        $("#key").html("Round a number to the nearest 10<br/>Round a number to the nearest 100<br/>Round a number to the nearest 1000<br/>Round a number to the nearest whole number<br/>Round a number to the nearest 1 decimal place<br/>Round a number to the nearest 2 decimal places<br/>Understand estimating as the process of finding a rough value of an answer or calculation");
    });
    $(".6_3").click(function () {
        $("#themes").html("Develop mental calculation skills<br/>Extend written methods of multiplication<br/>Know and use the order of operations<br/>Solve problems involving addition, subtraction and multiplication");
        $("#key").html("Carry out addition and subtraction calculations mentally involving numbers up to 4 digits.<br/>Multiply a four-digit number by a two-digit number using long multiplication<br/>Carry out calculations involving a mixture of multiplication and division<br/>Carry out calculations involving mixture of addition and subtraction<br/>Carry out calculations involving mixture of multiplication and addition/subtraction<br/>Carry out calculations involving mixture of division and addition/subtraction<br/>Solve multi-step problems involving addition, subtraction and/or multiplication<br/>Check the order of magnitude of the solution to a calculation, including decimals");
    });
    $(".6_4").click(function () {
        $("#themes").html("Develop written methods of short division for numbers up to four-digits divided by a one-digit number<br/>Deal with remainders when carrying out division<br/>Solve problems involving the four operations");
        $("#key").html("Divide a three-digit number by a two-digit number using a formal written method of division with no remainder<br/>Divide a three-digit number by a two-digit number using a formal written method of division with a remainder<br/>Divide a four-digit number by a two-digit number using a formal written method of division with no remainder<br/>Divide a four-digit number by a two-digit number using a formal written method of division with a remainder<br/>Understand how to write the remainder to a division problem as a whole number remainder or as a fraction<br/>Understand how to interpret remainder to a division problem appropriately for the context<br/>Solve problems involving division");
    });
    $(".6_5").click(function () {
        $("#themes").html("Construct 2D shapes<br/>Investigate 3D shapes<br/>Explore nets of 3D shapes");
        $("#key").html("Draw 2-D shapes given angles<br/>Draw 2-D shapes given dimensions and angles<br/>Recognise prisms<br/>Recognise pyramids<br/>Classify 3-D shapes including cylinders, cones and spheres<br/>Build 3-D shapes form nets<br/>Draw nets of 3-D shapesSolve 3-D problems using nets including visualising the edges (vertices) that will meet when folded");
    });
    $(".6_6").click(function () {
        $("#themes").html("Investigate properties of 2D shapes<br/>Investigate angles in polygons<br/>Understand and use the vocabulary of circles");
        $("#key").html("Classify 2D shapes using given categories; e.g. number of sides, symmetry<br/>Find unknown angles in a triangle<br/>Find unknown angles in an isosceles triangle when only one angle is known<br/>Find unknown angles in a quadrilateral<br/>Find unknown angles in regular polygons<br/>Solve problems involving missing angles<br/>Solve problems involving 2-D shapes<br/>Know the names and relationships of the parts a circle");
    });
    $(".6_7").click(function () {
        $("#themes").html("Explore the equivalence between fractions<br/>Use the equivalence between fractions<br/>Explore the equivalence between fractions, decimals and percentages");
        $("#key").html("Use common factors to simplify fractions<br/>Use common multiples to find equivalent fractions<br/>Compare and order fractions (fractions < 1)<br/>Compare and order fractions, including fractions > 1<br/>Understand a fraction is associated with division<br/>Work out the decimal equivalents of fifths, eighths and tenths<br/>Know simple fractions, decimals and percentages equivalences (e.g. 10%, 20%, 25%, 50%, 75%, 100%)<br/>Find equivalencies between fractions, decimals and percentages");
    });
    $(".6_8").click(function () {
        $("#themes").html("Use simple formulae written in words<br/>Create simple formulae written in words<br/>Work with formulae written algebraically");
        $("#key").html("Use a simple one-step formula written in words<br/>Use a simple two-step formula written in words<br/>Use simple formula expressed in symbols<br/>Convert between miles and kilometres");
    });
    $(".6_9").click(function () {
        $("#themes").html("Solve problems involving scaling<br/>Explore enlargement<br/>Solve problems involving sharing and grouping");
        $("#key").html("Solve simple problems involving the relative sizes of two quantities where missing values can be found by using integer multiplication and division facts; e.g. find the value of the parts, given the whole)<br/>Solve problems involving the relative sizes of two quantities where missing values can be found by using integer multiplication and division facts; e.g. find the value of the whole and parts, given one part)<br/>Use a scale factor to solve problems involving similar shapes<br/>Find the scale factor of similar shapes<br/>Solve problems involving unequal sharing or grouping problems using fractions<br/>Solve problems involving unequal sharing or grouping problems using multiples");
    });
    $(".6_10").click(function () {
        $("#themes").html("Explore number sequences");
        $("#key").html("Recognise and describe a linear sequence<br/>Find the next terms in a linear sequence<br/>Find a missing term in a linear sequence<br/>Generate a linear sequence from its description<br/>Solve problems involving linear sequences");
    });
    $(".6_11").click(function () {
        $("#themes").html("Solve problems involving measurement");
        $("#key").html("Convert between non-adjacent metric units length from the smaller unit to the larger unit; e.g. centimetres to kilometres<br/>Convert between non-adjacent metric units length from the larger unit to the smaller unit; e.g. kilometres and centimetres<br/>Convert between non-adjacent metric units mass from the smaller unit to the larger unit; e.g. grams to kilograms<br/>Convert between non-adjacent metric units mass from the larger unit to the smaller unit; e.g. kilograms to grams<br/>Convert between non-adjacent time units; e.g. hours to seconds<br/>Solve problems involving converting between measures");
    });
    $(".6_12").click(function () {
        $("#themes").html("Develop knowledge of angles<br/>Apply angle facts to deduce unknown angles");
        $("#key").html("Find missing angles where they meet at a point<br/>Find missing angles where they meet on a straight line<br/>Find missing angles where they are vertically opposite<br/>Solve problems involving missing angles");
    });
    $(".6_13").click(function () {
        $("#themes").html("Calculate with fractions<br/>Calculate with decimals<br/>Calculate with percentages");
        $("#key").html("Add fractions with different denominators<br/>Add a mixed number and a fraction, including with different denominators<br/>Add mixed numbers, including with different denominators<br/>Subtract fractions with different denominators<br/>Subtract a mixed number and a fraction, including with different denominators<br/>Subtract mixed numbers, including with different denominators<br/>Multiply a proper fraction by a proper fraction<br/>Divide a proper fraction by a whole number<br/>Multiply U.t by U<br/>Multiply U.th by U<br/>Calculate percentages of a quantity<br/>Solve problems involving the use of percentages to make comparisons");
    });
    $(".6_14").click(function () {
        $("#themes").html("Solve missing number problems<br/>Understand and use algebra");
        $("#key").html("Find all combinations of two variables that solve a missing number problem with two unknowns<br/>Find pairs of numbers that satisfy an equation with two unknowns e.g. a + b = 15<br/>Know the basic rules of algebraic notation<br/>Express and solve missing number problems algebraically");
    });
    $(".6_15").click(function () {
        $("#themes").html("Explore area<br/>Investigate volume<br/>Solve problems involving area and volume");
        $("#key").html("Recognise that shapes with the same areas can have different perimeters and vice versa<br/>Calculate the area of a parallelogram<br/>Calculate the area of a triangle<br/>Estimate the volume of cubes and cuboids<br/>Calculate the volume of cuboid, including cubes<br/>Recognise when it is possible to use formulae to calculate area and volume<br/>Convert between metric units of area in simple cases<br/>Convert between metric units of volume in simple cases");
    });
    $(".6_16").click(function () {
        $("#themes").html("Understand and use Cartesian coordinates <br/>Use transformations to move shapes");
        $("#key").html("Use coordinates to describe the position of a point in all four quadrants<br/>Use coordinates to plot the position of a point in any of the four quadrants<br/>Draw and translate simple shapes<br/>Carry out a reflection using one of the axes as a mirror line ");
    });
    $(".6_17").click(function () {
        $("#themes").html("Construct and interpret pie charts<br/>Solve problems involving graphs and charts<br/>Understand and use the mean");
        $("#key").html("Interpret pie charts<br/>Construct a pie chart by measuring angles<br/>Interpret line graphs<br/>Construct line graphs<br/>Understand the meaning of ‘average’ as a typicality (or location)<br/>Calculate the mean of a set of discrete data<br/>Interpret the mean of a set of discrete data<br/>Use the mean to find a missing number in a set of data");
    });
    $(".7_1").click(function () {
        $("#themes").html("Exploring place value<br/>Exploring written methods of calculation<br/>Calculating with decimals<br/>Know and apply the correct order of operations");
        $("#key").html("Multiply a number positive integer by a power of 10 <br/>Multiply a decimal by a power of 10 <br/>Divide a number positive integer by a power of 10 <br/>Multiply a decimal by a power of 10 <br/>Add numbers up to six-digits using a formal written method <br/>Add decimals with same, and different, number of decimal places <br/>Subtract numbers up to six-digits using a formal written method <br/>Subtract decimals with same and different, number of decimal places <br/>Multiply a number up to four-digits by a one or two-digit number using a formal written method<br/>Transform a multiplication involving decimals to an equivalent multiplication involving integers<br/>Multiply a large integer up to four-digits by a decimal of up to 2dp using integer multiplication <br/>Divide a number up to four-digits by a one or two-digit number using a formal written method<br/>Use a formal method to divide a decimal by an integer < 10<br/>Use a formal method to divide a decimal by an integer greater than 10 <br/>Transform a calculation involving the division decimals to an equivalent multiplication involving integers <br/>Apply the order of operations correctly to multi-step calculations involving up to four operations and brackets");
    });
    $(".7_2").click(function () {
        $("#themes").html("Solve problems using common factors and highest common factors<br/>Exploring prime numbers<br/>Solve problems using common multiples and lowest common multiples<br/>Explore powers and roots");
        $("#key").html("Find common factors of numbers<br/>Find the highest common factor of numbers, including co-prime<br/>Recognise and solve problems involving highest common factor <br/>Find prime numbers and test numbers to see if they are prime <br/>Find common multiples of numbers<br/>Recognise and solve problems involving the lowest common multiple <br/>Read, write and evaluate powers<br/>Recognise and use triangular, square and cube numbers <br/>Define and find square roots (including using the √ symbol)<br/>Define and find cube roots and other roots (including using the ∛   and √ symbols), including the use of  a scientific calculator");
    });
    $(".7_3").click(function () {
        $("#themes").html("Explore ways of approximating numbers<br/>Explore ways of checking answers");
        $("#key").html("Round a number to a specified number of decimal places<br/>Round a number to a specified number of significant figures<br/>Estimate calculations by rounding numbers to one significant figure");
    });
    $(".7_4").click(function () {
        $("#themes").html("Comparing numbers<br/>Ordering integers and decimals<br/>Ordering fractions<br/>Ordering integers, decimals and fractions (including mixed numbers)<br/>Using comparison symbols in algebraic contexts");
        $("#key").html("Use the signs <, > and = to compare numbers<br/>Use a compound inequality to compare three of more numbers (eg -1<0.5<4)<br/>Order a set of integers<br/>Order a set of decimals <br/>Order a set of integers and decimals<br/>Order fractions with the same denominator or denominators are a multiple of each other<br/>Order fractions where the denominators are not multiples of each other<br/>Order mixed numbers and fractions<br/>Order a combination of integers, decimals, fractions and mixed numbers");
    });
    $(".7_5").click(function () {
        $("#themes").html("Interpret geometrical conventions and notation<br/>Apply geometrical conventions and notation");
        $("#key").html("Understand and use labelling notation for parallel and perpendicular lines<br/>Identify line and rotational symmetry in polygons<br/>Use ruler and protractor to construct triangles, and other shapes, from written descriptions<br/>Use ruler and compasses to construct triangles when all three sides known");
    });
    $(".7_6").click(function () {
        $("#themes").html("Investigate the properties of 3D shapes<br/>Explore quadrilaterals<br/>Explore triangles");
        $("#key").html("Know the connection between faces, edges and vertices in 3D shapes<br/>Recognise and use nets of 3D shapes <br/>Know and solve problems using the properties and definitions of triangles<br/>Know and solve problems using the properties and definitions of special types of quadrilaterals (including diagonals)<br/>Know and solve problems using the properties of other plane figures");
    });
    $(".7_7").click(function () {
        $("#themes").html("Understand the vocabulary and notation of algebra<br/>Manipulate algebraic expressions<br/>Explore functions<br/>Evaluate algebraic statements");
        $("#key").html("Know the meaning of expression, term, formula, equation, function<br/>Know and use basic algebraic notation (the ‘rules’ of algebra)<br/>Simplify a simple expression by collecting like terms<br/>Simplify more complex expressions by collecting like terms<br/>Manipulate expressions by multiplying an integer over a bracket (the distributive law)<br/>Manipulate expressions by multiplying a single term over a bracket (the distributive law)<br/>Substitute positive numbers into expressions and formulae<br/>Given a function, establish outputs from given inputs and inputs from given outputs");
    });
    $(".7_8").click(function () {
        $("#themes").html("Understand and use top-heavy fractions<br/>Understand the meaning of ‘percentage’<br/>Explore links between fractions and percentages");
        $("#key").html("Write one quantity as a fraction of another where the fraction is less than 1<br/>Write one quantity as a fraction of another where the fraction is greater than 1<br/>Write a percentage as a fraction<br/>Write a quantity as a percentage of another");
    });
    $(".7_9").click(function () {
        $("#themes").html("Understand and use ratio notation<br/>Solve problems that involve dividing in a ratio");
        $("#key").html("Describe a comparison of measurements or objects using ratio notation a:b<br/>Simplify a ratio by cancelling common factors<br/>Divide a quantity in two parts in a given part:part ratio<br/>Divide a quantity in two parts in a given part:whole ratio");
    });
    $(".7_10").click(function () {
        $("#themes").html("Investigate number patterns<br/>Explore number sequences<br/>Explore sequences");
        $("#key").html("Recognise simple arithmetic progressions<br/>Use a term-to-term rule to generate a linear sequence<br/>Use a term-to-term rule to generate a non-linear sequence");
    });
    $(".7_11").click(function () {
        $("#themes").html("Measure accurately<br/>Convert between measures<br/>Solve problems involving measurement");
        $("#key").html("Use a ruler to accurately measure line segments to the nearest millimetre<br/>Use a protractor to accurately measure angles to the nearest degree<br/>Convert fluently between metric units of length <br/>Convert fluently between metric units of mass<br/>Convert fluently between metric units of volume / capacity<br/>Convert fluently between units of time<br/>Convert fluently between units of money");
    });
    $(".7_12").click(function () {
        $("#themes").html("Investigate angle properties");
        $("#key").html("Recognise and solve problems using vertically opposite angles<br/>Recognise and solve problems using angles at a point<br/>Recognise and solve problems using angles at a point on a line");
    });
    $(".7_13").click(function () {
        $("#themes").html("Calculate with fractions<br/>Calculate with percentages");
        $("#key").html("Apply addition to proper fractions, improper fractions and mixed numbers<br/>Apply subtraction to proper fractions, improper fractions and mixed numbers<br/>Multiply proper and improper fractions<br/>Multiply mixed numbers<br/>Divide a proper fraction by a proper fraction<br/>Divide improper fractions and mixed numbers<br/>Identify the multiplier for a percentage increase or decrease <br/>Use calculators to find a percentage of an amount using multiplicative methods<br/>Use calculators to increase and decrease an amount by a percentage using multiplicative methods<br/>Compare two quantities using percentages<br/>Know that percentage change = actual change ÷ original amount<br/>Calculate the percentage change in a given situation, including percentage increase / decrease");
    });
    $(".7_14").click(function () {
        $("#themes").html("Explore way of solving equations<br/>Solve two-step equations<br/>Solve three-step equations");
        $("#key").html("Solve one-step equations when the solution is a positive integer or fraction<br/>Solve two-step equations when the solution is a positive integer or fraction<br/>Solve two-step equations when the solution is a positive integer or fraction<br/>Solve multi-step equations including the use of brackets when the solution is a positive integer or fraction <br/>Solve equations when the solution is an integer or fraction");
    });
    $(".7_15").click(function () {
        $("#themes").html("Develop knowledge of area<br/>Investigate surface area<br/>Explore volume");
        $("#key").html("Calculate perimeters of 2D shapes<br/>Use and apply the formula to calculate the area of triangles <br/>Use and apply the formula to calculate the area of trapezia<br/>Use and apply the formula to calculate the volume of cuboids<br/>Find the surface area of cuboids (including cubes) ");
    });
    $(".7_16").click(function () {
        $("#themes").html("Explore lines on the coordinate grid<br/>Use transformations to move shapes<br/>Describe transformations");
        $("#key").html("Solve geometrical problems on coordinate axes<br/>Write the equation of a line parallel to the x-axis or the y-axis<br/>Identify and draw the lines y = x and y = -x<br/>Construct and describe reflections in horizontal, vertical and diagonal mirror lines (45° from horizontal)<br/>Describe a translation as a 2D vector<br/>Construct and describe rotations using a given angle, direction and centre of rotation<br/>Solve problems involving rotations, reflections and translations");
    });
    $(".7_17").click(function () {
        $("#themes").html("Explore types of data<br/>Construct and interpret graphs<br/>Select appropriate graphs and charts");
        $("#key").html("Interpret and construct frequency tables<br/>Construct and interpret bar charts and know their appropriate use<br/>Construct and interpret comparative bar charts<br/>Construct and interpret pie charts and know their appropriate use<br/>Construct and interpret vertical line charts<br/>Choose appropriate graphs or charts to represent data");
    });
    $(".7_18").click(function () {
        $("#themes").html("Investigate averages<br/>Explore ways of summarising data<br/>Analyse and compare sets of data");
        $("#key").html("Find the mode of set of data<br/>Find the median of a set of data including when there are an even number of numbers in the data set<br/>Calculate the mean from a frequency table<br/>Find the mode from a frequency table<br/>Find the median from a frequency table<br/>Calculate and understand the range as a measure of spread (or consistency)<br/>Analyse and compare sets of data, appreciating the limitations of different statistics (mean, median, mode, range)");
    });
    $(".8_1").click(function () {
        $("#themes").html("Identify and use the prime factorisation of a number<br/>Understand and use standard form");
        $("#key").html("Write a number as a product of its prime factors<br/>Use prime factorisations to find the highest common factor of two numbers<br/>Use prime factorisations to find the lowest common multiple of two numbers<br/>Round numbers to one or two significant figures<br/>Round numbers to one and two decimal places<br/>Use standard form to write large numbers<br/>Use standard form to write small numbers");
    });
    $(".8_2").click(function () {
        $("#themes").html("Calculate with negative numbers<br/>Apply the correct order of operations");
        $("#key").html("Add a positive number to a negative number<br/>Subtract a positive number from a negative number<br/>Add a negative number to a positive number<br/>Subtract a negative number from a positive number<br/>Add a negative number to a negative number<br/>Subtract a negative number from a negative number<br/>Multiply positive numbers by a negative number<br/>Multiply negative numbers by a negative number<br/>Divide positive numbers by a negative number<br/>Divide negative numbers by a negative number<br/>Square and cube positive and negative numbers<br/>Use a scientific calculator to calculate with fractions, both positive and negative<br/>Understand how to use the order of operations including powers<br/>Understand how to use the order of operations including roots");
    });
    $(".8_3").click(function () {
        $("#themes").html("Explore enlargement of 2D shapes<br/>Use and interpret scale drawings<br/>Use and interpret bearings<br/>Explore ways of representing 3D shapes");
        $("#key").html("Use the centre and scale factor to carry out an enlargement with positive integer scale factor<br/>Use the centre and scale factor to carry out an enlargement with fractional scale factor <br/>Find the centre of enlargement<br/>Find the scale factor of an enlargement<br/>Use scale diagrams, including maps<br/>Use the concept of scaling in diagrams<br/>Interpret plans and elevations<br/>Understand and use bearings<br/>Construct scale diagrams and solve geometrical problems using bearings");
    });
    $(".8_4").click(function () {
        $("#themes").html("Understand the meaning of probability<br/>Explore experiments and outcomes<br/>Develop understanding of probability");
        $("#key").html("Know and use the vocabulary of probability<br/>Understand the use of the 0-1 scale to measure probability<br/>List all the outcomes for an experiment, including the use of tables<br/>Work out theoretical probabilities for events with equally likely outcomes<br/>Know that the sum of probabilities for all outcomes is 1<br/>Apply the fact that the sum of probabilities for all outcomes is 1");
    });
    $(".8_5").click(function () {
        $("#themes").html("Understand the concept of a factor<br/>Understand the notation of algebra<br/>Manipulate algebraic expressions<br/>Evaluate algebraic statements");
        $("#key").html("Use and interpret algebraic notation, including: a² b in place of a × a × b, coefficients written as fractions rather than as decimals<br/>Simplify an expression involving terms with combinations of variables (e.g. 3a²b + 4ab² + 2a² – a²b)<br/>Factorise an algebraic expression by taking out common factors<br/>Simplify expressions using the law of indices for multiplication<br/>Simplify expressions using the law of indices for division<br/>Simplify expressions using the law of indices for powers<br/>Know and use the zero index<br/>Substitute positive and negative numbers into formulae<br/>Change the subject of a formula when one step is required<br/>Change the subject of a formula when a two steps are required");
    });
    $(".8_6").click(function () {
        $("#themes").html("Explore links between fractions, decimals and percentages");
        $("#key").html("Identify if a fraction is terminating or recurring<br/>Recall some decimal and fraction equivalents (e.g. tenths, fifths, eighths, thirds, quarters, etc)<br/>Write a terminating decimal as a fraction<br/>Write a fraction in its lowest terms by cancelling common factors<br/>Use a calculator to change any fraction to a decimal");
    });
    $(".8_7").click(function () {
        $("#themes").html("Explore the uses of ratio<br/>Investigate the connection between ratio and proportion<br/>Solve problems involving proportional reasoning<br/>Solve problems involving compound units");
        $("#key").html("Express the division of a quantity into two parts as a ratio<br/>Solve problems involving ratio in a real-life context<br/>Find a relevant multiplier in a situation involving proportion<br/>Understand the connections between ratios and fractions<br/>Understand and use compound units<br/>Know the connection between speed, distance and time<br/>Solve problems involving speed<br/>Identify when it is necessary to convert quantities in order to use a sensible unit of measure");
    });
    $(".8_8").click(function () {
        $("#themes").html("Explore sequences");
        $("#key").html("Generate terms of a sequence from a term-to-term rule<br/>Generate terms of a sequence from a position-to-term rule<br/>Describe the position-to-term rule of a linear sequence using nth term<br/>Use the nth term of a sequence to deduce if a given number is in a sequence");
    });
    $(".8_9").click(function () {
        $("#themes").html("Develop knowledge of angles<br/>Explore geometrical situations involving parallel lines");
        $("#key").html("Solve missing angle problems involving alternate angles<br/>Solve missing angle problems involving corresponding angles<br/>Use knowledge of alternate and corresponding angles to calculate missing angles in geometrical diagrams<br/>Establish the fact that angles in a triangle must total 180°<br/>Establish the size of an interior angle in a regular polygon<br/>Establish the size of an exterior angle in a regular polygon<br/>Solve missing angle problems in polygons");
    });
    $(".8_10").click(function () {
        $("#themes").html("Calculate with fractions<br/>Calculate with percentages");
        $("#key").html("Identify the multiplier for a percentage increase or decrease when the percentage is greater than 100%<br/>Use calculators to increase an amount by a percentage greater than 100%<br/>Solve problems involving percentage change<br/>Solve original value problems when working with percentages<br/>Solve financial problems including simple interest<br/>Solve problems that require exact calculation with fractions");
    });
    $(".8_11").click(function () {
        $("#themes").html("Solve linear equations with the unknown on one side<br/>Solve linear equations with the unknown on both sides<br/>Explore connections between graphs and equations");
        $("#key").html("Solve linear equations with the unknown on one side when the solution is a negative number<br/>Solve linear equations with the unknown on both sides when the solution is a whole number<br/>Solve linear equations with the unknown on both sides when the solution is a fraction<br/>Solve linear equations with the unknown on both sides when the solution is a negative number<br/>Solve linear equations with the unknown on both sides when the equation involves brackets<br/>Recognise that the point of intersection of two graphs corresponds to the solution of a connected equation");
    });
    $(".8_12").click(function () {
        $("#themes").html("Investigate circles<br/>Discover pi<br/>Solve problems involving circles<br/>Explore prisms and cylinders");
        $("#key").html("Know circle definitions and properties, including: centre, radius, chord, diameter, circumference<br/>Calculate the circumference of a circle when radius or diameter is given<br/>Calculate the perimeter of composite shapes that include sections of a circle<br/>Calculate the area of a circle when radius or diameter<br/>Calculate the area of composite shapes that include sections of a circle<br/>Calculate the volume of a right prism<br/>Calculate the volume of a cylinder<br/>Compare lengths, areas and volumes using ratio notation");
    });
    $(".8_13").click(function () {
        $("#themes").html("Plot and interpret linear graphs<br/>Plot and quadratic graphs<br/>Model real situations using linear graphs");
        $("#key").html("Know that graphs of functions of the form y = mx + c, x ± y = c and ax ± by = c are linear<br/>Plot graphs of functions of the form y = mx ± c<br/>Plot graphs of functions of the form ax ± by = c<br/>Find the gradient of a straight line on a unit grid<br/>Find the y-intercept of a straight line<br/>Sketch linear graphs<br/>Distinguish between a linear and quadratic graph<br/>Plot graphs of quadratic functions of the form y = x²  ± c<br/>Sketch a simple quadratic graph<br/>Plot and interpret graphs of piece-wise linear functions in real contexts<br/>Plot and interpret distance-time graphs (speed-time graphs) including approximate solutions to kinematic problems ");
    });
    $(".8_14").click(function () {
        $("#themes").html("Explore experiments and outcomes<br/>Develop understanding of probability<br/>Use probability to make predictions");
        $("#key").html("List all elements in a combination of sets using a Venn diagram<br/>List outcomes of an event systematically<br/>Use a table to list all outcomes of an event<br/>Use frequency trees to record outcomes of probability experiments<br/>Construct theoretical possibility spaces for combined experiments with equally likely outcomes<br/>Calculate probabilities using a possibility space<br/>Use theoretical probability to calculate expected outcomes<br/>Use experimental probability to calculate expected outcomes");
    });
    $(".8_15").click(function () {
        $("#themes").html("Explore types of data<br/>Construct and interpret graphs<br/>Select appropriate graphs and charts");
        $("#key").html("Construct and interpret a grouped frequency table for continuous data<br/>Construct and interpret histograms for grouped data with equal class intervals<br/>Plot a scatter diagram of bivariate data<br/>Interpret a scatter diagram using understanding of correlation");
    });
    $(".8_16").click(function () {
        $("#themes").html("Investigate averages<br/>Explore ways of summarising data<br/>Analyse and compare sets of data");
        $("#key").html("Find the modal class of set of grouped data<br/>Find the class containing the median of a set of data<br/>Calculate an estimate of the mean from a grouped frequency table<br/>Estimate the range from a grouped frequency table<br/>Analyse and compare sets of data, appreciating the limitations of different statistics (mean, median, mode, range)<br/>Choose appropriate statistics to describe a set of data");
    });
    $(".9_1").click(function () {
        $("#themes").html("Calculate with powers and roots<br/>Explore the use of standard form<br/>Explore the effects of rounding");
        $("#key").html("Calculate with positive indices<br/>Calculate with roots<br/>Calculate with negative indices in the context of standard form<br/>Use a calculator to evaluate numerical expressions involving powers<br/>Use a calculator to evaluate numerical expressions involving roots<br/>Add numbers written in standard form<br/>Subtract numbers written in standard form<br/>Multiply numbers written in standard form<br/>Divide numbers written in standard form<br/>Use standard form on a scientific calculator including interpreting the standard form display of a scientific calculator<br/>Understand the difference between truncating and rounding<br/>Identify the minimum and maximum values of an amount that has been rounded (to nearest x, x d.p., x s.f.)<br/>Use inequalities to describe the range of values for a rounded value<br/>Solve problems involving the maximum and minimum values of an amount that has been rounded");
    });
    $(".9_2").click(function () {
        $("#themes").html("Know standard mathematical constructions<br/>Apply standard mathematical constructions<br/>Explore ways of representing 3D shapes");
        $("#key").html("Use ruler and compasses to construct the perpendicular bisector of a line segment<br/>Use ruler and compasses to bisect an angle<br/>Use a ruler and compasses to construct a perpendicular to a line from a point and at a point<br/>Know how to construct the locus of points a fixed distance from a point and from a line<br/>Solve simple problems involving loci<br/>Combine techniques to solve more complex loci problems<br/>Choose techniques to construct 2D shapes; e.g. rhombus<br/>Construct a shape from its plans and elevations<br/>Construct the plan and elevations of a given shape");
    });
    $(".9_3").click(function () {
        $("#themes").html("Understand equations and identities<br/>Manipulate algebraic expressions<br/>Construct algebraic statements");
        $("#key").html("Understand the meaning of an identity<br/>Multiply two linear expressions of the form (x + a)(x + b)<br/>Multiply two linear expressions of the form (x ± a)(x ± b)<br/>Expand the expression (x ± a)²<br/>Factorise a quadratic expression of the form x² + bx<br/>Factorise a quadratic expression of the form x² + bx + c<br/>Work out why two algebraic expressions are equivalent<br/>Create a mathematical argument to show that two algebraic expressions are equivalent<br/>Distinguish between situations that can be modelled by an expression or a formula<br/>Create an expression or a formula to describe a situation");
    });
    $(".9_4").click(function () {
        $("#themes").html("Solve problems involving different types of proportion<br/>Investigate ways of representing proportion<br/>Understand and solve problems involving congruence<br/>Understand and solve problems involving similarity<br/>Know and use compound units in a range of situations");
        $("#key").html("Know the difference between direct and inverse proportion<br/>Recognise direct proportion in a situation<br/>Know the features of a graph that represents a direct proportion situation<br/>Recognise inverse proportion in a situation<br/>Know the features of a graph that represents an inverse proportion situation<br/>Know the features of an expression, or formula, that represents a direct proportion situation<br/>Know the features of an expression, or formula, that represents an inverse proportion situation<br/>Understand the connection between the multiplier, the expression and the graph<br/>Identify congruence of shapes in a range of situations<br/>Identify similarity of shapes in a range of situations<br/>Finding missing lengths in similar shapes<br/>Solve problems involving compound units, such as density, pressure, population density and speed<br/>Convert between units of density and speed");
    });
    $(".9_5").click(function () {
        $("#themes").html("Investigate Fibonacci numbers<br/>Investigate Fibonacci type sequences<br/>Explore quadratic sequences");
        $("#key").html("Recognise and use the Fibonacci sequence<br/>Generate Fibonacci type sequences<br/>Recognise and use quadratic sequences<br/>Generate terms of a quadratic sequence from a written rule<br/>Generate terms of a quadratic sequence from its nth term<br/>Find the nth term of simple quadratic sequences");
    });
    $(".9_6").click(function () {
        $("#themes").html("Explore the meaning of an inequality<br/>Solve linear inequalities");
        $("#key").html("Find the set of integers that are solutions to an inequality, including the use of set notation<br/>Know how to show a range of values that solve an inequality on a number line<br/>Solve a simple linear inequality in one variable with unknowns on one side<br/>Solve a complex linear inequality in one variable with unknowns on one side<br/>Solve a linear inequality in one variable with unknowns on both sides<br/>Solve a linear inequality in one variable involving brackets<br/>Solve a linear inequality in one variable involving brackets negative terms<br/>Solve problems by constructing and solving linear inequalities in one variable");
    });
    $(".9_7").click(function () {
        $("#themes").html("Solve problems involving arcs and sectors<br/>Solve problems involving prisms<br/>Investigate right-angled triangles<br/>Solve problems involving Pythagoras’ theorem");
        $("#key").html("Know circle definitions and properties, including:  tangent, arc, sector and segment<br/>Calculate the arc length of a sector, including calculating exactly with multiples of π<br/>Calculate the area of a sector, including calculating exactly with multiples of π<br/>Calculate the angle of a sector when the arc length and radius are known<br/>Calculate the surface area of a right prism<br/>Calculate the surface area of a cylinder, including calculating exactly with multiples of π<br/>Know and use Pythagoras’ theorem<br/>Calculate the hypotenuse of a right-angled triangle using Pythagoras’ theorem in two dimensional figures<br/>Calculate one of the shorter sides in a right-angled triangle using Pythagoras’ theorem in two dimensional figures<br/>Solve problems using Pythagoras’ theorem in two dimensional figures");
    });
    $(".9_8").click(function () {
        $("#themes").html("Explore the congruence of triangles<br/>Investigate geometrical situations<br/>Form conjectures<br/>Create a mathematical proof");
        $("#key").html("Identify congruent triangles<br/>Know and use the criteria for triangles to be congruent (SSS, SAS, ASA, RHS)<br/>Solve problems, including geometrical proof, involving congruence<br/>Solve problems involving similarity<br/>Test conjectures using known facts in geometrical situations, including why the base angles in an isosceles triangle must be equal<br/>Explain the connections between Pythagorean triples");
    });
    $(".9_9").click(function () {
        $("#themes").html("Investigate features of straight line graphs<br/>Explore graphs of quadratic functions<br/>Explore graphs of other standard non-linear functions<br/>Create and use graphs of non-standard functions<br/>Solve kinematic problems");
        $("#key").html("Identify and interpret gradients of linear functions algebraically<br/>Identify and interpret intercepts of linear functions algebraically<br/>Use the form y = mx + c to identify parallel lines<br/>Find the equation of a line through one point with a given gradient<br/>Find the equation of a line through two given points<br/>Interpret the gradient of a straight line graph as a rate of change<br/>Plot graphs of quadratic functions<br/>Plot graphs of cubic functions<br/>Plot graphs of reciprocal functions<br/>Recognise and sketch the graphs of quadratic functions<br/>Interpret the graphs of quadratic functions<br/>Recognise and sketch the graphs of cubic functions<br/>Interpret the graphs of cubic functions<br/>Recognise and sketch the graphs of reciprocal functions<br/>Interpret the graphs of reciprocal functions<br/>Plot and interpret graphs of non-standard functions in real contexts<br/>Find approximate solutions to kinematic problems involving distance, speed and acceleration");
    });
    $(".9_10").click(function () {
        $("#themes").html("Solve simultaneous equations<br/>Use graphs to solve equations<br/>Solve problems involving simultaneous equations");
        $("#key").html("Understand that there are an infinite number of solutions to the equation ax + by = c (a, b non-zero)<br/>Find approximate solutions to simultaneous equations using a graph<br/>Solve two linear simultaneous equations in two variables in very simple cases (addition but no multiplication required)<br/>Solve two linear simultaneous equations in two variables in very simple cases (subtraction but no multiplication required)<br/>Solve two linear simultaneous equations in two variables in very simple cases (addition or subtraction but no multiplication required)<br/>Solve two linear simultaneous equations in two variables in simple cases (multiplication of one equation only required with addition)<br/>Solve two linear simultaneous equations in two variables in simple cases (multiplication of one equation only required with subtraction)<br/>Solve two linear simultaneous equations in two variables in simple cases (multiplication of one equation only required with addition or subtraction)<br/>Derive and solve two simultaneous equations<br/>Solve problems involving two simultaneous equations and interpret the solution");
    });
    $(".9_11").click(function () {
        $("#themes").html("Understand and use tree diagrams<br/>Develop understanding of probability in situations involving combined events<br/>Use probability to make predictions");
        $("#key").html("Calculate the probabilities of independent combined events<br/>Calculate the probabilities of dependent combined events<br/>Construct and list outcomes of combined events using a tree diagram<br/>Use a tree diagram to solve simple problems involving independent combined events<br/>Use a tree diagram to solve complex problems involving independent combined events<br/>Use a tree diagram to solve simple problems involving dependent combined events<br/>Use a tree diagram to solve complex problems involving dependent combined events<br/>Understand that relative frequency tends towards theoretical probability as sample size increases");
    });
    $(".9_12").click(function () {
        $("#themes").html("Construct and interpret graphs of time series<br/>Interpret a range of charts and graphs<br/>Interpret scatter diagrams<br/>Explore correlation");
        $("#key").html("Construct graphs of time series<br/>Interpret graphs of time series<br/>Construct and interpret compound bar charts<br/>Interpret a wider range of non-standard graphs and charts<br/>Interpret a scatter diagram using understanding of correlation<br/>Construct a line of best fit on a scatter diagram and use the line of best fit to estimate values<br/>Know when it is appropriate to use a line of best fit to estimate values<br/>Understand that correlation does not indicate causation");
    });
});

//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//document.querySelector('table').onclick = function () {
//    alert('Cell Selected!');
//}
