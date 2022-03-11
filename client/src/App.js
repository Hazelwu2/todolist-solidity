import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Contract Import
import TodoListContract from './artifacts/contracts/TodoList.sol/TodoList.json'
import TodoList from './TodoList'

const TodoListAddress = "0xa50764364bc5a88445B3bA14D979Ec1e0a02afce"
const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')

class App extends Component {
  componentWillMount() {
    this.loadBloackchainData()
  }

  async loadBloackchainData() {
    // const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')

    // Get User Account
    this.getAccounts()

    // Get TodoList Contract
    this.getContract()
  }

  async getAccounts() {
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  async getContract() {
    this.setState({
      tasks: []
    })

    const todoList = new web3.eth.Contract(TodoListContract.abi, TodoListAddress)
    this.setState({ todoList })
    const taskCount = await todoList.methods.taskCount().call()
    this.setState({ taskCount })

    for (let i = 1; i <= taskCount; i++) {
      console.error('for loop getContract')
      const task = await todoList.methods.tasks(i).call()
      this.setState({
        tasks: [...this.state.tasks, task]
      })
    }

    this.setState({ loading: false })
    console.log('state.tasks', this.state.tasks)
  }

  createTask(content) {
    this.setState({ loading: true })
    this.state.todoList.methods.createTask(content).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
        this.getContract()
      })
  }

  toggleCompleted(taskId) {
    this.setState({ loading: true })
    this.state.todoList.methods.toggleCompleted(taskId).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        console.log(receipt)
        this.getContract()
        this.setState({ loading: false })
      })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      taskCount: 0,
      tasks: [],
      loading: true
    }

    this.createTask = this.createTask.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="http://www.dappuniversity.com/free-download" target="_blank">KcryptoCamp Week4 Homework | Todo List</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small><a className="nav-link" href="#"><span id="account"></span></a></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
              {this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <TodoList
                  tasks={this.state.tasks}
                  createTask={this.createTask}
                  toggleCompleted={this.toggleCompleted} />
              }
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default App