/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it 's only argument.
  
*/

const createMenu = (menuArr) => {

    // create div menu
    const divMenu = document.createElement('div');
    divMenu.classList.add('menu');

    //create ul
    const ul = document.createElement('ul')
    divMenu.appendChild(ul);

    //extract menu item from arr then turn into li's
    menuArr.forEach(el => {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = el;
    });

    // grab menu button
    const menuBtn = document.querySelector('img.menu-button');

    // add click listener to open side menu
    menuBtn.addEventListener('click', () => divMenu.classList.toggle('menu--open'));

    return divMenu;

}

const menu = createMenu(menuItems);
const body = document.querySelector('body');

body.appendChild(menu);