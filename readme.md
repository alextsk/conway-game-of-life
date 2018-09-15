<h2 align="center">Conway's game of life</h2>
<hr>
<p>Демо: <a href="https://alextsk.github.io/conway-game-of-life/">    https://alextsk.github.io/conway-game-of-life/</a>
</p>
  <ul>
    <li>
      Шаблон (Template.js) - класс принимающий параметры и отдающий HTML, заполненный этими параметрами
    </li>
    <li>
      Логика (Logic.js) - правила игры
    </li>
    <li>
      Состояние (State.js) - хранит предыдущие и меняет текущее состояние
    </li>
    <li>
      Вид (View.js) - содержит обработчики событий и функцию анимации запускающую draw, сама draw тоже тут, логически она обработчик requestAnimationFrame. Не знает о других модулях, наследуется от Observer. вызывает Template.
    </li> 
    <li>
      Модель (Model.js) - связывает State и Logic
    </li>
    <li>
      Контроллер(index.js) - инстанцирует модель и вид и подписывает их друг на друга, запускает отрисовку
    </li>
  </ul>
<hr>
<h2>How to use:</h2>
<ul>
  <li>
    Clone the project to your local environment:
    <div>
      <code>
        git clone https://github.com/alextsk/conway-game-of-life.git
      </code>
    </div>
  </li>
  <li>
    Install dependencies with
    <div>
      <code>
        npm install
      </code>
    </div>
    or
    <div>
      <code>
        yarn install
      </code>
    </div>
  </li>
  <li>
    Run the project with
    <div>
      <code>
        npm run serve
      </code>
    </div>
    and open the browser with the url given you by webpack, usually it is 
    <div>
      <code>
         http://localhost:8080
      </code>
    </div>
  </li>
  <li>
    Build the project with
    <div>
      <code>
        webpack
      </code>
    </div>
  </li>
  <li>
    run tests with
    <div>
      <code>
        npm run test
      </code>
    </div>
  </li>
</ul>
  
