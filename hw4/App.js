const express = require('express');
const pool = require('./database');
const cors = require('cors');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('Public'));

app.listen(3000, () => {
    console.log("Server is listening to port 3000");
});

app.get('/posts', async(req, res) => {
    try {
        const posts = await pool.query(
            "SELECT * FROM poststable"
        );
        res.render('posts', {posts: posts.rows});
    }
    catch(err) {
        console.error(err.message);
    }
})

app.get('/singlepost/:id', async(req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params.id);
        console.log("get a single post request has arrived");
        const posts = await pool.query(
            "SELECT * FROM poststable WHERE id = $1", [id]
        );
        res.render('singlepost', { posts: posts.rows[0] });
    }
    catch (err) {
        console.error(err.message);
    }
});

app.get('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("get a post request has arrived");
        const Apost = await pool.query(
            "SELECT * FROM poststable WHERE id = $1", [id]
        );
        res.json(Apost.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
});

app.delete('/posts/:id', async(req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const post = req.body;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM poststable WHERE id = $1", [id]
        );
        res.redirect('/posts');
    }
    catch (err) {
        console.error(err.message);
    }
});
   
app.post('/posts', async(req, res) => {
    try {
        const post = req.body;

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var currentDate = new Date();
        var datetime = "'" + monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ", "
                + currentDate.getFullYear() + " "  
                + currentDate.getHours() + ":"  
                + currentDate.getMinutes() + "'";
        //var query = "INSERT INTO poststable(creationtime, authorname, titleofpost, bodyofpost, numberoflikes) values (" + datetime + ", " + $1 + ", " +  $2 + "," +  $3 + "," + (currentDate.getDate() + 3) + ")";
        
        console.log(post);
        const newpost = await pool.query(
            "INSERT INTO poststable(creationtime, authorname, titleofpost, bodyofpost, numberoflikes) values ($1, $2, $3, $4, $5)", [datetime, post.urllink, post.title, post.body, currentDate.getDate() + 3]
        );
        res.redirect('posts');
    }
    catch (err) {
        console.error(err.message)
    }
});

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/contactus', (req, res) => {
    res.render('contactus');
})

app.use((req, res) => {
    res.status(404).render('404');
})