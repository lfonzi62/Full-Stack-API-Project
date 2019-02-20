const db = require('./models');


const categoriesList = [
    {
    title: "I Love Indie Music",
    category: "Music",
    image: "https://video-images.vice.com/articles/58755782b6948154d919afd3/lede/Indie-music-is-still-cool-art.jpg",
    date: "2/15/2018",
    text: "Indie music is the best music known to man-kind. I got to indie concerts every weekend in bay area.",
    comment: []
    },

    {
        title: " Jazz is great",
        category: "Music",
        image: "https://i.ytimg.com/vi/c8YIlU_30Kk/maxresdefault.jpg",
        date: "2/16/2018",
        text: "I fell love in with jazz during middle school. Ever since that day, I wanted to become a professional musician.",
        comment: []
        },

        {
            title: "10 Reasons why good music is dead",
            category: "Music",
            image: "https://i.ytimg.com/vi/c8YIlU_30Kk/maxresdefault.jpg",
            date: "2/16/2018",
            text: "Gen x does not know good music when it hears it!. I don't know how to these young whipper snappers deal with it",
            comment: []
            },

            {
                title: "Raiders are moving to Las Vegas",
                category: "Sports",
                image: "https://www.reviewjournal.com/wp-content/uploads/2018/11/11343477_web1_raiderstadiumweb.jpg",
                date: "2/10/2018",
                text: "The Oakland raiders turned there back on the city of Oakland. Oaklanders supported the raiders for the last 20 years of inepitude. ",
                comment: []
                },

                {
                    title: "Golden State Warriors",
                    category: "Sports",
                    image: "https://usatftw.files.wordpress.com/2015/06/6796457-golden-state-warriors-wallpaper.jpg?w=1000&h=600&crop=1",
                    date: "2/07/2018",
                    text: "The Golden State Warriors are the best dynasty in the modern era.",
                    comment: []
                    },

]

db.Post.deleteMany({}, (err, Post) => {
console.log(`Deleted ${Post.length} ${Post}`);
db.Post.create(categoriesList,(err, Post) => {
    if (err) throw err;
    console.log(`Created ${Post.length} ${Post}`);
    process.exit();
})
});