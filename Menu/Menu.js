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

const createMenuList = (menuArr) => {
    const article = document.querySelector('.articles')

    // create div menu
    const divMenu = document.createElement('div');
    divMenu.classList.add('menu');
    article.appendChild(divMenu);

    //create ul
    const ul = document.createElement('ul')
    divMenu.appendChild(ul);

    /*
      Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
      Add those items to the <ul>
    */
    //extract menu item from arr then turn into li's
    menuArr.forEach(el => {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = el;
    });

    /*
      Step 3: Using a DOM selector, select the menu button currently on the DOM.
    */
    const menuBtn = document.querySelector('img.menu-button');
    const menu = document.querySelector('.menu ')

    /*
      Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
    */

    /*
      Step 5: return the menu component.

      Step 6: add the menu component to the DOM.
      
    */

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu--open');
    });

    return menu;

}




console.log(createMenuList(menuItems));