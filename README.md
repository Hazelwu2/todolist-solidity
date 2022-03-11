<h1 align="center">
  📱 Solidity ToDoList
</h1>
<div align="center" style="margin-bottom: 1rem;">Solidity + React = ToDoList，可建立新的待辦事項、切換待辦狀態完成 / 尚未完成，合約部署於 Rinkby 測試鏈</div>

<p align="center">
  <img src="https://i.imgur.com/EdFa7T5.png" width="600px">
</p>

<p align="center">
    <a href="https://github.com/Krypto-Camp/HomeworkSubmission2/tree/C0021601/homeworks/week4/todo-list/eth-todo-list-react" target="blank">Frontend</a>
    ·
    <a href="https://hazelwu2.github.io/todolist-solidity/" target="blank">Demo</a>
    ·
    <a href="https://rinkeby.etherscan.io/address/0xa50764364bc5a88445B3bA14D979Ec1e0a02afce" target="blank">Contract</a>
</p>

## 🛠️ Development
- Install
  安裝 todo-list hardhat、React
  ```
  cd homeworks/week4/todo-list && npm install
  cd client && npm install
  ```
  建立.env
  ```
  將 `.env.example` 複製內容，新建檔案 `.env`，並填上對應的值
  - INFURA_PROJECT_SECRET：使用 [Infura](https://infura.io/) 服務提供的 SECRET
  - INFURA_PROJECT_ID：使用 [Infura](https://infura.io/) 服務提供的 ID
  - mnemonic：錢包註記詞
  - privateKey1：錢包私鑰1，套用在 hardhad-config.js 內的 Rinkby網路
  - privateKey2：錢包私鑰2，套用在 hardhad-config.js 內的 Rinkby網路
  - 預設部署網路為 localhost
  ```
- Serve example 
  ``` bash
  # 開啟 hardhat 節點
  npx hardhat node
  # 啟動 localhost:3000 Server，會自動打開瀏覽器
  cd eth-todo-list-react && npm run start
  # 取得 hardhat 本地產生錢包
  npx hardhat accounts
  ```
- Modify Solidity Code
  - 重新編譯 `npx run compile`
  - 重新部署 `npx hardhat run scripts/todo-script.js --network localhost` (network options: `rinkeby`, `ropsten`)
  - 修改 `HomeworkSubmission2/homeworks/week4/todo-list/eth-todo-list-react/src/App.js` TodoList 合約地址，填上最新部署地址
  ``` js
  const TodoListAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853"
  ```
  - 前端頁面重整
  - 檢查 Metamask 網路，需與合約部署網路相同
- Test
  ``` bash
  # 跑測試
  npx hardhat test
  ```



## 🛠️ Hardhat useful script
``` bash
# 編譯合約
npx hardhat compile
# 開啟節點
npx hardhat node
# 節點運作 smple-script.js，將合約部署到 localhost
npx hardhat run scripts/sample-script.js
# 合約部署到 rinkeby
npx hardhat run scripts/sample-script.js --network rinkeby
# 合約部署到 ropsten
npx hardhat run scripts/sample-script.js --network ropsten
# 清除
npx hardhat clean
# 跑測試
npx hardhat test
# 查詢 hardhad 所有指令
npx hardhat help
```

## 🛠️ Deploy github page
```
$ cd client
$ npm run deploy
```


## 🛠️ Resource
- [React：How to Build Ethereum Dapp with React.js · Complete Step-By-Step Guide](https://www.dappuniversity.com/articles/ethereum-dapp-react-tutorial)
- [Solidity：How to Build Blockchain App - Ethereum Todo List 2019](https://www.dappuniversity.com/articles/blockchain-app-tutorial#createTasks)

## 🛠️ Use
- [Solidity HardHat](https://hardhat.org/getting-started/)
- [Frontend React](https://zh-hant.reactjs.org/)
- [React gh-pages Deploy](https://create-react-app.dev/docs/deployment/#github-pages)
