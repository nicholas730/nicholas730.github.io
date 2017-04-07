import processing.pdf.*;
int page = 0;
PFont sans;
PImage qbox,logo,cover;
String[] answers;


void setup() {
  answers = new String[36];
  sans = createFont("SansSerif.plain-48.vlw", 12);
  qbox = loadImage("qbox.png");
  logo = loadImage("logo.png");
  cover = loadImage("cover.png");
  size(600, 850, PDF, "v2test1.pdf");
  //size(600,850);
  background(255);
  textAlign(CENTER, CENTER);
  textFont(sans);
  textSize(24);
  fill(0);
  //text("Interactive Arithemtic\nTest Paper", width/2, height/8);
  textAlign(LEFT, CENTER);
}

void draw() {
  PGraphicsPDF pdf = (PGraphicsPDF) g;
  image(cover,50,50,width-100,height-100);
  pdf.nextPage();
  for (int i=0; i<13; i++) {
    //pdf.nextPage();
    page++;
    renderPage();
    if(page<13){
      pdf.nextPage();
    }
  }
  exit();
}

void renderPage() {
  int t1, t2, t3, t4, t5, t6;
  String[] questions = new String[3];
  questions[0]="";
  questions[1]="";
  questions[2]="";
  textSize(24);
  if(page<13){
    for (int i=0; i<3; i++) {
      image(qbox, 50, i*250+50);
      text(""+(i+1+3*(page-1)), 65, i*250+75);
      //text(questions[i], 115, i*250+75);
    }
  }
  switch(page) {
  case 1:
    t1 = parseInt(random(1)*600)+100;
    t2 = (parseInt(random(1)*4)+1)*100;
    //questions[0]=String.format("%d + %d =", t1, t2);
    answers[0]=String.format("%d",t1-t2);
    text(String.format("%d - %d =", t1, t2), 115, 75);
    t1=parseInt(random(1)*90)+10;
    t2=(parseInt(random(1)*8)+1)*100;
    t2+=(parseInt(random(1)*4)+2)*10;
    t2+=10-(t1%10);
    //questions[1]=String.format("%d + %d =", t1, t2);
    answers[1]=String.format("%d",t1-t2);
    text(String.format("%d - %d =", t1, t2), 115, 250+75);
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2=1;
    //questions[2]=String.format("%d \u00F7 %d =", t1, t2);
    answers[2]=String.format("%d",t1*t2);
    text(String.format("%d \u00D7 %d =", t1, t2), 115, 500+75);
    break;

  case 2:
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2=9;
    //questions[0]=String.format("%d - %d =", t1, t2);
    answers[3]=String.format("%d",t1+t2);
    text(String.format("%d + %d =", t1, t2), 115, 75);
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = (parseInt(random(1)*9)+1)*100;
    t2+= (parseInt(random(1)*9)+1)*10;
    t2+= parseInt(random(1)*9)+1;
    //questions[1]=String.format("%d + %d =", t1, t2);
    answers[4]=String.format("%d",t1-t2);
    text(String.format("%d - %d =", t1, t2), 115, 250+75);
    t1 = (parseInt(random(1)*13)+13)*5;
    t2=5;
    //questions[2]=String.format("%d \u00F7 %d =", t1, t2);
    answers[5]=String.format("%d",t1*t2);
    text(String.format("%d \u00D7 %d =", t1, t2), 115, 500+75);
    break;

  case 3:
    t1 = (parseInt(random(1)*5)+1)*10000;
    t1+= (parseInt(random(1)*5)+1)*1000;
    t1+= (parseInt(random(1)*5)+1)*100;
    t1+= (parseInt(random(1)*5)+1)*10;
    t1+= parseInt(random(1)*5)+5;
    t2 = (parseInt(random(1)*8)+1)*1000;
    t2+= (parseInt(random(1)*8)+1)*100;
    t2+= 90;
    t2+=(t1%10)-1;
    //questions[0]=String.format("%s - %s =", nfc(t1), nfc(t2));
    answers[6]=String.format("%d",t1-t2);
    text(String.format("%s - %s =", nfc(t1), nfc(t2)), 115, 75);
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = (parseInt(random(1)*9)+1)*10;
    //questions[1]=String.format("%d - %d =", t1, t2);
    answers[7]=String.format("%d",t1+t2);
    text(String.format("%d + %d =", t1, t2), 115, 250+75);
    t1 = (parseInt(random(1)*13)+13)*4;
    t2=4;
    //questions[2]=String.format("%d \u00F7 %d =", t1, t2);
    answers[8]=String.format("%d",t1*t2);
    text(String.format("%d \u00D7 %d =", t1, t2), 115, 500+75);
    break;

  case 4:
    t1 = (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = parseInt(random(1)*5)+2;
    //questions[0]=String.format("%s \u00D7 %s =", nfc(t1), nfc(t2));
    answers[9]=String.format("%.3f",(float)t1/t2);
    text(String.format("%s \u00F7 %s =", nfc(t1), nfc(t2)), 115, 75);
    t1 = (parseInt(random(1)*5)+3)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = parseInt(random(1)*4)+6;
    //questions[1]=String.format("%d \u00D7 %d =", t1, t2);
    answers[10]=String.format("%.3f",(float)t1/t2);
    text(String.format("%d \u00F7 %d =", t1, t2), 115, 250+75);
    t1 = (parseInt(random(1)*7)+3)*10;
    t2 = (parseInt(random(1)*8)+2)*10;
    //questions[2]=String.format("%d \u00D7 %d =", t1, t2);
    answers[11]=String.format("%.3f",(float)t1/t2);
    text(String.format("%d \u00F7 %d =", t1, t2), 115, 500+75);
    break;
    
   case 5:
    t1 = 100;
    t2 = (parseInt(random(1)*9)+1)*100;
    t2+= (parseInt(random(1)*9)+1)*10;
    t2+= parseInt(random(1)*9)+1;
    //questions[0]=String.format("%s \u00D7 %s =", t1, t2);
    answers[12]=String.format("%.3f",(float)t2/t1);
    text(String.format("%s \u00F7 %s =", t2, t1), 115, 75);
    t1 = (parseInt(random(1)*4)+1)*1000;
    t1+= parseInt(random(1)*5)+2;
    t2 = (parseInt(random(1)*3)+4)*100;
    t2+= (parseInt(random(1)*5)+2)*10;
    t2+= parseInt(random(1)*5)+2;
    //questions[1]=String.format("%.3f + %.2f =", ((float)t1/1000), ((float)t2/100));
    answers[13]=String.format("%.3f",(float)t1/1000-(float)t2/100);
    text(String.format("%.3f - %.2f =", ((float)t1/1000), ((float)t2/100)), 115, 250+75);
    t1 = (parseInt(random(1)*344)+35)*3;
    t2=3;
    //questions[2]=String.format("%d \u00F7 %d =", t1, t2);
    answers[14]=String.format("%d",t1*t2);
    text(String.format("%d \u00D7 %d =", t1, t2), 115, 500+75);
    break;
    
   case 6:
    t1 = (parseInt(random(1)*4)+1)*1000;
    t1+= (parseInt(random(1)*4)+1)*100;
    t1+= (parseInt(random(1)*8)+2)*10;
    t1+= parseInt(random(1)*7)+2;
    t2 = (parseInt(random(1)*7)+1)*10000;
    t2+= (parseInt(random(1)*7)+1)*1000;
    t2+= (parseInt(random(1)*7)+1)*100;
    t2+= (parseInt(random(1)*7)+1)*10;
    t2+= parseInt(random(1)*7)+1;
    //questions[0]=String.format("%.2f + %.3f =", ((float)t1/100), ((float)t2/1000));
    answers[15]=String.format("%.3f",(float)t1/100 - (float)t2/1000);
    text(String.format("%.2f - %.3f =", ((float)t1/100), ((float)t2/1000)), 115, 75);
    t1 = 10000;
    t1+= (parseInt(random(1)*9)+1)*1000;
    t1+= (parseInt(random(1)*8)+1)*100;
    t1+= (parseInt(random(1)*5)+5)*10;
    t1+= parseInt(random(1)*5)+5;
    t2 = (parseInt(random(1)*8)+2)*100;
    t2+= (parseInt(random(1)*8)+2)*10;
    t2+= (parseInt((t1%100)/10))-3;
    //questions[1]=String.format("%.2f - %.1f =", ((float)t1/100), ((float)t2/10));
    answers[16]=String.format("%.2f",(float)t1/100 + (float)t2/10);
    text(String.format("%.2f + %.1f =", ((float)t1/100), ((float)t2/10)), 115, 250+75);
    t1 = (parseInt(random(1)*6)+4)*10000;
    t1+= (parseInt(random(1)*6)+4)*1000;
    t1+= (parseInt(random(1)*6)+4)*100;
    t1+= (parseInt(random(1)*6)+4)*10;
    t1+= parseInt(random(1)*6)+4;
    t2 = (parseInt(random(1)*4)+1)*10000;
    t2+= (parseInt(random(1)*4)+1)*1000;
    t2+= 999;
    //questions[2]=String.format("%s - %s =", nfc(t1), nfc(t2));
    answers[17]=String.format("%d",t1+t2);
    text(String.format("%s + %s =", nfc(t1), nfc(t2)), 115, 500+75);
    break;
    
  case 7:
    t1 = parseInt(random(1)*6)+4;
    t2 = 10;
    t2+= parseInt(random(1)*6);
    //questions[0]=String.format("%d\u00B2 + %d =", t1, t2);
    answers[18]=String.format("%d",t1*t1-t2);
    text(String.format("%d\u00B2 - %d =", t1, t2), 115, 75);
    t1 = parseInt(random(1)*9)+1;
    t2 = 10;
    //questions[1]=String.format("%.1f \u00F7 %d =", ((float)t1/10), t2);
    answers[19]=String.format("%d",t1);
    text(String.format("%.1f \u00D7 %d =", ((float)t1/10), t2), 115, 250+75);
    t1 = parseInt(random(1)*4)+3;
    t2 = 100;
    t2+= (parseInt(random(1)*8)+2)*10;
    t2+= parseInt(random(1)*8)+2;
    //questions[2]=String.format("%d - %.2f =", t1, ((float)t2/100));
    answers[20]=String.format("%.2f",(float)(t1*100+t2)/100);
    text(String.format("%d + %.2f =", t1, ((float)t2/100)), 115, 500+75);
    break;
    
  case 8:
    t2 = parseInt(random(1)*7)+6;
    t1 = (parseInt(random(1)*10)+3)*10;
    t1*= t2;
    answers[21]=String.format("%d",t1*t2);
    text(String.format("%d \u00D7 %d =", t1, t2), 115, 75);
    t1 = (parseInt(random(1)*5)+5)*100;
    t1+= (parseInt(random(1)*5)+5)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = (parseInt(random(1)*4)+2)*10;
    t2+= parseInt(random(1)*9)+1;
    answers[22]=String.format("%d",t1*t2);
    text(String.format("%d \u00D7 %d =", t1, t2), 115, 250+75);
    t1 = parseInt(random(1)*6)+4;
    t2 = parseInt(random(1)*4)+6;
    t3 = parseInt(random(1)*7)+3;
    answers[23]=String.format("%d/%d",t1-t3,t2);
    //textSize(12);
    textAlign(CENTER,CENTER);
    text(String.format("%d", t1), 125, 500+75-12);
    text(String.format("%d", t2), 125, 500+75+12);
    text(String.format("%d", t3), 175, 500+75-12);
    text(String.format("%d", t2), 175, 500+75+12);
    textSize(24);
    textAlign(LEFT, CENTER);
    text("-", 140, 500+75);
    strokeWeight(2);
    line(115,580,135,580);
    line(165,580,185,580);
    break;
    
  case 9:
    t1 = parseInt(random(1)*9)+1;
    t2 = (parseInt(random(1)*16)+4)*100;
    answers[24]=String.format("%d",t1*t2/10);
    text(String.format("%d%% of %d =", t1*10, t2), 115, 75);
    t1 = (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = (parseInt(random(1)*8)+2)*10;
    t2+=5;
    answers[25]=String.format("%.1f",(float)(t1*t2)/10);
    text(String.format("%d \u00D7 %.1f =", t1, (float)t2/10), 115, 250+75);
    t1 = parseInt(random(1)*6)+1;
    t2 = parseInt(random(1)*6)+7;
    t3 = parseInt(random(1)*4)+1;
    answers[26]=String.format("%d/%d",t1*2 - t3,t2*2);
    //textSize(12);
    textAlign(CENTER,CENTER);
    text(String.format("%d", t1), 125, 500+75-12);
    text(String.format("%d", t2), 125, 500+75+12);
    text(String.format("%d", t3), 175, 500+75-12);
    text(String.format("%d", t2*2), 175, 500+75+12);
    textSize(24);
    textAlign(LEFT, CENTER);
    text("-", 140, 500+75);
    strokeWeight(2);
    line(115,580,135,580);
    line(165,580,185,580);
    break;
    
  case 10:
    t2 = parseInt(random(1)*13)+17;
    t3 = parseInt(random(1)*27)+7;
    t1 = t2*t3;
    answers[27]=String.format("%d",t1*t2);
    text(String.format("%d \u00D7 %d =", t1, t2), 115, 75);
    t1 = 15;
    t2 = (parseInt(random(1)*26)+10)*20;
    answers[28]=String.format("%d",t1*t2/100);
    text(String.format("%d%% of %d =", t1, t2), 115, 250+75);
    t1 = (parseInt(random(1)*5)+5)*1000;
    t1+= (parseInt(random(1)*9)+1)*100;
    t1+= (parseInt(random(1)*9)+1)*10;
    t1+= parseInt(random(1)*9)+1;
    t2 = (parseInt(random(1)*4)+2)*10;
    t2+= parseInt(random(1)*9)+1;
    answers[29]=String.format("%.3f",(float)t1/t2);
    text(String.format("%d \u00F7 %d =", t1, t2), 115, 500+75);
    break;
    
  case 11:
    t1 = parseInt(random(1)*6)+1;
    t2 = parseInt(random(1)*6)+7;
    t3 = parseInt(random(1)*4)+1;
    t4 = parseInt(random(1)*4)+1;
    if((t1*2-t3)==0){
        answers[30]=String.format("%d",t4);
    }
    if((t1*2-t3)>0){
        answers[30]=String.format("%d %d/%d",t4,t1*2-t3,t2*2);
    }
    if((t1*2-t3)<0){
        answers[30]=String.format("%d %d/%d",t4-1,t2*2+(t1*2-t3),t2*2);
    }
    text(String.format("%d", t4), 115, 75);
    textAlign(CENTER,CENTER);
    text(String.format("%d", t1), 145, 75-12);
    text(String.format("%d", t2), 145, 75+12);
    text(String.format("%d", t3), 195, 75-12);
    text(String.format("%d", t2*2), 195, 75+12);
    textSize(24);
    textAlign(LEFT, CENTER);
    text("-", 160, 75);
    strokeWeight(2);
    line(135,80,155,80);
    line(185,80,205,80);
    t2 = parseInt(random(1)*19)+29;
    t3 = parseInt(random(1)*60)+40;
    t1 = t2*t3;
    answers[31]=String.format("%d",t1*t2);
    text(String.format("%d \u00D7 %d =", t1, t2), 115, 250+75);
    t1 = parseInt(random(1)*5)+1;
    t2 = t1+parseInt(random(1)*5)+1;
    answers[32]=String.format("%d/%d",t1*t1,t2);
    textAlign(CENTER,CENTER);
    text(String.format("%d", t1), 125, 500+75-12);
    text(String.format("%d", t2), 125, 500+75+12);
    textSize(24);
    textAlign(LEFT, CENTER);
    text(String.format("\u00D7 %d",t1), 140, 500+75);
    strokeWeight(2);
    line(115,580,135,580);
    break;
    
  case 12:
    t1 = parseInt(random(1)*5)+1;
    t2 = t1+parseInt(random(1)*5)+1;
    t3 = t2*(parseInt(random(1)*11)+10);
    answers[33]=String.format("%d/%d",t1,t2*t3);
    textAlign(CENTER,CENTER);
    text(String.format("%d", t1), 125, 75-12);
    text(String.format("%d", t2), 125, 75+12);
    textSize(24);
    textAlign(LEFT, CENTER);
    text(String.format("\u00F7 %d",t3), 140, 75);
    strokeWeight(2);
    line(115,80,135,80);
    t1 = parseInt(random(1)*4)+1;
    t2 = parseInt(random(1)*7)+2;
    t3 = parseInt(random(1)*3)+2;
    t4 = parseInt(random(1)*5)+4;
    t5 = t3-1;
    answers[34]=String.format("%d/%d",((t2*t1+t5)*t4)+(t3*t2),t2*t4);
    text(String.format("%d", t1), 115, 250+75);
    textAlign(CENTER,CENTER);
    text(String.format("%d", t5), 145, 250+75-12);
    text(String.format("%d", t2), 145, 250+75+12);
    text(String.format("%d", t3), 195, 250+75-12);
    text(String.format("%d", t4), 195, 250+75+12);
    textSize(24);
    textAlign(LEFT, CENTER);
    text("+", 160, 250+75);
    strokeWeight(2);
    line(135,250+80,155,250+80);
    line(185,250+80,205,250+80);
    t1 = parseInt(random(1)*31)+30;
    t3 = parseInt(random(1)*8)+2;
    t2 = parseInt(random(1)*11)+2;
    t2*= t3;
    answers[35]=String.format("%d",t1+t2*t3);
    text(String.format("%d + %d \u00D7 %d =", t1, t2,t3), 115, 500+75);
    break;
    
  case 13:
    textSize(24);
    textAlign(CENTER,CENTER);
    text("Answers",width/2,40);
    textAlign(LEFT,CENTER);
    int offset=1;
    textSize(14);
    for(String ans : answers){
      text("Q"+offset+")  "+ans,100,offset*20+80);
      offset++;
    }
    break;

  default:
    //do nothing
    break;
  }
  

  textSize(12);
  text(String.format("Page %d", page), 20, height-20);
  text("www.CanDoMaths.org",width/2-50,height-20);
  image(logo,width-75,height-70,60,60);
}

//void mouseClicked() {
//  background(255);
//  page++;
//  renderPage();
//}