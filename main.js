function preload() {
    img =loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYx4QDF9_fMTz_tj6yVa1LVizvq2PUss5cw&usqp=CAU')
      ii =loadImage('https://lh3.googleusercontent.com/proxy/ePcTJvRSuJx8kWOb5pbhfAebM6xAGSwTmRHHkU484vSWcFiS3LXg2STcv4yVpc8nRQbfkmIGKR0j83bVcp8mwU_eejZnhWx117Rr-kdkLGrqBiABk_9yGfUqvhBhNn98no11JpNLyQ')
    };
    
    function setup() {
      canvas = createCanvas(560, 520);
      canvas.position(500, 60);
      video = createCapture(VIDEO);
       video.hide();
    
    }
      function draw() {
        background(255, 235, 102)
        image(video, 80 , 60, 400, 400);
        
        fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(0, 10, 100, 10) 
        
        fill(161, 19, 0)
        stroke(245, 29, 0)
        circle(100, 15, 30)  
       
        fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(110, 10, 100, 10) 
        
        fill(161, 19, 0)
        stroke(245, 29, 0)
        circle(210, 15, 30)  
        
        fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(225, 10, 100, 10) 
        
        fill(161, 19, 0)
        stroke(245, 29, 0)
        circle(335, 15, 30)  
        
        fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(350, 10, 100, 10) 
        
        fill(161, 19, 0)
        stroke(245, 29, 0)
        circle(465, 15, 30)
        
            fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(480, 10, 100, 10) 
        image(img, 0, 0, 50, 50)
         image(ii, 0, 50, 50, 50)
         image(ii, 0, 100, 50, 50)
         image(ii, 0, 150, 50, 50)
         image(ii, 0, 150, 50, 50)
         image(ii, 0, 200, 50, 50)
         image(ii, 0, 250, 50, 50)
         image(ii, 0, 300, 50, 50)
         image(ii, 0, 350, 50, 50)
         image(ii, 0, 400, 50, 50)
         image(img, 0, 450, 50, 50)
        
        
        
         image(img, 510, 0, 50, 50)
         image(ii, 510, 50, 50, 50)
         image(ii, 510, 100, 50, 50)
         image(ii, 510, 150, 50, 50)
         image(ii, 510, 150, 50, 50)
         image(ii, 510, 200, 50, 50)
         image(ii, 510, 250, 50, 50)
         image(ii, 510, 300, 50, 50)
         image(ii, 510, 350, 50, 50)
         image(ii, 510, 400, 50, 50)
         image(img, 510, 450, 50, 50)
        
        
        
        
        
        fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(0, 500, 100, 10) 
        
        fill(161, 19, 0)
        stroke(245, 29, 0)
        circle(100, 500, 30)  
       
        fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(110, 500, 100, 10) 
        
        fill(161, 19, 0)
        stroke(245, 29, 0)
        circle(210, 500, 30)  
        
        fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(225, 500, 100, 10) 
        
        fill(161, 19, 0)
        stroke(245, 29, 0)
        circle(335, 500, 30)  
        
        fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(350, 500, 100, 10) 
        
        fill(161, 19, 0)
        stroke(245, 29, 0)
        circle(465, 500, 30)
        
            fill(245, 29, 0)
        stroke(161, 19, 0)
        rect(480, 500, 100, 10) 
      }