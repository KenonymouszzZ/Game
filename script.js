function myFunc() {
    let g   = document.getElementById('containers-b')
    let q   = document.getElementById('containers-a')
    let a   = document.getElementById('names')
    let inp = document.getElementById('username').value
    
        if (g.style.display === "none" && q.style.display === "block") {
            g.style.display = "block";
            q.style.display = "none";
            } else {
            g.style.display = "none";
            q.style.display = "block";
            }
  // output get name
  a.innerText = inp
  }
    function hapuss() {
    
    }
    var myGamePiece;
  
    function startGame() {
        myGamePiece = new component(50, 50, document.getElementById('inilah').value, 180, 160);
        myGamePiece2 = new component(50, 50,document.getElementById('inilah').value, 180, 160);
        myGamePiece3 = new component(50, 50, document.getElementById('inilah').value, 180, 160);
        myGamePiece4 = new component(50, 50, document.getElementById('inilah').value, 180, 160);
        sas   = document.getElementById('containers-b')
        sis   = document.getElementById('containers-c')
        let as   = document.getElementById('name')
        let inps = document.getElementById('username').value
        
    if (sis.style.display === "none" && sas.style.display === "block") {
        sis.style.display = "block";
        sas.style.display = "none";
       
        } else {
        sis.style.display = "none";
        sas.style.display = "block";
    }
    as.innerText = inps
        myGameArea.start();
    }
    
    var myGameArea = {
        canvas : document.createElement("canvas"),
        start : function() {
            this.canvas.width = 480;
            this.canvas.height = 300;
            this.context = this.canvas.getContext("2d");
            document.getElementById('abcde').insertBefore(this.canvas, document.getElementById('abcde').childNodes[0]);
            this.frameNo = 0;
            this.interval = setInterval(updateGameArea, 20);
        },
        stop : function() {
            clearInterval(this.interval);
        },    
        clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    
    function component(width, height, color, x, y, type) {
    
        this.type = type;
        this.width = width;
        this.height = height;
        this.speed = 0.3;
        this.angle = 3;
        this.x = x;
        this.y = y;    
        this.update = function() {
            ctx = myGameArea.context;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = color;
            ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);        
            ctx.restore();    
        }
        this.newPos = function() {
            this.x += this.speed * Math.sin(this.angle);
            this.y -= this.speed * Math.cos(this.angle);
        }
    }
    
    function updateGameArea() {
      myGameArea.clear();
      myGamePiece.x += 1
      myGamePiece2.y += 1
       myGamePiece3.x -= 1
       myGamePiece4.y -= 1
      myGamePiece.update();
       myGamePiece2.update();
       myGamePiece3.update();
       myGamePiece4.update();
    }
    function myFunction(){             
        alert("Seriusan mau di reset?")                    
            location.reload()
        }