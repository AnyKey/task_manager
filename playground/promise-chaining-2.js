require('../src/db/mongoose')

const Task = require('../src/model/task')

// Task.findByIdAndDelete('611df0075f71d01c4c6b3aaa').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// 611e2d702b0ccc4736517289

const deleteTaskAndUpdateCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndUpdateCount('611e2d602b0ccc4736517287').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})