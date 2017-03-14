import processing.pdf.*;
int page = 1;
PFont sans;
PImage qbox;
String[] answers;


void setup() {
  answers = new String[36];
  sans = createFont("SansSerif.plain-48.vlw", 12);
  qbox = loadImage("qbox.png");
  size(600, 850, PDF, "test1.pdf");
  //size(600,850);
  background(255);
  textAlign(CENTER, CENTER);
  textFont(sans);
  textSize(24);
  fill(0);
  text("Interactive Arithemtic\nTest Paper", width/2, height/8);
  textAlign(LEFT, CENTER);
}

void draw() {
  PGraphicsPDF pdf = (PGraphicsPDF) g;
  for (int i=0; i<12; i++) {
    pdf.nextPage();
    page++;
    renderPage();
  }
  exit();
}

void renderPage() {
  int t1, t2, t3, t4, t5, t6;
  String[] questions = new String[3];
  questions[0]="";
  questions[1]="";
  questions[2]="";
  switch(page) {
  case 2:
    t1 = parseInt(random(1)*600)+100;
    t2 = (parseInt(random(1)*4)+1)*100;
    questions[0]=String.format("%d + %d =", t1, t2);
    t1=parseInt(random(1)*90)+10;
    t2=(parseInt(random(1)*8)+1)*100;
    t2+=(parseInt(random(1)*4)+2)*10;
    t2+=10-(t1%10);
    questions[1]=String.format("%d + %d =", t1, t2);
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2=1;
    questions[2]=String.format("%d \u00F7 %d =", t1, t2);
    break;

  case 3:
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2=9;
    questions[0]=String.format("%d - %d =", t1, t2);
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = (parseInt(random(1)*9)+1)*100;
    t2+= (parseInt(random(1)*9)+1)*10;
    t2+= parseInt(random(1)*9)+1;
    questions[1]=String.format("%d + %d =", t1, t2);
    t1 = (parseInt(random(1)*13)+13)*5;
    t2=5;
    questions[2]=String.format("%d \u00F7 %d =", t1, t2);
    break;

  case 4:
    t1 = (parseInt(random(1)*5)+1)*10000;
    t1+= (parseInt(random(1)*5)+1)*1000;
    t1+= (parseInt(random(1)*5)+1)*100;
    t1+= (parseInt(random(1)*5)+1)*10;
    t1+= parseInt(random(1)*5)+5;
    t2 = (parseInt(random(1)*8)+1)*1000;
    t2+= (parseInt(random(1)*8)+1)*100;
    t2+= 90;
    t2+=(t1%10)-1;
    questions[0]=String.format("%s - %s =", nfc(t1), nfc(t2));
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = (parseInt(random(1)*9)+1)*10;
    questions[1]=String.format("%d - %d =", t1, t2);
    t1 = (parseInt(random(1)*13)+13)*4;
    t2=4;
    questions[2]=String.format("%d \u00F7 %d =", t1, t2);
    break;

  case 5:
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = parseInt(random(1)*5)+2;
    questions[0]=String.format("%s \u00D7 %s =", nfc(t1), nfc(t2));
    t1 = (parseInt(random(1)*5)+3)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = parseInt(random(1)*4)+6;
    questions[1]=String.format("%d \u00D7 %d =", t1, t2);
    t1 = (parseInt(random(1)*7)+3)*10;
    t2 = (parseInt(random(1)*8)+2)*10;
    questions[2]=String.format("%d \u00D7 %d =", t1, t2);
    break;

  default:
    //do nothing
    break;
  }
  textSize(24);
  for (int i=0; i<3; i++) {
    image(qbox, 50, i*250+50);
    text(""+(i+1+3*(page-2)), 65, i*250+75);
    text(questions[i], 115, i*250+75);
  }
  textSize(12);
  text(String.format("Page %d", page), 20, height-20);
}

//void mouseClicked() {
//  background(255);
//  page++;
//  renderPage();
//}