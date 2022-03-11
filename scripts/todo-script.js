const hre = require("hardhat")

async function main() {
  const TodoList = await hre.ethers.getContractFactory("TodoList")
  const todolist = await TodoList.deploy()

  await todolist.deployed()

  console.log('恭喜！部署 ToDoList 合約成功，合約地址：', todolist.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('發生錯誤！部署失敗，快來修復，我在 scripts/todo-scripts 這裡等你')
    console.error(error)
    process.exit(1)
  })