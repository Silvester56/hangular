'use strict';

angular.module("app").controller("mainController", function() {
  this.state = 0;
	this.lifes = 5;
	this.word = [];
	this.letters = [];

	function randomWord() {
		const list = "most,number,who,over,know,water,than,call,first,people,may,down,side,been,now,find,any,new,work,part,take,get,place,made,live,where,after,back,little,only,round,man,year,came,show,every,good,me,give,our,under,name,very,through,just,form,much,great,think,say,help,low,line,before,turn,cause,same,mean,differ,move,right,boy,old,too,does,tell,sentence,set,three,want,air,well,also,play,small,end,put,home,read,hand,port,large,spell,add,even,land,here,must,big,high,such,follow,act,why,ask,men,change,went,light,kind,off,need,house,picture,try,again,animal,point,mother,world,near,build,self,earth,father,head,stand,own,page,should,country,found,answer,school,grow,study,still,learn,plant,cover,food,sun,four,thought,let,keep,eye,never,last,door,between,city,tree,cross,since,hard,start,might,story,saw,far,sea,draw,left,late,run,dont,while,press,close,night,real,life,few,stop,open,seem,together,next,white,children,begin,got,walk,example,ease,paper,often,always,music,those,both,mark,book,letter,until,mile,river,car,feet,care,second,group,carry,took,rain,eat,room,friend,began,idea,fish,mountain,north,once,base,hear,horse,cut,sure,watch,color,face,wood,main,enough,plain,girl,usual,young,ready,above,ever,red,list,though,feel,talk,bird,soon,body,dog,family,direct,pose,leave,song,measure,state,product,black,short,numeral,class,wind,question,happen,complete,ship,area,half,rock,order,fire,south,problem,piece,told,knew,pass,farm,top,whole,king,size,heard,best,hour,better,true,during,hundred,am,remember,step,early,hold,west,ground,interest,reach,fast,five,sing,listen,six,table,travel,less,morning,ten,simple,several,vowel,toward,war,lay,against,pattern,slow,center,love,person,money,serve,appear,road,map,science,rule,govern,pull,cold,notice,voice,fall,power,town,fine,certain,fly,unit,lead,cry,dark,machine,note,wait,plan,figure,star,box,noun,field,rest,correct,able,pound,done,beauty,drive,stood,contain,front,teach,week,final,gave,green,oh,quick,develop,sleep,warm,free,minute,strong,special,mind,behind,clear,tail,produce,fact,street,inch,lot,nothing,course,stay,wheel,full,force,blue,object,decide,surface,deep,moon,island,foot,yet,busy,test,record,boat,common,gold,possible,plane,age,dry,wonder,laugh,thousand,ago,ran,check,game,shape,yes,hot,miss,brought,heat,snow,bed,bring,sit,perhaps,fill,east,weight,language,among".split(',');

		return list[Math.floor(Math.random() * (list.length - 1))];
	}

	this.reset = () => {
		this.lifes = 5;
		this.word = [];
		this.letters = [];
		this.start();
	}

	this.start = () => {
		let wtab = randomWord().toUpperCase().split('');
		let startingletter = false;

		this.state = 1;
		for (let i = 0; i < wtab.length; i++) {
			startingletter = (wtab[i] == wtab[0] || wtab[i] == wtab[wtab.length - 1]);
			this.word.push({letter: wtab[i], found: startingletter});
		}
		for (let i = 65; i < 91; i++) {
			startingletter = (String.fromCharCode(i) == wtab[0] || String.fromCharCode(i) == wtab[wtab.length - 1]);
			this.letters.push({letter: String.fromCharCode(i), disabled: startingletter});
		}
	}

	this.clickLetter = (l) => {
		let notfound = true;
		let won = true;

    if (this.state == 1) {
      l.disabled = true;
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i].letter == l.letter) {
          notfound = false;
          this.word[i].found = true;
        }
        if (this.word[i].found == false) {
          won = false;
        }
      }
      if (won) {
        this.state = 2;
      }
      if (notfound) {
        this.lifes = this.lifes - 1;
        if (this.lifes == 0) {
          this.state = 3;
          for (let i = 0; i < this.word.length; i++) {
            this.word[i].found = true;
          }
        }
      }
    }
	}
});
