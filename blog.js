let blogCont=[];
function addBlog(event){
    event.preventDefault();

    let title=document.getElementById('input-blog-title').value;
    let content=document.getElementById('input-blog-content').value;
    let image=document.getElementById('input-blog-image').files;
    
    if(title==''||content==''||!image.length){
      alert("please fill form and upload image");
      return;
    }
    image=URL.createObjectURL(image[0]);//return url with hash
    
    let blog={
        title: title,
        content: content,
        image: image,
        author:'Rino Saputr',
        date: new Date()
    }
    blogCont.push(blog);
    render();
}

function render(){
    let content=document.getElementById('contents');
    content.innerHTML='';
    content.innerHTML=getDefault();
    for(let i=0; i<blogCont.length;i++){
        content.innerHTML+=`
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogCont[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank">
                ${blogCont[i].title}
              </a>
            </h1>
            <div class="detail-blog-content">
              ${GetFullTime(blogCont[i].date)} | ${blogCont[i].author}
            </div>
            <p>
              ${blogCont[i].content}
            </p>
            <div class="time">
              <p>${getDistanceTIme(blogCont[i].date)}</P>
            </div>
          </div>
        </div>
      </div>`;
    }
}

//meet 6

let month=['January','February','March','April','May','June','July','August','October','September','Novemebr','Desember'];

function GetFullTime(time){
  let date=time.getDate();
  let monthIndeks=time.getMonth();
  let year=time.getFullYear();

  let hour=time.getHours();
  let minute=time.getMinutes();

  let fulltime=`${date} ${month[monthIndeks]} ${year} ${hour}:${minute}`;
  return fulltime;
}

function getDistanceTIme(time){
  let timePost=time;
  let timeNow=new Date();
  let distance=timeNow-timePost;

  let miliSecond=1000;
  let minuteInHour=3600;
  let hourInday=23;

  let distanceDay=distance/(miliSecond*minuteInHour*hourInday);
  distanceDay=Math.floor(distanceDay);

  let distanceHours=Math.floor(distance/(1000*60*60));
  let distanceMinute=Math.floor(distance/(1000*60));
  let distanceSecond=Math.floor(distance/1000);

  if(distanceDay>=1){
    return `${distanceDay} day ago`;
  } else {
    if(distanceHours>=1){
      return `${distanceHours} hour ago`;
    } else{
      if(distanceMinute>=1){
        return `${distanceMinute} minute ago`;
      } else {
          return `${distanceSecond} second ago`;
      }
    }
  }
}

function getDefault(){
  return `
    <div class="blog-list-item">
      <div class="blog-image">
        <img src="assets/blog-img.png" alt="" />
      </div>
      <div class="blog-content">
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
        <h1>
          <a href="blog-detail.html" target="_blank"
            >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
          >
        </h1>
        <div class="detail-blog-content">
          12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
        </div>
        <p>
          Ketimpangan sumber daya manusia (SDM) di sektor digital masih
          menjadi isu yang belum terpecahkan. Berdasarkan penelitian
          ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
          meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Quam, molestiae
          numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
          eligendi debitis?
        </p>
        <div class="time">
              <p>1 month ago</p>
            </div>
      </div>     
  </div>;`
}

setInterval(() => {
  render();
}, 1000);