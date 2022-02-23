function navbar() {
  return `<div class="topNavStyle"></div>
  <div id="mainLogo">
    <a href=""><img src="assets/logo/mainLogo.png" alt="" /></a>
  </div>

  <div id="navDetails">
    <div id="navLeft">
      <div id="category">
        <img src="assets/logo/menu.png" alt="" /><a href="">
          <p>Shop By Category</p>
        </a>
      </div>
      <div id="test">
        <input
          id="searchBar"
          type="text"
          placeholder="Search for a Product, Brand or Category"
        /><img src="assets/logo/search.png" alt="" />
      </div>
    </div>

    <div id="userOptions">
      <div id="order">
        <img id="orderImg" src="assets/logo/to-do-list.png" alt="" /><p>My
          Orders</p>
      </div>

      <div id="cart">
        
          <img id="orderImg" src="assets/logo/bag.png" alt="" /><p>Cart Page</P>
      </div>
      <div id="user"><img id="orderImg" src="assets/logo/user-profile.png" alt="" /><p>Login/SignUp</p></div>
    </div>
  </div>`;
}

export { navbar };
