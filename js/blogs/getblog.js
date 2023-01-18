
let singleblog= async function(_id){
    let resp= await fetch('http://localhost:3000/blogs/'+_id)
    let blog = await resp.json()
    return blog.blog
 }
Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
};

const urlParams = new URLSearchParams(location.search);

if (urlParams.get('id') === null) {
    window.location.assign('/blogs.html')
}

let blog = await singleblog(urlParams.get('id'))
blogTitle.innerText = blog.title
blogimage.src= blog.image
blogBody.innerHTML = blog.content

//blogDate.innerText = (new Date(blog.date)).yyyymmdd()

blogLikes.innerText = blog.likes.likesNumber
blogComments.innerText = blog.comments.length
//blogShares.innerText = blog.shares.length