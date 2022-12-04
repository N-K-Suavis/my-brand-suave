import { blogs } from './blogs.js'

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

let blog = blogs.filter(each => each.id == urlParams.get('id'))[0]

blogImage.setAttribute('alt', blog.title)
blogImage.setAttribute('src', blog.profile)

blogTitle.innerText = blog.title
blogOwner.innerText = blog.owner.name

blogBody.innerHTML = blog.body.map(each => (`<p>${each}</p>`)).join('<br/>')

blogDate.innerText = (new Date(blog.date)).yyyymmdd()

blogLikes.innerText = blog.likes.length
blogComments.innerText = blog.comments.length
blogShares.innerText = blog.shares.length