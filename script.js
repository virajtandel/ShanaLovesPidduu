const btn=document.getElementById("open");

const loveText=document.getElementById("loveText");

const music=document.getElementById("bgMusic");

const container=document.getElementById("heartContainer");

const envelope = document.querySelector(".envelope-wrapper");
const closeBtn = document.getElementById("close");

btn.onclick=()=>{

    envelope.classList.add("open");
    setTimeout(()=>{

loveText.style.opacity="1";

},900);

    typeWriter();

    burstHearts();

}



function typeWriter(){

    const text = `Dear My Love,
   Every heartbeat reminds me of you.
   You are my favourite notification.
   Thank you for coming into my life.
❤️I LOVE YOU SO MUCH ❤️
Forever Yours, Shanaa

`;

    let i=0;

    loveText.innerHTML="";

    const typing=setInterval(()=>{

       loveText.innerHTML = text.substring(0, i).replace(/\n/g, "<br>");
        i++;

        if(i==text.length){

            clearInterval(typing);

        }

    },150);

}



function burstHearts(){

    for(let i=0;i<300;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.className="heart";

            heart.innerHTML=Math.random()>0.5 ? "❤️" : "💕";

            const rect = envelope.getBoundingClientRect();

heart.style.left = (rect.left + rect.width/2) + "px";

heart.style.top = (rect.top + 60) + "px";

            const spread = Math.random()*220-110;

heart.style.setProperty("--x", spread+"px");

            heart.style.fontSize=

            (5+Math.random()*50)+"px";

            container.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },18000);

        },i*70);

    }

}
closeBtn.onclick = () => {

    loveText.style.opacity="0";

setTimeout(()=>{

    envelope.classList.remove("open");

},250);

    loveText.innerHTML = "";

}
