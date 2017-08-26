import React from 'react'
import Head from 'next/head'

import TodoApp from '../components/todoApp'
import TodoModel from '../components/todoModel'

const model = new TodoModel('react-todos');

export default class App extends React.Component {

    constructor (props) {
      super(props)
    }

    render () {
      return (
        <div>
        <Head>
            <title>Todos</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel='stylesheet' href='/static/styles.css' />
            <lin rel='stylesheet' href='/static/todo.css' />
            <script src="https://rawgit.com/flatiron/director/master/build/director.min.js"></script>
        </Head>
          <TodoApp model={model}/>
        </div>
      )
    }
  }
