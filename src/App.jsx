import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ex3 from "../public/ex3.png"
import data from "../public/data.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Lab 1: Git + Vite Setup</h1>

    <h3>Task 2: Git Config</h3>
    <ul>
      <li>Running config --global user.name/email will set email and name in git global config</li>
      <li>It will be inside user.name</li>
      <li>git config --list will return
        <img src={ex3}></img>
      </li>
      <li>We use "git status" to check if git is initialized or not</li>
    </ul>

    <h3>Task 3: Commit Messages & Log</h3>
    <ul>
      <li>We need to write commit messages in present tense because. It's easier for other users and developers to know what have changed, show what the commit does</li>
      <li>{"95190d2 (HEAD -> master) Initial commit: set up Vite React app"}</li>
    </ul>

    <h3>Task 4: git diff</h3>
    <p>Git diff show the changes between staging area and directory, see changes line by line</p>
    <p>+: mean something are added into the current repository
       -: means that something are deleted from the repository
    </p>

    <h3>Task 5: git restore</h3>
    <p>Git restore: this will restore file from previous commit or list</p>

    <h3>Task 6: git push -u</h3>
    <p>-u will set upstream and will help to push or pull without going into main repeatedly.</p>
    <p>In origin main, it will track the relationship between origin and local branch</p>
    <p>https://github.com/TrongLongTran/theA1</p>

    <h3>Task 7: Screen of git log</h3>
    <img src={data} alt='newEx'></img>

    <h3>.gitignore</h3>
    <p>.gitignore will tell Git that some files not tracked by it stay untracked</p>
    <ul>
      <li>node_modules</li>
      <li>*.log</li>
    </ul>
    </>
  )
}

export default App
