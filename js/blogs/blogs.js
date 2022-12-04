export default class Blog {
    constructor(title = '', owner = null, body = null, profile = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png') {
        this.id = newId(blogs.length)
        this.title = title
        this.owner = owner
        this.body = body
        this.date = new Date()
        this.likes = []
        this.comments = []
        this.shares = []
        this.profile = profile
    }
}

const newId = function (val) {
    val = (val + '').split('')
    return [...('000000'.split('').slice(val.length)), ...val].join('')
}

export let blogs = []

if (localStorage.getItem('blogs') === null) {
    addBlog(
        'title',
        {
            email: 'suave@email.dom',
            name: 'suavis',
        },
        [
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
        ],
        '/images/kenny-eliason-5afenxnLDjs-unsplash.jpg',
    )
    addBlog(
        'title2',
        {
            email: 'ndatinya@email.dom',
            name: 'ndatinya',
        },
        [
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
        ],
        'https://604now.com/wp-content/uploads/2018/02/banff_town.jpg',
    )
    addBlog(
        'title',
        {
            email: 'ndatinya@email.dom',
            name: 'ndatinya',
        },
        [
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
        ],
        'https://mobimg.b-cdn.net/v3/fetch/46/46b56921e1afd15a72fa5a241f4d7ab7.jpeg',
    )
    addBlog(
        'title3',
        {
            email: 'suave@email.dom',
            name: 'suavis',
        },
        [
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
            'a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read, a regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read',
        ],
        'https://www.pcworld.com/wp-content/uploads/2022/08/dscf0453_final-100797561-orig-1.jpg?quality=50&strip=all',
    )
}

blogs = JSON.parse(localStorage.getItem('blogs'))

export function addBlog(title = '', owner = '', body = null, profile = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png') {
    const a = new Blog(title, owner, body, profile)
    blogs.push(a)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    return {
        success: true,
        action: 'success',
        message: 'success',
        data: 'success',
        value: a
    }
}