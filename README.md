# Solidity ToDoList
用 Solidity 寫 ToDoList，可建立新的待辦事項、切煥待辦狀態完成/尚未完成

![TodoList Dapp](../Dapp-React-TodoList-Cover.png)

## 啟動專案

### 修改合約地址
新合約 deploy完後，每次會產生新的合約地址
到 `HomeworkSubmission2/homeworks/week4/todo-list/eth-todo-list-react/src/App.js` 修改 TodoList 合約地址
修改完成後，Dapp React 才可順利連接到合約

```
const TodoListAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853"
```

### 建立.env
將 `.env.example` 複製內容，新建檔案 `.env`，並填上對應的值
- INFURA_PROJECT_SECRET：使用 [Infura](https://infura.io/) 服務提供的 SECRET
- INFURA_PROJECT_ID：使用 [Infura](https://infura.io/) 服務提供的 ID
- mnemonic：錢包註記詞
- privateKey1：錢包私鑰1，套用在 hardhad-config.js 內的 Rinkby網路
- privateKey2：錢包私鑰2，套用在 hardhad-config.js 內的 Rinkby網路

預設部署網路為 localhost


### 安裝專案
``` bash
# 安裝 todo-list hardhat 套件
cd homeworks/week4/todo-list && npm install
# 啟動 hardhat 本地節點 localhost:8545
npx hardhat node
# 取得 hardhat 本地產生錢包
npx hardhat accounts
# 編譯 hardhat 合約
npx hardhat compile
# 部署 hardhat TodoList 合約到本地端
npx hardhat run scripts/todo-script.js
# 部署 hardhat TodoList 合約到 Ropsten
npx hardhat run scripts/todo-script.js --network ropsten

# 前端環境
# 安裝前端套件
cd eth-todo-list-react && npm install
# 啟動 localhost:3000 Server，會自動打開瀏覽器
npm run start
```

## 更改合約 Code
更改合約Code後，需要重新編譯 compile，再重新部署，`--network`參數改成你要部署的網路
```
npx hardhat compile
npx hardhat run scripts/todo-script.js --network localhost
```


## Hardhat 常用指令
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


## 坑
### 出現錯誤訊息 TypeError: state.buffer is not iterable
```
for (const chunk of state.buffer) {
                            ^
TypeError: state.buffer is not iterable
    at consumeStart (/Users/hazel/vhost/side-project/kcrypto-camp/HomeworkSubmission2/homeworks/week4/todo-list/node_modules/undici/lib/api/readable.js:211:29)
    at processTicksAndRejections (internal/process/task_queues.js:77:11)
```
解決方式：用nvm切換最新 nodejs 版本為 16，再重新 deploy 即可成功
```
nvm install 16.13.2
nvm use 16.13.2
npx hardhat run scripts/sample-script.js
```

### VSCode 報錯 hardhat/console.sol
```
Source "hardhat/console.sol" not found: File import callback not supported
```
解決方式：修改路徑
```
// 修改前
import "hardhat/console.sol";
// 修改後
import "../node_modules/hardhat/console.sol";

```

## 資源
- [前端：How to Build Ethereum Dapp with React.js · Complete Step-By-Step Guide](https://www.dappuniversity.com/articles/ethereum-dapp-react-tutorial)
- [Solidity：How to Build Blockchain App - Ethereum Todo List 2019](https://www.dappuniversity.com/articles/blockchain-app-tutorial#createTasks)

## 使用服務
- [Solidity 框架 HardHat](https://hardhat.org/getting-started/)
- [前端框架 React](https://zh-hant.reactjs.org/)