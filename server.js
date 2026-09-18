import express from 'express';

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;
const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/', (req, res) => {
  res.send('Hello, web!');
});
app.get('/projects', (req, res) => {
  const tag = req.query.tag;
  const name = req.query.name
  // filter `projects` here, based on your decision above
  const filterprojects = tag ? projects.filter(projects => projects.tag === tag.toLowerCase()):projects;
  res.json(filterprojects)
  const sort = name ? projects.sort(projects => projects.tag === tag.toLowerCase()):projects;
  res.json(sort)
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});