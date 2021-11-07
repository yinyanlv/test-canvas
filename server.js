import path from 'path'
import express from 'express'
import mustacheExpress from 'mustache-express'
import dirTree from 'directory-tree'

const app = express()
const port = 3000
const __dirname = path.resolve()

app.use('/js', express.static('js'))
app.use('/css', express.static('css'))

app.engine('html', mustacheExpress())
app.set('views', './views/')
app.set('view engine', 'html')


app.get('/', (req, res) => {
  const fileTree = dirTree(path.join(__dirname, './js'), { 
    exclude: /common/
  })

  let list = fileTree.children || []  
  list = list.map((item) => {
    if (item.children) {
      item.children = item.children.map((subItem) => {
        subItem.pureName = subItem.name.replace('.js', '')
        subItem.parentName = item.name
        return subItem
      })
    }

    return item
  })

  res.render('index', { 
    list 
  })
})

app.get('/:dir/:file', (req, res) => {
  const dir = req.params.dir
  const file = req.params.file

  res.render('canvas', { 
    dir,
    file
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})