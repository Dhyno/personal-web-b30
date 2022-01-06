let blogCont=[];
function addBlog(event){
    // console.log(event);
    event.preventDefault();
    // console.log("hello");

    let title=document.getElementById('input-blog-title').value;
    let content=document.getElementById('input-blog-content').value;
    let image=document.getElementById('input-blog-image').files;
    
    // console.log(image);
    image=URL.createObjectURL(image[0]);
    // console.log(image);
    
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
            <div>
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

// setInterval(() => {
//   render();
// }, 1000);





// let waktu=new Date();
// console.log(waktu);
// console.log(waktu.getDate());
// console.log(waktu.getMonth());
// console.log(waktu.getFullYear());






































//meet 5

// let name="leo";
// let name1="willy";
// let name2="putra";

// let names=["leo","wily","putra"];
// console.log(names[0]);

// //object
// let dataSiswa={
//     name:"rino",
//     email:"rino@gmail.com",
//     adress:"bukittinggi",
//     hoby:"programming"
// }
// console.log(dataSiswa);
// console.log(dataSiswa.name);

// //array object
// let studentData=[
//     {
//         name:"rino",
//         email:"rino@gmail.com",
//         adress:"bukittinggi",
//         hoby:"programming"
//     },
//     {
//         name:"dhyno",
//         email:"dhyno@gmail.com",
//         adress:"isekai",
//         hoby:"weeb"
//     }
// ]
// console.log(studentData);
// console.log(studentData[0].email);
// studentData[0].add="add data";
// console.log(studentData);